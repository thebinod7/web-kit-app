import { ICONS } from '@/app/constants/images';
import { humanizeDate } from '@/utils/date';
import {
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    Twitter,
    Youtube,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductSidebarProps {
    publisherLogo: string;
    publisherName: string;
    launchDate: string;
    category: string;
    pricing: string;
    tags: string[];
    socialDetails: Record<string, any>;
}

export default function ProductDetailsSidebar({
    publisherLogo,
    publisherName,
    launchDate,
    category,
    pricing,
    tags,
    socialDetails,
}: ProductSidebarProps) {
    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Publisher
                </h3>
                <div className="flex items-center gap-2">
                    <Image
                        referrerPolicy="no-referrer"
                        src={publisherLogo || ICONS.USER}
                        alt={`${publisherName} logo`}
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span className="text-gray-800 font-semibold">
                        {publisherName}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div className="text-gray-500">Contact Email</div>
                <div className="text-gray-800 font-medium">
                    {socialDetails?.contactEmail || '-'}
                </div>

                <div className="text-gray-500">Listed On</div>
                <div className="text-gray-800 font-medium">
                    {humanizeDate(launchDate)}
                </div>

                <div className="text-gray-500">Category</div>
                <div className="text-gray-800 font-medium">{category}</div>

                <div className="text-gray-500">Pricing</div>
                <div className="font-medium border px-2 py-1 rounded-sm border-orange-300 text-orange-600">
                    {pricing}
                </div>
            </div>

            {socialDetails && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                        Social
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {socialDetails.twitterUrl && (
                            <Link
                                href={socialDetails.twitterUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                                aria-label={`Link to Twitter`}
                            >
                                <Twitter />
                            </Link>
                        )}
                        {socialDetails.githubUrl && (
                            <Link
                                href={socialDetails.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                                aria-label={`Link to Github`}
                            >
                                <GithubIcon />
                            </Link>
                        )}
                        {socialDetails.linkedinUrl && (
                            <Link
                                href={socialDetails.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                                aria-label={`Link to Linkedin`}
                            >
                                <LinkedinIcon />
                            </Link>
                        )}
                        {socialDetails.youtubeUrl && (
                            <Link
                                href={socialDetails.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                                aria-label={`Link to Youtube`}
                            >
                                <Youtube />
                            </Link>
                        )}
                        {socialDetails.facebookUrl && (
                            <Link
                                href={socialDetails.facebookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                                aria-label={`Link to Facebook`}
                            >
                                <FacebookIcon />
                            </Link>
                        )}
                        {socialDetails.instagramUrl && (
                            <Link
                                href={socialDetails.instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                                aria-label={`Link to Instagram`}
                            >
                                <InstagramIcon />
                            </Link>
                        )}
                    </div>
                </div>
            )}

            <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.length > 0 &&
                        tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
}
