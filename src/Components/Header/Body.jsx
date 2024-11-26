/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { useState ,useEffect} from "react";
import "./body.css";


const Body = ({ links, selectedLink, setSelectedLink }) => {

    const [rendering, setRendering] = useState(false);


    useEffect(() => {
        setRendering(true); // Trigger rendering when the component mounts
      }, []);

    const getChars = (word) => {
    return word.split("").map((char, i) => {
 
      return (
        <motion.div
          key={char + i}
          className={rendering ? "translate-enter" : "translate-exit"} // Apply the translate animation class
        >
          {char}
        </motion.div>
      );
    });
  };
      

  return (
    <div className="body">
      {links.map((link, index) => {
        const { title, href } = link;
        const isActive = selectedLink.index === index;

        return (
          <a key={`${index}`} to={href}> 
            <p
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              className={isActive ? 'blur-open' : 'blur-closed'}
            >
              {getChars(title)}
            </p>
          </a>
        );
      })}
    </div>
  );
};

export default Body;
