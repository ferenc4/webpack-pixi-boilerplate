const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    devServer: {
        contentBase: 'dist',
        port: 3000
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
    //     new CopyWebpackPlugin({
    //         patterns: [
    //             {from: 'source', to: 'dest'},
    //             {from: 'other', to: 'public'},
    //         ]
    //     }),
        new HTMLWebpackPlugin({
            title: 'Production',
            template: 'template.html'
        })
    ]
}