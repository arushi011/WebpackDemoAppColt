const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: "development",
    //devtool: "none", // to avoid evals
    output: {
        filename: "[name].bundle.js",
        path:  path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                // css loader takes css and converts it to javascript
                // style loader takes that javascript and injects into dom
                // both used together have to be put in correct order
                // order of pipe is R to L
              },
        ]
    }
})