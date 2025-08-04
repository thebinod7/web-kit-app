import { useProductStore } from '@/store/store.product';
import React from 'react';

export default function SocialDetailsForm() {
    const { productDetails, setProductDetails } = useProductStore(
        (state) => state
    );

    const handleSocialInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        const newPayload = {
            ...productDetails,
            [name]: value,
        };
        setProductDetails(newPayload);
    };

    console.log('productDetails', productDetails);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
                <label
                    htmlFor="contactEmail"
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    Contact Email
                </label>
                <input
                    type="text"
                    id="contactEmail"
                    name="contactEmail"
                    value={productDetails?.contactEmail || ''}
                    onChange={handleSocialInputChange}
                    placeholder="Enter your contact email address"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
            </div>
            <div>
                <label
                    htmlFor="twitterUrl"
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    X (Twitter)
                </label>
                <input
                    type="text"
                    id="twitterUrl"
                    name="twitterUrl"
                    value={productDetails?.twitterUrl || ''}
                    onChange={handleSocialInputChange}
                    placeholder="ex: https://x.com/username"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
            </div>

            <div>
                <label
                    htmlFor="githubUrl"
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    Github
                </label>
                <input
                    type="text"
                    id="githubUrl"
                    name="githubUrl"
                    value={productDetails?.githubUrl || ''}
                    onChange={handleSocialInputChange}
                    placeholder="ex: https://github.com/username"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
            </div>

            <div>
                <label
                    htmlFor="linkedinUrl"
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    LinkedIn
                </label>
                <input
                    type="text"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={productDetails?.linkedinUrl || ''}
                    onChange={handleSocialInputChange}
                    placeholder="ex: https://www.linkedin.com/in/username"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
            </div>

            <div>
                <label
                    htmlFor="youtubeUrl"
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    Youtube
                </label>
                <input
                    type="text"
                    id="youtubeUrl"
                    name="youtubeUrl"
                    value={productDetails?.youtubeUrl || ''}
                    onChange={handleSocialInputChange}
                    placeholder="ex: https://www.youtube.com/@username"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
            </div>

            <div>
                <label
                    htmlFor="facebookUrl"
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    Facebook
                </label>
                <input
                    type="text"
                    id="facebookUrl"
                    name="facebookUrl"
                    value={productDetails?.facebookUrl || ''}
                    onChange={handleSocialInputChange}
                    placeholder="ex:  https://facebook.com/username"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
            </div>

            <div>
                <label
                    htmlFor="instagramUrl"
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    Instagram
                </label>
                <input
                    type="text"
                    id="instagramUrl"
                    name="instagramUrl"
                    value={productDetails?.instagramUrl || ''}
                    onChange={handleSocialInputChange}
                    placeholder="ex:  https://instagram.com/username"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
            </div>
        </div>
    );
}
