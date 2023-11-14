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
        historyApiFallback: true, //使用BrowserRouter(history模式的路由时需要将浏览器的请求重定向到index.html中)
        proxy: {
            '/api': {
                target: 'http://101.132.46.74',
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            },
            //服务器静态资源
            '/static':{
                target: 'http://101.132.46.74',
                changeOrigin: true,
                pathRewrite: {'^': ''}
            }
        }
    }
}
