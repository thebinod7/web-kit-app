import { X } from 'lucide-react';
import Link from 'next/link';

export default function ResetFilters() {
    return (
        <div className="mb-3 flex justify-end">
            <Link
                href={'/products'}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
                <X size={14} />
                Clear all
            </Link>
        </div>
    );
}
