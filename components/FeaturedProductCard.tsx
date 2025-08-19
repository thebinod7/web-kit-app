import React from 'react';
import {
    ChevronRight,
    Users,
    Star,
    ExternalLink,
    Award,
    Zap,
    TrendingUp,
} from 'lucide-react';

const ProductCard = ({ product, index }: { product: any; index: number }) => (
    <div className="relative group cursor-pointer">
        {/* Featured badge */}
        <div className="absolute -top-2 -left-2 z-10">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
                <Award size={12} />#{index} Product of the Day
            </div>
        </div>

        {/* Main card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
                {/* Product logo */}
                <div className="flex-shrink-0">
                    <div
                        className={`w-16 h-16 ${product.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                            <product.icon
                                size={20}
                                className={product.iconColor}
                            />
                        </div>
                    </div>
                </div>

                {/* Product details */}
                <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm font-medium">
                                {product.tagline}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                                <Star
                                    size={12}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                                <span className="text-sm font-semibold text-gray-700">
                                    {product.rating}
                                </span>
                            </div>
                            <ExternalLink
                                size={14}
                                className="text-gray-400 group-hover:text-gray-600 transition-colors"
                            />
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                        {product.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                        {product.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Stats and CTA */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                            <div className="flex items-center gap-1">
                                <Users size={12} />
                                <span className="font-medium">
                                    {product.users}
                                </span>
                            </div>
                            <span className="font-medium">
                                {product.pricing}
                            </span>
                        </div>

                        <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-1 group/button">
                            View Product
                            <ChevronRight
                                size={12}
                                className="group-hover/button:translate-x-1 transition-transform"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Subtle decoration */}
        <div
            className={`absolute inset-0 ${product.hoverGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
        ></div>
    </div>
);

export default function FeaturedProductsHero() {
    const products = [
        {
            name: 'Designly Pro',
            tagline: 'Advanced design collaboration platform',
            description:
                'The ultimate design collaboration platform that brings teams together. Create, review, and iterate on designs with real-time feedback and seamless handoff.',
            rating: '4.9',
            users: '2.4k users',
            pricing: 'Free • Pro $29/mo',
            tags: ['Design Tools', 'Collaboration', 'Productivity'],
            gradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
            hoverGradient: 'bg-gradient-to-r from-blue-500/5 to-purple-600/5',
            icon: Zap,
            iconColor: 'text-blue-500',
        },
        {
            name: 'Analytics Hub',
            tagline: 'Smart business intelligence platform',
            description:
                'Transform your data into actionable insights with advanced analytics, beautiful dashboards, and AI-powered recommendations for better decision making.',
            rating: '4.8',
            users: '1.8k users',
            pricing: 'Free • Pro $39/mo',
            tags: ['Analytics', 'Business Intelligence', 'AI'],
            gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
            hoverGradient: 'bg-gradient-to-r from-emerald-500/5 to-teal-600/5',
            icon: TrendingUp,
            iconColor: 'text-emerald-500',
        },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
            {/* Hero Header */}
            <div className="text-center mb-12 pt-8">
                <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-6">
                    <Award size={16} className="text-orange-500" />
                    Featured Products of the Day
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Discover Amazing Products
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Handpicked collection of the most innovative tools and
                    platforms launching today
                </p>
            </div>

            {/* Featured Products Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {products.map((product, index) => (
                    <ProductCard
                        key={product.name}
                        product={product}
                        index={index + 1}
                    />
                ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
                <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300 px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg">
                    View All Products
                </button>
            </div>
        </div>
    );
}
