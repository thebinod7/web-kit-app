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
            className="w-full"
        />
    );
}
