const path = require("path");
const HWP = require("html-webpack-plugin");

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	entry: PATHS.source + '/index.js',
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	plugins:[
		new HWP({
			title: 'Webpack App'
		})
	]
};