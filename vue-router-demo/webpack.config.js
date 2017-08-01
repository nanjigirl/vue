module.exports={
	entry:'./src/main.js',
	output:{
		path:__dirname,
		filename:'./dist/build.js'
	},
	module:{
		loaders:[			
			{test:/\.vue$/,loader:'vue'},
			{test:/\.js$/,loader:'babel-loader',query: {presets: ['es2015']},exclude:/node_modules/}			
		]
	}
};