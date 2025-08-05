import { extractFileNameAfterLastHyphen } from '@/utils/utils';
import { CircleX } from 'lucide-react';

interface ImgUrlPreviewProps {
    url: string;
    handleClearPreview: () => void;
}

export default function ImgUrlPreview({
    url,
    handleClearPreview,
}: ImgUrlPreviewProps) {
    return (
        <div className="flex relative items-center justify-start m-2">
            <div>
                <CircleX
                    strokeWidth={2.5}
                    onClick={handleClearPreview}
                    color="#C70039"
                    className="cursor-pointer absolute top-1 left-24"
                    size={16}
                />

                <>
                    <img
                        className="border-2 p-1 w-28 h-28 rounded-lg"
                        src={url || ''}
                    />
                    <p>{extractFileNameAfterLastHyphen(url)}</p>
                </>
            </div>
        </div>
    );
}
