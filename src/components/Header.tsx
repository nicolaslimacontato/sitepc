"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const jiuJitsuSection = document.getElementById("jiujitsu");
      if (jiuJitsuSection) {
        const rect = jiuJitsuSection.getBoundingClientRect();
        // Mostrar header quando a seção de Jiu-Jitsu estiver visível
        setIsVisible(rect.top <= 60);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar na primeira renderização

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md
      transition-all duration-700 ease-in-out
      ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}
    `}
      style={{
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SitePC
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#jiujitsu"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              🥋 Jiu-Jitsu
            </a>
            <a
              href="#conversion"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              📹 Conversão
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              📞 Contato
            </a>
            <ThemeToggle />
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-200 hover:shadow-lg hover:from-green-600 hover:to-green-700"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a
                href="#jiujitsu"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 hover:translate-x-2 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg"
              >
                🥋 Produtos de Jiu-Jitsu
              </a>
              <a
                href="#conversion"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 hover:translate-x-2 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg"
              >
                📹 Conversão VHS/DVD
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 hover:translate-x-2 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg"
              >
                📞 Contato
              </a>
              <div className="flex justify-center py-2">
                <ThemeToggle />
              </div>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:scale-105 hover:shadow-lg transition-all duration-200 hover:from-green-600 hover:to-green-700"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
