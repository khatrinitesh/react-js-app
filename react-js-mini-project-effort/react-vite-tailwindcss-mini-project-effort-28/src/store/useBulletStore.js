
import { create } from 'zustand';

export const useBulletStore = create((set) => ({
  activeIndex: 0,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));