// Devin config integration logic
const fs = require('fs');
const path = require('path');

function generateDevinConfig(configObj, outputDir) {
	fs.writeFileSync(path.join(outputDir, 'devin-config.json'), JSON.stringify(configObj, null, 2));
}

module.exports = {
	generateDevinConfig
};
