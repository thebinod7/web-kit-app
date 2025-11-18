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

                    <label className="block text-sm font-bold text-foreground">
                        Publication Title
                    </label>
                    <input
                        type="text"
                        placeholder="Publication Title"
                        value={pub.title}
                        onChange={(e) =>
                            updatePublication(pub.id, 'title', e.target.value)
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

                    <div className="grid grid-cols-1 gap-3">
                        <label className="block text-sm font-bold text-foreground">
                            Publication Name
                        </label>
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
                            Publication Date
                        </label>
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
                        Publication Link
                    </label>
                    <input
                        type="url"
                        placeholder="Link to Publication"
                        value={pub.link}
                        onChange={(e) =>
                            updatePublication(pub.id, 'link', e.target.value)
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
