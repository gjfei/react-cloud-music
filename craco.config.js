const CracoAlias = require("craco-alias");

module.exports = {
  devServer: {
    port: 9000
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: './tsconfig.extend.json',
        baseUrl: "./src",
      }
    }
  ]
};