const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: 'index.html'
})

const cssPlugin = new ExtractTextPlugin('index.css')

module.exports = {
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules|server)/,
				use: {
					loader: 'ts-loader',
					options: {
						configFile: __dirname + '/tsconfig.json',
						transpileOnly: true
					}
				}
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|server)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.scss$/,
				exclude: /(node_modules|server)/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: true,
								localIdentName: '[local]--[hash:base64:4]'
							}
						},
						{ loader: 'postcss-loader', options: { plugins: [autoprefixer] } },
						{ loader: 'sass-loader' }
					]
				})
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(gif|jpg|png)$/,
				use: ['file-loader']
			},
			{
				test: /\.svg$/,
				use: ['file-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
		modules: [path.resolve(__dirname, './src'), 'node_modules'],
		alias: { 'react-dom': '@hot-loader/react-dom' }
	},
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	// externals: {
	//   react: 'React',
	//   'react-dom': 'ReactDOM',
	//   'prop-types': 'PropTypes',
	//    redux: 'Redux',
	//   'react-redux': 'ReactRedux',
	//   'react-router': 'ReactRouter',
	//   'react-router-dom': 'ReactRouterDOM',
	//   'react-router-redux': 'ReactRouterRedux'
	// },
	devtool: 'source-map',
	plugins: [htmlPlugin, cssPlugin, new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: './dist',
		hot: true
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
}
