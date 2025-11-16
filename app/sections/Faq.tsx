import { ChevronDown } from 'lucide-react';
import { APP_TITLE } from '../constants/constants';
import HeaderH2 from '@/components/mini/HeaderH2';

const faqItems = [
    {
        question: 'Is the resume generator completely free to use?',
        answer: 'Yes! Our resume generator is 100% free. You can create, edit, download, and share your resume without any hidden fees or subscriptions.',
    },
    {
        question: 'Do I need to create an account to build my resume?',
        answer: 'No. You can start building your resume instantly without signing up. However, creating an account lets you save multiple resumes and access them anytime.',
    },
    {
        question: 'In which format can I download my resume?',
        answer: 'You can download your resume in PDF format, which is universally accepted by employers and ATS-friendly.',
    },
    {
        question: 'Is the resume template ATS-friendly?',
        answer: 'Yes. All our templates are designed to be Applicant Tracking System (ATS) friendly so your resume passes automated filters used by employers.',
    },
    {
        question: 'Can I edit my resume after downloading it?',
        answer: 'Absolutely. You can return anytime, load your saved resume, and make unlimited edits before downloading the updated version.',
    },
];

export default function Faq() {
    return (
        <section className="w-full py-24 bg-gray-50">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto mb-12">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212B36]"></h2>
                    <HeaderH2 text=" Frequently Asked Questions" />
                    <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Know your way around {APP_TITLE}.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <details
                            key={index}
                            className="group border-b border-gray-200 pb-4"
                        >
                            <summary className="flex items-center justify-between cursor-pointer py-4 font-semibold text-lg text-[#212B36] hover:text-gray-700 transition-colors duration-200">
                                {item.question}
                                <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" />
                            </summary>
                            <div className="pt-2 pb-4 text-gray-600 leading-relaxed">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
