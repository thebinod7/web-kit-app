import { ChevronDown } from 'lucide-react';
import { APP_TITLE } from '../constants/constants';
import HeaderH2 from '@/components/mini/HeaderH2';

const faqItems = [
    {
        question: 'What is this platform and how does it work?',
        answer: 'This platform is a community-driven hub where makers, developers, and founders launch and showcase their digital products. Users can explore trending tools, upvote their favorites, and engage with creators through comments and feedback.',
    },
    {
        question: 'Who can submit a product?',
        answer: "Anyone with a product, be it an app, website, SaaS tool, or digital service can submit it. Whether you're a solo indie hacker, startup founder, or creative agency, you're welcome to launch and get discovered.",
    },
    {
        question: 'Is it free to launch a product?',
        answer: 'Yes, launching your product is completely free. We believe in giving every creator a fair chance to get exposure, regardless of budget or background.',
    },
    {
        question: 'Can I launch the same product more than once?',
        answer: 'Yes, you can relaunch your product if there have been significant updates, new features, or major changes. Relaunching helps bring renewed attention and feedback from the community.',
    },
    {
        question: 'Can I edit my product after submission?',
        answer: 'Absolutely. You can update your product description, images, links, and other details at any time from your dashboard to keep things fresh and accurate.',
    },
    {
        question: 'Do I need an account to explore or upvote products?',
        answer: 'You can browse and explore products freely, but you willll need to create an account to upvote, comment, or submit your own product. Signing up helps us keep the community genuine and engaged.',
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
