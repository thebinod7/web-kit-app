import { APP_PATHS } from '@/app/constants/api';
import { PUBLIC_ENV } from '@/utils/env';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface SidPanelProps {
    handleUpdateClick: any;
    productSlug?: string;
}

export default function SidePanelProps({
    handleUpdateClick,
    productSlug,
}: SidPanelProps) {
    const router = useRouter();
    const handleMyListingsClick = () => {
        router.push(APP_PATHS.MY_PRODUCTS);
    };
    return (
        <div className="rounded-lg bg-white p-6 shadow-sm md:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900">
                Launch Today
                <span role="img" aria-label="party popper">
                    🎉
                </span>
            </h2>
            {/* Updated Product URL Component */}
            <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-gray-700">
                    Product Link
                </h3>
                <p className="text-sm text-gray-600">
                    Your product will be accessible at: <br />
                    <Link
                        href="https://www.example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-blue-600 hover:underline"
                    >
                        {PUBLIC_ENV.APP_URL + '/tools/' + productSlug || ''}
                    </Link>
                </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
                🚀 Your product will be launched as soon as all the required
                information is submitted. No need to wait, complete the details
                to go live today!
            </p>
            <button
                type="button"
                onClick={handleUpdateClick}
                className="mt-6 cursor-pointer w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none"
            >
                Update Details
            </button>
            <button
                type="button"
                onClick={handleMyListingsClick}
                className="mt-3 cursor-pointer w-full rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-400 shadow-sm hover:bg-blue-50 focus:outline-none "
            >
                My Listings
            </button>
        </div>
    );
}
