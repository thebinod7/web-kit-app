export interface ICurrentUser {
    cuid: string;
    name: string;
    gender: string;
    username: string;
    countryCode?: string;
    phone?: string;
    profilePicture?: string;
    isVerified?: boolean;
    createdAt: string;
    updatedAt: string;
}
