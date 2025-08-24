import { FeaturedPricingCard } from '../FeaturedPricingCard';

export default function page() {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="w-full max-w-4xl mx-auto">
                <FeaturedPricingCard />
            </div>
        </main>
    );
}
