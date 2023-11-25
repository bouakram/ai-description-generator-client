import { create } from "zustand";
import { AuthType } from "../types/types";

type StoreType = {
    token: string | null,
    authType: AuthType,
    setToken: (token: string | null) => void
    setAuthType: (token: AuthType) => void
}

let tokenString: StoreType["token"] = localStorage.getItem('token') ? localStorage.getItem('token') : null

export const useStore = create<StoreType>((set) => ({
    token: tokenString,
    authType: "register",
    setToken: (token) => set(() => ({ token: token })),
    setAuthType: (authType) => set(() => ({ authType: authType }))
}))