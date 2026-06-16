"use client";

import { useState } from "react";
import Image from "next/image";

const specs = [
  { label: "Páginas", value: "184 páginas" },
  { label: "Idioma", value: "Português" },
  { label: "Formato", value: "Capa comum" },
  { label: "Dimensões", value: "12,7 × 1,07 × 20,32 cm" },
];

export default function ProductCard() {
  const [qty, setQty] = useState(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">
      {/* Imagem da capa */}
      <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
        <Image
          src="/images/capa-livro.jpg"
          alt="Capa do livro Cadê o Amor?"
          fill
          className="rounded-2xl shadow-lg object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Ficha do produto */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-1">
          Cadê o Amor?: Dos Espinhos à Flor
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          por Paulla Flores&nbsp;|&nbsp;Formato: Capa comum
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          Presenteie suas colaboradoras com uma história de superação, amor-próprio e
          transformação. Uma excelente opção para ações de valorização, desenvolvimento
          humano, campanhas internas e datas comemorativas.
        </p>

        <p className="text-sm font-semibold text-[#6B3A2A] mb-3">
          Condições especiais para empresas e instituições:
        </p>
        <div className="flex flex-col gap-2 mb-5">
          {[
            { range: "Até 10 livros", price: "R$ 40,00 por unidade" },
            { range: "De 11 a 49 livros", price: "R$ 30,00 por unidade" },
            { range: "Acima de 50 livros", price: "R$ 25,00 por unidade" },
          ].map((item) => (
            <div key={item.range} className="flex items-center justify-between bg-[#FDF0E8] rounded-lg px-4 py-2.5">
              <span className="text-sm text-gray-700 flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-[#F4655A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {item.range}
              </span>
              <span className="text-sm font-semibold text-[#F4655A]">{item.price}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          Ao presentear um livro, sua empresa oferece mais do que páginas: oferece
          acolhimento, inspiração e a oportunidade de transformar vidas por meio da leitura.
        </p>

        <a
          href="https://wa.me/5527997385950?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20compra%20de%20livros%20em%20quantidade"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center border-2 border-[#F4655A] text-[#F4655A] py-3 rounded-full font-semibold text-sm hover:bg-[#F4655A] hover:text-white transition-colors mb-6"
        >
          Solicitar orçamento pelo WhatsApp
        </a>

        {/* Preço */}
        <div className="mb-6">
          <span className="text-4xl font-semibold text-[#F4655A]">R$ 60,00</span>
        </div>

        {/* Especificações */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6 border-t border-gray-100 pt-5">
          {specs.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</span>
              <span className="text-sm text-gray-700 font-medium">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Seletor de quantidade */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm text-gray-600 font-medium">Quantidade:</span>
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg"
              aria-label="Diminuir quantidade"
            >
              −
            </button>
            <span className="w-10 text-center text-gray-900 font-semibold text-base select-none">
              {qty}
            </span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg"
              aria-label="Aumentar quantidade"
            >
              +
            </button>
          </div>
        </div>

        {/* Botão comprar */}
        <a
          href="https://wa.me/5527997385950?text=Ol%C3%A1%2C%20gostaria%20de%20comprar%20o%20livro%20Cad%C3%AA%20o%20Amor%3F%20Dos%20Espinhos%20%C3%A0%20Flor"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#F4655A] text-white py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity mb-3"
        >
          Comprar Agora
        </a>
        <p className="text-gray-400 text-xs text-center">
          Frete calculado no checkout do Mercado Pago • Envio via PAC ou SEDEX
        </p>

        {/* Formas de pagamento */}
        <div className="flex items-center gap-3 flex-wrap mt-5">
          <span className="text-gray-500 text-xs font-medium">Aceito:</span>
          <span className="bg-[#FDF0E8] border border-[#F4655A]/20 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700">
            PIX
          </span>
          <span className="bg-[#FDF0E8] border border-[#F4655A]/20 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Cartão de crédito
          </span>
          <span className="bg-[#FDF0E8] border border-[#F4655A]/20 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700">
            Boleto bancário
          </span>
        </div>
      </div>
    </div>
  );
}
