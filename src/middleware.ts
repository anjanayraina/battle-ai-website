import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the request is for the admin section and not already on login page
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/auth/login")
  ) {
    // Get the Privy auth token from cookies
    const privyToken = request.cookies.get("privy-token");

    // If no token exists, redirect to login
    if (!privyToken) {
      return NextResponse.redirect(new URL("/admin/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match all admin routes except static files
  matcher: [
    "/admin/:path((?!login).)*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
