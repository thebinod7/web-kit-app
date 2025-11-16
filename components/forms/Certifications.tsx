'use client';

import { Plus, Trash2 } from 'lucide-react';
import type { Resume, CertificationEntry } from '@/types/resume';

interface CertificationsFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function CertificationsForm({
    resume,
    setResume,
}: CertificationsFormProps) {
    const addCertification = () => {
        const newCert: CertificationEntry = {
            id: Date.now().toString(),
            name: '',
            issuer: '',
            date: '',
            link: '',
        };
        setResume({
            ...resume,
            certifications: [...resume.certifications, newCert],
        });
    };

    const updateCertification = (
        id: string,
        field: keyof CertificationEntry,
        value: string
    ) => {
        setResume({
            ...resume,
            certifications: resume.certifications.map((cert: any) =>
                cert.id === id ? { ...cert, [field]: value } : cert
            ),
        });
    };

    const removeCertification = (id: string) => {
        setResume({
            ...resume,
            certifications: resume.certifications.filter(
                (cert: any) => cert.id !== id
            ),
        });
    };

    return (
        <div className="space-y-4">
            {resume.certifications.map((cert: any, index: number) => (
                <div
                    key={cert.id}
                    className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3"
                >
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-slate-900">
                            Certification {index + 1}
                        </h3>
                        <button
                            onClick={() => removeCertification(cert.id)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            placeholder="Certification Name *"
                            value={cert.name}
                            onChange={(e) =>
                                updateCertification(
                                    cert.id,
                                    'name',
                                    e.target.value
                                )
                            }
                        />
                        <input
                            type="text"
                            placeholder="Issuer (e.g., AWS, Google)"
                            value={cert.issuer}
                            onChange={(e) =>
                                updateCertification(
                                    cert.id,
                                    'issuer',
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="date"
                            placeholder="Issue Date"
                            value={cert.date}
                            onChange={(e) =>
                                updateCertification(
                                    cert.id,
                                    'date',
                                    e.target.value
                                )
                            }
                        />
                        <input
                            type="url"
                            placeholder="Credential Link"
                            value={cert.link}
                            onChange={(e) =>
                                updateCertification(
                                    cert.id,
                                    'link',
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
            ))}

            <button
                onClick={addCertification}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-dashed border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            >
                <Plus size={18} />
                Add Certification
            </button>
        </div>
    );
}
