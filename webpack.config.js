const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', ".css"],
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [{
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: "file-loader"
                }]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        port: 3000,
    },
}
