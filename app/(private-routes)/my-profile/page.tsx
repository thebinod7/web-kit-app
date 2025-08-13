'use client';
import React, { useEffect } from 'react';

import { ICONS } from '@/app/constants/images';
import { useAppStore } from '@/store/store.app';
import { ChevronDown, ImageIcon, Mail, Text, User } from 'lucide-react';
import { useState } from 'react';
import { GENDERS } from '@/app/constants/constants';
import { formatEnum, sanitizeError } from '@/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { patchRequest } from '@/utils/request';
import { generateCookieHeaders } from '@/utils/localstorage';
import { API_ROUTES } from '@/app/constants/api';
import { toast } from 'sonner';

export default function page() {
    const loggedUser = useAppStore((state) => state.loggedInUser);
    const [formData, setFormData] = useState<any>({});

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const updateProfileMutation = useMutation({
        mutationFn: (payload: any) => {
            return patchRequest(
                `${API_ROUTES.USERS}/me`,
                payload,
                generateCookieHeaders()
            );
        },
        onError: (error: any) => {
            toast.error(sanitizeError(error));
        },
        onSuccess: ({ data }) => {
            toast.success('Profile updated successfully!');
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        return updateProfileMutation.mutate(formData);
    };

    useEffect(() => {
        if (loggedUser) setFormData(loggedUser);
    }, [loggedUser]);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 sm:p-8 lg:p-12">
            <div className="bg-white rounded-2xl p-8 sm:p-10 w-full max-w-3xl">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
                    My Profile
                </h1>

                <div className="flex flex-col items-center mb-8">
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-blue-400 shadow-md mb-5">
                        <img
                            src={formData?.profilePicture || ICONS.USER}
                            alt="Profile Picture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                        {formData?.name || '-'}
                    </p>
                    <p className="text-gray-600 text-lg">
                        {formData?.username || '-'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            <User className="inline-block w-5 h-5 mr-2 text-gray-500" />
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-2.5 shadow-sm focus:outline-none focus:ring-2  text-base text-gray-900 transition-all duration-200 mt-1 block w-full"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            <User className="inline-block w-5 h-5 mr-2 text-gray-500" />
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone || ''}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="border border-gray-300 rounded-lg px-4 py-2.5 shadow-sm focus:outline-none focus:ring-2  text-base text-gray-900 transition-all duration-200 mt-1 block w-full"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            <User className="inline-block w-5 h-5 mr-2 text-gray-500" />
                            Gender
                        </label>
                        <div className="relative">
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg pl-4 pr-10 py-2.5 shadow-sm focus:outline-none focus:ring-2 text-base appearance-none bg-white text-gray-900 transition-all duration-200 mt-1 block w-full"
                            >
                                <option value={GENDERS.MALE}>
                                    {formatEnum(GENDERS.MALE)}
                                </option>
                                <option value={GENDERS.FEMALE}>
                                    {formatEnum(GENDERS.FEMALE)}
                                </option>
                                <option value={GENDERS.OTHER}>
                                    {formatEnum(GENDERS.OTHER)}
                                </option>
                                <option value={GENDERS.UNKNOWN}>
                                    {formatEnum(GENDERS.UNKNOWN)}
                                </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <ChevronDown className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="bio"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            <Text className="inline-block w-5 h-5 mr-2 text-gray-500" />
                            Bio
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            rows={4}
                            value={formData.bio}
                            onChange={handleChange}
                            placeholder="Enter your bio"
                            className="border border-gray-300 rounded-lg px-4 py-2.5 shadow-sm focus:outline-none focus:ring-2 text-base text-gray-900 transition-all duration-200 mt-1 block w-full"
                        ></textarea>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            disabled={updateProfileMutation.isPending}
                            type="submit"
                            className="px-6 cursor-pointer py-2.5 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200"
                        >
                            {updateProfileMutation.isPending
                                ? 'Saving Changes...'
                                : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
