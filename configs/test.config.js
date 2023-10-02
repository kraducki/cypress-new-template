const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    shortTimeout: 50,
    mediumTimeout: 5000,
    longTimeout: 15000,
    grepOmitFiltered: true,
    grepFilterSpecs: true,
    grepIntegrationFolder: '../',
    env: "test"
  },

  pageLoadTimeout: 60000,

  blockHosts: [
    "stats.g.doubleclick.net"
  ],

  retries: {
    runMode: 2,
    openMode: 0,
  },

  e2e: {
    baseUrl: 'http://www.inzyniersi.pl',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
