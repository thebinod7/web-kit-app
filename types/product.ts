export interface IProductDetails {
    contactEmail?: string;
    twitterUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    linkedinUrl?: string;
    youtubeUrl?: string;
    githubUrl?: string;
    productId?: string;
}

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

    details?: IProductDetails;
}

export interface IFeaturedProducts {
    cuid: string;
    name: string;
    logoUrl: string;
    websiteUrl: string;
}
