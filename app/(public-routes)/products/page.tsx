import {
    Box,
    CuboidIcon as Cube,
    Hexagon,
    Package,
    Sparkles,
    Shield,
} from 'lucide-react';
import HeaderSection from './HeaderSection';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import CategoriesSection from './CategorySection';
import PartnersSection from './Partners';
import { PUBLIC_ENV } from '@/utils/env';

export default async function page() {
    const resposnse = await fetch(
        `${PUBLIC_ENV.API_ENDPOINT!}/api/v1/products`
    );
    const data = await resposnse.json();
    const result = data?.result || {};

    const products = [
        {
            id: '1',
            name: 'Creeble',
            description: 'Turn Notion into production-grade APIs.',
            rating: 4,
            icon: <Hexagon className="h-6 w-6 text-gray-900" />,
            type: 'Free',
        },
        {
            id: '2',
            name: 'Gametank',
            description:
                'Generate pixel art, UI, tiles, and characters for your game in seconds.',
            rating: 3,
            icon: <Shield className="h-6 w-6 text-orange-500" />,
            type: 'Premium',
        },
        {
            id: '3',
            name: 'AppCan',
            description:
                'Scan and secure your mobile apps via fast, automated security testing.',
            rating: 4,
            icon: <Cube className="h-6 w-6 text-blue-600" />,
            type: 'Free',
        },
        {
            id: '4',
            name: 'Doable',
            description: 'AI Agent, Automation, Developers Tool',
            rating: 5,
            icon: <Sparkles className="h-6 w-6 text-purple-500" />,
            type: 'Premium',
        },
        {
            id: '5',
            name: 'Packager',
            description: 'Effortlessly bundle and deploy your applications.',
            rating: 4,
            icon: <Package className="h-6 w-6 text-green-600" />,
            type: 'Free',
        },
        {
            id: '6',
            name: 'Boxify',
            description: 'Simple and secure cloud storage for developers.',
            rating: 4,
            icon: <Box className="h-6 w-6 text-red-500" />,
            type: 'Premium',
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 py-12 lg:grid lg:grid-cols-3 lg:gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <HeaderSection />
                    <SearchBar />
                    {/* <SortDropdown /> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {' '}
                        {/* Increased gap */}
                        {result?.rows.length > 0 &&
                            result.rows.map((product: any) => (
                                <ProductCard
                                    key={product.cuid}
                                    logoUrl={product.logoUrl}
                                    name={product.name}
                                    tagline={product.tagline}
                                    pricingType={product.pricingType}
                                />
                            ))}
                    </div>
                </div>
                {/* Right Column */}
                <div className="lg:col-span-1 mt-10 lg:mt-0">
                    <CategoriesSection />
                    <PartnersSection />
                </div>
            </div>
        </main>
    );
}
