import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'




export default {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    }

    ,
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[contenthash].js'
            //filename: '[name].[chunkhash].js'
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        //add cache bursting functionality
        //new WebpackMd5Hash(),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),

        //Create html file that includes references to bundle.js
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeComments: true,
                useShortDoctype: true,
                collapseWhitespace: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true

            },
            inject: true
        }),

        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false
        }),

    ],

    module: {
        rules: [{
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                //It's not longer allowed to omit the -loader suffix when using loaders.
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ]
            }
        ]
    }
}
