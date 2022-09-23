import create  from 'zustand';
import { persist } from "zustand/middleware";


export const useMeState = create(persist((set, get) => ({
    me: [],
    initiate: (me) => set({ me: me }),
    remove: () => set({})
})));


export const useAuthState = create(persist((set, get) => ({
    token: [],
    set: (token) => set({ token: token }),
    remove: () => set({})
})));
