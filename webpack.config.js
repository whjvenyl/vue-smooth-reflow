/* eslint-disable */
const path = require('path')
const webpack = require('webpack')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vue-smooth-reflow.min.js',
        library:'SmoothReflow',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        babelrc: false
                    }
                }
            }
        ]
    },
}

module.exports = config
