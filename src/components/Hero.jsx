import { useRef, useEffect } from "react";
import gsap from "gsap";
import "../styles/Herocss.css";

const Hero = () => {
  const heroref = useRef();

  useEffect(() => {
    // Use gsap.context() to ensure proper scoping in React
    const ctx = gsap.context(() => {
      gsap.from("#hero_container h2", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.in",
      });

      gsap.from("#hero_container h3", {
        opacity: 0,
        y: 20,
        delay: 0.3,
        duration: 0.5,
        ease: "power1.out",
      });
    }, heroref);

    // Cleanup function to remove the context
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div id="hero_container" ref={heroref}>
        <h2>Where Beauty </h2>
        <h3>
          Meets <span style={{ color: "#B74343" }}>Bravery</span>
        </h3>
        <div style={{ textAlign: "center", width: "50%" }}>
          <button className="btn">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
