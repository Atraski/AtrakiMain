import  { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
// import Background from './path_to_image/2.jpg'; 

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div className="h-screen overflow-hidden" ref={container} style={{position:"fixed"}}>
      <motion.div style={{ y }} className="relative h-full">
        <img src="https://3dfs.com/wp-content/uploads/2017/05/Parallax-background.jpg" alt="background" style={{ objectFit: 'cover', width: '100%', height: '100%',}} />
      </motion.div>
    </div>
  );
}
