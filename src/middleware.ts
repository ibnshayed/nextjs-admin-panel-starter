import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.url;
  console.log("🚀 ~ middleware ~ url:", url);
  if (request.cookies.get("accessToken") && url.includes("/login")) {
    return NextResponse.redirect(new URL("/dashboard", url));
  }
  if (!request.cookies.get("accessToken") && url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/login", url));
  }
}
