const path = require('path')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        filename: "bundle-[contenthash].js",
        path: path.resolve(__dirname, "bundle"),
        clean: true
    }
}