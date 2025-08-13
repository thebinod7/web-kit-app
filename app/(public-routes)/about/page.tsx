import { APP_PATHS } from '@/app/constants/api';
import { APP_TITLE, CONTACT_EMAIL } from '@/app/constants/constants';
import Link from 'next/link';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-500 to-slate-600">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        About {APP_TITLE}
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        We're building the world's most vibrant community for
                        discovering, launching, and celebrating innovative
                        products that shape the future.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Mission Section */}
                <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Our Mission
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        At {APP_TITLE}, we believe that innovation thrives when
                        great minds connect. Our mission is to democratize
                        product discovery by creating a platform where makers,
                        entrepreneurs, and enthusiasts can share their creations
                        with a global community of early adopters and industry
                        experts.
                    </p>
                    <p className="text-lg text-gray-700">
                        We're not just another product directory, we're the
                        launchpad where tomorrow's game-changing products meet
                        the people who will champion them. Every day, we help
                        innovative products find their first users, investors,
                        and advocates.
                    </p>
                </section>

                {/* Story Section */}
                <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Our Story
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Back in 2025, we started {APP_TITLE} because we were
                        tired of seeing amazing products get lost in the endless
                        noise of the internet. As makers ourselves, we knew how
                        hard it was to launch something new and actually get
                        noticed. So, we set out to create a friendly,
                        community-powered space where great ideas could shine.
                    </p>
                    <p className="text-gray-700 mb-4">
                        What began as a small weekend project quickly turned
                        into something way bigger than we imagined. We weren’t
                        just building a place to find new products, we were
                        building a home for makers, a place to connect with
                        like-minded people, share ideas, and help each other
                        grow.
                    </p>
                    <p className="text-gray-700">
                        Today, {APP_TITLE} brings together thousands of makers
                        and discoverers of curious minds every day to discover
                        the next big thing in tech, design, productivity, and
                        beyond.
                    </p>
                </section>

                {/* What We Do Section */}
                <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        What We Do
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                For Makers
                            </h3>
                            <p className="text-gray-700">
                                We provide the perfect stage for launching your
                                product. Get discovered by early adopters,
                                receive valuable feedback, build your reputation
                                in the maker community, and connect with
                                potential customers, investors, and
                                collaborators.
                            </p>
                        </div>

                        <div className="border-l-4 border-purple-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                For Discoverers
                            </h3>
                            <p className="text-gray-700">
                                Stay ahead of the curve by discovering
                                innovative products before they go mainstream.
                                Connect with like-minded enthusiasts, influence
                                the direction of new products, and be part of
                                the innovation conversation.
                            </p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                For Investors
                            </h3>
                            <p className="text-gray-700">
                                Identify promising startups and products early
                                in their journey. Access comprehensive
                                analytics, community sentiment data, and connect
                                directly with founding teams building the next
                                big thing.
                            </p>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                For Companies
                            </h3>
                            <p className="text-gray-700">
                                Launch new features, gather market feedback,
                                recruit top talent from our maker community, and
                                stay informed about emerging trends and
                                competitive landscape in your industry.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Our Values
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-bold">
                                    1
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    Community First
                                </h3>
                                <p className="text-gray-700">
                                    Everything we do is designed to strengthen
                                    our community. We prioritize authentic
                                    connections, meaningful interactions, and
                                    mutual support among makers and discoverers.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <span className="text-purple-600 font-bold">
                                    2
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    Quality Over Quantity
                                </h3>
                                <p className="text-gray-700">
                                    We curate carefully to ensure our platform
                                    showcases truly innovative, well-crafted
                                    products. Every submission matters, and
                                    every maker deserves genuine attention and
                                    feedback.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 font-bold">
                                    3
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    Transparency
                                </h3>
                                <p className="text-gray-700">
                                    We believe in open, honest communication.
                                    Our algorithms, policies, and
                                    decision-making processes are transparent.
                                    We're accountable to our community and
                                    responsive to feedback.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                <span className="text-orange-600 font-bold">
                                    4
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    Innovation
                                </h3>
                                <p className="text-gray-700">
                                    We constantly evolve our platform to better
                                    serve makers and discoverers. We embrace new
                                    technologies, experiment with features, and
                                    aren't afraid to challenge the status quo.
                                </p>
                            </div>
                        </div>
                    </div>
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

                {/* Community Section */}
                <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Join Our Community
                    </h2>
                    <p className="text-gray-700 mb-6">
                        {APP_TITLE} is more than a platform, it's a movement.
                        Whether you're a seasoned entrepreneur, a curious early
                        adopter, or somewhere in between, there's a place for
                        you in our community.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">
                                For Makers
                            </h3>
                            <p className="text-gray-900 mb-4">
                                Ready to launch your product? Join thousands of
                                makers who've found their audience, gained
                                valuable feedback, and built successful
                                businesses on our platform.
                            </p>
                            <Link
                                href={APP_PATHS.SUBMIT_PRODUCT}
                                className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
                            >
                                Submit Your Product
                            </Link>
                        </div>

                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-orange-800 mb-2">
                                For Discoverers
                            </h3>
                            <p className="text-gray-900 mb-4">
                                Love being first to try new products? Join our
                                community of early adopters and help shape the
                                products that will define tomorrow.
                            </p>
                            <Link
                                href={APP_PATHS.PRODUCTS}
                                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
                            >
                                Explore Products
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-white rounded-lg shadow-sm p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Have questions, feedback, or just want to say hello?
                        We'd love to hear from you. Our team is always excited
                        to connect with our community members.
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
