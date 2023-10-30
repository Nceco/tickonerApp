const path = require('path')
const fs = require('fs')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')


//copy文件的方法（public目录下的文件webpack默认不会处理）
const copy_files = () => {
    const files = fs.readdirSync(path.resolve(__dirname, 'public'))
    return files.filter(file => file.indexOf('index.html') < 0).map(file_name => {
        return {
            from: path.resolve(__dirname, `public/${file_name}`),
            to: path.resolve(__dirname, `dist/public/${file_name}`)
        }
    })
}

module.exports = {
    module:{
        rules:[
            {
                test: /.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /.less$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader','less-loader']
            },
            {
                test: /.(scss|sass)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass¬-loader']
            }
        ]
    },

    optimization: {
        minimizer: [
            //压缩优化css
            new CssMinimizerPlugin()
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        //配合html-webpack-plugin将生成的html文件里的变量替换为浏览器认识的东西
        new InterpolateHtmlPlugin({
            PUBLIC_URL: 'public'
        }),
        //复制文件夹的文件到指定文件夹下（有待考虑,影响打包速度、体积）
        new CopyWebpackPlugin({patterns: copy_files()}),
        //单独打包css文件
        new MiniCssExtractPlugin()
    ]
}
