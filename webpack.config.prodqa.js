// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Application configuration settings
const applicationConfig = {
  apiServiceUrl: 'http://prodqa.com/seedapiservices/', // url for API service to be connected
  clientVersion: 'RXVER-123', // The version ket used to check if the ui and APIs are in sync
  hostedIP: 'http://prodqa.com/site/', // Host location for logging purpose
  bundleFileName: 'reactseedapp', // Bundle File name
  copyRightHeader: 'Seed Version 1.0 Install Date: Oct 2013 ©1998 - 2017', // Copy Right Header Text
};

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false,
  applicationConfig: JSON.stringify(applicationConfig),
};

export default {
  debug: true,
  devtool: 'source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: './src/index',
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: `${__dirname}/prodqadist`,
    publicPath: './',
    filename: `${applicationConfig.bundleFileName}.js`,
  },
  resolve: {
    root: path.resolve('./'),
  },
  plugins: [
    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Optimize the order that items are bundled. This assures the hash is deterministic.
    new webpack.optimize.OccurenceOrderPlugin(),

    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),

    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin(`${applicationConfig.bundleFileName}.css`),

    // Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin(),

    new CopyWebpackPlugin([{
      from: 'assets',
      to: 'assets',
    }], {
      ignore: [
        '*.scss',
        '*.css',
      ],
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel'],
      },
      {
        test: /\.svg$/,
        loader: 'url?limit=65000&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.woff$/,
        loader: 'url?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.woff2$/,
        loader: 'url?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.[ot]tf$/,
        loader: 'url?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.eot$/,
        loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?name=[path][name].[ext]',
      },
      {
        test: /(\.css|\.scss)$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap!resolve-url', { allChunks: true }),
      },
    ],
  },
  sassLoader: {
    includePaths: [path.join(__dirname, 'assets/scss/styles.scss')],
  },
};
