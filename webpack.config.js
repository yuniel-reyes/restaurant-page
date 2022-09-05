const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    devServer: {
        static: './dist',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
}