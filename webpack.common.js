const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //devtool: "none", // to avoid evals
    entry: {
      main: "./src/index.js",
      vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            // css loader takes css and converts it to javascript
            // style loader takes that javascript and injects into dom
            // both used together have to be put in correct order
            // order of pipe is R to L
          },
          {
            test: /\.html$/,
            use: ['html-loader']
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: "[name].[hash].[ext]",
                  outputPath: "imgs"
                },
              },
            ],
          }
        ]
    }
}