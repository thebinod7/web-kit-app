import { DROPZONE } from '@/app/constants/constants';
import { UploadCloud, UploadIcon, XCircle } from 'lucide-react';
import { Accept, useDropzone } from 'react-dropzone';
import InvalidFileError from './InvalidFileError';
import Spinner from './Spinner';
import Image from 'next/image';

interface DropzoneUploadProps {
    onFileUplad: (files: any, rejections: any) => void;
    clearPreview: () => void;
    label?: string;
    maxFiles?: number;
    uploadError?: any;
    previewUrl?: string;
    isUploadig?: boolean;
}

export default function DropzoneUpload({
    onFileUplad,
    label,
    maxFiles,
    uploadError,
    isUploadig = false,
    previewUrl,
    clearPreview,
}: DropzoneUploadProps) {
    console.log({ previewUrl });
    const acceptedFiles: Accept = { 'image/*': [] };
    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: maxFiles || 1,
        maxSize: DROPZONE.MAX_UPLOAD_SIZE,
        accept: acceptedFiles,
        onDrop: onFileUplad,
    });
    return (
        <>
            {previewUrl ? (
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 group">
                    <Image
                        src={previewUrl || '/placeholder.svg'}
                        alt={`Preview for ${label}`}
                        layout="fill"
                        objectFit="contain"
                        className="p-2"
                    />
                    <button
                        type="button"
                        onClick={() => clearPreview()}
                        aria-label={`Remove ${label}`}
                        className="absolute cursor-pointer top-2 right-2 p-1 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <XCircle className="h-5 w-5" />
                    </button>
                </div>
            ) : (
                <div
                    className="border-2 border-dashed mt-1 rounded-lg p-5 hover:border-blue-200 transition-colors duration-200 ease-in-out"
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    <div className="flex items-center flex-col">
                        {isUploadig ? (
                            <Spinner clsPadding="p-2" text="Uploading..." />
                        ) : (
                            <div className="cursor-pointer">
                                <UploadCloud className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    {label}
                                </p>
                            </div>
                        )}

                        {uploadError?.length > 0 && (
                            <InvalidFileError fileErrors={uploadError} />
                        )}
                        {/* {previewUrl && <UploadPreview file={previewUrl} />} */}
                    </div>
                </div>
            )}
        </>
    );
}
