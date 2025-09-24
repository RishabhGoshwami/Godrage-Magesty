import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo-1.png";

const navLinks = [
  { name: "Welcome", href: "#home" },
 
  { name: "Key Features", href: "#highlights" },
  { name: "Prime Location", href: "#location" },
  { name: "Luxury Amenities", href: "#amenities" },
  { name: "Plans & Pricing", href: "#pricing" },
  { name: "Photo Tour", href: "#gallery" },
  { name: "Project Overview", href: "#overview" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Godrej Majesty Logo"
              className="h-10 w-auto animate-fade-in"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-800 font-semibold hover:text-blue-700 transition-colors duration-200 group text-sm"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 transition-colors duration-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 transition-all duration-300 ease-in-out transform ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;