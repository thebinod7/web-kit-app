import { Clock, Users, Zap } from 'lucide-react';
import React from 'react';

export default function FomoAlertBox() {
    return (
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 text-gray-800 p-6 rounded-xl flex items-start space-x-4 mb-10 shadow-lg">
            <div className="flex-shrink-0">
                <div className="relative">
                    <Zap className="h-8 w-8 text-purple-600 animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-bold text-xl text-purple-800">
                        Early Access - Limited Time Only!
                    </h3>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                        FREE
                    </span>
                </div>
                <div className="space-y-3">
                    <p className="text-base font-medium text-gray-700">
                        You're among the first to experience our platform!
                        Submit your app now and get:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                            <Zap className="h-4 w-4 text-yellow-500" />
                            <span className="font-semibold">
                                Same Day Publish
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                            <Users className="h-4 w-4 text-green-500" />
                            <span className="font-semibold">
                                Priority Support
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                            <Clock className="h-4 w-4 text-blue-500" />
                            <span className="font-semibold">
                                No Waiting List
                            </span>
                        </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                        <p className="text-sm text-yellow-800 font-medium">
                            ⚠️ <strong>Coming Soon:</strong> Paid submissions
                            ($10) + to skip waiting list
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
