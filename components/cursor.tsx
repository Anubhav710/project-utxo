"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const size = 85;

  const circle = useRef<any>();
  const mouse = useRef({
    x: 0,
    y: 0,
  });
  const delayMouse = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
    moveCircle(mouse.current.x, mouse.current.y);
  };
  //a is Initial Value b is end value and a is how much we move
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    const { x, y } = delayMouse.current;

    delayMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayMouse.current.x, delayMouse.current.y);

    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  return (
    <div
      ref={circle}
      style={{ width: size, height: size }}
      className="bg-black rounded-full text-white  hidden   cursor-default fixed top-0 left-0 pointer-events-none z-10 md:flex items-center justify-center"
    >
      <span className="cursor-default  w-1/2">Scroll Down</span>
    </div>
  );
};

export default Cursor;
