'use client';
import { API_ROUTES } from '@/app/constants/api';
import { APP_CODE, APP_TITLE } from '@/app/constants/constants';
import { saveAccessToken } from '@/utils/localstorage';
import { postRequest } from '@/utils/request';
import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { ChromeIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function Component() {
    const loginWithGoogleMutation = useMutation({
        mutationFn: (payload: any) => {
            return postRequest(API_ROUTES.AUTH + '/google-login', payload);
        },
        onError: (err) => {
            console.error('Google login error:', err);
            toast.error('Failed to login with Google, Please try again.');
        },
        onSuccess: ({ data }) => {
            console.log('Google login success:', data);
            toast.success('Successfully logged in with Google!');
            const { accessToken } = data.result;
            saveAccessToken(accessToken);
            window.location.replace('/dashboard');
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
        <div className="flex min-h-screen items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
            {/* Sophisticated Card Container */}
            <div className="relative w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-md md:p-12">
                {/* Logo - positioned absolutely to overlap the card top */}
                <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-blue-600 shadow-md">
                    <span className="text-2xl font-bold text-white">
                        {APP_CODE}
                    </span>
                </div>

                {/* Content wrapper with main vertical spacing */}
                <div className="flex flex-col items-center text-center space-y-6 pt-8">
                    {' '}
                    {/* Adjusted pt for logo overlap */}
                    {/* Heading and Sub-heading */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Welcome
                        </h1>
                        <p className="text-base text-gray-600">
                            Sign in to continue your journey with {APP_TITLE}.
                        </p>
                    </div>
                    {/* Google Button */}
                    <button
                        className="flex cursor-pointer h-12 w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-lg font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        type="button"
                        onClick={() => googleLogin()}
                    >
                        <ChromeIcon className="mr-3 h-6 w-6 text-gray-600" />{' '}
                        {/* Icon color adjusted */}
                        Sign in with Google
                    </button>
                    {/* Optional: Divider for future login methods */}
                    <div className="relative flex w-full items-center justify-center py-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative bg-white px-2 text-sm text-gray-600"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
