const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'main.js'
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	]
};