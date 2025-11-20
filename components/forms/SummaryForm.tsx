'use client';

import type { Resume } from '@/types/resume';

interface SummaryFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function SummaryForm({ resume, setResume }: SummaryFormProps) {
    return (
        <textarea
            placeholder="Write a professional summary about yourself..."
            value={resume.summary}
            onChange={(e) => setResume({ ...resume, summary: e.target.value })}
            rows={5}
            className={`w-full
                                px-4 py-2
                                rounded-lg
                                bg-gray-100
                                border border-gray-200
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-primary/30
                                disabled:bg-gray-50
                                disabled:text-muted-foreground
                                disabled:cursor-not-allowed
                                disabled:border-gray-100
                                hover:border-gray-300
                                text-gray-800`}
        />
    );
}
