import { TriangleAlert } from 'lucide-react';

export default function SubmitProductPage() {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Submit your Product
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Let our robots do the work and gather all your product's
                    data for you{' '}
                    <span role="img" aria-label="smiling face with sunglasses">
                        😎
                    </span>
                </p>

                {/* Alert Box */}
                <div className="bg-gray-100 border border-gray-300 text-gray-800 p-4 rounded-lg flex items-start space-x-3 mb-10">
                    <TriangleAlert className="h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-semibold text-lg mb-1">
                            The waiting line is temporarily closed
                        </h3>
                        <p className="text-base mb-3">
                            The free waiting line is closed until October 1st.
                            You can still publish your product the day of your
                            choice by skipping the waiting line.
                        </p>
                        <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md text-sm">
                            More info
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="product-name"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Your product name*
                        </label>
                        <input
                            type="text"
                            id="product-name"
                            name="product-name"
                            placeholder="Uneed"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-700 focus:border-gray-700 sm:text-base placeholder-gray-400"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                            https://www.uneed.best/tool/
                        </p>
                    </div>

                    <div>
                        <label
                            htmlFor="product-address"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Your product address*
                        </label>
                        <input
                            type="url"
                            id="product-address"
                            name="product-address"
                            placeholder="https://www.uneed.best"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-700 focus:border-gray-700 sm:text-base placeholder-gray-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-auto bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-950 text-white font-semibold py-3 px-6 rounded-md shadow-md text-lg"
                    >
                        Submit your Product
                    </button>
                </form>
            </div>
        </div>
    );
}
