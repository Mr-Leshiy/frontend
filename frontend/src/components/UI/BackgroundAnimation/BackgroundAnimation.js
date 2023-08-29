import React, { useEffect, useRef } from "react";
import "./BackgroundAnimation.css";

const CIRCLES_AMOUNT = 10;

const BackgroundAnimation = () => {
  const circleRefs = useRef([]);

  const circles = Array.from({ length: CIRCLES_AMOUNT }, (_, i) => {
    const animationDelay = `${Math.random() * 5}s`;
    return (
      <div
        key={i}
        ref={(el) => (circleRefs.current[i] = el)}
        className={`circle ${i % 2 === 0 ? "blue" : "pink"}`}
        style={{
          animationDelay,
          transform: `translate(100vw * ${Math.random()}, 100vw * ${Math.random()})`,
        }}
      />
    );
  });

  useEffect(() => {
    const circles = circleRefs.current;

    circles.forEach((circle) => {
      const randomX = Math.random();
      const randomY = Math.random();
      circle.style.setProperty("--random-x", randomX);
      circle.style.setProperty("--random-y", randomY);

      circle.addEventListener("animationiteration", () => {
        const newRandomX = Math.random();
        const newRandomY = Math.random();
        circle.style.setProperty("--random-x", newRandomX);
        circle.style.setProperty("--random-y", newRandomY);
      });
    });
  }, []);

  return <div className="background-container">{circles}</div>;
};

export default BackgroundAnimation;
