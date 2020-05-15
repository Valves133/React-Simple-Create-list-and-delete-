module.exports ={
  presets: [
    "@babel/preset-env", // Usado para alterar as funcionalidades do javascript
    "@babel/preset-react" //Altera as funcionalidades do react como jsx que o navegador não entende
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}