'use client';
import { API_ROUTES, APP_PATHS } from '@/app/constants/api';
import { COOKIE_EXPIRY } from '@/app/constants/constants';
import { LOCAL_KEYS } from '@/utils/localstorage';
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
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">
                    Break<span className="text-blue-400">FreeKit</span>
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                    Discover and be discovered.
                </p>
            </div>

            <div className="w-full max-w-md rounded-2xl border border-gray-200 shadow-sm p-8 bg-white">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Welcome back
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-[300px]">
                        Discover what makers are building. Fresh products, every
                        day.
                    </p>
                    <button
                        type="button"
                        onClick={() => googleLogin()}
                        className="w-full cursor-pointer bg-gray-900 text-white hover:bg-gray-800 rounded-lg py-4 text-base font-medium flex items-center justify-center space-x-2 transition-colors duration-200"
                    >
                        <Chrome className="h-6 w-6" />{' '}
                        <span>Continue with Google</span>
                    </button>
                    <div className="relative w-full my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                Secure sign in
                            </span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        By continuing, you agree to our{' '}
                        <Link
                            href="#"
                            className="underline text-gray-700 hover:text-gray-900"
                        >
                            Terms
                        </Link>{' '}
                        and{' '}
                        <Link
                            href="#"
                            className="underline text-gray-700 hover:text-gray-900"
                        >
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
