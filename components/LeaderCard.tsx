import { ICONS } from '@/app/constants/images';
import { Award, ChevronUp, Medal, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface ILeaderboardItem {
    rank: number;
    name: string;
    tagline: string;
    category: string;
    upvotes: number;
    logoUrl: string;
}

function getRankIcon(rank: number) {
    if (rank === 1)
        return (
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-orange-300">
                <Medal className="w-6 h-6 text-white" />
            </div>
        );
    if (rank === 2)
        return (
            <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                <Award className="w-6 h-6 text-white" />
            </div>
        );
    if (rank === 3)
        return (
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-orange-300">
                <Star className="w-6 h-6 text-white" />
            </div>
        );
    return (
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">{rank}</span>
        </div>
    );
}

export default function LeaderCard({
    name,
    tagline,
    category,
    rank,
    logoUrl,
    upvotes,
}: ILeaderboardItem) {
    return (
        <div className="bg-white mb-6 rounded-xl shadow-sm border-b border-gray-300 p-4 md:p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-center gap-3 md:gap-6">
                {/* Rank */}
                <div className="flex-shrink-0">{getRankIcon(rank)}</div>

                {/* Logo */}
                <div className="flex-shrink-0  xs:block">
                    <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-lg md:text-2xl ${
                            rank <= 3 ? 'shadow-lg ring-2 ring-yellow-200' : ''
                        }`}
                    >
                        <Image
                            src={logoUrl || ICONS.BLANK_IMAGE}
                            alt={name}
                            width={48}
                            height={48}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover flex-shrink-0"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <h3
                        className={`text-lg md:text-xl font-semibold mb-1 ${
                            rank <= 3 ? 'text-gray-900' : 'text-gray-900'
                        }`}
                    >
                        {name}
                        {rank === 1 && (
                            <span className="ml-2 text-yellow-500">👑</span>
                        )}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-3 leading-relaxed line-clamp-2">
                        {tagline}
                    </p>
                    <span className="inline-block text-orange-400 px-2 md:px-3 py-1 text-xs md:text-sm font-medium rounded-full">
                        {category || 'Uncategorized'}
                    </span>
                </div>

                {/* Votes */}
                <div className="flex-shrink-0 text-right">
                    <div className="flex items-center  gap-1 md:gap-2 text-gray-400 mb-1 md:mb-2">
                        <ChevronUp
                            className={`w-4 h-4 md:w-5 md:h-5 ${
                                rank <= 3 ? 'text-orange-500' : 'text-gray-600'
                            }`}
                        />
                    </div>
                    <div
                        className={`text-xl md:text-2xl font-bold ${
                            rank <= 3 ? 'text-orange-600' : 'text-gray-600'
                        }`}
                    >
                        {upvotes}
                    </div>
                </div>
            </div>
        </div>
    );
}
