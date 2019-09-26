import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        //Create html file that includes references to bundle.js
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
        }),

        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false
        })
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
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }
}

/*import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.css$/, loaders: ['style', 'css-loader'] }
        ]
    }
}
*/
