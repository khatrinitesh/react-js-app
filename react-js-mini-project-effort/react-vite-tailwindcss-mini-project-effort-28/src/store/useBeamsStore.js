import { create } from "zustand";


const generateBeam = (id) => ({
    id,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    dx: (Math.random() - 0.5) * 4,
    dy: (Math.random() - 0.5) * 4,
  });

  export const useBeamStore = create((set) => ({
    beams: Array.from({ length: 8 }, (_, i) => generateBeam(i)),
    updateBeams: () =>
      set((state) => {
        const updated = state.beams.map((beam) => {
          let { x, y, dx, dy } = beam;
  
          // Move beam
          x += dx;
          y += dy;
  
          // Bounce off edges
          if (x < 0 || x > window.innerWidth) dx *= -1;
          if (y < 0 || y > window.innerHeight) dy *= -1;
  
          return { ...beam, x, y, dx, dy };
        });
  
        // Collision detection
        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const a = updated[i];
            const b = updated[j];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 50) {
              updated[i].dx *= -1;
              updated[i].dy *= -1;
              updated[j].dx *= -1;
              updated[j].dy *= -1;
            }
          }
        }
  
        return { beams: updated };
      }),
  }));