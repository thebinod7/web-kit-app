'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { FEATURED_COST } from '@/app/constants/constants';
import BtnPrimary from '@/components/mini/BtnPrimary';

const FEATURED_BENEFITS = [
    'Display across home, category, and product pages',
    'Featured badge on your product listing',
    'Priority placement in search results',
    ' Direct link to your site',
];

const discountedPrice = FEATURED_COST.FIFTEEN_DAYS * 0.2;

export function FeaturedPricingCard() {
    const [selectedPlan, setSelectedPlan] = useState<'7days' | '15days' | null>(
        null
    );

    const handlePurchase = () => {
        if (selectedPlan) {
            console.log(`Proceeding to purchase ${selectedPlan} plan`);
            // Here you would integrate with your payment processor
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Feature Your Product
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Reach a wide audience throughout the platform.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div
                    className={`bg-white rounded-lg shadow-sm border cursor-pointer transition-all duration-200 ${
                        selectedPlan === '7days'
                            ? 'border-gray-900 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedPlan('7days')}
                >
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <div className="text-4xl font-bold text-gray-900 mb-2">
                                ${FEATURED_COST.SEVEN_DAYS}
                            </div>
                            <div className="text-gray-600">
                                7 days of visibility
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            {FEATURED_BENEFITS.map(
                                (benefit: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">
                                            {benefit}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>

                        <button
                            className={`w-full py-2 px-3 rounded-lg font-medium transition-colors duration-200 ${
                                selectedPlan === '7days'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {selectedPlan === '7days'
                                ? 'Selected'
                                : 'Select Plan'}
                        </button>
                    </div>
                </div>

                <div
                    className={`bg-white rounded-lg shadow-sm border cursor-pointer transition-all duration-200 relative ${
                        selectedPlan === '15days'
                            ? 'border-gray-900 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedPlan('15days')}
                >
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gray-900 text-white text-sm font-medium px-4 py-1 rounded-full">
                            Best Seller
                        </span>
                    </div>

                    <div className="p-8 pt-10">
                        <div className="text-center mb-8">
                            <div className="flex items-baseline justify-center gap-2 mb-2">
                                <span className="text-lg text-gray-400 line-through">
                                    ${FEATURED_COST.FIFTEEN_DAYS}
                                </span>
                                <span className="text-4xl font-bold text-gray-900">
                                    $
                                    {(
                                        FEATURED_COST.FIFTEEN_DAYS -
                                        discountedPrice
                                    ).toFixed(2)}
                                </span>
                            </div>
                            <div className="text-gray-600 mb-1">
                                15 days of visibility
                            </div>
                            <div className="text-sm text-green-600 font-medium">
                                Save ${discountedPrice.toFixed(2)}
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            {FEATURED_BENEFITS.map(
                                (benefit: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">
                                            {benefit}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>

                        <button
                            className={`w-full py-2 px-3 rounded-lg font-medium transition-colors duration-200 ${
                                selectedPlan === '15days'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {selectedPlan === '15days'
                                ? 'Selected'
                                : 'Select Plan'}
                        </button>
                    </div>
                </div>
            </div>

            {selectedPlan && (
                <div className="mt-8 text-center">
                    <BtnPrimary
                        variant="secondary"
                        text={`Continue to checkout (${selectedPlan})`}
                        handleClick={() => {}}
                    />
                </div>
            )}
        </div>
    );
}
