import Image from 'next/image';
import { Star } from 'lucide-react';

interface ProductHeaderProps {
    logo: string;
    name: string;
    rating: number;
    shortDescription: string;
    upvotedByAvatars: string[];
}

export default function ProductHeader({
    logo,
    name,
    rating,
    shortDescription,
    upvotedByAvatars,
}: ProductHeaderProps) {
    return (
        <div className="flex items-start gap-4">
            <Image
                src={logo || '/placeholder.svg'}
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
                <p className="text-gray-600 mt-1">{shortDescription}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                    Upvoted by
                    <div className="flex -space-x-2 ml-2">
                        {upvotedByAvatars.map((avatar, i) => (
                            <Image
                                key={i}
                                src={avatar || '/placeholder.svg'}
                                alt={`Upvoter ${i + 1}`}
                                width={24}
                                height={24}
                                className="rounded-full border-2 border-white"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
