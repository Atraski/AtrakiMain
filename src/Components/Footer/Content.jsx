

import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react";


// export default function Content() {
//   return (
//     <div className=' py-8 px-12 h-full w-full flex flex-col justify-between p-0'>
//      <Footer></Footer>
//     </div>
//   )
// }

// FooterSection.js



 export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">DigiMarket</span>
            </Link>
            <p className="text-sm mb-4">
              Innovative digital marketing solutions for your business growth.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Offices</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <p>123 Digital Avenue, Tech City, TC 12345, Country</p>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <p>456 Marketing Street, Media Town, MT 67890, Country</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
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
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} DigiMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
