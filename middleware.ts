import { i18n } from 'locales';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathNameIsMissingLocale = i18n.locales.every((locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`);

  if (pathNameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.nextUrl))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
