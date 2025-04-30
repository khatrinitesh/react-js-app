import { useEffect, useRef } from "react";
import gsap from "gsap";

const messages = [
  "Welcome to Our Website",
  "Explore Our Services",
  "Contact Us Today",
  "Enjoy Smooth Animations",
];

function TextSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSlides = messages.length;
      let index = 0;

      const animate = () => {
        gsap.to(sliderRef.current, {
          y: `-${index * 100}%`,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            index = (index + 1) % totalSlides;
            setTimeout(animate, 2000);
          },
        });
      };

      animate();
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="overflow-hidden h-16 w-full bg-gray-900 text-white flex items-center justify-center">
      <div
        ref={sliderRef}
        className="flex flex-col transition-transform duration-1000"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className="h-16 flex items-center justify-center text-xl">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextSlider;
