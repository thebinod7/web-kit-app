import { CircleDot, Square } from 'lucide-react';
import React from 'react';

interface PartnerCardProps {
    partner: {
        id: string;
        name: string;
        description: string;
        icon: React.ReactNode;
    };
}

function PartnerCard({ partner }: PartnerCardProps) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex items-start gap-4 transition-all duration-200 hover:shadow-md hover:border-blue-300 cursor-pointer">
            <div className="flex-shrink-0 p-3 bg-gray-100 rounded-md border border-gray-200">
                {partner.icon}
            </div>
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {partner.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    {partner.description}
                </p>
            </div>
        </div>
    );
}

export default function PartnersSection() {
    const partners = [
        {
            id: '1',
            name: 'Outseta',
            description:
                'One platform for Stripe payments, auth, CRM, email + help desk. Perfect for SaaS + memberships. Try free.',
            icon: <CircleDot className="h-6 w-6 text-yellow-500" />,
        },
        {
            id: '2',
            name: 'Capgo',
            description:
                'Instant updates for Capacitor app. Ship updates, fixes, changes, and features within minutes.',
            icon: <Square className="h-6 w-6 text-blue-600" />,
        },
    ];

    return (
        <section className="mb-10">
            {' '}
            {/* Increased mb */}
            <h2 className="text-sm font-semibold uppercase text-gray-700 mb-4">
                Our Partners
            </h2>
            <div className="space-y-4">
                {partners.map((partner) => (
                    <PartnerCard key={partner.id} partner={partner} />
                ))}
            </div>
        </section>
    );
}
