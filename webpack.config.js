const path = require('path');
const webpack = require('webpack');
require('hot-module-replacement')({
	ignore: /node_modules/ 
});
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = true;



module.exports = {
	mode: 'development',
	entry: ["@babel/polyfill", "./src/index.js"],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
    module: {
		rules: [
			{
			test: /\.m?js$/,
			include: path.resolve(__dirname, 'src/js'),
			loader: "babel-loader"
		  },
          {
			test: /\.(s*)css$/,
			include: /src/,
			use: [
			MiniCssExtractPlugin.loader,
			'css-loader', 
				'postcss-loader', 
				'sass-loader'
				
			]
		},
		{
            test: /\.(gif|png|jpe?g)$/i,			
			use: [
				{
				  loader: 'file-loader',
				  options: {
					name: '[name].[ext]',
					outputPath: 'images/',
					publicPath: '/'
				  }
				},
				{
					loader: 'url-loader'
				}
			  ]			
            },
		]},
		
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				template: "./index.html"
			  }),
              new MiniCssExtractPlugin({
				filename: devMode ? '[name].css' : '[name].[hash].css'
			})
		],

		watchOptions: {
			aggregateTimeout: 500,
			poll: 1000,
			ignored: /node_modules/
		},

		stats: {
			children: true,
		},
};

const developmentConfig = {
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './dist'),
		open: true,
		compress: true,
		hot: true,
		port: 9000,
	}
};
  
