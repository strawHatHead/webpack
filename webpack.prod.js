'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    mode: 'production',
    stats: 'none',
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            // {
            //     test: /\.(png|gif|svg|jpg)$/,
            //     use: 'file-loader'
            // },
            {
                test: /\.(png|gif|svg|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.(otf|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        // 初始化插件，这个插件会为我们自动生成一个已经插入好js脚本文件的html文件。
        new HtmlWebpackPlugin({
            //生成的文件以根目录下的index.html为模板
            template: path.join(__dirname, 'src/index.html'),
            // 定义html文件中的title
            title: '我是index',
            // 指定生成的html文件的名字
            filename: 'index.html',
            inject: true,
            // 打包压缩
            minify: {
                html5: true,
                // 删除空格
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new HtmlWebpackPlugin({
            //生成的文件以根目录下的index.html为模板
            template: path.join(__dirname, 'src/search.html'),
            // 定义html文件中的title
            title: 'search',
            // 指定生成的html文件的名字
            filename: 'search.html',
            inject: true,
            // 打包压缩
            minify: {
                html5: true,
                // 删除空格
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        })
    ]
};