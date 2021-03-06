const path = require('path');

module.exports = {
  entry: './docs/src/docs.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'docs.js',
    path: path.resolve(__dirname, 'docs/scripts'),
  },
};
