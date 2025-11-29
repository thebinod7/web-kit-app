import { FileText, Shield, Zap } from 'lucide-react';
import React from 'react';

export default function SeoSection() {
    return (
        <section id="seo" className="bg-slate-50 py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="text-orange-500" size={24} />
                            <h3 className="text-lg font-semibold text-slate-900">
                                Lightning Fast
                            </h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Generate a professional resume in under 15 minutes.
                            Our streamlined process gets you results without the
                            complexity.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="text-orange-500" size={24} />
                            <h3 className="text-lg font-semibold text-slate-900">
                                Completely Private
                            </h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Your data never touches our servers unnecessarily.
                            Everything processed locally with industry-standard
                            safety.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="text-orange-500" size={24} />
                            <h3 className="text-lg font-semibold text-slate-900">
                                ATS Optimized
                            </h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Resumes formatted to pass through Applicant Tracking
                            Systems. Get your resume in front of the right
                            people.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
