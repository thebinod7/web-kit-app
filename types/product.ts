export interface IProduct {
    name: string;
    slug?: string;
    tagline: string;
    websiteUrl: string;
    description?: string;
    logoUrl?: string;
    videoUrl?: string;
    reviewComment?: string;
    pricingType?: string;
    status?: string;
    isFeatured?: boolean;
    categoryId?: string;
    submittedById?: string;
    tags?: string[];
    keywords?: string[];
    images?: string[];
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}
