import { APP_NAME, CONTACT_EMAIL } from '@/app/constants/constants';

export default function TermsOfService() {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 md:p-10">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        Terms of Service
                    </h1>

                    <div className="text-sm text-gray-500 mb-8">
                        Last Updated: August 15, 2025
                    </div>

                    <div className="space-y-6">
                        <section>
                            <p className="text-gray-600">
                                Welcome to {APP_NAME}! These Terms of Service
                                ("Terms") govern your access to and use of {}
                                {APP_NAME}'s website, services, and applications
                                (collectively, the "Platform"). By creating an
                                account, accessing, or using our Platform, you
                                agree to be bound by these Terms.
                            </p>
                            <p className="text-gray-600 mt-3">
                                If you are using our Platform on behalf of an
                                organization, you represent that you have the
                                authority to bind that organization to these
                                Terms, and "you" refers to both you and that
                                organization.
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
                                    Be at least 16 years old (or the minimum age
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
                                <li>Create and dowload free resume.</li>
                                <li>Update your profile and preferences</li>
                                <li>Browse and use resume templates</li>
                                <li>Update resume and download templates</li>
                                <li>
                                    Use all the free tools available on our site
                                </li>
                            </ul>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                b. Prohibited Activities
                            </h3>
                            <p className="text-gray-600 mb-3">You may NOT:</p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                <li>
                                    Submit false, misleading, or incomplete
                                    information
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
                                    Circumvent our systems, security measures,
                                    or rate limits
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                3. Intellectual Property Rights
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                a. Platform Ownership
                            </h3>
                            <p className="text-gray-600 mb-3">
                                {APP_NAME} owns all rights to our Platform,
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
                                about {APP_NAME} become our property. We may use
                                this feedback to improve our Platform without
                                compensation or attribution to you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                4. Premium Features and Payments
                            </h2>
                            <p className="text-gray-600 mb-3">
                                We may offer premium features, promotional
                                opportunities, or paid services. Additional
                                terms may apply to these offerings, including:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                <li>Subscription fees and billing terms</li>
                                <li>Refund and cancellation policies</li>
                                <li>Priority customer support</li>
                                <li>Analytics and insights access</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                5. Privacy and Data Protection
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
                                6. Third-Party Services and Links
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
                                7. Disclaimers and Limitations
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
                                b. Warranty Disclaimer
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
                                8. Limitation of Liability
                            </h2>
                            <p className="text-gray-600 uppercase mb-3">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW,{' '}
                                {APP_NAME} SHALL NOT BE LIABLE FOR ANY INDIRECT,
                                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                                DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR
                                BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF
                                OUR PLATFORM.
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
                                9. Indemnification
                            </h2>
                            <p className="text-gray-600">
                                You agree to defend, indemnify, and hold{' '}
                                {APP_NAME} harmless from any claims, damages,
                                losses, or expenses (including reasonable
                                attorney fees) arising from:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
                                <li>
                                    Your violation of these Terms or applicable
                                    laws
                                </li>
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
                                10. Account Termination
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
                                11. Dispute Resolution
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
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                12. Changes to Terms
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
                                13. General Provisions
                            </h2>

                            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                                a. Entire Agreement
                            </h3>
                            <p className="text-gray-600 mb-3">
                                These Terms, together with our Privacy Policy
                                and any additional terms for specific features,
                                constitute the entire agreement between you and{' '}
                                {APP_NAME}.
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
