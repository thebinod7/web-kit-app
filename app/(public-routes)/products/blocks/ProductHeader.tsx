import { ICONS } from '@/app/constants/images';
import FiveStarRating from '@/components/mini/FiveStarRating';
import Image from 'next/image';

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
                    <FiveStarRating rating={rating} />
                </h2>
                <p className="text-gray-600 mt-1">{tagline}</p>
            </div>
        </div>
    );
}
