"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Conversão VHS → MP4",
    price: "R$ 25,00",
    description: "Converta suas fitas VHS antigas para formato digital",
    features: ["Qualidade HD", "Entrega em pen drive", "Backup na nuvem"],
  },
  {
    id: 2,
    title: "Conversão DVD → MP4",
    price: "R$ 20,00",
    description: "Digitalize seus DVDs para arquivos MP4",
    features: ["Qualidade original", "Múltiplos formatos", "Menu interativo"],
  },
  {
    id: 3,
    title: "Pacote Completo",
    price: "R$ 40,00",
    description: "VHS + DVD + Edição básica",
    features: ["Melhor custo-benefício", "Edição incluída", "Entrega expressa"],
  },
];

export default function ConversionSection() {
  const [selectedService, setSelectedService] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com WhatsApp ou email
    const message = `Olá! Gostaria de solicitar o serviço de conversão:
    
Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Descrição: ${formData.description}

Serviço selecionado: ${services.find((s) => s.id === selectedService)?.title}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
            📹 Conversão VHS/DVD
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Digitalize suas memórias antigas com qualidade profissional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                selectedService === service.id
                  ? "border-zinc-600 dark:border-zinc-500 bg-zinc-50 dark:bg-zinc-800/50 shadow-lg"
                  : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-md"
              }`}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-zinc-700 dark:text-zinc-300 mb-4">
                  {service.price}
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <span className="text-zinc-500 dark:text-zinc-400 mr-2">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Info */}
        <div className="bg-gradient-to-r from-zinc-700 to-neutral-800 dark:from-zinc-600 dark:to-neutral-700 rounded-3xl p-8 md:p-12 text-white mb-16 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                🎥 Equipamento Profissional
              </h3>
              <p className="text-xl mb-6 text-zinc-100">
                Utilizamos equipamentos de alta qualidade para garantir a melhor
                conversão:
              </p>
              <ul className="space-y-3 text-lg text-zinc-100">
                <li className="flex items-center">
                  <span className="mr-3">🎬</span>
                  Placa de captura profissional
                </li>
                <li className="flex items-center">
                  <span className="mr-3">💻</span>
                  Software de edição avançado
                </li>
                <li className="flex items-center">
                  <span className="mr-3">📱</span>
                  Vídeo cassete e DVD player
                </li>
                <li className="flex items-center">
                  <span className="mr-3">💾</span>
                  Backup em múltiplos formatos
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🎥</div>
              <p className="text-lg text-zinc-100">
                Preserve suas memórias para sempre!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-zinc-800 dark:text-white mb-8">
            Solicitar Conversão
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white transition-all duration-300"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                Descrição do Material
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white transition-all duration-300"
                placeholder="Descreva o material que deseja converter (ex: fitas de casamento, DVDs de família, etc.)"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-zinc-600 to-zinc-700 dark:from-zinc-500 dark:to-zinc-600 text-white py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📱 Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
