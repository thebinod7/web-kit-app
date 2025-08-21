'use client';
import React, { useState, useEffect } from 'react';
import { Eye, Users, Calendar } from 'lucide-react';

const WeeklyStats = () => {
    const [stats, setStats] = useState({
        pageViews: 0,
        visitors: 0,
        loading: true,
    });

    const formatNumber = (num: number) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toLocaleString();
    };

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/analytics');
                const r = await res.json();
                const currentWeekStats = {
                    pageViews: r.pageViews,
                    visitors: r.visitors,
                    loading: false,
                };

                setStats(currentWeekStats);
            } catch (error) {
                console.error('Failed to fetch stats:', error);
                setStats((prev) => ({ ...prev, loading: false }));
            }
        };

        fetchStats();
    }, []);

    const StatCard = ({
        icon: Icon,
        title,
        value,
        loading,
    }: {
        icon: React.ElementType;
        title: string;
        value: number;
        loading: boolean;
    }) => (
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <div className="p-1.5 bg-gray-100 rounded-md">
                        <Icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                        {title}
                    </span>
                </div>
            </div>

            {loading ? (
                <div className="space-y-2">
                    <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-100 rounded animate-pulse w-16"></div>
                </div>
            ) : (
                <div className="text-2xl font-bold text-gray-900 mb-1">
                    {formatNumber(value)}
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full space-y-3">
            <div className="flex items-center space-x-2 px-1">
                <Calendar className="w-4 h-4 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                    Weekly Stats{' '}
                    <span className="text-xs text-gray-500 px-1">
                        Last 7 days
                    </span>
                </h3>
            </div>

            <div className="space-y-3">
                <StatCard
                    icon={Eye}
                    title="Page Views"
                    value={stats.pageViews}
                    loading={stats.loading}
                />

                <StatCard
                    icon={Users}
                    title="Visitors"
                    value={stats.visitors}
                    loading={stats.loading}
                />
            </div>
        </div>
    );
};

export default WeeklyStats;
