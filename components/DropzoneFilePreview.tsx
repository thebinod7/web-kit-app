'use client';

import Image from 'next/image';
import { XCircle, FileIcon } from 'lucide-react';

interface FilePreviewProps {
    fileUrl: string;
    fileName?: string;
    fileSize?: number; // in bytes
    onRemove?: () => void;
}

export default function DropzoneFilePreview({
    fileUrl,
    fileName,
    fileSize,
    onRemove,
}: FilePreviewProps) {
    console.log({ fileUrl });
    const isImage = /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(fileName || 'File');
    const formattedFileSize = fileSize
        ? (fileSize / 1024).toFixed(2) + ' KB'
        : '';

    return (
        <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center gap-3">
                {isImage ? (
                    <Image
                        src={fileUrl || '/placeholder.svg'}
                        alt={`Preview of ${fileName}`}
                        width={64}
                        height={64}
                        className="rounded-md object-contain border border-gray-200 dark:border-gray-700"
                    />
                ) : (
                    <div className="flex items-center justify-center w-16 h-16 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                        <FileIcon className="h-8 w-8" />
                    </div>
                )}
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {fileName}
                    </span>
                    {fileSize && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            {formattedFileSize}
                        </span>
                    )}
                </div>
            </div>
            {onRemove && (
                <button
                    type="button"
                    onClick={onRemove}
                    aria-label={`Remove file ${fileName}`}
                    className="p-1 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    <XCircle className="h-5 w-5 text-red-500" />
                </button>
            )}
        </div>
    );
}
