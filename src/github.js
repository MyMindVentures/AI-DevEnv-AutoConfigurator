// GitHub API integration logic
const { Octokit } = require("@octokit/rest");
const { getGitHubAccessToken } = require("./auth");

// Create or update a file in a repo and open a pull request
async function createConfigPR({ owner, repo, branch = "main", files, prTitle, prBody }) {
	const token = await getGitHubAccessToken();
	const octokit = new Octokit({ auth: token });

	// Create a new branch from main
	const { data: mainRef } = await octokit.git.getRef({ owner, repo, ref: `heads/${branch}` });
	const newBranch = `autoconfig/${Date.now()}`;
	await octokit.git.createRef({
		owner,
		repo,
		ref: `refs/heads/${newBranch}`,
		sha: mainRef.object.sha
	});

	// For each file, create or update it in the new branch
	for (const file of files) {
		await octokit.repos.createOrUpdateFileContents({
			owner,
			repo,
			path: file.path,
			message: file.message,
			content: Buffer.from(file.content).toString('base64'),
			branch: newBranch
		});
	}

	// Create a pull request
	const { data: pr } = await octokit.pulls.create({
		owner,
		repo,
		title: prTitle,
		body: prBody,
		head: newBranch,
		base: branch
	});
	return pr.html_url;
}

module.exports = {
	createConfigPR
};
