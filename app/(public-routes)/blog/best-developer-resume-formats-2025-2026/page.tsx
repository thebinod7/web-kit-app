import type { Metadata } from 'next';
import {
    ChevronRight,
    Layers,
    FileText,
    BarChart3,
    CheckCircle,
    AlertCircle,
    BookOpen,
} from 'lucide-react';
import { BLOG_ARTICLES } from '@/app/constants/db';
import Link from 'next/link';
import { APP_PATHS } from '@/app/constants/api';

const currentArticle = BLOG_ARTICLES.find(
    (f) => f.slug === 'best-developer-resume-formats-2025-2026'
);

export const metadata: Metadata = {
    title: currentArticle?.title,
    description: currentArticle?.excerpt,
    keywords: [
        'resume formats',
        'developer resume format',
        'best resume format',
        'ATS resume format',
        'chronological resume',
        'skills-based resume',
        'hybrid resume format',
        'software engineer resume',
        'tech resume',
        'resume structure',
        'resume layout',
        '2025 resume format',
        'resume template',
    ],
    openGraph: {
        title: currentArticle?.title,
        description: currentArticle?.excerpt,
        type: 'article',
    },
};

export default function ResumeFormatsPage() {
    const formats = [
        {
            name: 'Chronological Format',
            icon: FileText,
            description: 'Experience listed from most recent to oldest',
            pros: [
                'Familiar to hiring managers and ATS systems',
                'Shows career progression clearly',
                'Best for stable work history',
                'Easy to follow timeline',
            ],
            cons: [
                'Gaps in employment are visible',
                'Career transitions look unclear',
                'Less effective for career changers',
                'Skills not immediately prominent',
            ],
            best: 'Traditional tech companies, established engineers',
            example:
                'Senior Software Engineer | Meta | Jan 2023 - Present\n- Led microservices migration serving 2M+ users\n- Reduced API latency by 35% through optimization\n- Mentored 3 junior engineers',
        },
        {
            name: 'Skills-Based Format',
            icon: Layers,
            description: 'Organized by skills and competencies first',
            pros: [
                'Emphasizes relevant skills immediately',
                'Hides employment gaps',
                'Great for career transitions',
                'Perfect for freelancers/contractors',
            ],
            cons: [
                'Some ATS systems struggle with it',
                'Hiring managers may distrust it',
                'Harder to verify experience timeline',
                'Less common in tech industry',
            ],
            best: 'Career changers, bootcamp graduates, contractors',
            example:
                'TECHNICAL SKILLS\n- Backend: Node.js, Python, Golang (5+ years)\n- Databases: PostgreSQL, MongoDB, Redis\n- Cloud: AWS (EC2, Lambda, S3), GCP\n- DevOps: Docker, Kubernetes, CI/CD\n\nEXPERIENCE\nSoftware Engineer | Startup | 2021-2023',
        },
        {
            name: 'Hybrid Format',
            icon: BarChart3,
            description: 'Skills section + chronological work history',
            pros: [
                'Best of both worlds approach',
                'ATS friendly with skills highlighted',
                'Shows career progression',
                'Most relevant for tech in 2025',
            ],
            cons: [
                'Can be longer if not careful',
                'Requires good balance/structure',
                'More work to put together',
                'None, really',
            ],
            best: 'Most software engineers, especially mid-career',
            example:
                'CORE COMPETENCIES\nNode.js | React | System Design | AWS | Docker | PostgreSQL\n\nTECHNICAL SKILLS\n- Languages: JavaScript, Python, Go\n- Frameworks: Express, Next.js, FastAPI\n\nEXPERIENCE\nSenior Engineer | Tech Co. | 2022 - Present',
        },
    ];

    const mistakes = [
        {
            icon: AlertCircle,
            title: 'Using Fancy Formatting',
            problem:
                'Graphics, colors, and complex layouts break ATS parsing and look unprofessional to hiring managers.',
            solution:
                'Stick to simple black text on white background. Use bold, italic, and simple bullet points only. Let content do the talking.',
        },
        {
            icon: AlertCircle,
            title: 'Inconsistent Date Formatting',
            problem:
                'Mixing date formats (01/2023 vs Jan 2023 vs January 2023) confuses ATS systems and looks sloppy.',
            solution:
                'Use consistent formatting: Month Year (Jan 2023). Be clear on all dates employment, education, certifications.',
        },
        {
            icon: AlertCircle,
            title: 'Too Many Font Types & Sizes',
            problem:
                'Using 3+ fonts or random sizing makes parsing hard for ATS and reduces readability.',
            solution:
                'Maximum 2 fonts: one for headers, one for body. Use size consistently: 11-12pt body, 14-16pt headers.',
        },
        {
            icon: AlertCircle,
            title: 'Vague Bullet Points',
            problem:
                "Generic statements like 'Improved performance' don't tell hiring managers what you actually did or the impact.",
            solution:
                "Use the Formula: Action + Technology + Metric. Example: 'Optimized database queries in PostgreSQL, reducing search latency by 60%'",
        },
        {
            icon: AlertCircle,
            title: 'Ignoring Keywords',
            problem:
                "Not including technologies your target jobs require means you won't match their job descriptions or pass ATS filters.",
            solution:
                'Review job descriptions you want and mirror keywords in your resume. Include specific tools, languages, and frameworks.',
        },
    ];

    const comparisonTable = [
        {
            aspect: 'ATS Compatibility',
            chronological: 'Excellent',
            skillsBased: 'Moderate',
            hybrid: 'Excellent',
        },
        {
            aspect: 'Career Gaps',
            chronological: 'Visible',
            skillsBased: 'Hidden',
            hybrid: 'Manageable',
        },
        {
            aspect: 'Tech Industry Fit',
            chronological: 'Good',
            skillsBased: 'Okay',
            hybrid: 'Best',
        },
        {
            aspect: 'Career Transitions',
            chronological: 'Poor',
            skillsBased: 'Excellent',
            hybrid: 'Very Good',
        },
        {
            aspect: 'Time to Create',
            chronological: 'Fast',
            skillsBased: 'Moderate',
            hybrid: 'Moderate',
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Article Container */}
            <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Article Header */}
                <header className="mb-12">
                    <h1 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
                        {currentArticle?.title}
                    </h1>
                    <p className="text-xl text-slate-700">
                        {currentArticle?.excerpt}
                    </p>
                    <div className="flex mt-6 flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500">
                        <span>{currentArticle?.category}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{currentArticle?.readTime}</span>
                        <span className="hidden sm:block">•</span>
                        <span>Last updated: {currentArticle?.date}</span>
                    </div>
                </header>

                {/* Table of Contents */}
                <section className="mb-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
                    <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
                        <BookOpen size={20} />
                        Quick Navigation
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#why-format-matters"
                                className="flex items-center gap-2 text-slate-600 hover:text-orange-500"
                            >
                                <ChevronRight size={16} />
                                Why Resume Format Matters
                            </a>
                        </li>
                        <li>
                            <a
                                href="#three-formats"
                                className="flex items-center gap-2 text-slate-600 hover:text-orange-500"
                            >
                                <ChevronRight size={16} />
                                The 3 Main Resume Formats
                            </a>
                        </li>
                        <li>
                            <a
                                href="#comparison"
                                className="flex items-center gap-2 text-slate-600 hover:text-orange-500"
                            >
                                <ChevronRight size={16} />
                                Format Comparison
                            </a>
                        </li>
                        <li>
                            <a
                                href="#mistakes"
                                className="flex items-center gap-2 text-slate-600 hover:text-orange-500"
                            >
                                <ChevronRight size={16} />
                                Common Format Mistakes
                            </a>
                        </li>
                        <li>
                            <a
                                href="#quick-tips"
                                className="flex items-center gap-2 text-slate-600 hover:text-orange-500"
                            >
                                <ChevronRight size={16} />
                                Quick Tips & Next Steps
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Main Content */}
                <section className="mb-12 space-y-8">
                    <div>
                        <h2
                            id="why-format-matters"
                            className="mb-4 text-3xl font-bold text-slate-900"
                        >
                            Why Resume Format Matters for Tech Interviews
                        </h2>
                        <p className="mb-4 text-lg text-slate-700">
                            Your resume format isn't just about aesthetics, it's
                            about strategy. The right format can:
                        </p>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-3">
                                <CheckCircle
                                    size={20}
                                    className="mt-1 flex-shrink-0 text-orange-500"
                                />
                                <span>
                                    <strong>Pass ATS systems</strong> that
                                    screen 80% of resumes before humans see them
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle
                                    size={20}
                                    className="mt-1 flex-shrink-0 text-orange-500"
                                />
                                <span>
                                    <strong>
                                        Highlight your strongest assets
                                    </strong>{' '}
                                    based on your career stage and situation
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle
                                    size={20}
                                    className="mt-1 flex-shrink-0 text-orange-500"
                                />
                                <span>
                                    <strong>
                                        Help hiring managers find what matters
                                    </strong>{' '}
                                    in under 30 seconds
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle
                                    size={20}
                                    className="mt-1 flex-shrink-0 text-orange-500"
                                />
                                <span>
                                    <strong>
                                        Address employment gaps strategically
                                    </strong>{' '}
                                    without drawing attention to them
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2
                            id="three-formats"
                            className="mb-6 text-3xl font-bold text-slate-900"
                        >
                            The 3 Main Resume Formats Explained
                        </h2>
                        <div className="space-y-8">
                            {formats.map((format, index) => {
                                const Icon = format.icon;
                                return (
                                    <div
                                        key={index}
                                        className="rounded-lg border border-slate-200 bg-white p-6"
                                    >
                                        <div className="mb-4 flex items-center gap-3">
                                            <Icon
                                                size={28}
                                                className="text-orange-500"
                                            />
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900">
                                                    {format.name}
                                                </h3>
                                                <p className="text-slate-600">
                                                    {format.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-6 grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <h4 className="mb-2 font-semibold text-green-700">
                                                    ✓ Pros
                                                </h4>
                                                <ul className="space-y-1 text-sm text-slate-700">
                                                    {format.pros.map(
                                                        (pro, i) => (
                                                            <li
                                                                key={i}
                                                                className="flex gap-2"
                                                            >
                                                                <span className="text-green-600">
                                                                    •
                                                                </span>
                                                                <span>
                                                                    {pro}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="mb-2 font-semibold text-red-700">
                                                    ✗ Cons
                                                </h4>
                                                <ul className="space-y-1 text-sm text-slate-700">
                                                    {format.cons.map(
                                                        (con, i) => (
                                                            <li
                                                                key={i}
                                                                className="flex gap-2"
                                                            >
                                                                <span className="text-red-600">
                                                                    •
                                                                </span>
                                                                <span>
                                                                    {con}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mb-4 border-t border-slate-200 pt-4">
                                            <p className="mb-2 text-sm font-semibold text-slate-900">
                                                <strong>Best for:</strong>{' '}
                                                {format.best}
                                            </p>
                                            <p className="text-sm font-semibold text-slate-900">
                                                <strong>Example:</strong>
                                            </p>
                                            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-100 p-3 text-xs text-slate-700">
                                                {format.example}
                                            </pre>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h2
                            id="comparison"
                            className="mb-4 text-3xl font-bold text-slate-900"
                        >
                            Format Comparison at a Glance
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-slate-300 bg-slate-100">
                                        <th className="px-4 py-3 text-left font-semibold text-slate-900">
                                            Aspect
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-slate-900">
                                            Chronological
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-slate-900">
                                            Skills-Based
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-slate-900">
                                            Hybrid
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonTable.map((row, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-slate-200 hover:bg-slate-50"
                                        >
                                            <td className="px-4 py-3 font-medium text-slate-900">
                                                {row.aspect}
                                            </td>
                                            <td className="px-4 py-3 text-slate-700">
                                                {row.chronological}
                                            </td>
                                            <td className="px-4 py-3 text-slate-700">
                                                {row.skillsBased}
                                            </td>
                                            <td className="px-4 py-3 text-slate-700">
                                                <span className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                                                    {row.hybrid}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h2
                            id="mistakes"
                            className="mb-6 text-3xl font-bold text-slate-900"
                        >
                            5 Format Mistakes That Cost You Interviews
                        </h2>
                        <div className="space-y-4">
                            {mistakes.map((mistake, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4"
                                >
                                    <h4 className="mb-2 font-semibold text-slate-900">
                                        {mistake.title}
                                    </h4>
                                    <p className="mb-2 text-sm text-slate-700">
                                        <strong>Problem:</strong>{' '}
                                        {mistake.problem}
                                    </p>
                                    <p className="text-sm text-slate-700">
                                        <strong>Solution:</strong>{' '}
                                        {mistake.solution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2
                            id="quick-tips"
                            className="mb-4 text-3xl font-bold text-slate-900"
                        >
                            How to Choose Your Format (Decision Tree)
                        </h2>
                        <div className="space-y-3 text-slate-700">
                            <p>
                                <strong>
                                    Are you early in your career (0-2 years)?
                                </strong>{' '}
                                → Use Hybrid format. It lets you show skills
                                while building work history.
                            </p>
                            <p>
                                <strong>
                                    Do you have 5+ years at 2-3 companies?
                                </strong>{' '}
                                → Chronological format works great. Your
                                experience tells the story.
                            </p>
                            <p>
                                <strong>Changing careers or have gaps?</strong>{' '}
                                → Use Hybrid or Skills-Based to focus on what's
                                relevant, not timeline gaps.
                            </p>
                            <p>
                                <strong>Freelancer or contractor?</strong> →
                                Skills-Based highlights what you can do.
                                Companies care less about timeline.
                            </p>
                            <p>
                                <strong>Unsure which format to pick?</strong> →
                                Default to Hybrid. It's ATS-friendly, impresses
                                recruiters, and works for everyone.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-slate-900 p-8 text-white">
                        <h2 className="mb-4 text-2xl font-bold">
                            Stop Formatting Manually
                        </h2>
                        <p className="mb-6 text-slate-200">
                            Choosing the right format is only half the battle.
                            The real challenge is implementing it without:
                        </p>
                        <ul className="mb-6 space-y-2 text-slate-200">
                            <li className="flex gap-2">
                                <span className="text-orange-500">✓</span>
                                <span>
                                    Wasting hours in Word trying to align things
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-orange-500">✓</span>
                                <span>
                                    Breaking formatting when you edit text
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-orange-500">✓</span>
                                <span>Creating an ATS-unfriendly PDF</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-orange-500">✓</span>
                                <span>Spending money on resume builders</span>
                            </li>
                        </ul>
                        <Link
                            href={APP_PATHS.GENERATE_RESUME}
                            className="inline-block rounded-lg bg-orange-500 px-8 py-3 font-semibold transition-all hover:bg-orange-600"
                        >
                            Try Our Free Resume Generator →
                        </Link>
                        <p className="mt-4 text-sm text-slate-400">
                            No signup. No hidden fees. No hassle.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 text-3xl font-bold text-slate-900">
                            30-Day Action Plan
                        </h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        Week 1: Choose Your Format
                                    </h4>
                                    <p className="text-slate-700">
                                        Decide on chronological, skills-based,
                                        or hybrid based on your career stage.
                                        Most people should choose hybrid.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        Week 1-2: Audit Your Content
                                    </h4>
                                    <p className="text-slate-700">
                                        Review your current resume. Remove vague
                                        bullet points and rewrite using the
                                        Action + Technology + Metric formula.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        Week 2-3: Build in Free Generator
                                    </h4>
                                    <p className="text-slate-700">
                                        Use a free resume generator to structure
                                        your resume in your chosen format. No
                                        design headaches. Automatic ATS
                                        optimization.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                                    4
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        Week 3-4: Customize for Jobs
                                    </h4>
                                    <p className="text-slate-700">
                                        For each target role, mirror 3-4
                                        keywords from the job description into
                                        your resume. Instant ATS boost.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                        <h3 className="mb-4 text-xl font-bold text-slate-900">
                            Key Takeaways
                        </h3>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex gap-3">
                                <CheckCircle
                                    size={20}
                                    className="mt-0.5 flex-shrink-0 text-orange-500"
                                />
                                <span>
                                    <strong>
                                        Hybrid format is best for most tech
                                        professionals:
                                    </strong>{' '}
                                    in 2025, it balances ATS requirements with
                                    recruiter preferences
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle
                                    size={20}
                                    className="mt-0.5 flex-shrink-0 text-orange-500"
                                />
                                <span>
                                    <strong>
                                        Choose based on your situation:
                                    </strong>{' '}
                                    Early career → Hybrid | Stable history →
                                    Chronological | Career change → Hybrid or
                                    Skills-Based
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle
                                    size={20}
                                    className="mt-0.5 flex-shrink-0 text-orange-500"
                                />
                                <span>
                                    <strong>
                                        Format is just the structure:
                                    </strong>{' '}
                                    Content matters more. Use the Action +
                                    Technology + Metric formula for every bullet
                                    point
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle
                                    size={20}
                                    className="mt-0.5 flex-shrink-0 text-orange-500"
                                />
                                <span>
                                    <strong>Avoid fancy formatting:</strong>{' '}
                                    Simple, clean, ATS-friendly resumes win.
                                    Free generators handle this automatically
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="rounded-lg border border-orange-200 bg-orange-50 p-8 text-center">
                    <h2 className="mb-4 text-2xl font-bold text-slate-900">
                        Ready to Build Your Resume?
                    </h2>
                    <p className="mb-6 text-lg text-slate-700">
                        Stop worrying about formatting. Use our free resume
                        generator to create a perfectly structured,
                        ATS-optimized resume in minutes.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Link
                            href={APP_PATHS.GENERATE_RESUME}
                            className="rounded-lg bg-slate-900 px-8 py-3 font-semibold text-white transition-all hover:bg-slate-800"
                        >
                            Create Your Resume Now
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-slate-600">
                        No Cost • No signup • Hassle free
                    </p>
                </section>
            </article>
        </main>
    );
}
