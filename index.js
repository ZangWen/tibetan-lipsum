const genLipsumText = require('./libs/genLipsumText.js').genLipsumText;

console.log(genLipsumText(process.argv[2] || 8));