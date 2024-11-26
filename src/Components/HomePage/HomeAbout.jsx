import { useState,useEffect } from "react";


export default function HomeAbout() {
  const [rotation, setRotation] = useState(45);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      const angle = Math.atan2(y, x) * (180 / Math.PI);
      setRotation(angle);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6 sm:gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">What Makes Us Apart</h2>
          <div className="mt-6 sm:mt-8">
            <svg
              viewBox="0 0 100 100"
              className="w-24 sm:w-32 h-24 sm:h-32 transition-transform duration-300 ease-out color-white"
              style={{ transform: `rotate(${rotation}deg)` }}
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
            >
              <path d="M20,50 L80,50 M60,30 L80,50 L60,70" />
            </svg>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-4xl font-bold leading-tight text-white">
            We are brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.
          </h3>

          <p className="text-base sm:text-lg text-white leading-relaxed">
            We’re on a mission to bring brands closer to their audiences through strategic, creative, and results-driven digital solutions. We aim to be more than just a service provider; we’re your dedicated partner in growth. By blending creativity with data-backed strategies, we help brands not only reach their goals but exceed them. At Atraski India, we’re passionate about helping businesses tell their story authentically and achieve measurable success. Every project we undertake is a step toward building long-lasting relationships that elevate brands to new heights, transforming visions into reality through the power of strategic marketing.
          </p>

          <div>
            <button className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-black/90 transition-colors">
              Dive Into Our Culture
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
