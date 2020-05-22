
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        "Gcookie": "./src//index.js",
        "Gcookie.min": "./src/index.js"
    },
    output: {
        filename: '[name].js',
        library: 'Gcookie',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    mode: 'none',
    stats: 'minimal',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js/,
            })
        ]
    }
};