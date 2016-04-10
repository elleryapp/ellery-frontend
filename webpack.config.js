var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/main.tsx',
    output: {
        path: path.join(__dirname, '/app'),
        filename: '[name].min.js',
    },
    modules: [path.resolve(__dirname, "app"), "node_modules"],
    descriptionFiles: ["package.json"],
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts[x]$/,
            loader: 'ts-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader')
        }]
    },
    postcss: [precss(), autoprefixer(), cssnano()],
    plugins: [
        new ExtractTextPlugin('main.min.css')
        // ,new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};
