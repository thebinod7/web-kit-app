import BlogArticles from '../sections/BlogArticles';
import FeaturedProducts from '../sections/FeaturedProducts';
import Hero from '../sections/Hero';
import ProductListings from '../sections/ProductListings';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <Hero />

            {/* Featured Apps */}
            <FeaturedProducts />

            {/* App Listing */}
            <ProductListings />

            {/* Blog Articles */}
            <BlogArticles />
        </div>
    );
}
