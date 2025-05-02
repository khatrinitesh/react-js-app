import { create } from "zustand";


const generateBox = (id) => ({
    id,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
    size: 20 + Math.random() * 30,
    color: `hsl(${Math.random() * 360}, 80%, 60%)`,
  });


  export const useBoxStore = create((set) => ({
    boxes: Array.from({ length: 20 }, (_, i) => generateBox(i)),
    updateBoxes: () =>
      set((state) => ({
        boxes: state.boxes.map((box) => {
          let { x, y, dx, dy } = box;
          x += dx;
          y += dy;
  
          if (x < 0 || x > window.innerWidth) dx *= -1;
          if (y < 0 || y > window.innerHeight) dy *= -1;
  
          return { ...box, x, y, dx, dy };
        }),
      })),
  }));
  