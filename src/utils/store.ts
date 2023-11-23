import { create } from "zustand";

type StoreType = {
    token: string | null,
    setToken: (token: string | null) => void
}

const tokenString: string | null = localStorage.getItem('token') ? localStorage.getItem('token') : null

export const useStore = create<StoreType>((set) => ({
    token: tokenString,
    setToken: (token) => set(() => ({ token: token })),
}))