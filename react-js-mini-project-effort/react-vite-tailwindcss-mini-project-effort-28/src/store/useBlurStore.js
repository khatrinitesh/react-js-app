import { create } from "zustand";


export const useBlurStore = create((set) => ({
    isBlurred:true,
    toggleBlur:() => set({isBlurred:!state.isBlurred})
}))