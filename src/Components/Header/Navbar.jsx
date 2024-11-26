import { useState, useEffect } from 'react';
import './Nav.css';
import Body from './Body';


export default function Navbar() {

    const links = [
        { title: 'Home', href: '/', src: 'home.png' },
        { title: 'About-Us', href: '/about', src: 'home.png' },
        { title: 'Work', href: '/lookbook', src: 'lookbook.png' },
        { title: 'Contact', href: '/contact', src: 'contact.png' }
      ];

  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility based on selected link
    setIsVisible(true);
  }, [selectedLink]);

  console.log('Nav is active:', isVisible);

  return (
    <div className={`nav ${isVisible ? 'nav-enter' : 'nav-exit'}`}>
      <div className="wrapper">
        <div className="container">
          {/* Pass setSelectedLink as a reference */}
          {isVisible && <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />}
        </div>
      </div>
    </div>
  );
}
