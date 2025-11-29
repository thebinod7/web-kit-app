import type { Metadata } from 'next';
import { ChevronRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { BLOG_ARTICLES } from '@/app/constants/db';

const currentArticle = BLOG_ARTICLES.find(
    (f) => f.slug === 'create-developer-resume-guide-2025-2026'
);

export const metadata: Metadata = {
    title: currentArticle?.title,
    description: currentArticle?.excerpt,
    keywords: [
        'developer resume',
        'software engineer resume',
        'ATS resume',
        'resume template',
        'resume format',
        'technical resume',
        'how to write resume',
        'resume tips',
        'career growth',
        'job interview',
        'hiring managers',
    ],
    openGraph: {
        title: currentArticle?.title,
        description: currentArticle?.excerpt,
        type: 'article',
    },
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Blog Article */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                            Career Guide
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {currentArticle?.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        {currentArticle?.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500">
                        <time dateTime="2025-01-15">
                            {currentArticle?.category}
                        </time>
                        <span className="hidden sm:block">•</span>
                        <span>{currentArticle?.readTime}</span>
                        <span className="hidden sm:block">•</span>
                        <span>Updated for {currentArticle?.date}</span>
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
                            'Why Your Developer Resume Matters in 2025',
                            'The ATS Resume Secret: How Hiring Managers Actually Read Your Resume',
                            'Developer Resume Structure: What Hiring Managers Want to See',
                            '7 Essential Sections Every Developer Resume Needs',
                            'How to Write Developer Resume That Stands Out',
                            'Common Developer Resume Mistakes to Avoid',
                            'Free Tools to Perfect Your Developer Resume',
                            'Action Plan: Create Your Winning Resume in 30 Minutes',
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
                <div className="prose prose-lg max-w-none space-y-12">
                    {/* Section 1 */}
                    <section id="section-0">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Why Your Developer Resume Matters in 2025
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In 2025-2026, the tech job market is more
                            competitive than ever. With AI tools automating
                            resume screening and hiring managers spending less
                            than 30 seconds reviewing each resume, your
                            developer resume needs to be both strategically
                            formatted and genuinely impressive.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The truth? Your resume is your first impression. It
                            determines whether you get the interview or get
                            filtered out by Applicant Tracking Systems (ATS). A
                            well-crafted developer resume doesn't just list your
                            jobs—it tells the story of a capable engineer who
                            solves real problems and delivers results.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section id="section-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            The ATS Resume Secret: How Hiring Managers Actually
                            Read Your Resume
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Before a human ever sees your resume, it passes
                            through an Applicant Tracking System (ATS). This
                            software scans for keywords and checks if your
                            resume format is compatible. If your resume fails
                            the ATS scan, it never reaches the hiring manager's
                            desk.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-orange-500 p-6 my-6">
                            <p className="text-gray-900 font-semibold mb-2">
                                💡 Pro Tip: ATS-Friendly Formatting
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    • Use standard fonts: Arial, Calibri, or
                                    similar
                                </li>
                                <li>
                                    • Avoid graphics, tables, and columns that
                                    confuse ATS
                                </li>
                                <li>
                                    • Use standard section headers (Experience,
                                    Skills, Education)
                                </li>
                                <li>
                                    • Include keywords from the job description
                                    naturally
                                </li>
                                <li>• Save as PDF or DOCX for compatibility</li>
                            </ul>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            After passing ATS, your resume lands in front of
                            hiring managers who spend an average of 7-9 seconds
                            on the first scan. They're looking for quick wins:
                            Have you done similar work? Do you have the required
                            skills? Can you prove you deliver results?
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section id="section-2">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Developer Resume Structure: What Hiring Managers
                            Want to See
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Hiring managers want to quickly understand your
                            qualifications. Use this proven structure to guide
                            them through your resume:
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Header (Contact Information)',
                                    desc: 'Name, email, phone, LinkedIn, GitHub, portfolio',
                                },
                                {
                                    title: 'Professional Summary or Headline',
                                    desc: '2-3 lines describing your role and impact (optional but effective)',
                                },
                                {
                                    title: 'Technical Skills',
                                    desc: 'Languages, frameworks, tools, databases (ATS keywords here)',
                                },
                                {
                                    title: 'Professional Experience',
                                    desc: 'Your most recent and relevant positions with measurable achievements',
                                },
                                {
                                    title: 'Projects or Portfolio',
                                    desc: 'Notable projects with links to live demos or GitHub',
                                },
                                {
                                    title: 'Education',
                                    desc: 'Degree, university, graduation date (placement varies)',
                                },
                                {
                                    title: 'Certifications',
                                    desc: 'AWS, Google Cloud, Azure, or relevant technical certifications',
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-orange-500 mt-0.5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section id="section-3">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            7 Essential Sections Every Developer Resume Needs
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Let's dig deeper into each section and how to
                            maximize its impact:
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    num: '1',
                                    title: 'Contact Information & Header',
                                    tips: [
                                        'Make your GitHub and LinkedIn clickable',
                                        'Include your portfolio URL if you have one',
                                        'Use a professional email address',
                                        'Optional: Add your location (timezone matters for remote jobs)',
                                    ],
                                },
                                {
                                    num: '2',
                                    title: 'Professional Summary (2-3 lines)',
                                    tips: [
                                        "Example: 'Full-stack engineer with 5 years building scalable SaaS products for 100K+ users. Expertise in React, Node.js, and AWS. Delivered 3 major features that increased user retention by 40%.'",
                                        'Include your specialty and quantifiable impact',
                                        'Tailor it slightly for each job application',
                                    ],
                                },
                                {
                                    num: '3',
                                    title: 'Technical Skills (Organized by Category)',
                                    tips: [
                                        'Languages: JavaScript, TypeScript, Python, Go',
                                        'Frontend: React, Next.js, Vue.js, TailwindCSS',
                                        'Backend: Node.js, Express, Django, PostgreSQL',
                                        'Tools: Docker, Git, AWS, CI/CD pipelines',
                                        "Avoid listing every tool—focus on what you're strong in",
                                    ],
                                },
                                {
                                    num: '4',
                                    title: 'Professional Experience (Impact-Focused)',
                                    tips: [
                                        'Use action verbs: Built, Led, Optimized, Deployed, Scaled',
                                        'Include metrics: 40% faster, 3 products shipped, $2M revenue',
                                        'Format: Role Title | Company Name | Month Year – Month Year',
                                        'Highlight problems you solved, not just duties performed',
                                    ],
                                },
                                {
                                    num: '5',
                                    title: 'Notable Projects or Portfolio',
                                    tips: [
                                        'Link to live demo or GitHub repo',
                                        'Include 2-3 projects that showcase your best work',
                                        'Describe the technical challenge and your solution',
                                        "Example impact: 'Reduced API response time by 60% with caching strategy'",
                                    ],
                                },
                                {
                                    num: '6',
                                    title: 'Education',
                                    tips: [
                                        'Degree, Major | University | Graduation Date',
                                        "Only include GPA if it's 3.5 or above",
                                        'Include relevant coursework only if you lack experience',
                                        "No need to list education first unless you're a new graduate",
                                    ],
                                },
                                {
                                    num: '7',
                                    title: 'Certifications & Awards',
                                    tips: [
                                        'AWS Certified Solutions Architect, Google Cloud Professional',
                                        'Keep this section brief unless highly relevant',
                                        'Only include certifications within the last 3 years',
                                    ],
                                },
                            ].map((section) => (
                                <div key={section.num}>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {section.num}. {section.title}
                                    </h3>
                                    <ul className="space-y-2 text-gray-700 pl-6 border-l-2 border-orange-200">
                                        {section.tips.map((tip, idx) => (
                                            <li key={idx}>• {tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section id="section-4">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            How to Write a Developer Resume That Stands Out
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here's where most developer resumes fail: they're
                            generic. They list what you did, not what you
                            achieved.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold text-slate-900 mb-2">
                                    ❌ Weak Example:
                                </p>
                                <p className="text-gray-600 italic">
                                    "Responsible for fixing bugs and writing
                                    code for the backend API."
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-slate-900 mb-2">
                                    ✅ Strong Example:
                                </p>
                                <p className="text-gray-600 italic">
                                    "Architected and deployed a
                                    microservices-based backend API using
                                    Node.js and PostgreSQL, reducing page load
                                    time by 62% and improving API response time
                                    from 2.3s to 400ms. Wrote comprehensive unit
                                    tests (95% coverage) that prevented 40+
                                    production bugs."
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mt-6">
                            The difference? Specificity, metrics, and business
                            impact. Always ask yourself: "How did this work help
                            the company or users?" That's what hiring managers
                            want to know.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section id="section-5">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Common Developer Resume Mistakes to Avoid
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Don't fall into these common traps that get your
                            resume rejected:
                        </p>

                        <div className="space-y-4">
                            {[
                                'Long resumes: Keep it to 1 page if you have < 5 years experience, max 2 pages',
                                "Irrelevant experience: Don't list every job—focus on tech roles that matter",
                                'No metrics: Every achievement should include a number (%, faster, saved, improved)',
                                'Poor formatting: Use consistent spacing, font sizes, and alignment',
                                "Soft skills only: 'Team player' and 'communication' don't prove you can code",
                                "Outdated technologies: Remove technologies you haven't used in 5+ years",
                                'Grammar errors: Proofread multiple times—one typo can get you filtered',
                            ].map((mistake, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-3 p-4 bg-red-50 rounded-lg border border-red-100"
                                >
                                    <span className="text-red-500 font-bold flex-shrink-0">
                                        •
                                    </span>
                                    <p className="text-gray-700">{mistake}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section id="section-6">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Free Tools to Perfect Your Developer Resume
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            You don't need expensive resume builders. Here are
                            free tools that actually work:
                        </p>

                        <div className="grid gap-4">
                            {[
                                {
                                    tool: 'ResumeKit (Our Tool)',
                                    desc: 'Free resume generator built for developers. Create, format, and download instantly. No signup required.',
                                },
                                {
                                    tool: 'Grammarly',
                                    desc: 'Catches grammar and spelling errors. Free version covers basics; premium checks tone and clarity.',
                                },
                                {
                                    tool: 'ATS Resume Checker',
                                    desc: "Several free online tools check if your resume passes ATS scanning. Search 'ATS resume checker' for options.",
                                },
                                {
                                    tool: 'GitHub Copilot',
                                    desc: 'Use AI to help write bullet points that quantify impact and sound professional.',
                                },
                                {
                                    tool: 'Canva',
                                    desc: 'If you want a visually formatted resume, Canva has free developer resume templates (though keep it ATS-safe).',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 p-6 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors"
                                >
                                    <h3 className="font-semibold text-slate-900 mb-2">
                                        {item.tool}
                                    </h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section id="section-7">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Action Plan: Create Your Winning Resume in 30
                            Minutes
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Ready to build your resume? Here's a simple
                            step-by-step process:
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    step: '1',
                                    time: '5 minutes',
                                    task: 'Set up your header with name, email, phone, LinkedIn, GitHub',
                                },
                                {
                                    step: '2',
                                    time: '3 minutes',
                                    task: 'Write your 2-3 line professional summary with quantifiable impact',
                                },
                                {
                                    step: '3',
                                    time: '5 minutes',
                                    task: 'List your technical skills organized by category',
                                },
                                {
                                    step: '4',
                                    time: '10 minutes',
                                    task: 'Write 3-4 bullet points for each job, focusing on achievements with metrics',
                                },
                                {
                                    step: '5',
                                    time: '3 minutes',
                                    task: 'Add your top 2-3 projects with links',
                                },
                                {
                                    step: '6',
                                    time: '2 minutes',
                                    task: 'Proofread, format, download as PDF',
                                },
                            ].map((item) => (
                                <div
                                    key={item.step}
                                    className="flex gap-4 items-start p-4 border border-gray-200 rounded-lg"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">
                                            {item.step}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-slate-900">
                                            {item.task}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {item.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* CTA Section */}
                <section className="mt-16 pt-12 border-t border-gray-200">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Create Your Perfect Resume?
                        </h2>
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                            Use ResumeKit to format and export your resume
                            instantly. Free, no signup needed, optimized for ATS
                            and hiring managers.
                        </p>
                        <a
                            href="/"
                            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors"
                        >
                            Create Your Resume Now
                        </a>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">
                        Common Questions About Developer Resumes
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                q: 'How long should a developer resume be?',
                                a: 'One page if you have less than 5 years of experience, 1-2 pages if you have 5+ years. More than 2 pages is rarely necessary.',
                            },
                            {
                                q: 'Should I include a photo on my developer resume?',
                                a: "No. Unless you're applying for a sales role, photos can introduce bias. Most hiring managers prefer tech skills over appearance.",
                            },
                            {
                                q: "What if I don't have formal work experience?",
                                a: 'Build projects. Create a portfolio with 3-5 projects on GitHub showing your skills. Link to them on your resume.',
                            },
                            {
                                q: 'How often should I update my resume?',
                                a: 'Update it whenever you achieve a major accomplishment, complete a certification, or before applying for a new role. At least every 6 months.',
                            },
                            {
                                q: 'Should I customize my resume for each job?',
                                a: 'Yes. Tailor your professional summary and reorder your experience based on the job description. Use keywords from the job posting.',
                            },
                            {
                                q: 'How do I know if my resume will pass ATS?',
                                a: 'Use a free ATS checker tool online. Keep formatting simple (no tables, graphics, or columns), use standard fonts, and include relevant keywords naturally.',
                            },
                        ].map((item, idx) => (
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
            </article>
        </main>
    );
}
