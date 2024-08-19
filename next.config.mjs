// next.config.mjs
import { authMiddleware } from "./authMiddleware";

export default {
  // Other configurations
  middleware: [
    // Include the path to your middleware file
    {
      path: "/((?!_next|favicon.ico).*)",
      handler: (await import("./middleware")).default,
    },
  ],
};
