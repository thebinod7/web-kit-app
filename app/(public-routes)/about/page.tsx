import { APP_PATHS } from '@/app/constants/api';
import { APP_NAME, CONTACT_EMAIL } from '@/app/constants/constants';
import Link from 'next/link';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-700">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        {APP_NAME}
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Build professional resumes online quickly and easily
                        with our free resume maker. No sign-up required, no
                        fees—just customizable templates designed for job
                        seekers, students, and career changers.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Mission Section */}
                <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        About Us
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Welcome to {APP_NAME}, your go-to platform for creating
                        professional resumes—absolutely free and with zero
                        sign-up required. Our mission is simple: empower job
                        seekers to build modern, polished resumes effortlessly,
                        without jumping through unnecessary hoops.
                    </p>
                    <p className="text-lg text-gray-700">
                        Whether you’re searching for your first job or taking
                        the next step in your career, {APP_NAME} {}
                        streamlines the process. Easily choose from expertly
                        designed templates, edit your resume online, and
                        instantly download in PDF format—no accounts, no fees,
                        and no limitations. Your privacy and convenience are our
                        top priorities, so you can create, update, and save your
                        resume as often as you need—all without sharing personal
                        information or creating an account.
                    </p>

                    <p className="text-lg text-gray-700">
                        Thousands of users trust {APP_NAME} to quickly build
                        winning resumes that stand out to recruiters. Try it
                        today and get hired faster—no registration, no strings
                        attached. Start building your future now!
                    </p>
                </section>

                {/* Impact Section */}
                {/* <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Our Impact
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                10K+
                            </div>
                            <div className="text-gray-700">
                                Products Launched
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600 mb-2">
                                500K+
                            </div>
                            <div className="text-gray-700">
                                Community Members
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600 mb-2">
                                $100M+
                            </div>
                            <div className="text-gray-700">
                                Funding Raised by Our Makers
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-gray-700 mt-6 max-w-2xl mx-auto">
                        Behind every number is a story of innovation,
                        collaboration, and success. We're proud to have played a
                        part in connecting great products with the people who
                        love them.
                    </p>
                </section> */}

                {/* Team Section */}
                <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Our Team
                    </h2>
                    <p className="text-gray-700 mb-6">
                        We're a diverse team of makers, designers, engineers,
                        and product enthusiasts who are passionate about
                        building the future of product discovery. Based around
                        the world but united by our mission, we work remotely
                        while staying closely connected to our community.
                    </p>
                </section>

                {/* Contact Section */}
                <section className="bg-white rounded-lg shadow-sm p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Have questions, feedback, or just want to say hello?
                        We'd love to hear from you.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                General Inquiries
                            </h3>
                            <p className="text-gray-700 mb-2">
                                Email: {CONTACT_EMAIL}
                            </p>
                            <p className="text-gray-700">
                                Response time: Within 24 hours
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-gray-600">
                            Follow us on social media for the latest updates,
                            featured products, and community highlights.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
