"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="py-20 bg-zinc-900 dark:bg-zinc-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            📞 Entre em Contato
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco para qualquer
            dúvida ou orçamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* WhatsApp */}
          <div className="text-center p-8 bg-zinc-700 dark:bg-zinc-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <svg
                className="w-16 h-16"
                viewBox="0 0 175.216 175.552"
                fill="currentColor"
              >
                <defs>
                  <linearGradient
                    id="whatsapp-gradient"
                    x1="85.915"
                    x2="86.535"
                    y1="32.567"
                    y2="137.092"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#57d163" />
                    <stop offset="1" stopColor="#23b33a" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#whatsapp-gradient)"
                  d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
                />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
            <p className="text-zinc-100 mb-6">
              Atendimento rápido e personalizado
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-zinc-800 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 inline-block shadow-md hover:shadow-lg"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="text-center p-8 bg-neutral-700 dark:bg-neutral-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4">📧</div>
            <h3 className="text-2xl font-bold mb-4">Email</h3>
            <p className="text-zinc-100 mb-6">
              Para propostas e orçamentos detalhados
            </p>
            <a
              href="mailto:contato@strongguardian.com.br"
              className="bg-white text-neutral-800 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 inline-block shadow-md hover:shadow-lg"
            >
              Enviar Email
            </a>
          </div>

          {/* Instagram */}
          <div className="text-center p-8 bg-zinc-600 dark:bg-zinc-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/socialMidia/Instagram.svg"
                  alt="Instagram"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Instagram</h3>
            <p className="text-zinc-100 mb-6">Acompanhe nossos trabalhos</p>
            <a
              href="https://instagram.com/strongguardian"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-zinc-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 inline-block shadow-md hover:shadow-lg"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>

        {/* Business Info */}
        <div className="bg-zinc-800 dark:bg-zinc-700 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                💼 Sobre Nossos Serviços
              </h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🥋</span>
                  <div>
                    <h4 className="font-semibold">Produtos de Jiu-Jitsu</h4>
                    <p className="text-zinc-300">
                      Kimonos, acessórios e equipamentos de qualidade
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📹</span>
                  <div>
                    <h4 className="font-semibold">Conversão de Mídia</h4>
                    <p className="text-zinc-300">
                      VHS e DVD para MP4 com equipamento profissional
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🚚</span>
                  <div>
                    <h4 className="font-semibold">Entrega Rápida</h4>
                    <p className="text-zinc-300">
                      Atendimento em toda a região
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🏆</div>
              <h4 className="text-2xl font-bold mb-4">Qualidade Garantida</h4>
              <p className="text-zinc-300">
                Trabalhamos com equipamentos profissionais e oferecemos garantia
                em todos os nossos serviços
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-zinc-700">
          <p className="text-zinc-400">
            ©Strong Guardian - Todos os direitos reservados 2025 - Desenvolvido
            por {""}
            <a
              href="https://www.linkedin.com/in/nicolaslimadasilva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition-colors duration-300"
            >
              Nicolas Lima da Silva
            </a>
          </p>
          <p className="text-zinc-400 mt-2">Desenvolvido para o seu negócio.</p>
        </div>
      </div>
    </section>
  );
}
