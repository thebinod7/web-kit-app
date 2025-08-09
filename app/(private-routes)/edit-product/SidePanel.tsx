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
                        href={`${APP_PATHS.PRODUCTS}/${productSlug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-blue-500 hover:underline"
                    >
                        {PUBLIC_ENV.APP_URL + '/products/' + productSlug || ''}
                    </Link>
                </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
                🌟 Your launch is just one step away. Complete your details and
                go live within a day. Reviews may take up to 24 hours.
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
                className="mt-3 cursor-pointer w-full rounded-md border border-orange-300 px-4 py-2 text-sm font-medium text-orange-400 shadow-sm hover:bg-orange-50 focus:outline-none "
            >
                Your Products
            </button>
        </div>
    );
}
