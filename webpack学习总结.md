entry: './src/app.js',
output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'assets/js/app.js',
    // 所有资源的基础路径，而且一定要以/结尾
    publicPath: '/'
},
plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        //多页面应用可采用变量形式存放路径和名字
        template: 'src/index.html'
    }),
    //打包 删除前面打包组建
    new CleanWebpackPlugin(['dist'])
],
module: {
    rules: [
        {
            test: /\.js$/,
            use: [
                {	
                	//帮助预处理js文件，依赖很多，共功能强大，可单独生出.babelrc文件进行配置
                    loader: 'babel-loader',
                    // options: {
                    //     presets: [ 'react', 'env' ],
                    //     plugins: [ 'transform-object-rest-spread' ]
                    // }
                }
            ],
            //打包忽略文件，优化打包速度node_modules基本都自己打包过无需打包
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ]
        },
        //处理css文件中的url，会自动帮你引入里面要引入的模块
        {
            test: /\.css$/,
            use: [ 
                'style-loader' ,
                {
                    loader: 'css-loader',
                    options: {
                        module: true,
                        // localIdentName: '[path]-[name]-[local][hash:base64:6]' 
                        localIdentName: '[name]-[local]'
                    }
                }
            ],
            //忽略打包文件
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/common')
            ]
        },
        {
            test: /\.css$/,
            use: [ 'style-loader' , 'css-loader' ],
            //指定打包文件，可先进行打包，然后忽略。可以达到规避字体被打包报错问题
            include: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/common')
            ]
        },
        {
        	//sass同样
            test: /\.scss$/,
            use: [ 
                'style-loader' ,
                {
                    loader: 'css-loader',
                    options: {
                        module: true,
                        // localIdentName: '[path]-[name]-[local][hash:base64:6]' 
                        localIdentName: '[name]-[local]'
                    }
                },
                'sass-loader'
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/common')
            ]
        },
        {
            test: /\.scss$/,
            use: [ 'style-loader' , 'css-loader' ,'sass-loader' ],
            include: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/common')
            ]
        },
        //file-loader
        // 1.把你要的资源移动 输出目录
        // 2.返回最终引入资源的url
        {
            test: /\.(jpg|png|jpeg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                    	//限制大小，超出使用file-loader，太大图片压缩成编码很卡
                        limit: 45000,
                        name: 'assets/img/[name]_[hash:8].[ext]'
                    }
                }
            ]
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                    	//[path(路径)]+[name(原来名字)]+[hash(hash值可指定长度)]+[local(地址)]
                        name: 'assets/fonts/[name]_[hash:8].[ext]'
                    }
                }
            ]
        }
    ]
},