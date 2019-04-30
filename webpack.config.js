// Imports
const path = require('path');
require('babel-register');

// Webpack Configuration
const config = {
  // Entry
  entry: './src/scripts/index.js',

  // Output
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
    filename: 'bundle.js'
  },
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // SCSS Files
      {
        test: /\.scss$/,
        use: ['style-loader', 'sass-loader']
      }
    ]
  },
  // OPTIONAL
  // Reload On File Change
  watch: true
  // Development Tools (Map Errors To Source File)
  // devtool: 'source-map'
};
// Exports
module.exports = config;
