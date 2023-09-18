const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        filename: "bundle-[contenthash].js",
        path: path.resolve(__dirname, "bundle"),
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, "public", "index.html")}),
        new webpack.ProgressPlugin((percentage, message, ...args) => {
            console.info(`Percent: ${Math.floor(percentage * 100)}%;\nStep-${message}`,)
        })
    ]
}