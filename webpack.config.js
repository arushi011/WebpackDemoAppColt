const path = require('path')

module.exports = {
    mode: "development",
    //devtool: "none", // to avoid evals
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path:  path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            // css loader takes css and converts it to javascript
            // style loader takes that javascript and injects into dom
            // both used together have to be put in correct order
          },
        ],
    }
}