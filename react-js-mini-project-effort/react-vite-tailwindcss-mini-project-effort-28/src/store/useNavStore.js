
import { create } from 'zustand';

export const useNavStore = create((set) => ({
  activeLink: 0, // Initially, the first link is active
  setActiveLink: (index) => set({ activeLink: index }), // Set active link based on the clicked index
}));