import Image from 'next/image';

interface ProductSidebarProps {
    publisherLogo: string;
    publisherName: string;
    launchDate: string;
    category: string;
    pricing: string;
    socials: { icon: React.ElementType; url: string }[];
    forSale: string;
    tags: string[];
}

export default function ProductDetailsSidebar({
    publisherLogo,
    publisherName,
    launchDate,
    category,
    pricing,
    socials,
    forSale,
    tags,
}: ProductSidebarProps) {
    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Publisher
                </h3>
                <div className="flex items-center gap-2">
                    <Image
                        src={publisherLogo || '/placeholder.svg'}
                        alt={`${publisherName} logo`}
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span className="text-gray-800 font-semibold">
                        {publisherName}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div className="text-gray-500">Launch Date</div>
                <div className="text-gray-800 font-medium">{launchDate}</div>

                <div className="text-gray-500">Category</div>
                <div className="text-gray-800 font-medium">{category}</div>

                <div className="text-gray-500">Pricing</div>
                <div className="font-medium text-green-600">{pricing}</div>
            </div>

            <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
