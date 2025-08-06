import { PackageX } from 'lucide-react';
import React from 'react';

export default function BlankResult({
    heading,
    message,
}: {
    heading?: string;
    message?: string;
}) {
    return (
        <div className="col-span-full flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-white rounded-lg shadow-sm border border-gray-100">
                <PackageX className="h-16 w-16 text-gray-400 mb-4" />
                <h2 className="text-md font-semibold text-gray-800 mb-2">
                    {heading || 'No Results Found'}
                </h2>
                <p className="text-gray-600 max-w-md">
                    {message || 'Please submit a new product to get started.'}
                </p>
            </div>
        </div>
    );
}
