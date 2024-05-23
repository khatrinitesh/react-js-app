import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const JSAnimations = () => {
  return (
    <>
      <AnimatedComponent />
    </>
  );
};

export default JSAnimations;

const AnimatedComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Initial position
    tl.fromTo(boxRef.current, { x: 0 }, { x: 200, duration: 1 });

    // Additional animations can be added to the timeline

    // Make sure to clean up the animation when the component unmounts
    return () => {
      tl.kill(); // Kill the animation
    };
  }, []);

  return (
    <div
      ref={boxRef}
      style={{ width: "50px", height: "50px", background: "blue" }}
    >
      {/* Your animated content goes here */}
    </div>
  );
};
