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
      }
    ]
  }
};
