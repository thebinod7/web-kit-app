'use client';

import type { Resume } from '@/types/resume';
import { useState } from 'react';
import { CertificationsForm } from './forms/Certifications';
import { EducationForm } from './forms/EducationForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { PersonalInfoForm } from './forms/PersonalInfo';
import { ProjectsForm } from './forms/ProjectsForm';
import { PublicationsForm } from './forms/Publications';
import { SkillsForm } from './forms/SkillsForm';
import { SummaryForm } from './forms/SummaryForm';
import { LanguageForm } from './forms/LanguageForm';

interface ResumeFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function ResumeForm({ resume, setResume }: ResumeFormProps) {
    const [expandedSections, setExpandedSections] = useState<
        Record<string, boolean>
    >({
        personal: false,
        summary: false,
        experience: false,
        education: false,
        skills: false,
        projects: false,
        certifications: false,
        publications: false,
    });

    const toggleSection = (section: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const sections = [
        { id: 'personal', label: 'Personal Information', required: true },
        { id: 'summary', label: 'Professional Summary' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Work Experience' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'publications', label: 'Publications' },
        { id: 'languages', label: 'Languages' },
    ];

    return (
        <div className="space-y-4">
            {sections.map((section) => (
                <div
                    key={section.id}
                    className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                    <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-150 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-slate-900">
                                {section.label}
                            </span>
                            {section.required && (
                                <span className="text-xs font-medium text-red-600">
                                    *
                                </span>
                            )}
                        </div>
                        <svg
                            className={`w-5 h-5 text-slate-600 transition-transform ${
                                expandedSections[section.id] ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </button>

                    {expandedSections[section.id] && (
                        <div className="px-6 py-4 border-t border-slate-200">
                            {section.id === 'personal' && (
                                <PersonalInfoForm
                                    resume={resume}
                                    setResume={setResume}
                                />
                            )}
                            {section.id === 'summary' && (
                                <SummaryForm
                                    resume={resume}
                                    setResume={setResume}
                                />
                            )}
                            {section.id === 'skills' && (
                                <SkillsForm
                                    resume={resume}
                                    setResume={setResume}
                                />
                            )}
                            {section.id === 'experience' && (
                                <ExperienceForm
                                    resume={resume}
                                    setResume={setResume}
                                />
                            )}
                            {section.id === 'education' && (
                                <EducationForm
                                    resume={resume}
                                    setResume={setResume}
                                />
                            )}
                            {section.id === 'projects' && (
                                <ProjectsForm
                                    resume={resume}
                                    setResume={setResume}
                                />
                            )}
                            {section.id === 'certifications' && (
                                <CertificationsForm
                                    resume={resume}
                                    setResume={setResume}
                                />
                            )}
                            {section.id === 'publications' && (
                                <PublicationsForm
                                    resume={resume}
                                    setResume={setResume}
                                />
                            )}
                            {section.id === 'languages' && (
                                <LanguageForm
                                    resume={resume}
                                    setResume={setResume}
                                />
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
