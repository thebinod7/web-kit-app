'use client';

import { Plus, Trash2 } from 'lucide-react';
import type { Resume, ProjectEntry } from '@/types/resume';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(
    () =>
        import('@/components/RichTextEditor').then((mod) => mod.RichTextEditor),
    { ssr: false }
);

interface ProjectsFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function ProjectsForm({ resume, setResume }: ProjectsFormProps) {
    const addProject = () => {
        const newProject: ProjectEntry = {
            id: Date.now().toString(),
            title: '',
            subtitle: '',
            description: '',
            link: '',
        };
        setResume({
            ...resume,
            projects: [...resume.projects, newProject],
        });
    };

    const updateProject = (
        id: string,
        field: keyof ProjectEntry,
        value: string
    ) => {
        setResume({
            ...resume,
            projects: resume.projects.map((proj: any) =>
                proj.id === id ? { ...proj, [field]: value } : proj
            ),
        });
    };

    const removeProject = (id: string) => {
        setResume({
            ...resume,
            projects: resume.projects.filter((proj: any) => proj.id !== id),
        });
    };

    return (
        <div className="space-y-4">
            {resume.projects.map((project: any, index: number) => (
                <div
                    key={project.id}
                    className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3"
                >
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-slate-900">
                            Project {index + 1}
                        </h3>
                        <button
                            onClick={() => removeProject(project.id)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <label className="block text-sm font-bold text-gray-800">
                        Project Title
                    </label>

                    <input
                        type="text"
                        placeholder="Project Title"
                        value={project.title}
                        onChange={(e) =>
                            updateProject(project.id, 'title', e.target.value)
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
                        Short Description
                    </label>
                    <textarea
                        placeholder="Describe project in one sentence"
                        value={project.subtitle}
                        onChange={(e) =>
                            updateProject(
                                project.id,
                                'subtitle',
                                e.target.value
                            )
                        }
                        rows={2}
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
                        Description
                    </label>

                    <RichTextEditor
                        value={project.description}
                        onChange={(html) =>
                            updateProject(project.id, 'description', html)
                        }
                    />

                    <label className="block text-sm font-bold text-gray-800">
                        Project Link
                    </label>
                    <input
                        type="url"
                        placeholder="Project Link (GitHub, Demo, etc.)"
                        value={project.link}
                        onChange={(e) =>
                            updateProject(project.id, 'link', e.target.value)
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
            ))}

            <button
                onClick={addProject}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-dashed border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            >
                <Plus size={18} />
                Add Project
            </button>
        </div>
    );
}
