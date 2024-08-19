// next.config.cjs
const { authMiddleware } = require("./authMiddleware");

module.exports = {
  // Other configurations
  middleware: [
    // Include the path to your middleware file
    {
      path: "/((?!_next|favicon.ico).*)",
      handler: require.resolve("./middleware"),
    },
  ],
};
