import React, { useState } from "react";
import resume from "../assets/Sahil_Lodhi_Resume.pdf";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar fixed top-4 left-4 right-4 z-50 rounded-2xl bg-white/5 px-5 py-4 backdrop-blur-xl md:px-8">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-3 text-white"
          onClick={handleLinkClick}
        >
          <img
            src="/portfolioLogo.png"
            alt="Sahil Lodhi"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold">
              Sahil
            </span>

            <span className="text-sm font-medium text-gray-300">Lodhi</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-sm text-gray-200 transition hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <a
          href={resume}
          download="Sahil_Lodhi_Resume.pdf"
          className="hidden shrink-0 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300 lg:block"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xl text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-3 border-t border-white/15 pt-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="rounded-lg px-3 py-2 text-gray-200 transition hover:bg-white/10 hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href={resume}
            download="Sahil_Lodhi_Resume.pdf"
            onClick={handleLinkClick}
            className="rounded-xl bg-cyan-400 px-5 py-2.5 text-center font-semibold text-black"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
