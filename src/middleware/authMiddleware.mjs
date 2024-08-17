// authMiddleware.mjs
import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // Define routes to include or exclude here
  matcher: ['/*'],
});
