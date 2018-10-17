

const path = require('path') 

module.exports = {

  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  module: {
  	rules: [
  		{
  			test: /\.jsx?$/,
  			exclude: /(node_modules)/,
  			loader: 'babel-loader',
  			options: { presets: ['env'] }
  		}
  	]
  }
}