const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
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
    resolve: {
        extensions: ['.js', '.tsx', '.ts', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        //配合html-webpack-plugin将生成的html文件里的变量替换为浏览器认识的东西
        new InterpolateHtmlPlugin({
            PUBLIC_URL: 'public'
        }),
        //复制文件夹的文件到指定文件夹下（有待考虑,影响打包速度、体积）
        new CopyWebpackPlugin({patterns: copy_files()}),
        //单独打包css文件
        new MiniCssExtractPlugin()
    ],
    // devServer: {
    //
    // }
}
