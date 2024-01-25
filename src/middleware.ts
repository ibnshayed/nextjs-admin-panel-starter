import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.url;
  if (request.cookies.get("user") && url.includes("/login"))
    return NextResponse.redirect(new URL("/dashboard", url));
}
