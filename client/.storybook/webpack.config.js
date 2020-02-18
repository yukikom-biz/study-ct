const webpack = require('webpack');
const env = require('../config/env');
const paths = require('../config/paths');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }) => {
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        ie: '11'
                                    }
                                }
                            ],
                            '@babel/preset-react'
                        ],
                        plugins: ['react-hot-loader/babel', '@babel/plugin-syntax-dynamic-import'],
                        cacheDirectory: true
                    }
                },
                {
                    loader: 'ts-loader',
                    options: {
                        experimentalWatchApi: true,
                        transpileOnly: true
                    }
                }
            ]
        },
        {
            test: /.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|xlsx)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets',
                        publicPath: function(path) {
                            return '/assets/' + path;
                        }
                    }
                }
            ]
        },
    );
    config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
            memoryLimit: 2048,
            useTypescriptIncrementalApi: true,
            compilerOptions: {
                skipLibCheck: true
            }
        }),
    );
    // TODO I want to stop using environment variables and then delete them
    config.plugins.push(
        new webpack.EnvironmentPlugin(env)
    );
    return config;
};
