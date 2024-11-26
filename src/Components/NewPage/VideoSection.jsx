import  { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function VideoSection() {
  const videoRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const scale = useTransform(scrollY, [0, 300], [1.2, 1]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <motion.section className="fixed inset-0 w-full h-40 overflow-hidden" style={{
        opacity, scale }}>
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" loop muted playsInline>
        <source src="https://framerusercontent.com/assets/qmR33GZwjSNwzCZTSTU1Fu2mZBk.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.section>
  );
}

export default VideoSection;
