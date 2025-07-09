import { create } from 'zustand';

interface ILoggedInUser {
    cuid: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    countryCode?: string;
    phone?: string;
    profilePicture?: string;
    createdAt: string;
    updatedAt: string;
}

interface AppStore {
    loggedInUser: ILoggedInUser | null;
    setLoggedInUser: (user: ILoggedInUser) => void;
    clearUser: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
    loggedInUser: null,
    setLoggedInUser: (user) => set({ loggedInUser: user }),
    clearUser: () => set({ loggedInUser: null }),
}));
