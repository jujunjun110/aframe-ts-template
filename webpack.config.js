const path = require('path')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.ts$/, use: ["babel-loader", "ts-loader"] },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.(glsl|vert|frag)$/, exclude: /node_modules/, use: ['raw-loader', 'glslify-loader'] }
        ]
    },
    resolve: {
        extensions: ['.ts', ".js", "scss", "txt", "frag", "vert"]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        compress: true,
        port: 9000,
        hot: true,
        inline: true,
        open: true
    }
}
