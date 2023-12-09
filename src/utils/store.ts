import { create } from "zustand";
import { AuthType } from "../types/types";

type StoreType = {
    token: string | null,
    authType: AuthType,
    topic: string,
    platform: string,
    contentGenerated: string[],
    generating: boolean,
    completed: boolean,
    issue: boolean,
    setToken: (token: string | null) => void,
    setAuthType: (token: AuthType) => void,
    setTopic: (topic: string) => void,
    setPlatform: (platform: string) => void,
    setContentGenerated: (post: string[]) => void,
    resetContentGenerated: () => void,
    setGenerating: (generating: boolean) => void,
    setCompleted: (completed: boolean) => void,
    setIssue: (issue: boolean) => void,
}

let tokenString: StoreType["token"] = localStorage.getItem('token') ? localStorage.getItem('token') : null

export const useStore = create<StoreType>((set) => ({
    token: tokenString,
    authType: "register",
    topic: "",
    platform: "",
    contentGenerated: [],
    generating: false,
    completed: false,
    issue: false,
    setToken: (token) => set(() => ({ token: token })),
    setAuthType: (authType) => set(() => ({ authType: authType })),
    setTopic: (topic) => set(() => ({ topic: topic })),
    setPlatform: (platform) => set(() => ({ platform: platform })),
    setContentGenerated: (post) => set(() => ({ contentGenerated: post })),
    resetContentGenerated: () => set(() => ({ contentGenerated: [] })),
    setGenerating: (generating) => set(() => ({ generating: generating })),
    setCompleted: (completed) => set(() => ({ completed: completed })),
    setIssue: (issue) => set(() => ({ issue: issue })),
}))