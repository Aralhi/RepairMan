const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var copyArray = [{
  context: 'client/app/assets',
  from: '**/*',
  to: 'app/assets'
}, {
  context: 'client',
  from: 'favicon.png'
}];

const config = {
  cache: true,
  devtool: 'source-map',
  entry: {
    main: './client/main.ts',
    vendor: ['./client/polyfills.ts', './client/app/vendor.ts']
  },
  output: {
    path: './build/client',
    filename: '[name].bundle.js',
    chunkFilename: 'app/[name].module.js',
    sourceMapFilename: 'app/[name].module.map'
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'raw-loader'
    }, {
      test: /\.css$/,
      loaders: ['to-string-loader', 'css-loader'],
      // exclude: [path.resolve(__dirname, 'node_modules/')]
    }, {
      test: /\.(jpg|jpeg|png|gif)$/,
      loader: 'file-loader',
      query: {
        name: '[path][name].[ext]',
        emitFile: true,
        context: path.resolve(__dirname, 'client')
      }
    }, {
      test: /\.ts$/,
      use: [
        'angular2-template-loader',
        'awesome-typescript-loader',
        'angular-router-loader'
      ],
      exclude: [path.resolve(__dirname, 'server')]
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV || 'dev',
      'process.env.ENV_TTL': process.env.NODE_ENV === 'prod' ? Date.now() : undefined
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(@angular|esm5)/,      
      __dirname
    ),
    new webpack.NamedModulesPlugin({
      context: path.resolve(__dirname, 'client')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new CopyWebpackPlugin(copyArray)
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
