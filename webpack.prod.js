const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: "production",
    //devtool: "none", // to avoid evals
    output: {
        filename: "[name].[ContentHash].bundle.js",
        path:  path.resolve(__dirname, "dist")
    },
    plugins: [ 
        new MiniCssExtractPlugin( { filename: "[name].[contentHash].css"} ),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader'
                ],
                // css loader takes css and converts it to javascript
                // style loader takes that javascript and injects into dom
                // both used together have to be put in correct order
                // order of pipe is R to L
              },
        ]
    }
})