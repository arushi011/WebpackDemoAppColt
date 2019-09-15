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