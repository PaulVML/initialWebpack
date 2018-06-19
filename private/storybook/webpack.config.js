const parentConfig = require('../../webpack.config');
const { print } =require('q-i');

module.exports = (baseConfig,env, defaultConfig) =>{
  let configObj = Object.assign({}, defaultConfig, {
    entry: Object.assign({}, defaultConfig.entry, {
      preview: ['babel-polyfill'].concat(defaultConfig.entry.preview),
      styles: parentConfig.storybook.entry.styles
    }),
    resolve: Object.assign({}, defaultConfig.resolve, {
      modules: parentConfig.storybook.resolve.modules,
    }),
    module: Object.assign({}, defaultConfig.module, {
      rules: defaultConfig.module.rules.concat(parentConfig.storybook.module.rules.slice(1)),
    }),
    plugins: defaultConfig.plugins.concat(parentConfig.storybook.plugins),
  });
  print(configObj);
  return configObj;
}
