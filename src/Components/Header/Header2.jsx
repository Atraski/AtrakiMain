import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../Images/AtraskiLogo.png'; 
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function Header2() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
        setIsVisible(currentScrollY <= lastScrollY);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', link: '/' },
    {
      name: 'Know Us',
      dropdown: [ 'About','Our Segments', 'Our Team'],
    },
    {
      name: 'Our IPs',
      dropdown: ['Blogger Mela', 'E-Shower'],
    },
    { name: 'Gallery', link: '/gallery' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (itemName) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  return (
    <header
      className={`fixed w-full transition-all duration-300 ease-in-out ${
        isVisible ? 'top-0' : '-top-24'
      } ${isScrolled ? 'bg-black/10 backdrop-blur-md' : 'bg-transparent'} z-50`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="flex items-center justify-between h-20">

          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              <img src={logo} alt="Logo" className="h-24 w-auto" />
            </Link>
          </div>
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group ">
                  {item.dropdown ? (
                    <div >

                      <button className="mb-4 text-white hover:text-gray-300 text-lg font-medium tracking-wide flex items-center transition duration-300 ease-in-out">
                        <span>{item.name}</span>
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      
                     <div className=" absolute left-0 h-36 w-48 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-2 transition duration-300 ease-in-out ">

                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`/${subItem.replace(/\s+/g, '').toLowerCase()}`}
                            className="block mt-4 px-4  text-lg text-gray-800  "
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="mt-8 text-white hover:text-gray-300 text-lg font-medium tracking-wide  transition duration-300 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:hidden ">
            <button
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2 rounded-md"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/65">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="text-white flex justify-between items-center w-full px-3 py-2 text-base font-medium"
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      {item.name}
                      {openSubmenu === item.name ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                    {openSubmenu === item.name && (
                      <div className="pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`/${subItem.replace(/\s+/g, '').toLowerCase()}`}
                            className="text-gray-300 hover:text-white block px-3 py-2 text-sm"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
