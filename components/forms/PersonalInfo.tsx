'use client';

import type { Resume } from '@/types/resume';

interface PersonalInfoFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function PersonalInfoForm({ resume, setResume }: PersonalInfoFormProps) {
    const handleChange = (
        field: keyof typeof resume.personalInfo,
        value: string
    ) => {
        setResume({
            ...resume,
            personalInfo: {
                ...resume.personalInfo,
                [field]: value,
            },
        });
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
                <label className="block text-sm font-bold text-foreground">
                    Full Name
                </label>
                <input
                    type="text"
                    placeholder="Full Name *"
                    value={resume.personalInfo.name}
                    onChange={(e) => handleChange('name', e.target.value)}
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
                    Professional Title
                </label>
                <input
                    type="text"
                    placeholder="Professional Title"
                    value={resume.personalInfo.title}
                    onChange={(e) => handleChange('title', e.target.value)}
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
            <div className="grid grid-cols-1 gap-4">
                <label className="block text-sm font-bold text-foreground">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    value={resume.personalInfo.email}
                    onChange={(e) => handleChange('email', e.target.value)}
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
                    Phone
                </label>
                <input
                    type="tel"
                    placeholder="Phone"
                    value={resume.personalInfo.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
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
            <div className="grid grid-cols-1 gap-4">
                <label className="block text-sm font-bold text-foreground">
                    Location
                </label>
                <input
                    type="text"
                    placeholder="Location"
                    value={resume.personalInfo.location}
                    onChange={(e) => handleChange('location', e.target.value)}
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
                    Date of Birth
                </label>
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={resume.personalInfo.dateOfBirth}
                    onChange={(e) =>
                        handleChange('dateOfBirth', e.target.value)
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
            <div className="grid grid-cols-1 gap-4">
                <label className="block text-sm font-bold text-foreground">
                    Website
                </label>
                <input
                    type="url"
                    placeholder="Website URL"
                    value={resume.personalInfo.website}
                    onChange={(e) => handleChange('website', e.target.value)}
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
                    LinkedIn
                </label>
                <input
                    type="url"
                    placeholder="LinkedIn Profile"
                    value={resume.personalInfo.linkedin}
                    onChange={(e) => handleChange('linkedin', e.target.value)}
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
        </div>
    );
}
