import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Alraziya
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Skills
            </a>

            <a
              href="#education"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Education
            </a>

            <a
              href="#contact"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="hidden md:inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;