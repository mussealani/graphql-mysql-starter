import { config } from 'dotenv';

// Loads environment variables from the .env file located in the root of the
// project.
config();

module.exports = {
  app: {
    port: process.env.PORT,
  },
};
