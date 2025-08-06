import { FilterX } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ResetFilters() {
    return (
        <div className="flex justify-end mb-4 cursor-pointer">
            <Link
                href="/products"
                className="flex justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input h-10 px-4 py-2 items-center gap-2"
            >
                <FilterX className="h-4 w-4" />
                Reset Filters
            </Link>
        </div>
    );
}
