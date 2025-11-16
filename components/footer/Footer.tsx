import { APP_PATHS } from '@/app/constants/api';
import {
    APP_TITLE,
    FOOTER_TITLE,
    SOCIAL_LINKS,
} from '@/app/constants/constants';
import { Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className=" bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-xl font-semibold">
                                Social Media
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            {FOOTER_TITLE}
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href={SOCIAL_LINKS.TWITTER}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                            {/* <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </button> */}
                            <Link
                                href={SOCIAL_LINKS.INSTAGRAM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link
                                    href={APP_PATHS.GENERATE_RESUME}
                                    className="hover:text-white transition-colors"
                                >
                                    Create Resume
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Get Featured
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    More Tools
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-white transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} {APP_TITLE}. All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
