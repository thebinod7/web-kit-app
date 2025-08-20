import React from 'react';

export default function HeaderH2({ text }: { text: string }) {
    return (
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212B36]">
            {text || 'Your Header'}
        </h2>
    );
}
