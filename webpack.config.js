module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist'
  }
};
