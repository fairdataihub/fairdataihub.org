// const Dotenv = require("dotenv-webpack");

// const envPath = function () {
//   return !process.env.NODE_ENV || process.env.NODE_ENV === "development"
//     ? "./.env"
//     : `./.env.${process.env.NODE_ENV}`;
// };

// const dotenvArgs = {
//   expand: true,
//   path: envPath(),
// };

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/soda-website/" : "/",
  // plugins: [new Dotenv(dotenvArgs)],
};
