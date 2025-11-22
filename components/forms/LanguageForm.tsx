'use client';

import { Plus, Trash2 } from 'lucide-react';
import type { Resume, LanguageEntry } from '@/types/resume';

interface LanguageFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function LanguageForm({ resume, setResume }: LanguageFormProps) {
    const addLanguage = () => {
        const newLanguage: LanguageEntry = {
            id: Date.now().toString(),
            language: '',
            level: '',
        };
        setResume({
            ...resume,
            languages: [...resume.languages, newLanguage],
        });
    };

    const updateLanguage = (
        id: string,
        field: keyof LanguageEntry,
        value: string
    ) => {
        setResume({
            ...resume,
            languages: resume.languages.map((lang: any) =>
                lang.id === id ? { ...lang, [field]: value } : lang
            ),
        });
    };

    const removeLanguage = (id: string) => {
        setResume({
            ...resume,
            languages: resume.languages.filter((lang: any) => lang.id !== id),
        });
    };

    return (
        <div className="space-y-4">
            {resume.languages.map((lang: any, index: number) => (
                <div
                    key={lang.id}
                    className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3"
                >
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-slate-900">
                            Language {index + 1}
                        </h3>
                        <button
                            onClick={() => removeLanguage(lang.id)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        <label className="block text-sm font-bold text-gray-800">
                            Language
                        </label>
                        <input
                            type="text"
                            placeholder="Eg: English, Spanish, French"
                            value={lang.language}
                            onChange={(e) =>
                                updateLanguage(
                                    lang.id,
                                    'language',
                                    e.target.value
                                )
                            }
                            className={`w-full
                                px-4 py-2
                                rounded-lg
                                bg-gray-100
                                border border-gray-200
                                text-gray-800
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-primary/30
                                disabled:bg-gray-50
                                disabled:text-muted-foreground
                                disabled:cursor-not-allowed
                                disabled:border-gray-100
                                hover:border-gray-300`}
                        />

                        <label className="block text-sm font-bold text-gray-800">
                            Level
                        </label>
                        <input
                            type="text"
                            placeholder="Eg: Beginner, Intermediate, Professional, Native"
                            value={lang.level}
                            onChange={(e) =>
                                updateLanguage(lang.id, 'level', e.target.value)
                            }
                            className={`w-full
                                px-4 py-2
                                rounded-lg
                                bg-gray-100
                                border border-gray-200
                                text-gray-800
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
                </div>
            ))}

            <button
                onClick={addLanguage}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-dashed border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            >
                <Plus size={18} />
                Add Language
            </button>
        </div>
    );
}
