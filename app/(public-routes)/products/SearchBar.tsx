'use client';

import { APP_PATHS } from '@/app/constants/api';
import { DEBOUNCE_DELAY } from '@/app/constants/constants';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SearchBar() {
    const searchParams = useSearchParams();
    const initialSearch = searchParams.get('search') || '';
    const [search, setSearch] = useState<string>(initialSearch);
    const router = useRouter();

    useEffect(() => {
        const handler = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (search) {
                params.set('search', search);
            } else {
                params.delete('search');
            }
            router.push(`${APP_PATHS.PRODUCTS}?${params.toString()}`);
        }, DEBOUNCE_DELAY);

        return () => {
            clearTimeout(handler);
        };
    }, [search, router, searchParams]);

    return (
        <div className="relative mb-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name..."
                className="w-full pl-10 pr-24 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
        </div>
    );
}
