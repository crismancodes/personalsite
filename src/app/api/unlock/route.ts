import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { timingSafeEqual } from "crypto";

const COOKIE_NAME = "portfolio_access";
const COOKIE_VALUE = "true";

function secureCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");
  if (bufA.length !== bufB.length) return false;
  if (bufA.length === 0) return true;
  return timingSafeEqual(bufA, bufB);
}

export async function POST(request: NextRequest) {
  try {
    let body: { password?: unknown; next?: unknown };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request." },
        { status: 400 }
      );
    }
    const { password, next } = body ?? {};
    const expected = process.env.PORTFOLIO_PASSWORD;

    if (!expected) {
      return NextResponse.json(
        { error: "Access is temporarily unavailable." },
        { status: 503 }
      );
    }

    const pass = typeof password === "string" ? password : "";
    if (!secureCompare(pass, expected)) {
      return NextResponse.json(
        { error: "Invalid password." },
        { status: 401 }
      );
    }

    try {
      const cookieStore = await cookies();
      cookieStore.set(COOKIE_NAME, COOKIE_VALUE, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
    } catch (err) {
      console.error("Unlock cookie set failed:", err);
      return NextResponse.json(
        { error: "Access is temporarily unavailable." },
        { status: 503 }
      );
    }

    const redirectPath =
      typeof next === "string" && next.startsWith("/work") ? next : "/work";

    return NextResponse.json({ redirect: redirectPath });
  } catch (err) {
    console.error("Unlock API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
