import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
      options={{
        background: {
          color: "#0f172a",
        },
        particles: {
          number: {
            value: 50,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#60a5fa" },
          shape: { type: "circle" },
          opacity: { value: 0.15, random: true },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outMode: "bounce",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
};

export default BackgroundParticles;
