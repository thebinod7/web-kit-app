'use client';

import type { Resume } from '@/types/resume';
import FormInputField from './fields/InputField';

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
                <label className="block text-sm font-bold text-gray-800">
                    Full Name
                </label>

                <FormInputField
                    name="name"
                    placeholder="Full Name"
                    value={resume.personalInfo.name}
                    onChange={(field, value) =>
                        handleChange(field as any, value)
                    }
                />

                <label className="block text-sm font-bold text-gray-800">
                    Professional Title
                </label>

                <FormInputField
                    name="title"
                    placeholder="Professional Title"
                    value={resume.personalInfo.title}
                    onChange={(field, value) =>
                        handleChange(field as any, value)
                    }
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label className="block text-sm font-bold text-gray-800">
                    Email
                </label>

                <FormInputField
                    name="email"
                    placeholder="Email"
                    value={resume.personalInfo.email}
                    onChange={(field, value) =>
                        handleChange(field as any, value)
                    }
                />

                <label className="block text-sm font-bold text-gray-800">
                    Phone
                </label>

                <FormInputField
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={resume.personalInfo.phone}
                    onChange={(field, value) =>
                        handleChange(field as any, value)
                    }
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label className="block text-sm font-bold text-gray-800">
                    Location
                </label>

                <FormInputField
                    name="location"
                    placeholder="Location"
                    value={resume.personalInfo.location}
                    onChange={(field, value) =>
                        handleChange(field as any, value)
                    }
                />

                <label className="block text-sm font-bold text-gray-800">
                    Date of Birth
                </label>

                <FormInputField
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={resume.personalInfo.dateOfBirth}
                    onChange={(field, value) =>
                        handleChange(field as any, value)
                    }
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label className="block text-sm font-bold text-gray-800">
                    Website
                </label>
                <FormInputField
                    type="url"
                    name="website"
                    placeholder="Website URL"
                    value={resume.personalInfo.website}
                    onChange={(field, value) =>
                        handleChange(field as any, value)
                    }
                />
                <label className="block text-sm font-bold text-gray-800">
                    LinkedIn
                </label>
                <FormInputField
                    type="url"
                    name="linkedin"
                    placeholder="LinkedIn Profile"
                    value={resume.personalInfo.linkedin}
                    onChange={(field, value) =>
                        handleChange(field as any, value)
                    }
                />
            </div>
        </div>
    );
}
