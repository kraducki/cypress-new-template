const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 10000,
  requestTimeout: 60000,
  numTestsKeptInMemory: 10,
  video: false,
  screenshotOnRunFailure: false,


  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      return config;
    },
  },
});
