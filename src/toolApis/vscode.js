// VS Code config integration logic
const fs = require('fs');
const path = require('path');

function generateVSCodeSettings(settingsObj, outputDir) {
	const settingsPath = path.join(outputDir, '.vscode');
	if (!fs.existsSync(settingsPath)) fs.mkdirSync(settingsPath, { recursive: true });
	fs.writeFileSync(path.join(settingsPath, 'settings.json'), JSON.stringify(settingsObj, null, 2));
}

module.exports = {
	generateVSCodeSettings
};
