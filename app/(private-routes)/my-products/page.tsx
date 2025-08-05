'use client';

import { IMAGE_URLS } from '@/app/constants/images';
import PlainLoading from '@/components/PlainLoading';
import { useListMyProductQuery } from '@/hooks/api/product/hook.product';
import { PackageX } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SubmitToday from '../edit-product/SubmitToday';

export default function AppsPage() {
    const { data, isLoading } = useListMyProductQuery();
    const rows = data?.data?.result.rows || [];

    return (
        <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
            {/* <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">
                    Your Products
                </h1>
                <Link
                    href={'/submit-product'}
                    className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
                           ring-offset-background focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                           disabled:opacity-50 bg-gray-900 text-gray-50 hover:bg-gray-900/90 h-10 px-4 py-2
                           shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                    Submit New Product
                </Link>
            </div> */}
            <SubmitToday
                iconName="tv-minimal"
                heading="Your Products"
                message="Manage your products and increase their visibility."
            />
            {isLoading ? (
                <PlainLoading />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {rows.length > 0 ? (
                        rows.map((row: any) => (
                            <Link
                                href={`/edit-product/${row.cuid}`}
                                key={row.cuid}
                            >
                                <div
                                    className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                >
                                    <div className="relative w-full h-40 sm:h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={
                                                row.logoUrl || IMAGE_URLS.APP_DP
                                            }
                                            alt={` ${row.name}`}
                                            width={300}
                                            height={300}
                                            className="object-contain w-full h-full"
                                            priority // Prioritize loading for initial apps
                                        />
                                    </div>
                                    <div className="p-5 flex-grow flex flex-col justify-between">
                                        <h2 className="text-md font-semibold mb-4 text-gray-900 line-clamp-2">
                                            {row.name}
                                        </h2>
                                        <div className="flex justify-end">
                                            <span
                                                className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-100`}
                                            >
                                                {row.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full flex items-center justify-center min-h-[50vh]">
                            <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-white rounded-lg shadow-sm border border-gray-200">
                                <PackageX className="h-16 w-16 text-gray-400 mb-4" />
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                    No products found
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 max-w-md">
                                    Please submit a new product to get started.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
