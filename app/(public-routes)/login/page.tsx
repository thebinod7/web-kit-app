'use client';
import { API_ROUTES, APP_PATHS } from '@/app/constants/api';
import { COOKIE_EXPIRY } from '@/app/constants/constants';
import { LOCAL_KEYS, setLocalUser } from '@/utils/localstorage';
import { postRequest } from '@/utils/request';
import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next/client';
import { Chrome } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

export default function Component() {
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirectUrl');

    const loginWithGoogleMutation = useMutation({
        mutationFn: (payload: any) => {
            return postRequest(API_ROUTES.AUTH + '/google-login', payload);
        },
        onError: (err) => {
            console.error('Google login error:', err);
            toast.error('Failed to login with Google, Please try again.');
        },
        onSuccess: ({ data }) => {
            toast.success('Successfully logged in with Google!');
            const { accessToken } = data.result;
            setLocalUser(data.result.user);
            setCookie(LOCAL_KEYS.ACCESS_TOKEN, accessToken, {
                secure: true,
                maxAge: COOKIE_EXPIRY,
                sameSite: 'strict',
                path: '/',
            });
            if (redirectUrl) return window.location.replace(`${redirectUrl}`);
            window.location.replace(APP_PATHS.MY_PRODUCTS);
        },
    });

    const googleLogin = useGoogleLogin({
        onSuccess: (response: any) => {
            loginWithGoogleMutation.mutate({
                googleToken: response.access_token,
            });
        },
        onError: () => toast.error('Failed to login with Google!'),
    });

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-sm">
                {/* Logo and tagline */}
                <div className="text-center mb-10">
                    {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/25 mb-6">
                        <span className="text-white font-bold text-xl">BF</span>
                    </div> */}
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Welcome to {}
                        <span className=" text-orange-500">BreakFreeKit</span>
                    </h1>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Discover what makers are building.
                        <br />
                        Fresh products, every day.
                    </p>
                </div>

                {/* Login card */}
                <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl shadow-gray-200/50 rounded-3xl p-8 relative">
                    {/* Card inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-3xl pointer-events-none"></div>

                    <div className="relative space-y-6">
                        {/* Google login button */}
                        <button
                            type="button"
                            onClick={() => googleLogin()}
                            className="group cursor-pointer relative w-full bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl py-4 px-4 text-gray-700 font-medium flex items-center justify-center space-x-3 transition-all duration-200 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-0.5"
                        >
                            <div className="flex items-center justify-center w-5 h-5">
                                <svg viewBox="0 0 24 24" className="w-5 h-5">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                            </div>
                            <span>Continue with Google</span>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:via-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300"></div>
                        </button>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-white px-4 text-gray-400 font-medium">
                                    Secure authentication
                                </span>
                            </div>
                        </div>

                        {/* Additional login options could go here */}
                        <div className="text-center">
                            <p className="text-xs text-gray-400 leading-relaxed">
                                By continuing, you agree to our{' '}
                                <Link
                                    href="/terms"
                                    className="text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-center space-x-6 mt-8 opacity-60">
                    <div className="flex items-center space-x-1">
                        <svg
                            className="w-4 h-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-xs text-gray-500">
                            SSL Secured
                        </span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <svg
                            className="w-4 h-4 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-xs text-gray-500">
                            Privacy First
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
