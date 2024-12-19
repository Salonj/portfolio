import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fi|en|sv)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
