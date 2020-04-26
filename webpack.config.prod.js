const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'assets', 'scripts'),
		publicPath: 'assets/scripts/',
	},
	devtool: 'cheap-source-map',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	plugins: [new cleanPlugin.CleanWebpackPlugin()],
};
