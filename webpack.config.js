const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    // client: [path.resolve(__dirname, './client')],
    client: [path.resolve(__dirname, './client/src/index.js')],
  },
  mode: 'production',
  output: {
    // filename: '[name].js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist-client'),
    publicPath: '/',
    clean: true,
  },
  devServer: {
    contentBase: path.resolve(__dirname, './client'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)/,
        // type: 'asset/resource',

        type: 'asset/inline',
      },
    ],
  },
  //   externals: [nodeExternals()],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client', 'index.html'),
    }),
    new HotModuleReplacementPlugin(),
  ],
}
