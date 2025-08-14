"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JiuJitsuSection from "@/components/JiuJitsuSection";
import ConversionSection from "@/components/ConversionSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"jiujitsu" | "conversion">(
    "jiujitsu"
  );

  return (
    <>
      <Header
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="min-h-screen">
        <Hero
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Container das seções que alternam */}
        <div className="relative">
          {/* Seção de Jiu-Jitsu */}
          <div
            id="jiujitsu"
            className={`transition-all duration-500 ease-in-out ${
              activeSection === "jiujitsu"
                ? "opacity-100 translate-y-0 relative"
                : "opacity-0 -translate-y-8 absolute inset-0 pointer-events-none"
            }`}
          >
            <JiuJitsuSection />
          </div>

          {/* Seção de Conversão */}
          <div
            id="conversion"
            className={`transition-all duration-500 ease-in-out ${
              activeSection === "conversion"
                ? "opacity-100 translate-y-0 relative"
                : "opacity-0 -translate-y-8 absolute inset-0 pointer-events-none"
            }`}
          >
            <ConversionSection />
          </div>
        </div>

        {/* Seção de Contato - SEMPRE VISÍVEL */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
