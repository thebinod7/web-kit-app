import { Award, ExternalLink, Medal, Star, Trophy } from 'lucide-react';
import Link from 'next/link';
import { ICONS } from '../constants/images';

const Leaderboard = ({ leaders }: { leaders: any }) => {
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
                {leaders.map((product: any, index: number) => {
                    const rank = index + 1;
                    const isTopThree = rank <= 3;

                    return (
                        <div
                            key={product.cuid}
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
                                                src={
                                                    product.logoUrl ||
                                                    ICONS.BLANK_IMAGE
                                                }
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
                                                    {product.tagline}
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
                                            {product._count.ProductFeedback}
                                        </div>
                                        <div className="text-xs text-gray-500 font-medium">
                                            votes
                                        </div>

                                        {/* Quick Link */}
                                        <Link
                                            href={product.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 ${
                                                isTopThree
                                                    ? 'bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg transform hover:scale-105'
                                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                            }`}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>

                                        {/* Progress bar for top 3 */}
                                        {isTopThree && (
                                            <div className="w-16 h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                                                <div
                                                    className={`h-full ${getRankColors(
                                                        rank
                                                    )} transition-all duration-1000 delay-500`}
                                                    style={{
                                                        width: `${
                                                            (product._count
                                                                .ProductFeedback /
                                                                leaders[0]
                                                                    ._count
                                                                    .ProductFeedback) *
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
        </div>
    );
};

export default Leaderboard;
