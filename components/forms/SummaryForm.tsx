'use client';

import type { Resume } from '@/types/resume';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(
    () =>
        import('@/components/RichTextEditor').then((mod) => mod.RichTextEditor),
    { ssr: false }
);

interface SummaryFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function SummaryForm({ resume, setResume }: SummaryFormProps) {
    return (
        <RichTextEditor
            value={resume.summary}
            onChange={(html) => setResume({ ...resume, summary: html })}
        />
    );
}
