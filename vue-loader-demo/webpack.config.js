module.exports={
	entry:'./main.js',
	output:{
		path:__dirname,
		filename:'build.js'
	},
	module:{
		loaders:[			
			{test:/\.vue$/,loader:'vue'},
			{test:/\.js$/,loader:'babel-loader',query: {presets: ['es2015']},exclude:/node_modules/}			
		]
	}
};