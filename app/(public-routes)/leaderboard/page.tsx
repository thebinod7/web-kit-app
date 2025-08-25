import { APP_PATHS } from '@/app/constants/api';
import { NEXT_SERVER_REVALIDATE } from '@/app/constants/constants';
import LeaderCard from '@/components/LeaderCard';
import { PUBLIC_ENV } from '@/utils/env';
import { Trophy } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

const API_ENDPOINT = `${PUBLIC_ENV.API_ENDPOINT}/api/v1/products/leaderboard`;

export default async function page() {
    const resposnse = await fetch(`${API_ENDPOINT}`, NEXT_SERVER_REVALIDATE);
    const data = await resposnse.json();
    const result = data?.result || {};

    return (
        <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Trophy className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                            Top 50 Leaderboard
                        </h1>
                    </div>
                    <p className="text-base md:text-lg text-gray-600 px-4">
                        Discover the most loved products voted by our community
                    </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                    {result.length > 0 ? (
                        result.map((item: any, index: number) => (
                            <Fragment key={item.cuid}>
                                <Link
                                    href={`${APP_PATHS.PRODUCTS}/${item.slug}`}
                                >
                                    <LeaderCard
                                        name={item.name}
                                        category={item.category?.name}
                                        logoUrl={item.logoUrl}
                                        rank={index + 1}
                                        tagline={item.tagline}
                                        upvotes={item._count.ProductFeedback}
                                    />
                                </Link>
                            </Fragment>
                        ))
                    ) : (
                        <div className="text-center text-gray-600">
                            No products found. Please visit later.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
