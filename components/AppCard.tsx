import { APP_PATHS } from '@/app/constants/api';
import { ICONS } from '@/app/constants/images';
import { formatEnum } from '@/utils/utils';
import Link from 'next/link';

interface AppCardProps {
    logoUrl: string;
    name: string;
    tagline: string;
    tags: string[];
    status: string;
    cuid: string;
}

export default function AppCard({
    logoUrl,
    name,
    tagline,
    tags,
    status,
    cuid,
}: AppCardProps) {
    return (
        <Link
            href={`${APP_PATHS.EDIT_PRODUCT}/${cuid}`}
            rel="noopener noreferrer"
            className="relative bg-white rounded-xl shadow-md p-6 border border-gray-200 cursor-pointer transition-all hover:shadow-lg hover:border-orange-300 block"
        >
            <span className="absolute top-6 right-6 bg-blue-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                {formatEnum(status)}
            </span>
            <div className="flex items-start gap-4">
                <img
                    src={logoUrl || ICONS.BLANK_IMAGE}
                    alt={`${name} app icon`}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-grow">
                    <h2 className="text-xl font-bold mb-1 text-gray-900">
                        {name}
                    </h2>
                    <p className="text-gray-600">{tagline}</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
