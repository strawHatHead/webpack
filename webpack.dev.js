'use strict';

const path = require('path');
const webpack = require('webpack');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',
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
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
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
                        loader: 'url-loader',
                        options: {
                            limit: 102400
                        }
                    }
                ],
            },
            {
                test: /\.(otf|woff|woff2|eot|ttf)$/,
                use: 'file-loader'
            }
        ]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new friendlyErrorsWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};