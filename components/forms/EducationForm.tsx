'use client';

import { Plus, Trash2 } from 'lucide-react';
import type { Resume, EducationEntry } from '@/types/resume';

interface EducationFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function EducationForm({ resume, setResume }: EducationFormProps) {
    const addEducation = () => {
        const newEducation: EducationEntry = {
            id: Date.now().toString(),
            school: '',
            degree: '',
            field: '',
            graduationDate: '',
            details: '',
        };
        setResume({
            ...resume,
            education: [...resume.education, newEducation],
        });
    };

    const updateEducation = (
        id: string,
        field: keyof EducationEntry,
        value: string
    ) => {
        setResume({
            ...resume,
            education: resume.education.map((edu: any) =>
                edu.id === id ? { ...edu, [field]: value } : edu
            ),
        });
    };

    const removeEducation = (id: string) => {
        setResume({
            ...resume,
            education: resume.education.filter((edu: any) => edu.id !== id),
        });
    };

    return (
        <div className="space-y-4">
            {resume.education.map((edu: any, index: number) => (
                <div
                    key={edu.id}
                    className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3"
                >
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-slate-900">
                            Education {index + 1}
                        </h3>
                        <button
                            onClick={() => removeEducation(edu.id)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            placeholder="School/University *"
                            value={edu.school}
                            onChange={(e) =>
                                updateEducation(
                                    edu.id,
                                    'school',
                                    e.target.value
                                )
                            }
                        />
                        <input
                            type="text"
                            placeholder="Degree *"
                            value={edu.degree}
                            onChange={(e) =>
                                updateEducation(
                                    edu.id,
                                    'degree',
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            placeholder="Field of Study"
                            value={edu.field}
                            onChange={(e) =>
                                updateEducation(edu.id, 'field', e.target.value)
                            }
                        />
                        <input
                            type="date"
                            placeholder="Graduation Date"
                            value={edu.graduationDate}
                            onChange={(e) =>
                                updateEducation(
                                    edu.id,
                                    'graduationDate',
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <textarea
                        placeholder="Additional details (relevant courses, honors, etc.)"
                        value={edu.details}
                        onChange={(e) =>
                            updateEducation(edu.id, 'details', e.target.value)
                        }
                        rows={2}
                    />
                </div>
            ))}

            <button
                onClick={addEducation}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-dashed border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            >
                <Plus size={18} />
                Add Education
            </button>
        </div>
    );
}
