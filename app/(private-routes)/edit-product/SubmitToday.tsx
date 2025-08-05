import { Monitor, MonitorPlay, PlusCircleIcon, TvMinimal } from 'lucide-react';
import Link from 'next/link';

interface SubmitTodayProps {
    heading?: string;
    message?: string;
    iconName?: string;
}

export default function SubmitToday({
    heading,
    message,
    iconName,
}: SubmitTodayProps) {
    return (
        <div className="mb-6 flex flex-col items-start justify-between rounded-lg bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div className="flex items-center gap-4">
                {!iconName && <MonitorPlay className="h-8 w-8" />}
                {iconName === 'tv-minimal' && <TvMinimal className="h-8 w-8" />}
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        {heading || 'Submit Your Product'}
                    </h2>
                    <p className="text-sm text-gray-500">
                        {message ||
                            'Let the world know about your product and increase its visibility.'}
                    </p>
                </div>
            </div>
            <Link
                href={'/submit-product'}
                className="mt-4 cursor-pointer flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 md:mt-0"
            >
                Submit New Product
                <PlusCircleIcon className="h-4 w-4" />
            </Link>
        </div>
    );
}
