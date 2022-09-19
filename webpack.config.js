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
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',   // contentBase: location
        open: true,         // you can put this in the json file too: webpack serve --open: meaning: launch the browser
        hot: true, // hot module reloading: compiling any change inside src
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],            
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }        
        ],
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        }),
    ]
}