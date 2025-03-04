import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
import { navLinks } from "../constants";

export default function Footer() {
    return (
      <footer className="bg-black text-white py-6 px-8 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Nischal Shrestha</h2>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
  
          {/* Navigation Links */}
          <nav className="my-4 md:my-0">
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/" className="hover:text-gray-400">About</a></li>
              <li><a href="/" className="hover:text-gray-400">Work</a></li>
              <li><a href="/" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
  
          {/* Social Media Links */}
          <div className="flex space-x-4">
          <a href="https://github.com/Nischal456" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.png" alt="GitHub" className="w-7 h-7 hover:scale-110 transition-transform duration-200"/>
            </a>
            <a href="https://www.facebook.com/Nischal1o1/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.png" alt="Facebook" className="w-7 h-7 hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://www.instagram.com/nischalkography/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.png" alt="Instagram" className="w-7 h-7 hover:scale-110 transition-transform duration-200"/>
            </a>
            <a href="https://www.tiktok.com/@shresthanischal" target="_blank" rel="noopener noreferrer">
              <img src="/icons/tiktok.png" alt="Tiktok" className="w-7 h-7 hover:scale-110 transition-transform duration-200"/>
            </a>
            
          </div>
        </div>
      </footer>
    );
  }
  
