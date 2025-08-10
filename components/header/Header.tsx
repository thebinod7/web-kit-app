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
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-orange-500 rounded-4xl flex items-center justify-center">
                            <span className="text-white font-bold text-md">
                                BK
                            </span>
                        </div>
                        <span className="text-xl font-semibold text-gray-900">
                            {}
                        </span>
                    </Link>

                    {/* Search Bar - Hidden on mobile, shown on tablet+ */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products, categories, or creators..."
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition-all duration-200 text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Mobile search button */}
                        <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>

                        <div className="hidden lg:flex items-center space-x-6">
                            <Link
                                href="/#featured"
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                Featured
                            </Link>
                            <Link
                                href={APP_PATHS.PRODUCTS}
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                Products
                            </Link>
                            <Link
                                href="/#leaderboard"
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                Leaderboard
                            </Link>
                        </div>

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

                {/* Mobile Search Bar - Expandable */}
                <div className="md:hidden pb-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition-all duration-200 text-sm"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
