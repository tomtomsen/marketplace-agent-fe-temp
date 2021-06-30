/// <reference types="cypress" />
const findNextWebpackConfig = require('./findNextWebpackConfig')
const path = require('path')

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)
  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))

  on('dev-server:start', async (options) => {
    const webpackConfig = await findNextWebpackConfig(config)

    // require('webpack') now points to nextjs bundled version
    const { startDevServer } = require('@cypress/webpack-dev-server')

    return startDevServer({
      options,
      webpackConfig,
      template: path.resolve(__dirname, 'index-template.html'),
    })
  })

  config.env.reactDevtools = true

  return config
}
