// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Application configuration settings
const applicationConfig = {
  apiServiceUrl: 'http://localhost/seedapiservices/', // url for API service to be connected
  clientVersion: 'RXVER-123', // The version ket used to check if the ui and APIs are in sync
  hostedIP: 'http://localhost/site/', // Host location for logging purpose
  bundleFileName: 'bundle', // Bundle File name
  copyRightHeader: 'Seed Version 1.0 Install Date: Oct 2013 ©1998 - 2017', // Copy Right Header Text
};

export default {
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index',
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: `${__dirname}/src`, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: 'http://localhost:3000/', // Use absolute paths to avoid the way that URLs are resolved by Chrome when they're parsed from a dynamically loaded CSS blob. Note: Only necessary in Dev.
    filename: `${applicationConfig.bundleFileName}.js`,
  },
  devServer: {
    noInfo: true, // set to false to see a list of every file being bundled.
    debug: true,
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: [path.join(__dirname, 'assets/scss/styles.scss')],
        },
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true,
      applicationConfig: JSON.stringify(applicationConfig),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
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
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use: ['babel-loader'],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        }],
      },
      {
        test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
        use: [{
          loader: 'file-loader?limit=10000&mimetype=application/octet-stream',
        }],
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        use: [{
          loader: 'file-loader?limit=10000&mimetype=image/svg+xml',
        }],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /(\.css|\.scss)$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
    ],
  },
};
