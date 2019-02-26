const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const output_dir = "dist";
const output_path = path.resolve(__dirname, output_dir);

module.exports = {
    entry: {
        'index': './src/index.tsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: output_path
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [{
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader:'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true,
                            camelCase: true,
                            localIdentName:'[hash:base64]'
                        }

                    },
                    { loader: 'less-loader'}
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },{
                test:/normalize\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin([output_dir], {
        //     root: path.resolve(__dirname, '..')
        // }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'workflow designer',
            minify: false,
            favicon: './src/public/favicon.ico',
            template: './src/public/index.html',
            filename: './index.html'
        })

    ]

};