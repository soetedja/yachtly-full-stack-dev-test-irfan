const path = require('path');

module.exports = {
  entry: ['babel-polyfill','./client/index.js'],
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
    ]
  }
};