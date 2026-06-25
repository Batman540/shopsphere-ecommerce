"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );
  }, []);

  return (
    <div
      className="
        fixed
        pointer-events-none
        z-0
        w-96
        h-96
        rounded-full
        blur-3xl
        bg-purple-500/20
      "
      style={{
        left: position.x - 200,
        top: position.y - 200,
      }}
    />
  );
}