var webpack= require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:{
		index:'./dev/js/index.js',//编译index.css，处理业务逻辑
		style:'./dev/js/style.js',//编译style.css
		vendor:['jquery']//vendor文件隔离打包
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
		new webpack.optimize.CommonsChunkPlugin('vendor','vendor.bundle.js'),
		new webpack.ProvidePlugin({
			$:'jquery',
			jQuery:'jquery',
			'window.jQuery':'jquery'
		})
		
	]
}
