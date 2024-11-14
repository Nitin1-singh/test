import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    // Retrieve the "auth" cookie from the request
    const cookies = request.cookies;
    const auth = cookies.get("auth")?.value;
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
    const secretKeyUint8Array = new TextEncoder().encode(secretKey);

    // Check if the token is available and valid
    if (auth) {
      const { payload } = await jwtVerify(auth, secretKeyUint8Array);

      // If the token is valid and not expired
      if (payload) {
        // If the current URL is the login page, redirect to /allquiz
        if (
          request.nextUrl.pathname === "/login" ||
          request.nextUrl.pathname === "/signUp" ||
          request.nextUrl.pathname === "/"
        ) {
          return NextResponse.redirect(new URL("/allquiz", request.url));
        }

        // Otherwise, continue the request as it's authorized
        return NextResponse.next();
      }
    }
    if (
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/signUp" ||
      request.nextUrl.pathname === "/"
    ) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  } catch (e) {
    console.log("Error => ", e);
    if (
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/signUp"
    ) {
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: ["/allquiz/:path*", "/exam/:path*", "/login", "/signUp", "/"], // Include login in the matcher
};
