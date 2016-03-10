var webpack= require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:{
		index:'./dev/js/index.js',
		style:'./dev/js/style.js'
	},
	output:{
		path:path.join(__dirname,'dist/'),
		filename:'[name].js'
	},
	module:{
		loaders:[
			{test:/\.scss$/,loader:ExtractTextPlugin.extract('style','css!sass')},
			{test:/\.swf$/,loader:'file-loader'}
		]
	},
	plugins:[
		new ExtractTextPlugin('[name].css'),
		new webpack.ProvidePlugin({
			$:'jquery',
			jQuery:'jquery',
			'window.jQuery':'jquery'
		})
		
	]
}
