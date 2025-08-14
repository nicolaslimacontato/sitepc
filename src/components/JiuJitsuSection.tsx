"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Kimono Profissional",
    price: "R$ 299,90",
    image: "/kimono1.jpg",
    category: "Kimono",
    description: "Kimono de alta qualidade para competição e treino",
  },
  {
    id: 2,
    name: "Faixa Preta",
    price: "R$ 89,90",
    image: "/faixa.jpg",
    category: "Acessório",
    description: "Faixa oficial de jiu-jitsu",
  },
  {
    id: 3,
    name: "Protetor Bucal",
    price: "R$ 45,90",
    image: "/protetor.jpg",
    category: "Proteção",
    description: "Protetor bucal moldável",
  },
  {
    id: 4,
    name: "Tatame Portátil",
    price: "R$ 199,90",
    image: "/tatame.jpg",
    category: "Equipamento",
    description: "Tatame para treino em casa",
  },
];

export default function JiuJitsuSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Kimono",
    "Acessório",
    "Proteção",
    "Equipamento",
  ];

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="py-20 bg-neutral-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
            🥋 Produtos de Jiu-Jitsu
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Equipamentos e acessórios de alta qualidade para sua prática de
            jiu-jitsu
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-zinc-700 dark:bg-zinc-600 text-white shadow-lg"
                  : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700/50 border border-zinc-200 dark:border-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-zinc-100 dark:border-zinc-700"
            >
              <div className="h-48 bg-gradient-to-br from-zinc-100 to-neutral-200 dark:from-zinc-700/30 dark:to-neutral-800/30 flex items-center justify-center">
                <div className="text-6xl">🥋</div>
              </div>
              <div className="p-6">
                <span className="text-sm text-zinc-600 dark:text-zinc-400 font-semibold">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-white mt-2 mb-2">
                  {product.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zinc-700 dark:text-zinc-300">
                    {product.price}
                  </span>
                  <button className="bg-gradient-to-r from-zinc-600 to-zinc-700 dark:from-zinc-500 dark:to-zinc-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shopify Integration */}
        <div className="bg-gradient-to-r from-zinc-700 to-neutral-800 dark:from-zinc-600 dark:to-neutral-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            🛒 Loja Completa no Shopify
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-zinc-100">
            Acesse nossa loja virtual completa com mais produtos, pagamento
            seguro e entrega rápida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-zinc-800 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              Ver Loja Completa
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-zinc-800 transition-all duration-300">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
