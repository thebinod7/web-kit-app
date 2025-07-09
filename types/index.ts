export interface ICurrentUser {
    cuid: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    countryCode?: string;
    phone?: string;
    profilePicture?: string;
    isVerified?: boolean;
    createdAt: string;
    updatedAt: string;
}
