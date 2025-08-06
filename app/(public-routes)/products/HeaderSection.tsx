import { Zap } from 'lucide-react';

export default function HeaderSection() {
    return (
        <div className="flex items-center gap-2 mb-10">
            {' '}
            {/* Increased mb */}
            <Zap className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
                A launch platform for your products.
            </h1>
        </div>
    );
}
