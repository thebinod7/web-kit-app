import React from 'react';

export default function BlogArticles() {
    return (
        <section id="blog" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Latest Insights
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stories, tips, and insights from the indie maker
                        community
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'How to Launch Your First SaaS Product',
                            excerpt:
                                'A comprehensive guide to taking your idea from concept to launch, including validation, development, and marketing strategies.',
                            author: 'Sarah Chen',
                            date: 'Dec 15, 2024',
                            readTime: '8 min read',
                            category: 'Launch',
                        },
                        {
                            title: 'Building in Public: Lessons Learned',
                            excerpt:
                                'What I discovered after sharing my entire product development journey on social media for 6 months.',
                            author: 'Mike Rodriguez',
                            date: 'Dec 12, 2024',
                            readTime: '6 min read',
                            category: 'Growth',
                        },
                        {
                            title: "The Indie Maker's Guide to Pricing",
                            excerpt:
                                'Strategies for pricing your product right from day one, including psychological pricing and value-based approaches.',
                            author: 'Emma Thompson',
                            date: 'Dec 10, 2024',
                            readTime: '10 min read',
                            category: 'Business',
                        },
                    ].map((article, index) => (
                        <article
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50"></div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                                        {article.category}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {article.readTime}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>By {article.author}</span>
                                    <span>{article.date}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    );
}
