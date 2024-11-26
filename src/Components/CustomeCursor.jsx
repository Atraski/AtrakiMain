/* eslint-disable react/no-unknown-property */
'use client';

import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.05s linear', // Adjust transition for smoothness
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full transition-transform duration-300 ease-out hover:scale-150" />
      </div>
    </>
  );
}
