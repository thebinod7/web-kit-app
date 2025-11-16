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
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Full Name *"
                    value={resume.personalInfo.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Professional Title"
                    value={resume.personalInfo.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={resume.personalInfo.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    value={resume.personalInfo.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Location"
                    value={resume.personalInfo.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={resume.personalInfo.dateOfBirth}
                    onChange={(e) =>
                        handleChange('dateOfBirth', e.target.value)
                    }
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="url"
                    placeholder="Website URL"
                    value={resume.personalInfo.website}
                    onChange={(e) => handleChange('website', e.target.value)}
                />
                <input
                    type="url"
                    placeholder="LinkedIn Profile"
                    value={resume.personalInfo.linkedin}
                    onChange={(e) => handleChange('linkedin', e.target.value)}
                />
            </div>
        </div>
    );
}
