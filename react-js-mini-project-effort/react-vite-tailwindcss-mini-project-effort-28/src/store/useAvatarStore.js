import { create } from "zustand";


export const useAvatarStore = create((set) => ({
    selectedAvatar:null,
    setSelectedAvatar:(avatar) => set({
        selectedAvatar:avatar
    })
}))