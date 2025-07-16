import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg p-1 flex items-center justify-center">
              <svg viewBox="0 0 200 60" className="w-full h-full">
                <text x="10" y="25" fill="#1fb6d3" fontSize="16" fontWeight="bold">agile</text>
                <circle cx="85" cy="20" r="8" fill="#1fb6d3"/>
                <text x="100" y="25" fill="#333" fontSize="16" fontWeight="bold">p</text>
                <text x="10" y="45" fill="#333" fontSize="12">partners</text>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">AgilePartners AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Let's Build
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <span className="text-2xl">❌</span> : <span className="text-2xl">☰</span>}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute left-0 right-0 top-16 shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center"
              >
                Let's Build
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
