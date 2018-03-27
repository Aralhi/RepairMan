const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const rxPaths = require('rxjs/_esm5/path-mapping');
const { CommonsChunkPlugin} = require('webpack').optimize;
const { AngularCompilerPlugin} = require('@ngtools/webpack');

var copyArray = [{
  context: 'client/app/assets/bootstrap',
  from: '**/*',
  to: 'app/assets/bootstrap'
}, {
  context: 'client',
  from: 'favicon.png'
}];

const config = {
  cache: true,
  devtool: 'source-map',
  entry: {
    main: './client/main.ts',
    vendor: ['./client/polyfills.ts', './client/app/vendor.ts'],
  },
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].[chunkhash:20].bundle.js',
    chunkFilename: 'app/[name].[chunkhash:20].module.js',
    crossOriginLoading: false
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.css$/,
      loaders: [
        "exports-loader?module.exports.toString()",
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            import: false
          }
        }
      ],
      // exclude: [path.resolve(__dirname, 'node_modules/')]
    }, {
      test: /\.(jpg|jpeg|png|gif)$/,
      loader: 'url-loader',
      options: {
        name: 'app/assets/images/[name].[hash:20].[ext]',
        limit: 2000
      }
    }, {
      test: /\.js$/,
      use: [
        {
          loader: '@angular-devkit/build-optimizer/webpack-loader',
          options: {
            sourceMap: false
          }
        }
      ],
      exclude: [path.resolve(__dirname, 'server')]
    }, {
      test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
      use: [{
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: false
        }
      }, '@ngtools/webpack'
      ]
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    symlinks: true,
    alias: rxPaths(),
    mainFields: ['browser', 'module', 'main']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV || 'dev',
      'process.env.ENV_TTL': process.env.NODE_ENV === 'prod' ? Date.now() : undefined
    }),
    new CommonsChunkPlugin({
      name: ['inline'],
      minChunks: null
    }),
    new CommonsChunkPlugin({
      name: ['main'],
      minChunks: 2,
      async: 'common'
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      mangle: {
        screw_ie8: true
      },
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      }
    }),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new CopyWebpackPlugin(copyArray),
    new AngularCompilerPlugin({
      mainPath: 'main.ts',
      platform: 0,
      sourceMap: false,
      tsConfigPath: 'client/tsconfig.app.json',
      compilerOptinos: {}
    }),
    new webpack.NamedModulesPlugin({
      context: path.resolve(__dirname, 'client')
    })
  ],
  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};

module.exports = config;
