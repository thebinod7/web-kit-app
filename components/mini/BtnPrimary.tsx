import React from 'react';

interface BtnPrimaryProps {
    handleClick: () => void;
    text?: string;
    processing?: boolean;
    variant?: string;
}

export default function BtnPrimary({
    handleClick,
    text = 'Submit',
    processing = false,
    variant = 'primary',
}: BtnPrimaryProps) {
    // write conditional button based on variant

    return (
        <>
            {variant === 'primary' && (
                <button
                    disabled={processing}
                    type="button"
                    onClick={handleClick}
                    className={`px-6 cursor-pointer py-2.5 rounded-lg font-semibold transition-all bg-orange-400 text-white hover:bg-orange-500`}
                >
                    {processing ? 'Please wait...' : text}
                </button>
            )}
            {variant === 'secondary' && (
                <button
                    disabled={processing}
                    type="button"
                    onClick={handleClick}
                    className={`px-6 cursor-pointer py-2.5 rounded-lg font-semibold transition-all bg-gray-900 text-white hover:bg-gray-800`}
                >
                    {processing ? 'Please wait...' : text}
                </button>
            )}
        </>
    );
}
