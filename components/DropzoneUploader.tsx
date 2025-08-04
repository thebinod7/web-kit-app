import { UploadCloud, UploadIcon } from 'lucide-react';
import { Accept, useDropzone } from 'react-dropzone';
import { DROPZONE } from '@/app/constants/constants';
import Spinner from './Spinner';
import DropzoneFilePreview from './DropzoneFilePreview';

interface DropzoneUploadProps {
    onFileUplad: (files: any, rejections: any) => void;
    label?: string;
    maxFiles?: number;
    uploadError?: any;
    previewFile?: any;
    isUploadig?: boolean;
    requiredDocs?: string[];
    acceptPdf?: boolean;
}

export default function DropzoneUpload({
    onFileUplad,
    label,
    maxFiles,
    uploadError,
    previewFile,
    isUploadig = false,
    requiredDocs,
    acceptPdf,
}: DropzoneUploadProps) {
    const acceptedFiles: Accept = acceptPdf
        ? { 'application/pdf': [], 'image/*': [] }
        : { 'image/*': [] };
    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: maxFiles || 1,
        maxSize: DROPZONE.MAX_UPLOAD_SIZE,
        accept: acceptedFiles,
        onDrop: onFileUplad,
    });
    return (
        <div className="flex justify-center items-center  bg-gray-50 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Upload Product Logo
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Use a square format, at least 128x128px.
                    </p>
                </div>
                <div
                    className="border-2 border-dashed mt-1 rounded-lg p-5"
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    <div className="flex items-center flex-col">
                        {isUploadig ? (
                            <Spinner clsPadding="p-2" text="Uploading..." />
                        ) : (
                            <div className="cursor-pointer flex flex-col items-center">
                                <div className="text-center">
                                    <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                        Drag 'n' drop your file here, or click
                                        to select file.
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, WEBP up to 15MB
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* {uploadError?.length > 0 && (
                        <InvalidFileError fileErrors={uploadError} />
                    )}
                    {previewFile && <UploadPreview file={previewFile} />} */}
                        <DropzoneFilePreview
                            fileUrl={previewFile}
                            onRemove={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
