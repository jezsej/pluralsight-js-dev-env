import path from 'path';
import webpack from 'webpack';

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
