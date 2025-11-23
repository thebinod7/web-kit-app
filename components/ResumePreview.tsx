'use client';

import {
    Mail,
    Phone,
    MapPin,
    Globe,
    Linkedin,
    Calendar,
    ExternalLink,
} from 'lucide-react';
import type { Resume } from '@/types/resume';
import { formatDateToDMY, formatDateToMMYY } from '@/utils/date';

interface ResumePreviewProps {
    resume: Resume;
}

export function ResumePreview({ resume }: ResumePreviewProps) {
    const {
        personalInfo,
        summary,
        experience,
        education,
        skills,
        projects,
        certifications,
        publications,
        languages,
    } = resume;

    return (
        <div className="p-8 max-h-[calc(100vh-120px)] overflow-y-auto bg-white text-slate-900">
            {/* Header */}
            <div className="mb-6 pb-6">
                <h1 className="text-3xl text-center font-bold tracking-tight">
                    {personalInfo.name || 'Your Name'}
                </h1>
                {personalInfo.title && (
                    <p className="text-base text-center text-slate-600 mt-1">
                        {personalInfo.title}
                    </p>
                )}

                <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-600">
                    {personalInfo.location && (
                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {personalInfo.location}
                        </div>
                    )}

                    {personalInfo.email && (
                        <div className="flex items-center gap-1">
                            <Mail size={14} />
                            {personalInfo.email}
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className="flex items-center gap-1">
                            <Phone size={14} />
                            {personalInfo.phone}
                        </div>
                    )}
                    {personalInfo.dateOfBirth && (
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {personalInfo.dateOfBirth &&
                                formatDateToDMY(personalInfo.dateOfBirth)}
                        </div>
                    )}

                    {personalInfo.website && (
                        <div className="flex items-center gap-1">
                            <Globe size={14} />
                            <a
                                href={personalInfo.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Website
                            </a>
                        </div>
                    )}
                    {personalInfo.linkedin && (
                        <div className="flex items-center gap-1">
                            <Linkedin size={14} />
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Summary */}
            {summary && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide border-b border-slate-300 pb-1">
                        Summary
                    </h2>
                    {/* <p className="text-sm text-slate-700 leading-relaxed">
                        {summary}
                    </p> */}
                    <p
                        className="prose max-w-none text-sm text-slate-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: summary }}
                    />
                </section>
            )}

            {/* Skills */}
            {skills.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-300 pb-1">
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill: any) => (
                            <span
                                key={skill.id}
                                className="px-4 py-1.5 bg-white border border-gray-300 rounded-full text-sm"
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-300 pb-1">
                        Experience
                    </h2>
                    <div className="space-y-3">
                        {experience.map((exp: any) => (
                            <div key={exp.id} className="text-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            {exp.position}
                                        </p>
                                        <p className="text-slate-600">
                                            {exp.company}{' '}
                                            {exp.location &&
                                                `• ${exp.location}`}
                                        </p>
                                    </div>
                                    <p className="text-slate-500 whitespace-nowrap">
                                        {formatDateToMMYY(exp.startDate)}{' '}
                                        {exp.endDate
                                            ? `- ${formatDateToMMYY(
                                                  exp.endDate
                                              )}`
                                            : '- Present'}
                                    </p>
                                </div>
                                {exp.description && (
                                    <p
                                        className="prose max-w-none text-sm text-slate-700 leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: exp.description,
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {education.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-300 pb-1">
                        Education
                    </h2>
                    <div className="space-y-3">
                        {education.map((edu: any) => (
                            <div key={edu.id} className="text-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            {edu.degree}{' '}
                                            {edu.field && `in ${edu.field}`}
                                        </p>
                                        <p className="text-slate-600">
                                            {edu.school}
                                        </p>
                                    </div>
                                    <p className="text-slate-500">
                                        {formatDateToMMYY(edu.graduationDate)}
                                    </p>
                                </div>
                                {edu.details && (
                                    <p
                                        className="prose max-w-none text-sm text-slate-700 leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: edu.details,
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {projects.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-300 pb-1">
                        Projects
                    </h2>
                    <div className="space-y-3">
                        {projects.map((project: any) => (
                            <div key={project.id} className="text-sm">
                                <p className="font-semibold text-slate-900">
                                    {project.title}
                                </p>
                                {project.description && (
                                    <p className="text-slate-700 flex gap-2 items-center">
                                        {project.description}{' '}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </p>
                                )}
                                {project.technologies && (
                                    <p className="text-slate-600">
                                        <strong>Tech:</strong>{' '}
                                        {project.technologies}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-300 pb-1">
                        Certifications
                    </h2>
                    <div className="space-y-2">
                        {certifications.map((cert: any) => (
                            <div key={cert.id} className="text-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-slate-900 flex items-center gap-2">
                                            {cert.name}{' '}
                                            {cert.link && (
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </p>
                                        {cert.issuer && (
                                            <p className="text-slate-600">
                                                Issued By: {cert.issuer}
                                            </p>
                                        )}
                                    </div>
                                    <p className="text-slate-500">
                                        {formatDateToDMY(cert.date)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Publications */}
            {publications.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-300 pb-1">
                        Publications
                    </h2>
                    <div className="space-y-2">
                        {publications.map((pub) => (
                            <div key={pub.id} className="text-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-slate-900 flex items-center gap-2">
                                            {pub.title}{' '}
                                            {pub.link && (
                                                <a
                                                    href={pub.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </p>
                                        {pub.publication && (
                                            <p className="text-slate-600">
                                                Published By: {pub.publication}
                                            </p>
                                        )}
                                    </div>
                                    <p className="text-slate-500">
                                        {formatDateToDMY(pub.date)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Languages */}
            <section>
                <h2 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-300 pb-1">
                    Languages
                </h2>
                <div className="space-y-2">
                    {languages.map((lang) => (
                        <div
                            key={lang.id}
                            className="flex items-center justify-between text-sm"
                        >
                            <span className="font-semibold text-slate-800">
                                {lang.language}
                            </span>
                            <span
                                className={`px-4 py-1.5 bg-white border border-gray-300 rounded-full text-sm`}
                            >
                                {lang.level}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
