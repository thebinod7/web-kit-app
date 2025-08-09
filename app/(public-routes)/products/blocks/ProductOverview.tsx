import GallerySlider from '@/components/GallerySlider';

interface ProductOverviewProps {
    description: string;
    images: string[];
}

export default function ProductOverview({
    description,
    images = [],
}: ProductOverviewProps) {
    return (
        <>
            {images.length > 0 && (
                <div className="h-[300px] mb-10">
                    <GallerySlider data={images} />
                </div>
            )}
            <p className="text-gray-700 text-justify leading-relaxed">
                {description || 'No description available!'}
            </p>
        </>
    );
}
