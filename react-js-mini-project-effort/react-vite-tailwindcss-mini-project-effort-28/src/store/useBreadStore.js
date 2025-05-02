import { create } from "zustand";


export const useBreadcrumbStore = create((set) => ({
    path: ['Home'],
    setPath: (newPath) => set({ path: newPath }),
    addCrumb: (crumb) =>
      set((state) => ({
        path: [...state.path, crumb],
      })),
    goBackTo: (index) =>
      set((state) => ({
        path: state.path.slice(0, index + 1),
      })),
  }));