"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroProps {
  activeSection: "jiujitsu" | "conversion";
  onSectionChange: (section: "jiujitsu" | "conversion") => void;
}

export default function Hero({ activeSection, onSectionChange }: HeroProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verificar se está em modo escuro
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    // Observer para mudanças no tema
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-600 to-zinc-700 dark:from-gray-900 dark:via-neutral-500 dark:to-zinc-900 animate-gradient"></div>

      {/* Additional animated gradient layers for more depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent dark:from-transparent dark:via-zinc-400/20 dark:to-transparent animate-gradient-reverse"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-neutral-200/30 to-transparent dark:from-transparent dark:via-zinc-500/30 dark:to-transparent animate-gradient-slow"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/5 dark:bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-gray-800 dark:text-white">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative h-24 w-96">
            <Image
              src={
                isDarkMode
                  ? "/strongGuardian/Strong Guardian dark.png"
                  : "/strongGuardian/Strong Guardian light.png"
              }
              alt="Strong Guardian"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Sua loja completa de produtos de Jiu-Jitsu e serviços de conversão de
          mídia
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/30 dark:border-white/20">
            <button
              onClick={() => onSectionChange("jiujitsu")}
              className={`px-6 py-3 rounded-full transition-all ${
                activeSection === "jiujitsu"
                  ? "bg-white text-gray-800 dark:text-gray-900 font-semibold shadow-lg"
                  : "text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-white/20"
              }`}
            >
              🥋 Produtos Jiu-Jitsu
            </button>
            <button
              onClick={() => onSectionChange("conversion")}
              className={`px-6 py-3 rounded-full transition-all ${
                activeSection === "conversion"
                  ? "bg-white text-gray-800 dark:text-gray-900 font-semibold shadow-lg"
                  : "text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-white/20"
              }`}
            >
              📹 Conversão VHS/DVD
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeSection === "jiujitsu" ? (
          <div className="space-y-4">
            <p className="text-lg md:text-xl">
              Kimonos, acessórios e equipamentos de alta qualidade para sua
              prática
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onSectionChange("jiujitsu")}
                className="bg-gradient-to-r from-zinc-600 to-zinc-700 dark:from-zinc-500 dark:to-zinc-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ver Produtos
              </button>
              <button className="border-2 border-zinc-600 dark:border-zinc-400 text-zinc-700 dark:text-zinc-300 px-8 py-4 rounded-full font-semibold hover:bg-zinc-600 hover:text-white dark:hover:bg-zinc-400 dark:hover:text-zinc-900 transition-all duration-300">
                Loja Shopify
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-lg md:text-xl">
              Converta suas fitas VHS e DVDs para MP4 com qualidade profissional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onSectionChange("conversion")}
                className="bg-gradient-to-r from-zinc-600 to-zinc-700 dark:from-zinc-500 dark:to-zinc-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Solicitar Conversão
              </button>
              <button className="border-2 border-zinc-600 dark:border-zinc-400 text-zinc-700 dark:text-zinc-300 px-8 py-4 rounded-full font-semibold hover:bg-zinc-600 hover:text-white dark:hover:bg-zinc-400 dark:hover:text-zinc-900 transition-all duration-300">
                Ver Exemplos
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-zinc-600 dark:border-zinc-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-zinc-600 dark:bg-zinc-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
