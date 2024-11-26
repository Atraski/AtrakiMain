/* eslint-disable react/prop-types */
import { createContext, useContext, useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollContext = createContext(null);

export const SmoothScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.07,
      });
    }

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollRef, scrollInstance }}>
      <div ref={scrollRef} data-scroll-container>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
