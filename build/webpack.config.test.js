const path = require('path');

module.exports = (environment = 'development') => ({
	entry: {
		'test.built': path.join(__dirname, '..', 'test', 'logger', 'console', 'test.js')
	},
	output: {
		path: path.join(__dirname, '..', 'test', 'logger', 'console'),
		filename: '[name].js'
	},
	resolve: {
		alias: {
			core: path.join(__dirname, '..', 'dist', 'js')
		}
	},
	devtool: false
});