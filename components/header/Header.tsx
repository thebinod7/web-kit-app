'use client';
import { APP_PATHS } from '@/app/constants/api';
import { useGetMeUser } from '@/hooks/api/user/hook.user';
import { useAppStore } from '@/store/store.app';
import { LOCAL_KEYS } from '@/utils/localstorage';
import { getCookie } from 'cookies-next/client';
import Link from 'next/link';
import { useEffect } from 'react';
import UserProfileDropdown from '../UserProfileDropdown';
import Image from 'next/image';

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
                        <Link href={'/'}>
                            <Image
                                src="/bfk.svg"
                                alt="BreakFreeKit"
                                width={200}
                                height={50}
                            />
                        </Link>
                        {/* <Link href="/" className="flex items-center space-x-2">
                            <div className="w-11 h-11 bg-orange-400 rounded-4xl flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">
                                    B
                                </span>
                            </div>
                            <span className="text-xl font-semibold text-gray-900">
                                BreakFreeKit
                            </span>
                        </Link> */}
                    </div>

                    {/* Center: Menu */}
                    <div className="flex-1 flex justify-center">
                        <div className="hidden md:flex items-center space-x-6">
                            <Link
                                href={APP_PATHS.ABOUT}
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                About
                            </Link>
                            <Link
                                href={APP_PATHS.CONTACT}
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/#faq"
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                FAQs
                            </Link>
                            <Link
                                href={APP_PATHS.GENERATE_RESUME}
                                className="mt-4 cursor-pointer flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-offset-2 md:mt-0"
                            >
                                Generate Resume
                            </Link>
                        </div>
                    </div>

                    {/* Right: Profile/Login */}
                    {/* <div className="flex-shrink-0">
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
                    </div> */}
                </div>
            </div>
        </nav>
    );
}
