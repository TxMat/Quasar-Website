import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldShowNavbar = scrollPosition > 100;

      setShowNavbar(shouldShowNavbar);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `bg-gradient-to-b from-gray-800 to-transparent p-4 fixed w-full top-0 z-10 ${
    showNavbar ? 'visible opacity-100 transition duration-500' : 'invisible opacity-0'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl bg-gradient-to-br from-pink-300 via-purple-300 to-red-200 text-transparent bg-clip-text filter drop-shadow-2xl">QSR</div>
        <div className="space-x-4">
          <a href="#accueil" className="text-white hover:text-gray-300">Home</a>
          <a href="#services" className="text-white hover:text-gray-300">Privacy Policy</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
