import { defineConfig } from 'cypress';
import fs from 'fs';

// Cypress configuration options

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:3000`,
    supportFile: false,

    setupNodeEvents: (on, _config) => {
      on(`task`, {
        async projectRootFolder() {
          return fs.realpathSync(__dirname);
        },
        readdirSync(path) {
          return new Promise((resolve, _reject) => {
            const filesObj = fs.readdirSync(path, { withFileTypes: true });

            const filesArray: string[] = [];

            filesObj.forEach((item) => {
              filesArray.push(item.name);
            });

            resolve(filesArray);
          });
        },
      });
    },
  },
});
