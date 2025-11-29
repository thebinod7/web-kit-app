import type { Metadata } from 'next';
import {
    ChevronRight,
    BookOpen,
    Zap,
    Code2,
    Users,
    TrendingUp,
} from 'lucide-react';
import { BLOG_ARTICLES } from '@/app/constants/db';
import { APP_PATHS } from '@/app/constants/api';
import Link from 'next/link';

const currentArticle = BLOG_ARTICLES.find(
    (f) => f.slug === 'software-engineer-resume-skills-2025-2026'
);

export const metadata: Metadata = {
    title: currentArticle?.title,
    description: currentArticle?.excerpt,
    keywords: [
        'software engineer skills',
        'resume skills',
        'technical skills',
        'programming skills',
        'in-demand skills 2025',
        'developer skills',
        'job skills',
        'career skills',
        'software development',
        'coding skills',
        'AI skills',
        'cloud computing',
        'system design',
    ],
    openGraph: {
        title: currentArticle?.title,
        description: currentArticle?.excerpt,
        type: 'article',
    },
};

export default function SkillsArticlePage() {
    const skills = [
        {
            category: 'Backend & Systems',
            icon: Code2,
            skills: [
                {
                    name: 'System Design & Architecture',
                    description:
                        "Design scalable systems that handle millions of users. Example: 'Designed microservices architecture for payment processing handling 10K+ transactions/day with 99.9% uptime'",
                },
                {
                    name: 'API Development',
                    description:
                        "Build robust REST and GraphQL APIs. Example: 'Developed RESTful API in Node.js with Redis caching, reducing response time by 45%'",
                },
                {
                    name: 'Database Design',
                    description:
                        "SQL, NoSQL, optimization & scaling. Example: 'Optimized database queries, reducing load time from 8s to 1.2s for 500K+ records'",
                },
            ],
        },
        {
            category: 'Frontend & Web',
            icon: Zap,
            skills: [
                {
                    name: 'React/Next.js',
                    description:
                        "Modern web frameworks. Example: 'Built responsive React dashboard with Next.js, serving 50K+ monthly users with <2s load time'",
                },
                {
                    name: 'Web Performance',
                    description:
                        "Optimization and Core Web Vitals. Example: 'Improved Core Web Vitals: LCP from 3.2s to 1.8s, CLS from 0.15 to 0.08'",
                },
                {
                    name: 'State Management',
                    description:
                        "Redux, Zustand, Recoil. Example: 'Implemented Redux store managing 50K+ user interactions with efficient reselect optimization'",
                },
            ],
        },
        {
            category: 'Cloud & DevOps',
            icon: TrendingUp,
            skills: [
                {
                    name: 'Cloud Platforms',
                    description:
                        "AWS, GCP, Azure expertise. Example: 'Deployed applications on AWS using Lambda, EC2, RDS, reducing infrastructure costs by 30%'",
                },
                {
                    name: 'CI/CD & Automation',
                    description:
                        "GitHub Actions, Jenkins, Docker. Example: 'Built CI/CD pipeline with GitHub Actions reducing deployment time from 45min to 5min'",
                },
                {
                    name: 'Containerization',
                    description:
                        "Docker, Kubernetes. Example: 'Containerized 12 microservices with Docker, orchestrated with Kubernetes for auto-scaling'",
                },
            ],
        },
        {
            category: 'Soft Skills',
            icon: Users,
            skills: [
                {
                    name: 'Communication',
                    description:
                        "Explain complex concepts clearly. Example: 'Led technical discussions with 8-person team; documented architecture decision records'",
                },
                {
                    name: 'Problem Solving',
                    description:
                        "Debug and solve complex issues. Example: 'Identified and fixed critical memory leak reducing server costs by 40%'",
                },
                {
                    name: 'Leadership & Mentoring',
                    description:
                        "Guide junior developers. Example: 'Mentored 3 junior developers; code review led to 60% reduction in bugs'",
                },
            ],
        },
    ];

    const faq = [
        {
            q: 'Should I list all my skills or only the ones that match the job description?',
            a: 'Prioritize relevance over volume. Include skills that match the job description, but also add skills that demonstrate your growth and diverse experience. Aim for 10-15 core skills rather than 50+ generic ones.',
        },
        {
            q: 'How do I showcase skills without overexaggerating?',
            a: "Use specific, measurable examples. Instead of 'Expert in React', write 'Built 15+ production React components with 99% test coverage'. Quantify your impact with metrics.",
        },
        {
            q: 'Are soft skills as important as technical skills?',
            a: 'Yes. Hiring managers value communication, teamwork, and problem-solving equally. Tech skills get you the interview, but soft skills land the job. Always mention both.',
        },
        {
            q: 'How often should I update my skills on my resume?',
            a: 'Update every 3-6 months as you learn new technologies. Keep skills current with industry trends. Remove outdated technologies (unless specifically requested) to show you stay current.',
        },
        {
            q: "Should I include AI/Machine Learning skills if I'm a backend engineer?",
            a: "Only include if you have real hands-on experience. In 2025-2026, all engineers benefit from AI literacy, but don't fake expertise. If you've built ML features, definitely highlight it.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Blog Article */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                            Career Skills
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {currentArticle?.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        {currentArticle?.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500">
                        <span>{currentArticle?.category}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{currentArticle?.readTime}</span>
                        <span className="hidden sm:block">•</span>
                        <span>Last updated: {currentArticle?.date}</span>
                    </div>
                </header>

                {/* Table of Contents */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-orange-500" />
                        In This Guide
                    </h2>
                    <ul className="space-y-3">
                        {[
                            'Why These Skills Matter in 2025',
                            'Backend & Systems Skills (The Money Skills)',
                            'Frontend & Web Skills (User-Facing Impact)',
                            'Cloud & DevOps Skills (Infrastructure Mastery)',
                            'Soft Skills That Hiring Managers Look For',
                            'How to Showcase Skills With Real Examples',
                            'Common Skills Mistakes to Avoid',
                            'Your 30-Day Skill Development Plan',
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <ChevronRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <a
                                    href={`#section-${idx}`}
                                    className="text-gray-700 hover:text-orange-500 transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {/* Section 1 */}
                    <section id="section-0">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Why These Skills Matter in 2025
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The tech industry evolves fast. Skills that made you
                            valuable in 2023 might be standard expectations in
                            2025. Employers aren't just looking for what you
                            know—they're looking for what you can do with what
                            you know.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            According to latest industry reports, companies
                            prioritize engineers who combine technical depth
                            with business impact. The days of listing generic
                            skills are over. You need to demonstrate real-world
                            application, measurable outcomes, and continuous
                            learning.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This guide covers the exact skills that land
                            interviews at top tech companies in 2025-2026, with
                            actionable examples you can add to your resume right
                            now.
                        </p>
                    </section>

                    {/* Skills by Category */}
                    {skills.map((category, idx) => {
                        const IconComponent = category.icon;
                        return (
                            <section key={idx} id={`section-${idx + 1}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <IconComponent className="w-8 h-8 text-orange-500" />
                                    <h2 className="text-3xl font-bold text-slate-900">
                                        {category.category}
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div
                                            key={skillIdx}
                                            className="border-l-4 border-orange-500 pl-6 py-2"
                                        >
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                                {skill.name}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {skill.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        );
                    })}

                    {/* Section: How to Showcase */}
                    <section id={`section-${skills.length + 1}`}>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            How to Showcase Skills With Real Examples
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Don't just list skills—prove them. Here's the
                            formula hiring managers love:
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6 space-y-4">
                            <div className="font-mono text-sm space-y-2">
                                <div>
                                    <span className="font-bold text-orange-500">
                                        Skill + Context + Metric = Winning
                                        Resume Item
                                    </span>
                                </div>
                                <div className="mt-4 text-gray-700">
                                    ❌ Bad: "Proficient in Python"
                                    <br />
                                    <span className="text-orange-500 font-semibold">
                                        ✓ Good:
                                    </span>{' '}
                                    "Built Python ETL pipeline processing 2M+
                                    records daily, reducing data processing time
                                    by 60%"
                                </div>
                            </div>
                        </div>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-bold text-slate-900">
                                    Pro Tip:
                                </span>{' '}
                                Use numbers. Replace "improved performance" with
                                "reduced load time from 4.2s to 1.1s" or
                                "improved SEO score from 65 to 94". Metrics make
                                skills undeniable.
                            </p>
                        </div>
                    </section>

                    {/* Section: Mistakes */}
                    <section id={`section-${skills.length + 2}`}>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Common Skills Mistakes to Avoid
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    mistake: 'Listing too many skills',
                                    fix: 'Keep skills to 12-15 most relevant. Quality over quantity.',
                                },
                                {
                                    mistake: 'Using generic descriptions',
                                    fix: "Always include metrics and impact. 'Led' vs 'Led backend refactor reducing API latency by 35%'",
                                },
                                {
                                    mistake: "Skills that don't match the job",
                                    fix: 'Tailor your top skills to each job description. Use same keywords they use.',
                                },
                                {
                                    mistake: 'Inflating experience levels',
                                    fix: "Be honest. 'Familiar with' vs 'Expert in' matters. Interviewers test what you claim.",
                                },
                                {
                                    mistake: 'Ignoring soft skills',
                                    fix: 'Technical skills are table stakes. Soft skills differentiate you. Mention leadership, communication.',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                        <span className="text-red-600 font-bold text-sm">
                                            ✕
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-slate-900 mb-1">
                                            ❌ {item.mistake}
                                        </p>
                                        <p className="text-gray-700 text-sm">
                                            ✓ {item.fix}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section: 30-Day Plan */}
                    <section id={`section-${skills.length + 3}`}>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Your 30-Day Skill Development Plan
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Want to level up your skills right now? Here's a
                            actionable 30-day plan:
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    week: 'Week 1',
                                    task: 'Audit current skills. Which 3-5 are most valuable for your target role?',
                                },
                                {
                                    week: 'Week 2',
                                    task: 'Deep dive. Build a small project using the skill you want to showcase. Real code > theory.',
                                },
                                {
                                    week: 'Week 3',
                                    task: 'Document impact. Write down metrics. What did you improve? What problem did you solve?',
                                },
                                {
                                    week: 'Week 4',
                                    task: 'Update resume. Rewrite experience bullets using the Skill + Context + Metric formula.',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-4 p-4 border-l-4 border-orange-500 bg-orange-50"
                                >
                                    <div className="font-bold text-orange-600 whitespace-nowrap">
                                        {item.week}
                                    </div>
                                    <div className="text-gray-700">
                                        {item.task}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            {faq.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="border-b border-gray-200 pb-6"
                                >
                                    <h3 className="font-bold text-slate-900 mb-2 text-lg">
                                        Q: {item.q}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        A: {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 sm:p-12 text-center mt-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Build Your Skills-Focused Resume?
                        </h2>
                        <p className="text-gray-200 mb-8 text-lg">
                            Use our free resume generator to showcase your
                            skills with real examples and metrics that impress
                            hiring managers.
                        </p>
                        <Link
                            href={APP_PATHS.GENERATE_RESUME}
                            className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
                        >
                            Create Your Resume Now
                        </Link>
                    </section>
                </div>
            </article>
        </div>
    );
}
