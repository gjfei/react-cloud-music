const { isWin32 } = require('./utils');
// spawn 需要，exac 不需要
exports.npm = isWin32 ? "npm.cmd" : "npm";
exports.yarn = isWin32 ? "yarn.cmd" : "yarn";