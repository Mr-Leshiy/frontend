import React, { useEffect, useRef } from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () => {
  const circleRefs = useRef([]);

  useEffect(() => {
    const circles = circleRefs.current;

    circles.forEach((circle) => {
      const randomX = Math.random();
      const randomY = Math.random();
      circle.style.setProperty("--random-x", randomX);
      circle.style.setProperty("--random-y", randomY);

      const randomSize = Math.random() * 100 + 50; // Generates random size between 50 and 150
      circle.style.setProperty("--circle-size", `${randomSize}px`);

      circle.addEventListener("animationiteration", () => {
        const newRandomX = Math.random();
        const newRandomY = Math.random();
        circle.style.setProperty("--random-x", newRandomX);
        circle.style.setProperty("--random-y", newRandomY);

        const newRandomSize = Math.random() * 100 + 50;
        circle.style.setProperty("--circle-size", `${newRandomSize}px`);
      });
    });
  }, []);

  return (
    <div className="background-container">
      <div
        ref={(el) => (circleRefs.current[0] = el)}
        className="circle purple"
      ></div>
      <div
        ref={(el) => (circleRefs.current[1] = el)}
        className="circle blue"
      ></div>
      <div
        ref={(el) => (circleRefs.current[2] = el)}
        className="circle pink"
      ></div>
    </div>
  );
};

export default BackgroundAnimation;
