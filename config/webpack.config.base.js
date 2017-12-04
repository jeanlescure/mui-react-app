/**
 * Base webpack config used across other specific configs
 */
import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  module: {
    rules: [{
      test: /(\.jsx|\.js?)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    }]
  },

  output: {
    path: __dirname,
    filename: 'bundle.js',
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'var'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    symlinks: false,
    modules: [
      path.join(__dirname, '../src'),
      path.join(__dirname, '../node_modules'),
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.join(__dirname, '..'),
        from: 'src/themes/assets',
        to: 'assets',
      }
    ]),

    new webpack.NamedModulesPlugin(),
  ],
};
