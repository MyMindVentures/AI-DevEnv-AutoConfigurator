// AI Analyzer logic using OpenAI API
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Analyze repo info and generate config suggestions using OpenAI
 * @param {Object} repoInfo - Information about the repo (name, description, files, etc.)
 * @returns {Promise<Object>} - Suggested config files and content
 */
async function analyzeRepoAndSuggestConfigs(repoInfo) {
	const prompt = `You are an expert developer assistant. Given the following repo info, suggest the best VS Code, Cursor, Devin, and Bolt config files as JSON.\n\nRepo Info:\n${JSON.stringify(repoInfo, null, 2)}\n\nRespond with a JSON object with keys: vscode, cursor, devin, bolt.`;
	const response = await openai.createChatCompletion({
		model: 'gpt-4',
		messages: [
			{ role: 'system', content: 'You are a senior developer and devops expert.' },
			{ role: 'user', content: prompt }
		],
		max_tokens: 1200,
		temperature: 0.2
	});
	const text = response.data.choices[0].message.content;
	try {
		return JSON.parse(text);
	} catch (e) {
		throw new Error('Failed to parse AI config suggestion: ' + text);
	}
}

module.exports = {
	analyzeRepoAndSuggestConfigs
};
