"use client";

import { useState } from "react";

const faqs = [
  {
    question: "A Microfisioterapia dói?",
    answer:
      "Não. A técnica utiliza toques leves e suaves, sem pressão intensa. A maioria das pessoas sente relaxamento profundo durante as sessões.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Cada caso é único. Algumas pessoas percebem resultados em poucas sessões, enquanto outras podem precisar de um acompanhamento mais longo, dependendo da complexidade do caso.",
  },
  {
    question: "A Microfisioterapia substitui tratamentos médicos?",
    answer:
      "Não. A Microfisioterapia atua como abordagem complementar, potencializando os efeitos de outros tratamentos e contribuindo para o equilíbrio global do organismo.",
  },
  {
    question: "Quais sintomas podem ser trabalhados?",
    answer:
      "Dores crônicas, ansiedade, estresse, insônia, enxaquecas, problemas digestivos, alergias, fadiga, dificuldades emocionais ligadas a traumas, entre outros.",
  },
  {
    question: "Crianças podem fazer Microfisioterapia?",
    answer:
      "Sim. A técnica pode ser aplicada em diferentes faixas etárias, desde bebês até idosos, sempre respeitando as particularidades de cada fase.",
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer:
      "Em média entre 60 e 90 minutos, podendo variar conforme a demanda e a resposta do organismo.",
  },
  {
    question: "Os resultados aparecem imediatamente?",
    answer:
      "Algumas pessoas relatam mudanças logo após a sessão, outras percebem transformações gradativas nos dias seguintes. O processo de reorganização celular continua acontecendo após o atendimento.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-gray-900 font-semibold text-base pr-4">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 shrink-0 text-coral transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-gray-700 text-base leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
