'use client';
import { Search } from 'lucide-react';

export default function SearchBar() {
    return (
        <div className="relative mb-10">
            {' '}
            {/* Increased mb */}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
                type="text"
                placeholder="Search a product"
                className="w-full pl-10 pr-24 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">
                <span>Ctrl</span>
                <kbd className="font-semibold">K</kbd>
            </div>
        </div>
    );
}
