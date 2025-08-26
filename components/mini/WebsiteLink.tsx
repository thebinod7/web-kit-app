import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function WebsiteLink({ websiteUrl }: { websiteUrl: string }) {
    return (
        <Link href={websiteUrl || ''} target="_blank" rel="noopener noreferrer">
            <ExternalLink
                size={16}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            />
        </Link>
    );
}
