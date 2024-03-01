const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: { react_app: './src/index.js'},
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_moudules/',
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, {loader: 'css-loader'}]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './public/index.html'})
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    open: true,
    client: {
      overlay: {
        warnings: true,
        errors: true
      }
    }
  }
}