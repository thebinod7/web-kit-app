import React from 'react';

interface BtnPrimaryProps {
    handleClick: () => void;
    text?: string;
    processing?: boolean;
}

export default function BtnPrimary({
    handleClick,
    text = 'Submit',
    processing = false,
}: BtnPrimaryProps) {
    return (
        <button
            disabled={processing}
            type="button"
            onClick={handleClick}
            className={`px-6 cursor-pointer py-2.5 rounded-lg font-semibold transition-all bg-orange-400 text-white hover:bg-orange-500`}
        >
            {processing ? 'Please wait...' : text}
        </button>
    );
}
