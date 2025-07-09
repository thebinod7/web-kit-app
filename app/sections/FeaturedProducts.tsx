import { ExternalLink, Star } from 'lucide-react';
import React from 'react';

export default function FeaturedProducts() {
    return (
        <section id="featured" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Featured Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hand-picked products that are making waves in the indie
                        community
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: 'TaskFlow Pro',
                            description:
                                'Beautiful task management for remote teams',
                            category: 'Productivity',
                            rating: 4.9,
                            users: '12k+',
                            image: '/placeholder.svg?height=200&width=300',
                        },
                        {
                            name: 'ContentCraft',
                            description: 'AI-powered content creation platform',
                            category: 'Content',
                            rating: 4.8,
                            users: '8k+',
                            image: '/placeholder.svg?height=200&width=300',
                        },
                        {
                            name: 'AnalyticsPro',
                            description: 'Simple analytics for indie makers',
                            category: 'Analytics',
                            rating: 4.7,
                            users: '15k+',
                            image: '/placeholder.svg?height=200&width=300',
                        },
                    ].map((app, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                                <img
                                    src={app.image || '/placeholder.svg'}
                                    alt={app.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                    {app.category}
                                </span>
                                <div className="flex items-center space-x-1 text-sm text-gray-500">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span>{app.rating}</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {app.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {app.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                    {app.users} users
                                </span>
                                <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 text-sm font-medium">
                                    <span>View Details</span>
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
