'use client';

import { Plus, Trash2 } from 'lucide-react';
import type { Resume, Skill } from '@/types/resume';

interface SkillsFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function SkillsForm({ resume, setResume }: SkillsFormProps) {
    const addSkill = () => {
        const newSkill: Skill = {
            id: Date.now().toString(),
            name: '',
        };
        setResume({
            ...resume,
            skills: [...resume.skills, newSkill],
        });
    };

    const updateSkill = (id: string, name: string) => {
        setResume({
            ...resume,
            skills: resume.skills.map((skill: any) =>
                skill.id === id ? { ...skill, name } : skill
            ),
        });
    };

    const removeSkill = (id: string) => {
        setResume({
            ...resume,
            skills: resume.skills.filter((skill: any) => skill.id !== id),
        });
    };

    return (
        <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill: any) => (
                    <div
                        key={skill.id}
                        className="flex items-center text-gray-800 gap-2 px-3 py-1 bg-slate-100 border border-slate-300 rounded-full text-sm"
                    >
                        <input
                            type="text"
                            placeholder="Skill name"
                            value={skill.name}
                            onChange={(e) =>
                                updateSkill(skill.id, e.target.value)
                            }
                            className="bg-transparent border-none outline-none w-24"
                        />
                        <button
                            onClick={() => removeSkill(skill.id)}
                            className="text-red-600 hover:text-red-700"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
            </div>

            <button
                onClick={addSkill}
                className="flex items-center justify-center gap-2 px-4 py-2 border border-dashed border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm w-full"
            >
                <Plus size={16} />
                Add Skill
            </button>
        </div>
    );
}
