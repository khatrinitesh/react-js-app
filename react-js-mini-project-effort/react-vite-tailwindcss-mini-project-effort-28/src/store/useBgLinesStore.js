import { create } from "zustand";


export const useLineStore = create((set) => ({
    lines: Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 1 + Math.random() * 1.5,
      direction: 'horizontal', // or 'vertical'
    })),
    updateLines: () =>
      set((state) => ({
        lines: state.lines.map((line) => {
          let { x, y, speed, direction } = line;
  
          if (direction === 'horizontal') {
            x += speed;
            if (x > window.innerWidth) x = -window.innerWidth * 0.1;
          } else {
            y += speed;
            if (y > window.innerHeight) y = -window.innerHeight * 0.1;
          }
  
          return { ...line, x, y };
        }),
      })),
  }));