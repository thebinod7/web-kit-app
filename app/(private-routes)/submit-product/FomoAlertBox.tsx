import { Clock1, Sparkles, Users, Zap } from 'lucide-react';

const ALLOWED_CREATORS = 100;
const FUTURE_COST = 5;

export default function FomoAlertBox() {
    return (
        <div className="relative overflow-hidden bg-white border border-gray-200 text-gray-900 p-5 rounded-2xl mb-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/30"></div>

            {/* Top badge */}
            <div className="relative flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <Sparkles className="h-5 w-5 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900">
                            Founder Access
                        </h3>
                        <p className="text-sm text-gray-600">
                            Join the first {ALLOWED_CREATORS} creators and
                            receive exclusive benefits.
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                        Limited time
                    </span>
                </div>
            </div>

            {/* Main content */}
            <div className="relative space-y-4">
                {/* <p className="text-gray-700 leading-relaxed">
                    Be part of our founding community. Submit your product today
                    and receive exclusive benefits as we build the future of
                    product discovery together.
                </p> */}

                {/* Benefits grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50/80 rounded-xl border border-gray-100">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                            <Zap className="h-4 w-4 text-amber-600" />
                        </div>
                        <span className="font-medium text-gray-800 text-sm">
                            Same Day Publish
                        </span>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-gray-50/80 rounded-xl border border-gray-100">
                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <Clock1 className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-gray-800 text-sm">
                            No Waiting List
                        </span>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-gray-50/80 rounded-xl border border-gray-100">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-800 text-sm">
                            Priority Support
                        </span>
                    </div>
                </div>

                {/* Future pricing note */}
                <div className="flex items-start space-x-3 p-4 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                    <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-amber-600 text-xs font-bold">
                            !
                        </span>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-amber-800">
                            <span className="font-medium">
                                Future submissions
                            </span>{' '}
                            will cost ${FUTURE_COST}+ to skip waiting list.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
