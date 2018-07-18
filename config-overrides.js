const rewireMobX = require('react-app-rewire-mobx')
const { injectBabelPlugin } = require('react-app-rewired')

// Usually
// import SomeExample from '../../../some/example.js'
// With Babel-Root-Importer
// import SomeExample from '~/some/example.js'

const BabelRootImport = ['root-import', {
  rootPathPrefix: '~',
  rootPathSuffix: 'src'
}]

module.exports = function override (config, env) {
  config = injectBabelPlugin(BabelRootImport, config)
  config = rewireMobX(config, env)
  return config
}
