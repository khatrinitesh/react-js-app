import { create } from "zustand";


export const useImgStore = create((set) => ({
    isColor:false,
    toggleImg:() => set((state) => ({isColor:!state.isColor}))
}))