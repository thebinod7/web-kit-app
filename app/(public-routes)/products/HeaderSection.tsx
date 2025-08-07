import { Zap } from 'lucide-react';

export default function HeaderSection() {
    return (
        <div className="flex items-center gap-2 mb-10">
            <Zap className="h-6 w-6 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-900">
                Find tools that make life easier.
            </h1>
        </div>
    );
}
