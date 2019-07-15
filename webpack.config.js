const path = require('path')
const HtmlWebPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'html-loader'
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPlugin({
          template: './src/index.html',
          filename: './index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true,
        publicPath: '/',
        historyApiFallback: true
    }
}