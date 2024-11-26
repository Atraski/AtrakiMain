// import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-pink-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 text-sm sm:text-base">
          <div className="col-span-2 md:col-span-1 mb-8 md:mb-0 ">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl sm:text-2xl font-bold text-white">Atraski India</span>
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Our Offices</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  <p className="text-xs sm:text-sm">
                    8/1/38, West Kamalapur, Arabinda Sarani, Dum Dum, North Dumdum, West Bengal 700028
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Atraski+Head+Office/@28.5387673,77.2471961,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce302c10ee85d:0x8fbd135b49129f13!8m2!3d28.5387626!4d77.249771!16s%2Fg%2F11whmp_s0z?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                  className="hover:text-white transition-colors"
                >
                  <p className="text-xs sm:text-sm">
                    LG, I-1773, Block I, Chittaranjan Park, New Delhi, Delhi 110019
                  </p>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Legal</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-xs sm:text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Atraski. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
