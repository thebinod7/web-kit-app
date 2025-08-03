import React from 'react';

interface SidPanelProps {
    handleUpdateClick: any;
}

export default function SidePanelProps({ handleUpdateClick }: SidPanelProps) {
    return (
        <div className="rounded-lg bg-white p-6 shadow-sm md:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900">
                Launch Scheduled{' '}
                <span role="img" aria-label="party popper">
                    🎉
                </span>
            </h2>
            <p className="mt-2 text-sm text-gray-500">
                Your product is scheduled to launch on November 27, 2025.
                However, you can skip the waiting line and choose a date of your
                choice.
            </p>
            <button
                type="button"
                onClick={handleUpdateClick}
                className="mt-6 cursor-pointer w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
                Update Details
            </button>
            <button className="mt-3 cursor-pointer w-full rounded-md border border-red-300 px-4 py-2 text-sm font-medium text-red-600 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                Cancel
            </button>
        </div>
    );
}
