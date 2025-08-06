import {
    Database,
    Palette,
    Megaphone,
    Briefcase,
    Heart,
    Banknote,
} from 'lucide-react';
import React from 'react';

interface CategoryButtonProps {
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
}

function CategoryButton({ icon, label, isActive }: CategoryButtonProps) {
    return (
        <button
            className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer
        ${
            isActive
                ? 'bg-blue-50 border-blue-200 text-blue-600'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-blue-300'
        }`}
        >
            {icon}
            <span className="mt-2 text-sm font-medium">{label}</span>
        </button>
    );
}

export default function CategoriesSection() {
    return (
        <section className="mb-10">
            {' '}
            {/* Increased mb */}
            <h2 className="text-sm font-semibold uppercase text-gray-700 mb-4">
                Categories
            </h2>
            <div className="grid grid-cols-3 gap-4">
                <CategoryButton
                    icon={<Database className="h-6 w-6" />}
                    label="Development"
                    isActive
                />
                <CategoryButton
                    icon={<Palette className="h-6 w-6" />}
                    label="Design"
                />
                <CategoryButton
                    icon={<Megaphone className="h-6 w-6" />}
                    label="Marketing"
                />
                <CategoryButton
                    icon={<Briefcase className="h-6 w-6" />}
                    label="Business"
                />
                <CategoryButton
                    icon={<Heart className="h-6 w-6" />}
                    label="Personal Life"
                />
                <CategoryButton
                    icon={<Banknote className="h-6 w-6" />}
                    label="For Sale"
                />
            </div>
        </section>
    );
}
