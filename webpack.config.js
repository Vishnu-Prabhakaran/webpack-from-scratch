const HtmlWebpqackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        // regex - inside the // we need to look for anything which has .js or jsx extension
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // helper
          // babel is the library that transpile the js and jsx to older versions of javascript
          loader: 'babel-loader'
        }
      },
      {
        // any files that ends in css
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // any files that ends in html
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpqackPlugin({
      // by default babel runs on src/ index
      template: './index.html'
    })
  ]
};
