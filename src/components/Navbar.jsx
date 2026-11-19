import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets, Menu, X, PhoneCall, Award, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300">
      {/* Top Banner: ISO 9001:2015 Certified Notice & Contact */}
      <div className="bg-darkNavy text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-aqua bg-aqua/10 px-2 py-0.5 rounded border border-aqua/30 transition-transform duration-200 hover:scale-105 cursor-default">
              <Award className="w-3.5 h-3.5" />
              ISO 9001:2015 Certified Company
            </span>
            <span className="text-gray-300 text-[11px] hidden md:inline">
              | Complete Water Purification, Sales, Installation & AMC Support
            </span>
          </div>

          <div className="flex items-center space-x-5 text-gray-300 text-[11px]">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-aqua" /> Mon - Sat: 9:00 AM - 7:30 PM
            </span>
            <a
              href="tel:+917200010271"
              className="flex items-center gap-1 text-white font-medium hover:text-aqua transition-all duration-200 active:scale-95"
            >
              <PhoneCall className="w-3 h-3 text-aqua" /> +91 72000 10271 / 98942 40380
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? 'shadow-md py-3 bg-white' : 'shadow-xs py-4 bg-white/95'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Smooth Bounce & Glow Interaction */}
            <Link
              to="/"
              className="flex items-center space-x-2.5 group focus:outline-none"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primaryBlue via-aqua to-primaryBlue flex items-center justify-center text-white shadow-md shadow-aqua/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-aqua/40 group-active:scale-95">
                <Droplets className="w-6 h-6 stroke-[2.2] transition-transform duration-300 group-hover:-translate-y-0.5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-darkNavy leading-none transition-colors duration-200 group-hover:text-primaryBlue">
                    Aqua Care
                  </span>
                  <span className="hidden sm:inline-block text-[9px] font-bold text-primaryBlue bg-primaryBlue/10 px-1.5 py-0.5 rounded border border-primaryBlue/20 uppercase tracking-tighter transition-all duration-200 group-hover:bg-primaryBlue group-hover:text-white">
                    ISO 9001:2015
                  </span>
                </div>
                <span className="text-xs font-semibold tracking-wider text-aqua uppercase mt-0.5 transition-colors duration-200 group-hover:text-primaryBlue">
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Clean, No Box, Lower Opacity on Hover, Left-to-Right Underline) */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative py-2 text-[15px] font-semibold tracking-wide transition-all duration-200 group active:scale-95 select-none focus:outline-none"
                  >
                    {/* Link Text with Lower Opacity Transition on Hover */}
                    <span
                      className={`inline-block transition-all duration-200 group-hover:opacity-70 ${
                        isActive
                          ? 'text-primaryBlue font-bold opacity-100'
                          : 'text-darkNavy group-hover:text-primaryBlue opacity-90'
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Animated Underline: Slides Strictly from Left to Right */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2.5px] rounded-full bg-gradient-to-r from-primaryBlue to-aqua transform origin-left transition-transform duration-300 ease-out ${
                        isActive
                          ? 'scale-x-100 shadow-xs'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button with Smooth Elevation & Shimmer Animation */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-primaryBlue via-aqua to-primaryBlue bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-md shadow-primaryBlue/20 hover:shadow-lg hover:shadow-aqua/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                {/* Shimmer Light Reflection passing across */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-20deg] pointer-events-none animate-nav-shimmer" />
                <Droplets className="w-4 h-4 text-white" />
                <span>Get a Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button with Smooth Rotation */}
            <div className="flex lg:hidden items-center gap-2">
              <span className="text-[10px] font-bold text-primaryBlue bg-primaryBlue/10 px-1.5 py-0.5 rounded sm:hidden">
                ISO 9001:2015
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-darkNavy hover:text-primaryBlue hover:bg-lightBg focus:outline-none transition-all duration-200 active:scale-90 border border-gray-200/80"
                aria-label="Toggle navigation menu"
              >
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90 text-primaryBlue' : 'rotate-0'}`}>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer with Smooth Slide Down (No Boxes, Clean Underlines) */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? 'max-h-96 opacity-100 border-t border-gray-100 mt-3 pt-2 pb-4'
                : 'max-h-0 opacity-0 mt-0 pt-0 pb-0'
            }`}
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center justify-between py-2.5 px-2 text-base font-semibold border-b border-gray-50 transition-all active:scale-98"
                  >
                    <span
                      className={`transition-all duration-200 group-hover:opacity-70 ${
                        isActive
                          ? 'text-primaryBlue font-bold'
                          : 'text-darkNavy group-hover:text-primaryBlue'
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Left-to-right underline for active/hover mobile */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primaryBlue to-aqua transform origin-left transition-transform duration-300 ease-out ${
                        isActive
                          ? 'w-full scale-x-100'
                          : 'w-full scale-x-0 group-hover:scale-x-100'
                      }`}
                    />

                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primaryBlue shadow-xs" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-3 px-1">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-primaryBlue to-aqua hover:from-aqua hover:to-primaryBlue transition-all duration-300 shadow-md active:scale-98"
                >
                  <Droplets className="w-4 h-4" />
                  <span>Get a Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
