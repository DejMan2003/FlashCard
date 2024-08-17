// next.config.mjs

import { defineConfig } from 'next';

export default defineConfig({
  experimental: {
    appDir: true, // Enable experimental app directory if you're using the app directory feature
  },
  // Other configurations
  async middleware() {
    return [
      {
        path: '/((?!api|_next/static|_next/image|favicon.ico).*)', // Apply middleware to all routes except those listed
        handler: './middleware.mjs', // Path to your middleware file
      },
    ];
  },
});
