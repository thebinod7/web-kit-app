'use client';

import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';
import type { Resume } from '@/types/resume';

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
    } = resume;

    return (
        <div className="p-8 max-h-[calc(100vh-120px)] overflow-y-auto bg-white text-slate-900">
            {/* Header */}
            <div className="mb-6 border-b border-slate-300 pb-6">
                <h1 className="text-3xl font-bold tracking-tight">
                    {personalInfo.name || 'Your Name'}
                </h1>
                {personalInfo.title && (
                    <p className="text-base text-slate-600 mt-1">
                        {personalInfo.title}
                    </p>
                )}

                <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-600">
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
                    {personalInfo.location && (
                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {personalInfo.location}
                        </div>
                    )}
                    {personalInfo.website && (
                        <div className="flex items-center gap-1">
                            <Globe size={14} />
                            <a
                                href={personalInfo.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
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
                                className="text-blue-600 hover:underline"
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
                    <p className="text-sm text-slate-700 leading-relaxed">
                        {summary}
                    </p>
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
                                        {exp.startDate}{' '}
                                        {exp.endDate
                                            ? `- ${exp.endDate}`
                                            : '- Present'}
                                    </p>
                                </div>
                                {exp.description && (
                                    <p className="text-slate-700 mt-1">
                                        {exp.description}
                                    </p>
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
                                        {edu.graduationDate}
                                    </p>
                                </div>
                                {edu.details && (
                                    <p className="text-slate-700 mt-1">
                                        {edu.details}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
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
                                className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm"
                            >
                                {skill.name}
                            </span>
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
                                    <p className="text-slate-700">
                                        {project.description}
                                    </p>
                                )}
                                {project.technologies && (
                                    <p className="text-slate-600">
                                        <strong>Tech:</strong>{' '}
                                        {project.technologies}
                                    </p>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        View Project
                                    </a>
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
                                        <p className="font-semibold text-slate-900">
                                            {cert.name}
                                        </p>
                                        {cert.issuer && (
                                            <p className="text-slate-600">
                                                {cert.issuer}
                                            </p>
                                        )}
                                    </div>
                                    <p className="text-slate-500">
                                        {cert.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Publications */}
            {publications.length > 0 && (
                <section>
                    <h2 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide border-b border-slate-300 pb-1">
                        Publications
                    </h2>
                    <div className="space-y-2">
                        {publications.map((pub) => (
                            <div key={pub.id} className="text-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            {pub.title}
                                        </p>
                                        {pub.publication && (
                                            <p className="text-slate-600">
                                                {pub.publication}
                                            </p>
                                        )}
                                    </div>
                                    <p className="text-slate-500">{pub.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
