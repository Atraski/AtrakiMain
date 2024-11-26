import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
// import { Link } from 'react-router-dom';
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [closeActive, SetCloseActive] = useState(false);

  return (
    <div className="header">
      <div className="bar">
        {/* <img src="https://atraski.com/static/media/AtraskiLogo.902891df027cd0462da3.png" alt=""  className="logo"/> */}
        <a to="/">ATRASKI</a>
        <div
          onClick={() => {
            setIsActive(!isActive), SetCloseActive(!closeActive);
          }}
          className="el"
        >
          <div className={`"burger" ${isActive ? "burgerActive" : ""}`}>
            {" "}
            <FontAwesomeIcon icon={faBars} />{" "}
          </div>
          <div className="label">
            <motion.p  className={isActive ? "open" : "closed"} >Close</motion.p>

            <motion.p >
              Open
            </motion.p>
          </div>
        </div>
      </div>
      
      <AnimatePresence mode="wait">{isActive && <Navbar></Navbar>}</AnimatePresence>
    </div>
  );
}
