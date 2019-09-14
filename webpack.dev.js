const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: "development",
    //devtool: "none", // to avoid evals
    output: {
        filename: "[name].bundle.js",
        path:  path.resolve(__dirname, "dist")
    }
})