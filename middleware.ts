// middleware.ts - Edge-safe guard
// JWT token from cookies—no Prisma/auth import (edge compat).
// Validates SECRET, redirects anon/protects paths.

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';  // Edge-friendly

export async function middleware(request: NextRequest) {
  // Get token from cookies (edge-safe)
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  const isAuth = !!token?.id;  // Has user ID? Logged in.

  const protectedPaths = ['/dashboard', '/discovery', '/roadmap'];
  const isProtected = protectedPaths.some(p => request.nextUrl.pathname.startsWith(p));

  if (isProtected && !isAuth) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  const authPages = ['/login', '/register'];
  const isAuthPage = authPages.some(p => request.nextUrl.pathname === p);

  if (isAuthPage && isAuth) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};