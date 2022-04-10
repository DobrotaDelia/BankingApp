var path = require('path');

module.exports = {
	entry: './src/main/frontend/app.js',
	devtool: 'sourcemaps',
	cache: true,
	mode: 'development',
	output: {
		path: __dirname,
		filename: './src/main/resources/static/built/bundle.js'
	},
	
	module: {
		rules: [
			{
				test: path.join(__dirname, '.'),
				exclude: /(node_modules)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}]
			}
			,
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},


			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [{
					loader: 'file-loader',
				},
				]
			},

			{
				test: /\.(png|jpg|gif)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
					},
				},],
			},

			{
				test: /\.(png|jpe?g|gif)$/,
				options: {
					name: 'static/media/[name].[hash:8].[ext]',
					// publicPath: 'https://cdn.example.com/', // uncomment to override webpack public path
					// esModule: true
					scalings: { '@2x': 2, '@3x': 3 },
				},
				loader: 'react-native-web-image-loader',
			},



		]
	}
};