const path = require('path');
// eslint-disable-next-line no-unresolved
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  performance: { hints: false },
  plugins: [
    new Dotenv(),
  ],
};