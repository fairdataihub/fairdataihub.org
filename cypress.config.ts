import { defineConfig } from 'cypress';

// Cypress configuration options

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:3000`,
    supportFile: false,
  },
});
