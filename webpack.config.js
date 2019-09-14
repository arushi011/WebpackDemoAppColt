const path = require('path')

module.exports = {
    mode: "development",
    //devtool: "none", // to avoid evals
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path:  path.resolve(__dirname, "dist")
    }
}