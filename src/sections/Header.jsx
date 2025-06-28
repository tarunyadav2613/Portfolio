import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo or Name */}
        <h1 className="text-2xl font-bold text-brand">TY</h1>

        {/* Right: Nav Links */}
        <nav className="hidden sm:flex space-x-6 text-sm font-medium text-text">
          <a href="#home" className="hover:text-brand transition">Home</a>
          <a href="#about" className="hover:text-brand transition">About</a>
          <a href="#skills" className="hover:text-brand transition">Skills</a>
          <a href="#projects" className="hover:text-brand transition">Projects</a>
          <a href="#contact" className="hover:text-brand transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
