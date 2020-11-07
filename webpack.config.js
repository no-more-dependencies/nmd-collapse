module.exports = {
	mode: "production",
	entry: {
		"nmd-collapse": __dirname + "/js/webpack-entry.js",
	},
	output: {
		filename: "[name].js",
		path: __dirname + "/dist"
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
						}
					}
				]
			}
		]
	}
};