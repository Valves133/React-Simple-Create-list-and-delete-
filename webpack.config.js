const {resolve} = require('path');

module.exports = {
  // Alguns sistemas não reconhece o mesmo então usamos path.resolve
  // entry: 'src/index.js',
  entry: resolve(__dirname,'src','index.js'),
  output: {
    // caminho que vamos colocar o nosso bundle.js
    path: resolve(__dirname,'public'), 
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: resolve(__dirname,'public'),
  },
  module: {
    rules: [
    {      
      test : /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'}, //para leitura do css
          { loader: 'css-loader'}, //para importação de arquivos
        ]
      },{
        test: /.*\.(gif|png|jpe?g)$/i,
        use:{
          loader: 'file-loader'
        }
      }
    ]
  }

} 
