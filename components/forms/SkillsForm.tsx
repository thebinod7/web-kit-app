'use client';

import type { Resume } from '@/types/resume';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(
    () =>
        import('@/components/RichTextEditor').then((mod) => mod.RichTextEditor),
    { ssr: false }
);

interface SkillsFormProps {
    resume: Resume;
    setResume: (resume: Resume) => void;
}

export function SkillsForm({ resume, setResume }: SkillsFormProps) {
    // const addSkill = () => {
    //     const newSkill: Skill = {
    //         id: Date.now().toString(),
    //         name: '',
    //     };
    //     setResume({
    //         ...resume,
    //         skills: [...resume.skills, newSkill],
    //     });
    // };

    // const updateSkill = (id: string, name: string) => {
    //     setResume({
    //         ...resume,
    //         skills: resume.skills.map((skill: any) =>
    //             skill.id === id ? { ...skill, name } : skill
    //         ),
    //     });
    // };

    // const removeSkill = (id: string) => {
    //     setResume({
    //         ...resume,
    //         skills: resume.skills.filter((skill: any) => skill.id !== id),
    //     });
    // };

    console.log('RESUME_SKILL: ', resume.skills);

    // Convert array object to string if
    if (Array.isArray(resume.skills)) {
        resume.skills = resume.skills.map((skill) => skill.name).join(', ');
    }

    return (
        <RichTextEditor
            value={resume.skills}
            onChange={(html) => setResume({ ...resume, skills: html })}
        />
    );
}
