import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Protect dashboard routes - admin only
    if (pathname.startsWith('/dashboard')) {
      if (!token || token.role !== 'admin') {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }

    // Protect orders route - authenticated users
    if (pathname.startsWith('/orders')) {
      if (!token) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;
        
        // Allow public routes
        if (
          pathname === '/' ||
          pathname.startsWith('/shop') ||
          pathname.startsWith('/product') ||
          pathname.startsWith('/cart') ||
          pathname.startsWith('/auth') ||
          pathname.startsWith('/api')
        ) {
          return true;
        }

        // Require auth for protected routes
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*', '/orders/:path*'],
};

