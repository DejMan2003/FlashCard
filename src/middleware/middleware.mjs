// middleware.mjs

import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // Define routes to include or exclude here
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
});
