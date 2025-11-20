import { APP_NAME, CONTACT_EMAIL } from '@/app/constants/constants';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 md:p-10">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        Privacy Policy
                    </h1>

                    <div className="text-sm text-gray-500 mb-8">
                        Last Updated: August 15, 2025
                    </div>

                    <div className="space-y-8">
                        <section>
                            <p className="text-gray-600">
                                This Privacy Policy applies to {APP_NAME} (the
                                "Platform") owned and operated by {APP_NAME}{' '}
                                Inc. ("we", "us", or "our"). This Privacy Policy
                                describes how we collect, use, share, and
                                protect the personal information you provide
                                when using our resume builder.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                Information We Collect
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Information You Provide Directly:
                            </h3>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                                <li>
                                    Account information: name, email address,
                                    username, gender, profile photo, bio, and
                                    other personal details
                                </li>
                                <li>
                                    Professional information: job title, company
                                    name, website, social media links
                                </li>
                                <li>Contact and support communications</li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Information We Collect Automatically:
                            </h3>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                                <li>
                                    Device information: IP address, browser
                                    type, operating system, device identifiers
                                </li>
                                <li>
                                    Usage data: pages viewed, features used,
                                    time spent, click patterns, search queries
                                </li>
                                <li>
                                    Product interaction data: shares, bookmarks,
                                    and engagement metrics
                                </li>
                                <li>
                                    Location data: approximate location based on
                                    IP address
                                </li>
                                <li>
                                    Referral information: how you found our
                                    platform and traffic sources
                                </li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Information from Third Parties:
                            </h3>
                            <p className="text-gray-600 mb-3">
                                We may receive information about you from
                                third-party services when you connect your
                                accounts (such as Google, Twitter, LinkedIn,
                                GitHub) or when others tag or mention you on our
                                platform. We may also collect publicly available
                                information about products and makers to enhance
                                our directory and improve user experience.
                            </p>

                            <p className="text-gray-600 mt-3">
                                We use cookies, web beacons, and similar
                                tracking technologies to enhance your
                                experience, remember your preferences, analyze
                                usage patterns, and deliver personalized
                                content. You can control cookie settings through
                                your browser, though disabling cookies may limit
                                some platform features.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                How We Use Your Information
                            </h2>
                            <p className="text-gray-600 mb-3">
                                We use your information to:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                <li>
                                    Provide and improve our platform services
                                    and user experience
                                </li>
                                <li>
                                    Create and maintain your account and profile
                                </li>
                                <li>
                                    Send notifications about platform activity
                                </li>
                                <li>Generate analytics and insights</li>
                                <li>
                                    Prevent fraud, abuse, and ensure platform
                                    security
                                </li>
                                <li>
                                    Comply with legal obligations and enforce
                                    our terms of service
                                </li>
                                <li>
                                    Communicate with you about your account,
                                    support requests, and platform updates
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                Information Sharing and Disclosure
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Public Information:
                            </h3>
                            <p className="text-gray-600 mb-3">
                                Much of your activity on {APP_NAME} is public by
                                design, including your profile information, and
                                activities. This information may be visible to
                                other users, search engines, and accessed
                                through our API by third-party developers.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Service Providers:
                            </h3>
                            <p className="text-gray-600 mb-3">
                                We share information with trusted third-party
                                service providers who help us operate our
                                platform:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                                <li>Cloud hosting and data storage services</li>
                                <li>
                                    Email and notification delivery services
                                </li>
                                <li>
                                    Analytics and performance monitoring tools
                                </li>
                                <li>Payment processing for premium features</li>
                                <li>
                                    Customer support and communication platforms
                                </li>
                                <li>Security and fraud prevention services</li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Business Partners:
                            </h3>
                            <p className="text-gray-600 mb-3">
                                We may share aggregated, non-personally
                                identifiable information with partners,
                                investors, and sponsors.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Legal Requirements:
                            </h3>
                            <p className="text-gray-600 mb-3">
                                We may disclose your information when required
                                by law, to protect our rights or safety, prevent
                                fraud, or comply with legal processes such as
                                subpoenas, court orders, or government requests.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Business Transfers:
                            </h3>
                            <p className="text-gray-600">
                                If {APP_NAME} is involved in a merger,
                                acquisition, or sale of assets, your information
                                may be transferred. We will notify you via email
                                and prominent platform notice before your
                                information becomes subject to a different
                                privacy policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                Data Security and Retention
                            </h2>
                            <p className="text-gray-600 mb-3">
                                We implement appropriate technical and
                                organizational security measures to protect your
                                information against unauthorized access,
                                alteration, disclosure, or destruction. However,
                                no method of transmission or storage is 100%
                                secure.
                            </p>
                            <p className="text-gray-600">
                                We retain your information for as long as your
                                account is active, as needed to provide
                                services, comply with legal obligations, resolve
                                disputes, and enforce agreements. You can
                                request account deletion, though some
                                information may remain in our systems for
                                legitimate business purposes and legal
                                compliance.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                Your Rights and Choices
                            </h2>
                            <p className="text-gray-600 mb-3">
                                Depending on your location, you may have certain
                                rights regarding your personal information:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                                <li>
                                    Access and download your personal
                                    information
                                </li>
                                <li>
                                    Correct or update inaccurate information
                                </li>
                                <li>Delete your account and associated data</li>
                                <li>
                                    Object to or restrict certain processing
                                    activities
                                </li>
                                <li>
                                    Withdraw consent where processing is based
                                    on consent
                                </li>
                                <li>
                                    Data portability for information you've
                                    provided
                                </li>
                            </ul>
                            <p className="text-gray-600 mb-4">
                                You can exercise these rights through your
                                account settings or by contacting us. We will
                                respond to requests within the timeframes
                                required by applicable law.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Communication Preferences:
                            </h3>
                            <p className="text-gray-600">
                                You can control email notifications and
                                marketing communications through your account
                                settings or by using the unsubscribe link in our
                                emails. Note that you cannot opt out of certain
                                service-related communications necessary for
                                platform functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                International Data Transfers
                            </h2>
                            <p className="text-gray-600">
                                {APP_NAME} operates globally and may transfer
                                your information to countries other than where
                                you reside. We ensure appropriate safeguards are
                                in place to protect your information during
                                international transfers, including using
                                standard contractual clauses and working with
                                partners who provide adequate data protection.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibent text-gray-800 mb-3">
                                Children's Privacy
                            </h2>
                            <p className="text-gray-600">
                                {APP_NAME} is not intended for children under 13
                                years of age. We do not knowingly collect
                                personal information from children under 13. If
                                you believe a child has provided us with
                                personal information, please contact us
                                immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                Changes to This Privacy Policy
                            </h2>
                            <p className="text-gray-600">
                                We may update this Privacy Policy periodically
                                to reflect changes in our practices, technology,
                                legal requirements, or other factors. We will
                                notify you of material changes via email or
                                prominent platform notice before they take
                                effect. Your continued use of {APP_NAME} after
                                changes become effective constitutes acceptance
                                of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                Contact Us
                            </h2>
                            <p className="text-gray-600">
                                If you have questions, concerns, or requests
                                regarding this Privacy Policy or our data
                                practices, please contact us at:
                            </p>
                            <div className="mt-3 text-gray-600">
                                <p>Email: {CONTACT_EMAIL}</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
