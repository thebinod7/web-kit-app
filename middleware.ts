import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { LOCAL_KEYS } from './utils/localstorage';

const PROTECTED_ROUTES = [
    '/dashboard',
    '/edit-product',
    '/my-products',
    'featured-product',
    '/submit-product',
    '/feature-product',
];

export function isTokenExpired(token: string) {
    try {
        const decoded: any = jwtDecode(token);
        // Add safety checks
        if (!decoded || typeof decoded !== 'object') {
            return { isExpired: true, isUser: false };
        }

        // Check if exp property exists
        if (!decoded.exp || typeof decoded.exp !== 'number') {
            return { isExpired: true, isUser: false };
        }

        const currentTime = Math.floor(Date.now() / 1000);
        const isExpired = currentTime > decoded.exp;
        // const isUser = decoded.role === USER_ROLES.USER;
        return { isExpired, isUser: true };
    } catch (err) {
        console.error('JWT decode error:', err);
        return { isExpired: true, isUser: false };
    }
}

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.pathname;
    const accessToken = req.cookies.get(LOCAL_KEYS.ACCESS_TOKEN)?.value;

    // Check if the route is protected
    if (PROTECTED_ROUTES.some((route) => url.startsWith(route))) {
        if (!accessToken) {
            const loginUrl = new URL('/passport', req.url);
            loginUrl.searchParams.set('redirectUrl', url);
            return NextResponse.redirect(loginUrl);
        }
        const { isExpired } = isTokenExpired(accessToken);
        if (isExpired) {
            const loginUrl = new URL('/passport', req.url);
            loginUrl.searchParams.set('redirectUrl', url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}
