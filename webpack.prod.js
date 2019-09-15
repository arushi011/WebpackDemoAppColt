const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    //devtool: "none", // to avoid evals
    output: {
        filename: "[name].[ContentHash].bundle.js",
        path:  path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new TerserPlugin(), // comes default with production mode
            // but was removed by writing minimizer array
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
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