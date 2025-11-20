'use client';

import { Plus, Trash2 } from 'lucide-react';
import type { Resume, ExperienceEntry } from '@/types/resume';

interface ExperienceFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function ExperienceForm({ resume, setResume }: ExperienceFormProps) {
    const addExperience = () => {
        const newExperience: ExperienceEntry = {
            id: Date.now().toString(),
            position: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            currentlyWorking: false,
            description: '',
        };
        setResume({
            ...resume,
            experience: [...resume.experience, newExperience],
        });
    };

    const updateExperience = (
        id: string,
        field: keyof ExperienceEntry,
        value: any
    ) => {
        setResume({
            ...resume,
            experience: resume.experience.map((exp: any) =>
                exp.id === id ? { ...exp, [field]: value } : exp
            ),
        });
    };

    const removeExperience = (id: string) => {
        setResume({
            ...resume,
            experience: resume.experience.filter((exp: any) => exp.id !== id),
        });
    };

    return (
        <div className="space-y-4">
            {resume.experience.map((exp: any, index: number) => (
                <div
                    key={exp.id}
                    className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3"
                >
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-slate-900">
                            Experience {index + 1}
                        </h3>
                        <button
                            onClick={() => removeExperience(exp.id)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        <label className="block text-sm font-bold text-foreground">
                            Job Title
                        </label>
                        <input
                            type="text"
                            placeholder="Job Title"
                            value={exp.position}
                            onChange={(e) =>
                                updateExperience(
                                    exp.id,
                                    'position',
                                    e.target.value
                                )
                            }
                            className={`w-full
                                px-4 py-2
                                rounded-lg
                                bg-gray-100
                                border border-gray-200
                                text-foreground
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-primary/30
                                disabled:bg-gray-50
                                disabled:text-muted-foreground
                                disabled:cursor-not-allowed
                                disabled:border-gray-100
                                hover:border-gray-300`}
                        />

                        <label className="block text-sm font-bold text-foreground">
                            Employer
                        </label>
                        <input
                            type="text"
                            placeholder="Employer"
                            value={exp.company}
                            onChange={(e) =>
                                updateExperience(
                                    exp.id,
                                    'company',
                                    e.target.value
                                )
                            }
                            className={`w-full
                                px-4 py-2
                                rounded-lg
                                bg-gray-100
                                border border-gray-200
                                text-foreground
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-primary/30
                                disabled:bg-gray-50
                                disabled:text-muted-foreground
                                disabled:cursor-not-allowed
                                disabled:border-gray-100
                                hover:border-gray-300`}
                        />
                    </div>

                    <label className="block text-sm font-bold text-foreground">
                        Location
                    </label>
                    <input
                        type="text"
                        placeholder="Location"
                        value={exp.location}
                        onChange={(e) =>
                            updateExperience(exp.id, 'location', e.target.value)
                        }
                        className={`w-full
                                px-4 py-2
                                rounded-lg
                                bg-gray-100
                                border border-gray-200
                                text-foreground
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-primary/30
                                disabled:bg-gray-50
                                disabled:text-muted-foreground
                                disabled:cursor-not-allowed
                                disabled:border-gray-100
                                hover:border-gray-300`}
                    />

                    <label className="block text-sm font-bold text-foreground">
                        Start & End Date
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="month"
                            placeholder="Start Date"
                            value={exp.startDate}
                            onChange={(e) =>
                                updateExperience(
                                    exp.id,
                                    'startDate',
                                    e.target.value
                                )
                            }
                            className={`w-full
                                px-4 py-2
                                rounded-lg
                                bg-gray-100
                                border border-gray-200
                                text-foreground
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-primary/30
                                disabled:bg-gray-50
                                disabled:text-muted-foreground
                                disabled:cursor-not-allowed
                                disabled:border-gray-100
                                hover:border-gray-300`}
                        />
                        <div className="flex items-center gap-2">
                            <input
                                type="month"
                                placeholder="End Date"
                                value={exp.endDate}
                                onChange={(e) =>
                                    updateExperience(
                                        exp.id,
                                        'endDate',
                                        e.target.value
                                    )
                                }
                                disabled={exp.currentlyWorking}
                                className={`w-full
                                px-4 py-2
                                rounded-lg
                                bg-gray-100
                                border border-gray-200
                                text-foreground
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-primary/30
                                disabled:bg-gray-50
                                disabled:text-muted-foreground
                                disabled:cursor-not-allowed
                                disabled:border-gray-100
                                hover:border-gray-300`}
                            />
                            {/* <label className="flex items-center gap-2 text-sm text-slate-700">
                                <input
                                    type="checkbox"
                                    checked={exp.currentlyWorking}
                                    onChange={(e) =>
                                        updateExperience(
                                            exp.id,
                                            'currentlyWorking',
                                            e.target.checked
                                        )
                                    }
                                />
                                Current
                            </label> */}
                        </div>
                    </div>

                    <label className="block text-sm font-bold text-foreground">
                        Description
                    </label>
                    <textarea
                        placeholder="Description (achievements, responsibilities...)"
                        value={exp.description}
                        onChange={(e) =>
                            updateExperience(
                                exp.id,
                                'description',
                                e.target.value
                            )
                        }
                        rows={3}
                        className={`w-full
                                px-4 py-2
                                rounded-lg
                                bg-gray-100
                                border border-gray-200
                                text-foreground
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-primary/30
                                disabled:bg-gray-50
                                disabled:text-muted-foreground
                                disabled:cursor-not-allowed
                                disabled:border-gray-100
                                hover:border-gray-300`}
                    />
                </div>
            ))}

            <button
                onClick={addExperience}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-dashed border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            >
                <Plus size={18} />
                Add Experience
            </button>
        </div>
    );
}
