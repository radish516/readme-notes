坑了5个小时，总结一下
module: {
	rules: [{
		test: /\.js$/,
		use: [{
			loader: 'babel-loader',
			options: {  
				presets: ['react']
			}
		}]
	}]
}

options如果不生效。根目录生成一个.babelrc文件，即可生效
{
    presets:['react']
}

同时要安装，大部分不会被es6转化
"babel-preset-env": "^1.7.0",
"babel-preset-es2015": "^6.24.1",

坑成狗，！！错误提示
Error: Couldn't find preset "react" relative to directory "/Users/liyexin/node_modules/events"