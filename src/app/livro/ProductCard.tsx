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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Imagem da capa */}
      <div className="flex justify-center lg:justify-start">
        <Image
          src="/images/capa-livro.jpg"
          alt="Capa do livro Cadê o Amor?"
          width={400}
          height={560}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Ficha do produto */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-1">
          Cadê o Amor?: Dos Espinhos à Flor
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          por Dra Paulla Flores Flores&nbsp;|&nbsp;Formato: Capa comum
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Um guia para reencontrar o amor-próprio e transformar feridas em flores.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Mais do que uma biografia, este livro é uma jornada de cura, fé, superação
          e autodescoberta.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Em suas páginas, Paulla Flores compartilha sua história com coragem e
          sensibilidade, conduzindo o leitor a refletir sobre traumas, relacionamentos,
          criança interior, autoestima e amor-próprio.
        </p>

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
          href="#"
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
