import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Get the authData (or token) from cookies
  const token = req.cookies.get("authData");

  // Define routes that require authentication
  const protectedRoutes = ["/dashboard"];

  // const loginRoute = ["/auth/login"];

  // If the user tries to access a protected route but isn't authenticated, redirect them to login
  if (
    !token &&
    protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // If the user tries to access login route but authenticated, redirect them to dashboard
  // if (
  //   token &&
  //   loginRoute.some((route) => req.nextUrl.pathname.startsWith(route))
  // ) {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  return NextResponse.next();
}

// Define which paths use the middleware
export const config = {
  matcher: ["/dashboard", "/doctors", "/reports"],
};
