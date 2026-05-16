import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api, /trpc, /_next, /_vercel
    // - /studio (Sanity Studio)
    // - files with a "." (e.g. favicon.ico)
    "/((?!api|trpc|_next|_vercel|studio|.*\\..*).*)",
  ],
};
