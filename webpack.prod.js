const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    //devtool: "none", // to avoid evals
    output: {
        filename: "main.[ContentHash].js",
        path:  path.resolve(__dirname, "dist")
    },
    plugins: [ new CleanWebpackPlugin()]
})