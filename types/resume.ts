export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    dateOfBirth: string;
    website: string;
    linkedin: string;
}

export interface ExperienceEntry {
    id: string;
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    description: string;
}

export interface EducationEntry {
    id: string;
    school: string;
    degree: string;
    field: string;
    graduationDate: string;
    details: string;
}

export interface Skill {
    id: string;
    name: string;
}

export interface ProjectEntry {
    id: string;
    title: string;
    description: string;
    technologies: string;
    link: string;
}

export interface CertificationEntry {
    id: string;
    name: string;
    issuer: string;
    date: string;
    link: string;
}

export interface PublicationEntry {
    id: string;
    title: string;
    publication: string;
    date: string;
    link: string;
}

export interface Resume {
    personalInfo: PersonalInfo;
    summary: string;
    experience: ExperienceEntry[];
    education: EducationEntry[];
    skills: Skill[];
    projects: ProjectEntry[];
    certifications: CertificationEntry[];
    publications: PublicationEntry[];
}
