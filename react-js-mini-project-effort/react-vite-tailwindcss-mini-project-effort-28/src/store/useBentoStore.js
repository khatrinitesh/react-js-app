import { create } from "zustand";


export const useBentoStore = create((set) => ({
    activeTile:null,
    setActiveTile:(id) => set({activeTile:id}),
}))