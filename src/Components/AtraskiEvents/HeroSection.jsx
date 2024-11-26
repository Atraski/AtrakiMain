import  { useRef, useEffect } from 'react';


const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source src="https://a.storyblok.com/f/283181/x/5370bc3c51/250k-loop-placeholder-lr-2-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

     

      <main className="relative z-10 flex min-h-[calc(100vh-80px)] items-center px-6">
        <div className="space-y-6">
         
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
