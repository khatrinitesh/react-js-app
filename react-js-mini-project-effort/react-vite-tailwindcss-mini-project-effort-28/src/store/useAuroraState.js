import { create } from "zustand";


export const useAuroraState = create((set) => ({
    animationSpeed:1,
    setSpeed:(speed) => set({animationSpeed:speed})
}));