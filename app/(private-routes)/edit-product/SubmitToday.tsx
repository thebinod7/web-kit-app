import { ArrowUpRight, MonitorPlay } from 'lucide-react';
import React from 'react';

export default function SubmitToday() {
    return (
        <div className="mb-6 flex flex-col items-start justify-between rounded-lg bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div className="flex items-center gap-4">
                <MonitorPlay className="h-8 w-8 text-gray-600" />
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        Submit your product today!
                    </h2>
                    <p className="text-sm text-gray-500">
                        Let the world know about your product and increase its
                        visibility.
                    </p>
                </div>
            </div>
            <button className="mt-4 flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 md:mt-0">
                Submit Now
                <ArrowUpRight className="h-4 w-4" />
            </button>
        </div>
    );
}
