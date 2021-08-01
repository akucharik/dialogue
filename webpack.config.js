const path = require('path');

module.exports = {
  entry: './src/index.ts',
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
    filename: 'dialogue.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'dialogue',
      type: 'umd',
    }
  },
  externals: {
    gsap: {
      commonjs: 'gsap',
      commonjs2: 'gsap',
      amd: 'gsap',
      root: 'gsap',
    },
    CustomEase: {
      commonjs: 'CustomEase',
      commonjs2: 'CustomEase',
      amd: 'CustomEase',
      root: 'CustomEase',
    },
  },
};