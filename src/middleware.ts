import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authData");

  // Define routes that require authentication
  const protectedRoutes = ["/dashboard"];

  console.log("middleware");

  if (
    !token &&
    protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  return NextResponse.next();
}

// Define which paths use the middleware
export const config = {
  matcher: ["/dashboard", "/doctors", "/reports"],
};
