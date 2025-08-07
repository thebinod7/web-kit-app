import { ExternalLink, ArrowUp } from 'lucide-react';
import Link from 'next/link';

interface ProductActionsProps {
    upvotes: number;
    websiteUrl: string;
}

export default function ProductDetailActions({
    upvotes,
    websiteUrl,
}: ProductActionsProps) {
    return (
        <div className="flex flex-col gap-2 w-full sm:w-auto">
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href={websiteUrl}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                   border border-orange-300 bg-white text-orange-700 hover:bg-orange-50 h-10 px-4 py-2 gap-2"
            >
                Visit website
                <ExternalLink className="h-4 w-4" />
            </Link>
            <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                   border border-orange-300 bg-white text-orange-700 hover:bg-orange-50 h-10 px-4 py-2 gap-2"
            >
                <ArrowUp className="h-4 w-4" />
                {upvotes} Upvotes
            </button>
        </div>
    );
}
