'use client';

import AppCard from '@/components/AppCard';
import BlankResult from '@/components/BlankResult';
import PlainLoading from '@/components/PlainLoading';
import { useListMyProductQuery } from '@/hooks/api/product/hook.product';
import SubmitToday from '../edit-product/SubmitToday';

export default function AppsPage() {
    const { data, isLoading } = useListMyProductQuery();
    const rows = data?.data?.result.rows || [];

    return (
        <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
            <SubmitToday
                iconName="tv-minimal"
                heading="Your Products"
                message="Manage your products and increase their visibility."
            />
            {isLoading ? (
                <PlainLoading />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {rows.length > 0 ? (
                        rows.map((row: any) => (
                            <AppCard
                                name={row.name}
                                logoUrl={row.logoUrl}
                                tagline={row.tagline}
                                tags={row.tags}
                                status={row.status}
                                cuid={row.cuid}
                            />
                        ))
                    ) : (
                        <BlankResult />
                    )}
                </div>
            )}
        </div>
    );
}
