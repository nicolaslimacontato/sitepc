export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-900 dark:bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            📞 Entre em Contato
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco para qualquer
            dúvida ou orçamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* WhatsApp */}
          <div className="text-center p-8 bg-green-600 rounded-2xl">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
            <p className="text-gray-100 mb-6">
              Atendimento rápido e personalizado
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform inline-block"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="text-center p-8 bg-blue-600 rounded-2xl">
            <div className="text-6xl mb-4">📧</div>
            <h3 className="text-2xl font-bold mb-4">Email</h3>
            <p className="text-gray-100 mb-6">
              Para propostas e orçamentos detalhados
            </p>
            <a
              href="mailto:contato@sitepc.com.br"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform inline-block"
            >
              Enviar Email
            </a>
          </div>

          {/* Instagram */}
          <div className="text-center p-8 bg-purple-600 rounded-2xl">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-bold mb-4">Instagram</h3>
            <p className="text-gray-100 mb-6">Acompanhe nossos trabalhos</p>
            <a
              href="https://instagram.com/sitepc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform inline-block"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>

        {/* Business Info */}
        <div className="bg-gray-800 dark:bg-gray-700 rounded-3xl p-8 md:p-12">
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
                    <p className="text-gray-300">
                      Kimonos, acessórios e equipamentos de qualidade
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📹</span>
                  <div>
                    <h4 className="font-semibold">Conversão de Mídia</h4>
                    <p className="text-gray-300">
                      VHS e DVD para MP4 com equipamento profissional
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🚚</span>
                  <div>
                    <h4 className="font-semibold">Entrega Rápida</h4>
                    <p className="text-gray-300">
                      Atendimento em toda a região
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🏆</div>
              <h4 className="text-2xl font-bold mb-4">Qualidade Garantida</h4>
              <p className="text-gray-300">
                Trabalhamos com equipamentos profissionais e oferecemos garantia
                em todos os nossos serviços
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 SitePC - Todos os direitos reservados - Desenvolvido por {""}
            <a
              href="https://www.linkedin.com/in/nicolaslimadasilva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Nicolas Lima da Silva
            </a>
          </p>
          <p className="text-gray-400 mt-2">Desenvolvido para o seu negócio</p>
        </div>
      </div>
    </section>
  );
}
