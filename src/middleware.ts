import { NextResponse, NextRequest } from "next/server";

const protectedRoutes = [
    "/",
]

const loggedProtectedRoutes = [
    "/login",
    "/register"
]

export function middleware(request: NextRequest) {
    const jwt = request.cookies.get("jwt")

    if (!jwt && protectedRoutes.includes(request.nextUrl.pathname)) {
        const absoluteUrl = new URL("/login", request.nextUrl.origin)
        return NextResponse.redirect(absoluteUrl.toString())
    } if (jwt && loggedProtectedRoutes.includes(request.nextUrl.pathname)) {
        const absoluteUrl = new URL("/", request.nextUrl.origin)
        return NextResponse.redirect(absoluteUrl.toString())
    }
}