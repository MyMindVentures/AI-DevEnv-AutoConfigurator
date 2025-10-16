// Cursor config integration logic
const fs = require('fs');
const path = require('path');

function generateCursorConfig(configObj, outputDir) {
	fs.writeFileSync(path.join(outputDir, 'cursor-config.json'), JSON.stringify(configObj, null, 2));
}

module.exports = {
	generateCursorConfig
};
