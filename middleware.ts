import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
const checkUserToken = (request: NextRequest) =>
  request.headers.get("user-key");

console.log(checkUserToken(Request));
export function middleware(request: NextRequest) {
  if (checkUserToken(request)) return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/dashboard",
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
