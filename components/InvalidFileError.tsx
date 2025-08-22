import React from 'react';
import { CircleAlert } from 'lucide-react';
import {
    DROPZONE,
    MAX_FILE_SIZE_MB,
    MAX_MULTIPLE_FILES,
} from '@/app/constants/constants';

export default function InvalidFileError({ fileErrors }: any) {
    const errCode = fileErrors[0]?.errors[0]?.code;
    // console.log({ errCode });
    let erroMsg = 'Please select valid file type';
    if (errCode === DROPZONE.ERROR_CODE.MAX_FILES) {
        erroMsg = `You can upload a maximum of ${MAX_MULTIPLE_FILES} files`;
    }
    if (errCode === DROPZONE.ERROR_CODE.MAX_SIZE) {
        erroMsg = `You can upload a maximum of ${MAX_FILE_SIZE_MB}MB file`;
    }
    return (
        <div className="text-red-800 flex">
            <CircleAlert className="mt-0.5" size={20} />
            <span className="ml-1">{erroMsg}</span>
        </div>
    );
}
