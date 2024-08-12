const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
