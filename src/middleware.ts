import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const WORK_PREFIX = "/work";
const UNLOCK_PATH = "/unlock";

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    // Only protect /work and /work/*
    if (pathname === WORK_PREFIX || pathname.startsWith(`${WORK_PREFIX}/`)) {
      const access = request.cookies.get("portfolio_access")?.value;
      if (access !== "true") {
        const unlockUrl = new URL(UNLOCK_PATH, request.url);
        unlockUrl.searchParams.set("next", pathname);
        return NextResponse.redirect(unlockUrl);
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.error("Middleware error:", err);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/work", "/work/:path*"],
};
