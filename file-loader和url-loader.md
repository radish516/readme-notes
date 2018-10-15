file-loader直接打包成图片，
url-loader打包成字符形式解析，减少请求次数（小图片可以使用）
配置url-loader和file-loader配合，
如图以下，超过45000b字符串自动使用file-loader

use: [
    {
        loader: 'url-loader',
        options: {
            limit: 45000
        }
    }
]