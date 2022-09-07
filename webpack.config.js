const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',       // index.js become entry[hash-number].js
        clean: true
    },
    // loaders



    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')

        }),
    ]
}