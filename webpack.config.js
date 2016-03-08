var webpack= require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:{
		index:'./dev/js/index.js',
	},
	output:{
		path:path.join(__dirname,'dist/'),
		filename:'[name].js'
	},
	module:{
		loaders:[
			{test:/\.scss$/,loader:ExtractTextPlugin.extract('style','css!sass')}
		]
	},
	plugins:[
		new ExtractTextPlugin('[name].css')
	]
}
