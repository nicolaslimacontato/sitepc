"use client";

interface HeroProps {
  activeSection: "jiujitsu" | "conversion";
  onSectionChange: (section: "jiujitsu" | "conversion") => void;
}

export default function Hero({ activeSection, onSectionChange }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Strong Guardian
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Sua loja completa de produtos de Jiu-Jitsu e serviços de conversão de
          mídia
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => onSectionChange("jiujitsu")}
              className={`px-6 py-3 rounded-full transition-all ${
                activeSection === "jiujitsu"
                  ? "bg-white text-blue-900 font-semibold"
                  : "text-white hover:bg-white/20"
              }`}
            >
              🥋 Produtos Jiu-Jitsu
            </button>
            <button
              onClick={() => onSectionChange("conversion")}
              className={`px-6 py-3 rounded-full transition-all ${
                activeSection === "conversion"
                  ? "bg-white text-blue-900 font-semibold"
                  : "text-white hover:bg-white/20"
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
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Ver Produtos
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all">
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
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Solicitar Conversão
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all">
                Ver Exemplos
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
