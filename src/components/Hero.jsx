import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "react";
import "../styles/Herocss.css";
import { useRef } from "react";

const Hero = () => {
  const heroref = useRef();

  useGSAP(() => {
    gsap.from("#hero_container h2", {
     opacity:0,
      duration: 0.5,
      ease:"power1.in"
    });
  });
  return (
    <div>
      <div id="hero_container" ref={heroref}>
        <h2>Where Beauty </h2>
        <h3>
          Meets <span style={{ color: "#B74343" }}>Bravery</span>
        </h3>
        <div style={{ textAlign: "center", width: "50%" }}>
          <button className="btn"> Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
