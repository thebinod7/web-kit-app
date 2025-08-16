'use client';
import { APP_PATHS } from '@/app/constants/api';
import { useGetMeUser } from '@/hooks/api/user/hook.user';
import { useAppStore } from '@/store/store.app';
import { LOCAL_KEYS } from '@/utils/localstorage';
import { getCookie } from 'cookies-next/client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import UserProfileDropdown from '../UserProfileDropdown';

export default function Header() {
    const accessToken = getCookie(LOCAL_KEYS.ACCESS_TOKEN);
    const { data } = useGetMeUser(accessToken || '');
    const { result } = data?.data || {};

    const setLoggedInUser = useAppStore((state) => state.setLoggedInUser);
    const loggedUser = useAppStore((state) => state.loggedInUser);

    useEffect(() => {
        if (result) {
            setLoggedInUser(result);
        }
    }, [result]);

    return (
        <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-11 h-11 bg-orange-400 rounded-4xl flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">
                                    B
                                </span>
                            </div>
                            <span className="text-xl font-semibold text-gray-900">
                                BreakFreeKit
                            </span>
                        </Link>
                    </div>

                    {/* Center: Menu */}
                    <div className="flex-1 flex justify-center">
                        <div className="hidden md:flex items-center space-x-6">
                            <Link
                                href={APP_PATHS.SUBMIT_PRODUCT}
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/#leaderboard"
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                Leaderboard
                            </Link>
                            <Link
                                href={APP_PATHS.PRODUCTS}
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                Products
                            </Link>
                            <Link
                                href="/#faq"
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                FAQs
                            </Link>
                        </div>
                    </div>

                    {/* Right: Profile/Login */}
                    <div className="flex-shrink-0">
                        {loggedUser ? (
                            <UserProfileDropdown loggedInUser={loggedUser} />
                        ) : (
                            <Link
                                href={'/login'}
                                className="bg-gray-900 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
