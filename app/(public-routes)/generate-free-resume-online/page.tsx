'use client';

import { useState } from 'react';
import { Plus, Trash2, Eye, EyeOff, Download } from 'lucide-react';
import type { Resume } from '@/types/resume';
import { downloadResume } from '@/utils/download';
import { ResumePreview } from '@/components/ResumePreview';
import { ResumeForm } from '@/components/ResumeFormt';

//  personalInfo: {
//         name: 'John Doe',
//         title: 'Software Engineer',
//         email: 'john@mail.com',
//         phone: '+90989899',
//         location: 'Sydney, Australia',
//         dateOfBirth: '20/10/1990',
//         website: 'https://johndoe.com',
//         linkedin: 'https://linkedin.com/johndoe',
//     },

const defaultResume: Resume = {
    personalInfo: {
        name: '',
        title: '',
        email: '',
        phone: '',
        location: '',
        dateOfBirth: '',
        website: '',
        linkedin: '',
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    publications: [],
};

export default function Home() {
    const [resume, setResume] = useState<Resume>(defaultResume);
    const [showPreview, setShowPreview] = useState(true);

    const handleDownload = () => {
        downloadResume(resume);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">
                            Resume Builder
                        </h1>
                        <p className="text-sm text-slate-500">
                            Create a professional resume in minutes
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setShowPreview(!showPreview)}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            {showPreview ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                            {showPreview ? 'Hide' : 'Show'} Preview
                        </button>
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            <Download size={18} />
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Form Section */}
                    <div className="order-2 lg:order-1">
                        <ResumeForm resume={resume} setResume={setResume} />
                    </div>

                    {/* Preview Section */}
                    {showPreview && (
                        <div className="order-1 lg:order-2">
                            <div className="sticky top-24 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
                                <ResumePreview resume={resume} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
