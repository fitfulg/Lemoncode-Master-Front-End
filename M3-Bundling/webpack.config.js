const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path"); //este concatena las paths

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js",".ts"]
    },
    entry: {
        app: './main.ts',
        appStyles: [
        './styles.scss',
        ],
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(process.cwd(), "dist"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  {
                    loader: "sass-loader",
                    options: {
                      implementation: require("sass"),
                    },
                  },
                ],
              },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
              },
              {
                test: /\.html$/,
                loader: "html-loader",
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // nombre en dist
            template: "index.html", // nombre en el src
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin()
    ],
};