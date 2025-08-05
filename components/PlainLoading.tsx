import { Loader2 } from 'lucide-react';
import React from 'react';

export default function PlainLoading({ message }: { message?: string }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="flex flex-col items-center space-y-4">
                <Loader2 className="h-12 w-12 animate-spin text-gray-500" />
                <p className="text-lg text-gray-700">
                    {message || 'Loading...'}
                </p>
            </div>
        </div>
    );
}
