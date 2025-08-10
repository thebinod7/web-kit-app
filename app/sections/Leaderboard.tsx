'use client';
import { Award, ExternalLink, Flame, Medal, Star, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

const Leaderboard = () => {
    const [animatedVotes, setAnimatedVotes] = useState<any>({});

    const mockProducts = [
        {
            id: 1,
            name: 'AI Code Assistant',
            votes: 2847,
            icon: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=80&h=80&fit=crop&crop=center',
            category: 'Developer Tools',
            streak: 7,
            isHot: true,
            growth: '+342',
        },
        {
            id: 2,
            name: 'Design Studio Pro',
            votes: 2156,
            icon: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=80&h=80&fit=crop&crop=center',
            category: 'Design',
            streak: 4,
            isHot: true,
            growth: '+298',
        },
        {
            id: 3,
            name: 'Analytics Dashboard',
            votes: 1923,
            icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center',
            category: 'Analytics',
            streak: 3,
            isHot: false,
            growth: '+156',
        },
        {
            id: 4,
            name: 'Project Manager',
            votes: 1687,
            icon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center',
            category: 'Productivity',
            streak: 2,
            isHot: false,
            growth: '+89',
        },
        {
            id: 5,
            name: 'Social Media Tool',
            votes: 1432,
            icon: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=80&h=80&fit=crop&crop=center',
            category: 'Marketing',
            streak: 1,
            isHot: false,
            growth: '+67',
        },
    ];

    // Simulate vote counting animation
    useEffect(() => {
        const timer = setTimeout(() => {
            const animated = {};
            mockProducts.forEach((product) => {
                animated[product.id] = product.votes;
            });
            setAnimatedVotes(animated);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1:
                return <Trophy className="w-6 h-6 text-yellow-500" />;
            case 2:
                return <Medal className="w-6 h-6 text-gray-400" />;
            case 3:
                return <Award className="w-6 h-6 text-amber-600" />;
            default:
                return (
                    <div className="w-6 h-6 flex items-center justify-center text-lg font-bold text-gray-400">
                        #{rank}
                    </div>
                );
        }
    };

    const getRankColors = (rank: number) => {
        switch (rank) {
            case 1:
                return 'bg-gradient-to-r from-yellow-400 to-orange-500';
            case 2:
                return 'bg-gradient-to-r from-gray-300 to-gray-500';
            case 3:
                return 'bg-gradient-to-r from-amber-400 to-yellow-600';
            default:
                return 'bg-gradient-to-r from-blue-400 to-purple-500';
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 mt-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Top Products This Week
                </h1>
                <p className="text-gray-600">Battle for the crown continues.</p>
            </div>

            {/* Leaderboard */}
            <div className="space-y-3">
                {mockProducts.map((product, index) => {
                    const rank = index + 1;
                    const isTopThree = rank <= 3;

                    return (
                        <div
                            key={product.id}
                            className={`relative group ${
                                isTopThree
                                    ? 'transform hover:-translate-y-1'
                                    : 'hover:translate-x-1'
                            } transition-all duration-300`}
                        >
                            {/* Rank glow for top 3 */}
                            {isTopThree && (
                                <div
                                    className={`absolute inset-0 ${getRankColors(
                                        rank
                                    )} opacity-10 rounded-2xl blur-lg scale-105`}
                                ></div>
                            )}

                            <div
                                className={`relative bg-white border-2 ${
                                    isTopThree
                                        ? 'border-gray-200 hover:border-gray-300'
                                        : 'border-gray-100 hover:border-gray-200'
                                } rounded-2xl p-4 hover:shadow-xl transition-all duration-300`}
                            >
                                {/* Top 3 crown effect */}
                                {rank === 1 && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                            <Star className="w-3 h-3 fill-current" />
                                            CHAMPION
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center gap-4">
                                    {/* Rank Badge */}
                                    <div
                                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                                            isTopThree
                                                ? getRankColors(rank)
                                                : 'bg-gray-100'
                                        }`}
                                    >
                                        {getRankIcon(rank)}
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start gap-3">
                                            <img
                                                src={product.icon}
                                                alt={product.name}
                                                className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-md"
                                            />

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-bold text-gray-900 truncate">
                                                        {product.name}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-gray-500 mb-2">
                                                    {product.category}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Vote Count */}
                                    <div className="text-right">
                                        <div
                                            className={`text-2xl font-bold ${
                                                isTopThree
                                                    ? 'text-gray-900'
                                                    : 'text-gray-700'
                                            } transition-all duration-1000`}
                                        >
                                            {animatedVotes[
                                                product.id
                                            ]?.toLocaleString() || '0'}
                                        </div>
                                        <div className="text-xs text-gray-500 font-medium">
                                            votes
                                        </div>

                                        {/* Quick Link */}
                                        <a
                                            href="#"
                                            className={`inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 ${
                                                isTopThree
                                                    ? 'bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg transform hover:scale-105'
                                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                            }`}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>

                                        {/* Progress bar for top 3 */}
                                        {isTopThree && (
                                            <div className="w-16 h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                                                <div
                                                    className={`h-full ${getRankColors(
                                                        rank
                                                    )} transition-all duration-1000 delay-500`}
                                                    style={{
                                                        width: `${
                                                            (product.votes /
                                                                mockProducts[0]
                                                                    .votes) *
                                                            100
                                                        }%`,
                                                    }}
                                                ></div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Rank position indicator */}
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                                    <div
                                        className={`w-2 h-8 ${
                                            isTopThree
                                                ? getRankColors(rank)
                                                : 'bg-gray-300'
                                        } rounded-r-full`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Stats */}
            <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-2xl font-bold text-gray-900">
                            47.2k
                        </div>
                        <div className="text-sm text-gray-600">Total Votes</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">
                            1,247
                        </div>
                        <div className="text-sm text-gray-600">
                            Participants
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">
                            +23%
                        </div>
                        <div className="text-sm text-gray-600">
                            vs Last Week
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
