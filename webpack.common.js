module.exports = {
    //devtool: "none", // to avoid evals
    entry: {
      main: "./src/index.js",
      vendor: "./src/vendor.js"
    },
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
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            ]
          }
        ]
    }
}