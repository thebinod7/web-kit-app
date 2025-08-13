import { APP_TITLE, CONTACT_EMAIL } from '@/app/constants/constants';

export default function TermsOfService() {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 md:p-10">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        Terms of Service
                    </h1>

                    <div className="text-sm text-gray-500 mb-8">
                        Last Updated: August 13, 2025
                    </div>

                    <div className="space-y-6">
                        <section>
                            <p className="text-gray-600">
                                Welcome to {APP_TITLE}! These Terms of Service
                                ("Terms") govern your access to and use of {}
                                {APP_TITLE}'s website, services, and
                                applications (collectively, the "Platform"). By
                                creating an account, accessing, or using our
                                Platform, you agree to be bound by these Terms.
                            </p>
                            <p className="text-gray-600 mt-3">
                                If you are using our Platform on behalf of an
                                organization, you represent that you have the
                                authority to bind that organization to these
                                Terms, and "you" refers to both you and that
                                organization.
                            </p>
                            <p className="text-gray-600 mt-3">
                                {APP_TITLE} is a community platform for
                                discovering, sharing, and discussing innovative
                                products, startups, and digital tools. We
                                connect makers, entrepreneurs, and enthusiasts
                                in a collaborative environment.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                1. Account Registration and Eligibility
                            </h2>
                            <p className="text-gray-600 mb-3">
                                To access certain features of our Platform, you
                                must create an account. You agree to:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                <li>
                                    Be at least 13 years old (or the minimum age
                                    in your jurisdiction)
                                </li>
                                <li>
                                    Provide accurate, current, and complete
                                    information during registration
                                </li>
                                <li>
                                    Maintain and update your account information
                                </li>
                                <li>
                                    Keep your login credentials secure and
                                    confidential
                                </li>
                                <li>
                                    Be responsible for all activities under your
                                    account
                                </li>
                                <li>
                                    Notify us immediately of any unauthorized
                                    access
                                </li>
                            </ul>
                            <p className="text-gray-600 mt-3">
                                You may not create multiple accounts, use
                                automated tools to create accounts, or allow
                                others to use your account. We reserve the right
                                to suspend or terminate accounts that violate
                                these requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                2. Platform Usage and Community Guidelines
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                a. Acceptable Use
                            </h3>
                            <p className="text-gray-600 mb-3">
                                You may use our Platform to:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-3">
                                <li>
                                    Discover and explore innovative products and
                                    services
                                </li>
                                <li>
                                    Submit your own products for community
                                    feedback and exposure
                                </li>
                                <li>
                                    Vote, comment, and engage with the community
                                </li>
                                <li>
                                    Follow makers and products you're interested
                                    in
                                </li>
                                <li>
                                    Share products on social media and other
                                    platforms
                                </li>
                                <li>
                                    Participate in discussions and provide
                                    constructive feedback
                                </li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                b. Prohibited Activities
                            </h3>
                            <p className="text-gray-600 mb-3">You may NOT:</p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                <li>
                                    Submit false, misleading, or incomplete
                                    product information
                                </li>
                                <li>
                                    Manipulate voting through fake accounts,
                                    bots, or vote buying
                                </li>
                                <li>Spam, harass, or abuse other users</li>
                                <li>
                                    Post offensive, discriminatory, or
                                    inappropriate content
                                </li>
                                <li>
                                    Violate intellectual property rights or
                                    submit infringing content
                                </li>
                                <li>
                                    Share malicious software, phishing attempts,
                                    or security threats
                                </li>
                                <li>
                                    Scrape data without permission or overwhelm
                                    our servers
                                </li>
                                <li>
                                    Impersonate others or misrepresent your
                                    identity
                                </li>
                                <li>
                                    Engage in commercial activities outside
                                    approved channels
                                </li>
                                <li>
                                    Circumvent our systems, security measures,
                                    or rate limits
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                3. Product Submissions and Content
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                a. Submission Requirements
                            </h3>
                            <p className="text-gray-600 mb-3">
                                When submitting products to {APP_TITLE}, you
                                must:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-3">
                                <li>
                                    Provide accurate product information,
                                    descriptions, and media
                                </li>
                                <li>
                                    Have proper rights to submit and represent
                                    the product
                                </li>
                                <li>
                                    Ensure your product is functional and
                                    accessible
                                </li>
                                <li>
                                    Follow our content guidelines and quality
                                    standards
                                </li>
                                <li>
                                    Not submit duplicate or substantially
                                    similar products
                                </li>
                                <li>
                                    Respect launch dates and timing guidelines
                                </li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                b. Content Ownership and License
                            </h3>
                            <p className="text-gray-600 mb-3">
                                You retain ownership of content you submit to{' '}
                                {APP_TITLE}. However, by submitting content, you
                                grant us a worldwide, royalty-free,
                                non-exclusive license to:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-3">
                                <li>
                                    Display, distribute, and promote your
                                    content on our Platform
                                </li>
                                <li>
                                    Create derivative works for promotional and
                                    platform purposes
                                </li>
                                <li>
                                    Allow other users to share and interact with
                                    your content
                                </li>
                                <li>
                                    Use your content in marketing materials and
                                    communications
                                </li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                c. Content Moderation
                            </h3>
                            <p className="text-gray-600">
                                We reserve the right to review, modify, or
                                remove any content that violates these Terms,
                                our community guidelines, or applicable laws. We
                                may also feature, promote, or highlight certain
                                products at our discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                4. Voting System and Community Interactions
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                a. Fair Voting
                            </h3>
                            <p className="text-gray-600 mb-3">
                                Our voting system relies on authentic community
                                engagement. You agree to:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-3">
                                <li>
                                    Vote genuinely based on your opinion of
                                    products
                                </li>
                                <li>
                                    Not manipulate votes through artificial
                                    means
                                </li>
                                <li>
                                    Not coordinate vote campaigns or exchanges
                                </li>
                                <li>
                                    Respect the democratic nature of our
                                    community rankings
                                </li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                b. Comments and Discussions
                            </h3>
                            <p className="text-gray-600">
                                When participating in discussions, maintain
                                respectful, constructive dialogue. Provide
                                helpful feedback, ask meaningful questions, and
                                contribute positively to the community
                                conversation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                5. Intellectual Property Rights
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                a. Platform Ownership
                            </h3>
                            <p className="text-gray-600 mb-3">
                                {APP_TITLE} owns all rights to our Platform,
                                including but not limited to:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-3">
                                <li>
                                    Website design, layout, and user interface
                                </li>
                                <li>
                                    Software, algorithms, and technical
                                    infrastructure
                                </li>
                                <li>
                                    Branding, logos, and proprietary content
                                </li>
                                <li>Data analytics and community insights</li>
                                <li>
                                    Features, functionality, and innovations
                                </li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                b. DMCA Compliance
                            </h3>
                            <p className="text-gray-600">
                                We respect intellectual property rights and
                                comply with the Digital Millennium Copyright Act
                                (DMCA). If you believe content on our Platform
                                infringes your copyright, please contact our
                                designated agent with proper notice.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                c. User Feedback and Suggestions
                            </h3>
                            <p className="text-gray-600">
                                Any feedback, suggestions, or ideas you provide
                                about {APP_TITLE} become our property. We may
                                use this feedback to improve our Platform
                                without compensation or attribution to you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                6. Premium Features and Payments
                            </h2>
                            <p className="text-gray-600 mb-3">
                                We may offer premium features, promotional
                                opportunities, or paid services. Additional
                                terms may apply to these offerings, including:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                <li>Subscription fees and billing terms</li>
                                <li>Refund and cancellation policies</li>
                                <li>
                                    Enhanced product promotion and visibility
                                </li>
                                <li>Priority customer support</li>
                                <li>Analytics and insights access</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                7. Privacy and Data Protection
                            </h2>
                            <p className="text-gray-600">
                                Your privacy is important to us. Our Privacy
                                Policy, incorporated by reference into these
                                Terms, explains how we collect, use, and protect
                                your information. By using our Platform, you
                                consent to our data practices as described in
                                the Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                8. Third-Party Services and Links
                            </h2>
                            <p className="text-gray-600">
                                Our Platform may contain links to third-party
                                websites, products, or services. We are not
                                responsible for the content, privacy practices,
                                or terms of these third parties. Your
                                interactions with external services are governed
                                by their respective terms and policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                9. Disclaimers and Limitations
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                a. Service Availability
                            </h3>
                            <p className="text-gray-600 mb-3">
                                We strive to maintain Platform availability but
                                cannot guarantee uninterrupted service. We may
                                experience downtime for maintenance, updates, or
                                technical issues.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                b. Content Disclaimer
                            </h3>
                            <p className="text-gray-600 mb-3">
                                Products and content on our Platform are
                                submitted by users. We do not endorse, verify,
                                or guarantee the accuracy, quality, or safety of
                                submitted products. Users interact with products
                                and makers at their own risk.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                c. Warranty Disclaimer
                            </h3>
                            <p className="text-gray-600 uppercase">
                                OUR PLATFORM IS PROVIDED "AS IS" WITHOUT
                                WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
                                INCLUDING MERCHANTABILITY, FITNESS FOR A
                                PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO
                                NOT WARRANT THAT OUR SERVICE WILL BE ERROR-FREE,
                                SECURE, OR CONTINUOUSLY AVAILABLE.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                10. Limitation of Liability
                            </h2>
                            <p className="text-gray-600 uppercase mb-3">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW,{' '}
                                {APP_TITLE} SHALL NOT BE LIABLE FOR ANY
                                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                                PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA
                                LOSS, OR BUSINESS INTERRUPTION, ARISING FROM
                                YOUR USE OF OUR PLATFORM.
                            </p>
                            <p className="text-gray-600">
                                Our total liability to you for any claims
                                arising from these Terms or your use of our
                                Platform shall not exceed $100 or the amount you
                                paid us in the 12 months preceding the claim,
                                whichever is greater.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                11. Indemnification
                            </h2>
                            <p className="text-gray-600">
                                You agree to defend, indemnify, and hold{' '}
                                {APP_TITLE} harmless from any claims, damages,
                                losses, or expenses (including reasonable
                                attorney fees) arising from:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                                <li>
                                    Your violation of these Terms or applicable
                                    laws
                                </li>
                                <li>Your content or product submissions</li>
                                <li>
                                    Your interactions with other users or third
                                    parties
                                </li>
                                <li>
                                    Your infringement of intellectual property
                                    or other rights
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                12. Account Termination
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                a. Termination by You
                            </h3>
                            <p className="text-gray-600 mb-3">
                                You may delete your account at any time through
                                your account settings. Upon termination, we will
                                deactivate your account and may retain certain
                                information as required by law or legitimate
                                business purposes.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                b. Termination by Us
                            </h3>
                            <p className="text-gray-600 mb-3">
                                We may suspend or terminate your account if you:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-3">
                                <li>
                                    Violate these Terms or community guidelines
                                </li>
                                <li>
                                    Engage in fraudulent or harmful activities
                                </li>
                                <li>
                                    Create security risks or technical problems
                                </li>
                                <li>
                                    Infringe on intellectual property rights
                                </li>
                                <li>Remain inactive for extended periods</li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                c. Effect of Termination
                            </h3>
                            <p className="text-gray-600">
                                Upon termination, your right to use our Platform
                                ceases immediately. We may remove or disable
                                your content, though some information may remain
                                visible in community discussions and historical
                                records.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                13. Dispute Resolution
                            </h2>
                            <p className="text-gray-600 mb-3">
                                We encourage resolving disputes through direct
                                communication. For formal disputes, the
                                following process applies:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                <li>
                                    Contact our support team to attempt
                                    resolution
                                </li>
                                <li>
                                    Participate in good faith mediation if
                                    required
                                </li>
                                <li>
                                    Submit to binding arbitration for unresolved
                                    matters
                                </li>
                                <li>
                                    Disputes shall be governed by [Your
                                    Jurisdiction] law
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                14. Changes to Terms
                            </h2>
                            <p className="text-gray-600 mb-3">
                                We may update these Terms periodically to
                                reflect changes in our Platform, legal
                                requirements, or business practices. We will
                                notify you of material changes through:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-3">
                                <li>
                                    Email notification to your registered
                                    address
                                </li>
                                <li>Prominent notice on our Platform</li>
                                <li>
                                    In-app notifications for significant changes
                                </li>
                            </ul>
                            <p className="text-gray-600">
                                Your continued use of our Platform after changes
                                become effective constitutes acceptance of the
                                updated Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                15. General Provisions
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                a. Entire Agreement
                            </h3>
                            <p className="text-gray-600 mb-3">
                                These Terms, together with our Privacy Policy
                                and any additional terms for specific features,
                                constitute the entire agreement between you and{' '}
                                {APP_TITLE}.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                b. Severability
                            </h3>
                            <p className="text-gray-600 mb-3">
                                If any provision of these Terms is found to be
                                unenforceable, the remaining provisions will
                                continue in full force and effect.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                c. Assignment
                            </h3>
                            <p className="text-gray-600 mb-3">
                                You may not assign these Terms without our
                                written consent. We may assign our rights and
                                obligations under these Terms as part of a
                                merger, acquisition, or sale of assets.
                            </p>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                d. Contact Information
                            </h3>
                            <p className="text-gray-600">
                                For questions about these Terms or our Platform,
                                contact us at:
                            </p>
                            <div className="mt-2 text-gray-600">
                                <p>Support: {CONTACT_EMAIL}</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
