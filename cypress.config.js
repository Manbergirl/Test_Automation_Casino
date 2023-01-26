const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://winbet.bg/casino',
    viewportHeight: 768,
    viewportWidth: 1024
  },
})