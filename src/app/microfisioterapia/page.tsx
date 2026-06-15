import Image from "next/image";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "./FaqAccordion";

export const metadata = {
  title: "Microfisioterapia | Paulla Flores",
  description:
    "Técnica terapêutica que identifica e estimula o organismo a liberar memórias, favorecendo o equilíbrio físico e emocional.",
};

const conditions = [
  "Ansiedade",
  "Estresse crônico",
  "Síndrome de Burnout",
  "Insônia",
  "Enxaquecas",
  "Fibromialgia",
  "Dores musculares e articulares",
  "Cervicalgia e lombalgia",
  "Problemas digestivos",
  "Síndrome do intestino irritável",
  "Rinite e sinusite recorrentes",
  "Alergias",
  "Fadiga constante",
  "Dificuldade de concentração",
  "Alterações emocionais relacionadas a traumas",
];

const studies = [
  {
    title: "A New Approach to Manual Therapy for the Immune System",
    year: "2017",
    tag: "Estresse Agudo",
    description:
      "Pesquisa que avalia a resposta imunológica após sessões de Microfisioterapia, demonstrando efeitos positivos na modulação do sistema imune em pacientes com estresse agudo.",
  },
  {
    title: "Assessment of Heart Rate Variability in Fibromyalgia After Micro-Physiotherapy",
    year: "2014",
    tag: "Fibromialgia",
    description:
      "Estudo que analisa a variabilidade da frequência cardíaca em pacientes com fibromialgia, evidenciando melhora significativa após tratamento com Microfisioterapia.",
  },
  {
    title: "Avaliação da Eficácia Clínica da Microfisioterapia na Cervicalgia Pós-Traumática",
    year: "2016",
    tag: "Dor Musculoesquelética",
    description:
      "Pesquisa clínica sobre a eficácia da Microfisioterapia no tratamento de dores cervicais pós-traumáticas, com resultados expressivos na redução da dor.",
  },
  {
    title: "Uma Nova Abordagem para Terapia Manual para o Sistema Imunológico",
    year: "2017",
    tag: "Sistema Imunológico",
    description:
      "Investigação sobre os mecanismos de ação da Microfisioterapia sobre o sistema imunológico, abrindo novas perspectivas terapêuticas.",
  },
  {
    title: "Managing Irritable Bowel Syndrome: The Impact of Microphysiotherapy",
    year: "2017",
    tag: "Problemas Intestinais",
    description:
      "Estudo sobre o impacto da Microfisioterapia no manejo da síndrome do intestino irritável, com resultados promissores na redução dos sintomas.",
  },
];

export default function MicrofisioterapiaPage() {
  return (
    <>
      <Header />
      <main>

        {/* Seção 1 — Hero */}
        <section
          className="relative min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "url('/images/microfisioterapia.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
              Microfisioterapia
            </h1>
            <p className="text-white/90 text-xl">
              Escute os sinais que seu corpo está enviando
            </p>
          </div>
        </section>

        {/* Seção 2 — Introdução */}
        <section className="py-20 bg-[#FDF0E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  src="/images/micro-intro.jpg"
                  alt="Microfisioterapia"
                  width={600}
                  height={500}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A Microfisioterapia é uma abordagem terapêutica desenvolvida pelos fisioterapeutas
                  franceses Patrice Benini e Daniel Grosjean que parte de um princípio fundamental:
                  o corpo guarda memórias de tudo que vivemos, sentimos e sofremos.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Traumas físicos, emocionais ou relacionados a agentes externos podem se instalar
                  no organismo como bloqueios celulares, gerando sintomas que muitas vezes não têm
                  explicação aparente na medicina convencional.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Por meio de toques sutis e precisos, o terapeuta identifica esses bloqueios e
                  estimula o organismo a reorganizá-los, favorecendo o equilíbrio físico, emocional
                  e o retorno à saúde de forma natural.
                </p>
                <a
                  href="https://wa.me/5527997385950?text=Ola!%20Gostaria%20de%20agendar%20uma%20sessao%20de%20Microfisioterapia%20com%20a%20Paulla%20Flores.%20Poderia%20me%20passar%20mais%20informacoes%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#F4655A] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Agendar Minha Sessão
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3 — Vídeo YouTube */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Assista e entenda melhor
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Descubra como a Microfisioterapia pode transformar sua saúde física e emocional
            </p>
            <div className="relative w-full aspect-video mb-8">
              <iframe
                src="https://www.youtube.com/embed/6ncq2KSgFvw"
                title="O que é a Microfisioterapia?"
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>
            <a
              href="https://wa.me/5527997385950?text=Ola!%20Gostaria%20de%20agendar%20uma%20sessao%20de%20Microfisioterapia%20com%20a%20Paulla%20Flores.%20Poderia%20me%20passar%20mais%20informacoes%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F4655A] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Agendar Minha Sessão
            </a>
          </div>
        </section>

        {/* Seção 4 — Como pode ajudar */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  src="/images/micro-sessao.jpg"
                  alt="Sessão de Microfisioterapia"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                  Como a Microfisioterapia<br />pode ajudar?
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {conditions.map((condition) => (
                    <li key={condition} className="flex items-start gap-2.5">
                      <svg
                        className="w-5 h-5 shrink-0 text-[#F4655A] mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-base">{condition}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5527997385950?text=Ola!%20Gostaria%20de%20agendar%20uma%20sessao%20de%20Microfisioterapia%20com%20a%20Paulla%20Flores.%20Poderia%20me%20passar%20mais%20informacoes%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#F4655A] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Agendar Minha Sessão
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5 — Depoimentos */}
        <section className="py-16 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                O que dizem nossos pacientes
              </h2>
              <p className="text-gray-600 text-lg">
                Experiências reais de quem viveu a transformação
              </p>
            </div>
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div
              className="elfsight-app-bde7a5fe-cd56-489b-9136-2dd386dd7e1a"
              data-elfsight-app-lazy
            />
          </div>
        </section>

        {/* Seção 6 — Como funciona uma sessão */}
        <section className="py-20 bg-[#FDF0E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  Como funciona uma sessão?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-5">
                  A sessão começa com uma escuta acolhedora, onde o terapeuta compreende
                  o histórico e as queixas do paciente. Em seguida, por meio de toques
                  extremamente suaves sobre o corpo, percorre regiões específicas para
                  identificar onde o organismo apresenta perturbações celulares.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-5">
                  Ao localizar o bloqueio, o terapeuta realiza um estímulo preciso que
                  convida o organismo a iniciar seu próprio processo de reorganização e
                  cura. Não há manipulações forçadas, pressões intensas ou dor.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Após a sessão, o organismo continua trabalhando internamente. Por isso,
                  é comum que as transformações se manifestem de forma gradual nos dias
                  seguintes, com melhora do sono, redução de dores e maior equilíbrio
                  emocional.
                </p>
              </div>
              <div>
                <Image
                  src="/images/micro-ciencia.jpg"
                  alt="Ciência da Microfisioterapia"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 6 — Evidências Científicas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
              Evidências Científicas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studies.map((study) => (
                <div key={study.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#FDF0E8] text-[#F4655A] text-xs font-semibold px-3 py-1 rounded-full">
                      {study.tag}
                    </span>
                    <span className="text-gray-400 text-sm">{study.year}</span>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-base mb-3 leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {study.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção 7 — Perguntas Frequentes */}
        <section className="py-20 bg-[#FDF0E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
              Perguntas Frequentes
            </h2>
            <FaqAccordion />
          </div>
        </section>

        {/* Seção 8 — CTA Final */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Seu corpo guarda histórias
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A Microfisioterapia pode ajudar você a compreender esses sinais<br />
              e estimular seus processos naturais de equilíbrio e bem-estar.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Cuide de você com mais consciência e acolhimento.
            </p>
            <a
              href="https://wa.me/5527997385950?text=Ola!%20Gostaria%20de%20agendar%20uma%20sessao%20de%20Microfisioterapia%20com%20a%20Paulla%20Flores.%20Poderia%20me%20passar%20mais%20informacoes%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F4655A] text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Agendar Minha Sessão
            </a>
            <p className="text-sm text-gray-400 mt-6">Dra. Paulla Flores | CREFITO 105294-F</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
