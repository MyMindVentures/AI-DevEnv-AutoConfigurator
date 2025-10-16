// Bolt config integration logic
const fs = require('fs');
const path = require('path');

function generateBoltConfig(configObj, outputDir) {
	fs.writeFileSync(path.join(outputDir, 'bolt-config.json'), JSON.stringify(configObj, null, 2));
}

module.exports = {
	generateBoltConfig
};
