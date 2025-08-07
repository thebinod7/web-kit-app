import Image from 'next/image';
import { Star } from 'lucide-react';
import { ICONS } from '@/app/constants/images';

interface ProductHeaderProps {
    logo: string;
    name: string;
    rating: number;
    tagline: string;
}

export default function ProductHeader({
    logo,
    name,
    rating,
    tagline,
}: ProductHeaderProps) {
    return (
        <div className="flex items-start gap-4">
            <Image
                src={logo || ICONS.BLANK_IMAGE}
                alt={`${name} logo`}
                width={64}
                height={64}
                className="rounded-xl border border-gray-200 p-2"
            />
            <div>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    {name}
                    <div className="flex">
                        {Array.from({ length: rating }).map((_, i) => (
                            <Star
                                key={i}
                                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>
                </h2>
                <p className="text-gray-600 mt-1">{tagline}</p>
            </div>
        </div>
    );
}
