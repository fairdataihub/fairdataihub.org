import { defineConfig } from 'cypress';
import fs from 'fs';

// Cypress configuration options

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:3000`,
    supportFile: false,

    setupNodeEvents: (on, _config) => {
      on(`task`, {
        readdirSync({ path }) {
          console.log(`readdirSync ${path}`);
          return fs.readdirSync(path);
        },
      });
    },
  },
});
