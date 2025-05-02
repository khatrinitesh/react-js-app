import { create } from 'zustand';

export const useBorderStore = create((set) => ({
  borderColor: 'blue',
  borderThickness: 5,
  changeBorder: (color, thickness) => set({ borderColor: color, borderThickness: thickness }),
}));