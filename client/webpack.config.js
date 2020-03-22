const webpack = require('webpack');
const path = require('path');
const env = require('./config/env');
const paths = require('./config/paths');

// constiables
const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const isStaging = process.argv.indexOf('--isStaging') >= 0;
const outPath = path.join(__dirname, './dist');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        app: ['@babel/polyfill', './src/main.tsx']
    },
    output: {
        path: paths.appBuild,
        filename: isProduction || isStaging ? 'bundle.[chunkhash].js' : 'bundle.js',
        chunkFilename: '[chunkhash].js',
        publicPath: '/'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // (jsnext:main directs not usually distributable es6 format, but es6 sources)
        mainFields: ['module', 'browser', 'main'],
        alias: {
            app: paths.appSrc,
            assets: paths.appPublic
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    (isProduction || isStaging) && {
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
                            ]
                        }
                    }
                ].filter(Boolean)
            },
            // .ts, .tsx
            {
                test: /\.tsx?$/,
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
                            plugins:
                                isProduction || isStaging
                                    ? ['@babel/plugin-syntax-dynamic-import']
                                    : ['react-hot-loader/babel', '@babel/plugin-syntax-dynamic-import'],
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
                ].filter(Boolean)
            },
            {
                test: /\.(css|scss)/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            // static assets
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.(eot|ttf|woff|woff2)$/, use: 'url-loader?limit=10000' },
            {
                test: /\.(a?png|svg|jpe?g|gif|bmp|mp3|mp4|ogg|wav)$/,
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
            {
                test: /\.(ico)$/,
                use: 'file-loader?name=assets/[name].[ext]'
            }
        ]
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -10
                }
            }
        },
        runtimeChunk: true
    },
    plugins: [
        // バンドルした結果が見れるので、最適化で使いたくなったら使いましょう（いつも使うものでないのでコメントアウト）
        // new BundleAnalyzerPlugin(),
        new webpack.EnvironmentPlugin(env),
        new WebpackCleanupPlugin(),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
            disable: !isProduction
        }),
        new HtmlWebpackPlugin({
            template: paths.appHtml
        }),
        new ForkTsCheckerWebpackPlugin({
            memoryLimit: 2048,
            useTypescriptIncrementalApi: true,
            compilerOptions: {
                skipLibCheck: true
            }
        })
    ],
    devServer: {
        contentBase: paths.appSourcePath,
        hot: true,
        inline: true,
        historyApiFallback: {
            disableDotRule: true
        },
        disableHostCheck: true,
        stats: 'minimal',
        clientLogLevel: 'warning'
    },
    // https://webpack.js.org/configuration/devtool/
    devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty'
    }
};
