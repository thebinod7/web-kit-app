import { Clock, Download, Lock, Settings } from 'lucide-react';

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Everything You Need
                </h2>
                <p className="text-lg text-slate-600">
                    Powerful features designed to make your resume stand out
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                    <Download className="text-orange-500 mb-4" size={28} />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        PDF Download
                    </h3>
                    <p className="text-slate-600">
                        Download your resume as PDF. Perfect for job
                        applications
                    </p>
                </div>

                <div className="p-8 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                    <Lock className="text-orange-500 mb-4" size={28} />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        No Account Required
                    </h3>
                    <p className="text-slate-600">
                        No sign-up required. Create and download your resume
                        without an account.
                    </p>
                </div>

                <div className="p-8 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                    <Settings className="text-orange-500 mb-4" size={28} />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Richtext Editor
                    </h3>
                    <p className="text-slate-600">
                        Use our rich-text editor to add professional resume
                        content.
                    </p>
                </div>

                <div className="p-8 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                    <Clock className="text-orange-500 mb-4" size={28} />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Real-time Preview
                    </h3>
                    <p className="text-slate-600">
                        See exactly how your resume looks as you type. Make
                        adjustments on the fly with instant feedback.
                    </p>
                </div>
            </div>
        </section>
    );
}
