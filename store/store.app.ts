import { create } from 'zustand';

interface ILoggedInUser {
    cuid: string;
    name: string;
    gender: string;
    username: string;
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
