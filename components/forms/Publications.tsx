'use client';

import { Plus, Trash2 } from 'lucide-react';
import type { Resume, PublicationEntry } from '@/types/resume';

interface PublicationsFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function PublicationsForm({ resume, setResume }: PublicationsFormProps) {
    const addPublication = () => {
        const newPub: PublicationEntry = {
            id: Date.now().toString(),
            title: '',
            publication: '',
            date: '',
            link: '',
        };
        setResume({
            ...resume,
            publications: [...resume.publications, newPub],
        });
    };

    const updatePublication = (
        id: string,
        field: keyof PublicationEntry,
        value: string
    ) => {
        setResume({
            ...resume,
            publications: resume.publications.map((pub: any) =>
                pub.id === id ? { ...pub, [field]: value } : pub
            ),
        });
    };

    const removePublication = (id: string) => {
        setResume({
            ...resume,
            publications: resume.publications.filter(
                (pub: any) => pub.id !== id
            ),
        });
    };

    return (
        <div className="space-y-4">
            {resume.publications.map((pub: PublicationEntry, index: number) => (
                <div
                    key={pub.id}
                    className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3"
                >
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-slate-900">
                            Publication {index + 1}
                        </h3>
                        <button
                            onClick={() => removePublication(pub.id)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <input
                        type="text"
                        placeholder="Publication Title *"
                        value={pub.title}
                        onChange={(e) =>
                            updatePublication(pub.id, 'title', e.target.value)
                        }
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            placeholder="Publication Name"
                            value={pub.publication}
                            onChange={(e) =>
                                updatePublication(
                                    pub.id,
                                    'publication',
                                    e.target.value
                                )
                            }
                        />
                        <input
                            type="date"
                            placeholder="Publication Date"
                            value={pub.date}
                            onChange={(e) =>
                                updatePublication(
                                    pub.id,
                                    'date',
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <input
                        type="url"
                        placeholder="Link to Publication"
                        value={pub.link}
                        onChange={(e) =>
                            updatePublication(pub.id, 'link', e.target.value)
                        }
                    />
                </div>
            ))}

            <button
                onClick={addPublication}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-dashed border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            >
                <Plus size={18} />
                Add Publication
            </button>
        </div>
    );
}
