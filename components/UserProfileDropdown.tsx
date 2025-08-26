'use client';

import { APP_PATHS } from '@/app/constants/api';
import { ICurrentUser } from '@/types';
import { clearLocalStorage, LOCAL_KEYS } from '@/utils/localstorage';
import { deleteCookie } from 'cookies-next/client';
import { ChevronDown, LogOut, User, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface UserProfileDropdownProps {
    loggedInUser: ICurrentUser;
}
export default function UserProfileDropdown({
    loggedInUser,
}: UserProfileDropdownProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        clearLocalStorage();
        deleteCookie(LOCAL_KEYS.ACCESS_TOKEN);
        window.location.replace('/login');
    };

    const onMenuItemClick = () => setIsOpen(false);

    return (
        <div className="relative inline-block text-left mt-2">
            <div>
                <button
                    type="button"
                    className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                >
                    {loggedInUser.profilePicture && (
                        <img
                            className="h-7 w-7 rounded-full object-cover"
                            src={loggedInUser.profilePicture}
                            alt="User profile"
                            referrerPolicy="no-referrer"
                        />
                    )}

                    <span className="ml-3 hidden text-base font-medium md:inline">
                        {loggedInUser?.name || '-'}
                    </span>
                    <ChevronDown
                        className="ml-1 h-5 w-5 hidden md:inline"
                        aria-hidden="true"
                    />
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                    ref={dropdownRef}
                >
                    <div className="py-1" role="none">
                        <Link
                            onClick={onMenuItemClick}
                            href={APP_PATHS.MY_PROFILE}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                        >
                            <User className="mr-2 h-4 w-4" />
                            My Profile
                        </Link>
                        <Link
                            onClick={onMenuItemClick}
                            href={APP_PATHS.MY_PRODUCTS}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                        >
                            <Wrench className="mr-2 h-4 w-4" />
                            My Products
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="flex w-full cursor-pointer items-center px-4 py-2 text-sm  text-red-600 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-2"
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
