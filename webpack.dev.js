const InterpolateHtmlPlugin = require('interpolate-html-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /.(scss|sass)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        //配合html-webpack-plugin将生成的html文件里的变量替换为浏览器认识的东西
        new InterpolateHtmlPlugin({
            PUBLIC_URL: ''
        })
    ],
    //启的本地服务默认静态资源会去找项目下处于public文件下的内容
    devServer: {
        compress: true,
        port: 2333,
        open: true,
        proxy: {
            '/api': {
                target: 'http://101.132.46.74',
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            }
        }
    }
}
