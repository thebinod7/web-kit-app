export const APP_TITLE =
    'Free Resume Creator – No Signup Required, Download in PDF';
export const APP_CODE = 'BFK';
export const APP_DESCRIPTION =
    'Build a professional resume for free in minutes. Choose from modern templates, fill in your details, and download your resume instantly—no signup required. Perfect for freshers and experienced job seekers';
export const FOOTER_TITLE =
    'Find us on social media and stay up to date with the latest news and updates.';

export const PRICING_TYPES = {
    NOT_SPECIFIED: 'NOT_SPECIFIED',
    FREE: 'FREE',
    FREEMIUM: 'FREEMIUM',
    PAID: 'PAID',
    LIFETIME: 'LIFETIME',
};

export const PRODUCT_TABS = {
    GENERAL: 'General',
    MEDIA: 'Media',
    SOCIALS: 'Socials',
};

// ============OG GRAPH DETAILS============
export const DEFAULT_OG_URL = 'https://breakfreekit.com';
export const DEFAULT_METADATA = {
    metadataBase: new URL(DEFAULT_OG_URL),
};
export const DEFAULT_OG_IMAGE_URL =
    'https://breakfreekit-assets.s3.eu-north-1.amazonaws.com/default.png';

export const DEBOUNCE_DELAY = 300; // 300ms
export const CONTACT_EMAIL = 'connect@breakfreekit.com';
export const CATEGORY_LIST_LIMIT = 50;
export const NEXT_SERVER_REVALIDATE = { next: { revalidate: 60 } }; // 60 seconds

export const MAX_MULTIPLE_FILES = 4;
export const COOKIE_EXPIRY = 7 * 24 * 60 * 60; // 7 days

export const MAX_FILE_SIZE_MB = 15;

export const DROPZONE = {
    MAX_UPLOAD_SIZE: 15145728, // 15MB
    MAX_FILES: 1,
    ERROR_CODE: {
        MAX_FILES: 'too-many-files',
        MAX_SIZE: 'file-too-large',
        INVALID_TYPE: 'file-invalid-type',
    },
};

export const GENDERS = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    OTHER: 'OTHER',
    UNKNOWN: 'UNKNOWN',
};

export const PRODUCT_DETAIL_SECTIONS = {
    OVERVIEW: 'Overview',
    RATING: 'Rate this product',
    COMMENTS: 'Comments',
};

export const SOCIAL_LINKS = {
    INSTAGRAM: 'https://www.instagram.com/breakfreekit',
    FACEBOOK: '',
    TWITTER: 'https://x.com/breakfreekit',
};

export const FEATURED_ACTIONS = {
    SELECT_PRODUCT: 'SELECT_PRODUCT',
    CREATE_PRODUCT: 'CREATE_PRODUCT',
};

export const FEATURED_COST = {
    SEVEN_DAYS: 7.77,
    FIFTEEN_DAYS: 15.55,
};
