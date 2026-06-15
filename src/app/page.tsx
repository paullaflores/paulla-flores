import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const authorityCards = [
  {
    title: "Microfisioterapia",
    description: "Terapia para seu corpo e suas emoções",
    icon: "/images/icone-microfisioterapia.svg",
  },
  {
    title: "Música",
    description: "Canções autorais para acolher e inspirar",
    icon: "/images/icone-musica.svg",
  },
  {
    title: "Literatura",
    description: "Histórias que despertam cura e reflexão",
    icon: "/images/icone-literatura.svg",
  },
  {
    title: "Palestras",
    description: "Encontro com a ciência e saúde",
    icon: "/images/icone-palestras.svg",
  },
  {
    title: "Projetos Sociais",
    description: "Ações que levam amor, cultura e cuidado",
    icon: "/images/icone-projetos-sociais.svg",
  },
  {
    title: "Premiações",
    description: "Reconhecimentos por impacto e transformação",
    icon: "/images/icone-premiacoes.svg",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1 — Hero */}
        <section
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a1a1a] leading-tight mb-6">
                Transformando dores em flores por meio da Microfisioterapia,
                da arte e do amor-próprio
              </h1>
              <p className="text-[#666666] text-lg font-normal leading-relaxed mb-8">
                Há 19 anos, Paulla Flores ajuda pessoas a saírem de dores físicas e emocionais.
                Fisioterapeuta, pioneira com a prática da Microfisioterapia no Estado do Espírito Santo,
                técnica que ajuda o corpo a identificar e liberar traumas emocionais. Ela integra saúde emocional
                e mental com literatura e música, como escritora, cantora e palestrante. Em uma
                jornada de autocuidado, autoconhecimento, cultura e transformação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5527997385950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-coral text-white px-8 py-4 rounded-full font-semibold text-center hover:opacity-90 transition-opacity"
                >
                  Agendar atendimento
                </a>
                <Link
                  href="#quem-sou"
                  className="border-2 border-marrom text-marrom px-8 py-4 rounded-full font-semibold text-center hover:bg-marrom hover:text-white transition-colors"
                >
                  Conheça minha história
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Autoridade */}
        <section className="py-20 bg-bege">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a] mb-4 max-w-3xl mx-auto">
                Saúde emocional, arte e cuidado para florescer em todas as áreas
                da vida
              </h2>
              <p className="text-[#666666] text-lg max-w-4xl mx-auto">
                Paulla Flores une cuidado, arte e propósito em uma jornada de transformação humana
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {authorityCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">
                    <Image src={card.icon} alt={card.title} width={48} height={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#666666]">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Música */}
        <section
          id="musica"
          className="min-h-[650px] bg-cover bg-center bg-no-repeat flex items-center py-16"
          style={{ backgroundImage: "url('/images/musica.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
            <div className="max-w-lg pr-4 lg:pr-16">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Música para despertar presença,<br />leveza e amor-próprio
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                A música também faz parte da missão de Paulla Flores. Suas
                canções autorais nasceram como expressão de cura, sensibilidade e
                reconexão interior. São músicas que acolhem, inspiram e convidam
                cada pessoa a viver com mais presença, verdade e amor.
              </p>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://open.spotify.com/embed/artist/5uniyY3zh5yS6VlQrOFp8v"
                  width="100%"
                  height="152"
                  style={{ border: "none" }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Microfisioterapia */}
        <section
          className="min-h-[650px] bg-cover bg-no-repeat flex items-center py-16"
          style={{ backgroundImage: "url('/images/microfisioterapia.jpg')", backgroundPosition: "20% center" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
            <div className="max-w-xl pr-4 lg:pr-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Microfisioterapia: quando o corpo revela<br />o que a alma sentiu
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  Você sabia que tudo o que vivemos e sentimos pode ficar guardado no corpo?
                </p>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  A Microfisioterapia é uma técnica da Fisioterapia que utiliza toques sutis
                  para ajudar o corpo a identificar e reorganizar memórias celulares ligadas
                  a traumas físicos e emocionais.
                </p>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  É uma abordagem natural, não invasiva e complementar, indicada para quem
                  busca aliviar dores, reduzir sintomas e reencontrar equilíbrio físico e emocional.
                </p>
                <Link
                  href="/microfisioterapia"
                  className="inline-block bg-coral text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Conheça a Microfisioterapia
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Depoimentos */}
        <section className="py-16 bg-[#FDF0E8] px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
                O que dizem sobre Paulla Flores
              </h2>
              <p className="text-gray-600 text-lg">
                Depoimentos reais de quem viveu a transformação
              </p>
            </div>
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div
              className="elfsight-app-bde7a5fe-cd56-489b-9136-2dd386dd7e1a"
              data-elfsight-app-lazy
            />
          </div>
        </section>

        {/* Section 6 — Livro */}
        <section
          className="min-h-[650px] bg-cover bg-center bg-no-repeat flex items-center py-16"
          style={{ backgroundImage: "url('/images/livro-background.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-start">
            <div className="pl-4 lg:pl-16">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cadê o Amor? Dos Espinhos à Flor
                </h2>
                <p className="text-base font-normal text-gray-700 mb-6">
                  Um guia para reencontrar o amor-próprio e transformar feridas em flores
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Mais do que uma biografia, este livro é uma jornada de cura, fé,
                  superação e autodescoberta. Em suas páginas, Paulla Flores compartilha
                  sua história com coragem e sensibilidade, conduzindo o leitor a refletir
                  sobre traumas, relacionamentos, criança interior, autoestima e amor-próprio.
                </p>
                <blockquote className="border-l-4 border-gray-400 pl-4 mb-8">
                  <p className="text-gray-600 text-base italic leading-relaxed">
                    &ldquo;Quando eu me amo, eu te amo mais.&rdquo;
                  </p>
                  <cite className="text-gray-600 text-sm not-italic mt-2 block">— Paulla Flores</cite>
                </blockquote>
                <Link
                  href="/livro"
                  className="inline-block bg-coral text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Conhecer o Livro
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Quem é Paulla */}
        <section
          id="quem-sou"
          className="min-h-[650px] bg-cover bg-center bg-no-repeat flex items-center py-16"
          style={{ backgroundImage: "url('/images/quem-e-paulla.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-start">
            <div className="pl-4 lg:pl-16">
              <div className="bg-[#FDF0E8]/75 backdrop-blur-sm rounded-2xl p-8 max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                  Minha história também é um caminho de cura
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Antes, Paula Bragança. Hoje, Paulla Flores, para o desabrochar da vida.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Durante muitos anos, escondi minha arte e minha voz. Minha vida
                  profissional começou no curso de Letras, mas foi na Fisioterapia que
                  encontrei um caminho de cura, primeiro para mim, depois para centenas
                  de pessoas que passaram pelo meu consultório.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Há 15 anos atuo como fisioterapeuta, e há 14 anos me dedico à
                  Microfisioterapia, a fisioterapia das emoções, técnica desenvolvida na
                  França e que consiste em estimular a autorregulação e a autocura do
                  organismo através das mãos. Sou pioneira no Espírito Santo e uma das
                  pioneiras no Brasil nessa técnica, com mais de 10.980 horas de
                  consultório e mais de 19 anos descobrindo que corpo e emoção caminham
                  juntos.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Hoje, como fisioterapeuta, escritora, cantora e palestrante, minha missão
                  é transformar dores em flores, histórias em inspiração e corpos em vozes
                  que falam, sentem e se curam.
                </p>
                <blockquote className="border-l-4 border-gray-400 pl-4 mb-8">
                  <p className="text-gray-600 text-base italic leading-relaxed">
                    &ldquo;Olhar para a verdade e acolhê-la fez a minha vida virar de cabeça
                    para baixo, literalmente, mas para melhor.&rdquo;
                  </p>
                  <cite className="text-gray-600 text-sm not-italic mt-2 block">— Paulla Flores</cite>
                </blockquote>
                <p className="text-xs text-gray-400 mt-4">CREFITO 105294-F</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 — Palestras */}
        <section
          id="palestras"
          className="relative min-h-[650px] bg-cover bg-center bg-no-repeat flex items-center py-16"
          style={{ backgroundImage: "url('/images/fundo-verde.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
            <div className="max-w-lg pr-4 lg:pr-16">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Palestras que unem saúde emocional e a arte
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                Paulla Flores leva para empresas, escolas, eventos e comunidades
                experiências vivas sobre saúde emocional, amor-próprio, superação
                e criatividade.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Suas palestras unem conhecimento, música autoral, sensibilidade e
                vivência prática, criando encontros marcantes que inspiram pessoas
                a olharem para dentro e despertarem sua melhor versão.
              </p>
              <Link
                href="/contato"
                className="inline-block bg-coral text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Convidar Paulla para um evento
              </Link>
            </div>
          </div>
        </section>

        {/* Section 9 — Projetos Sociais */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Projetos sociais que levam amor, cultura e acolhimento às comunidades
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Por meio de projetos terapêuticos, educativos e culturais, Paulla Flores
                  cria espaços de acolhimento, expressão e fortalecimento humano.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Suas iniciativas unem arte, literatura, música, saúde emocional e inclusão,
                  levando esperança a mulheres, jovens, adolescentes e comunidades que
                  precisam recomeçar.
                </p>
                <Link
                  href="/projetos-sociais"
                  className="inline-block bg-coral text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Conhecer Projetos
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logo-projetos-sociais.png"
                  alt="Projetos Sociais Paulla Flores"
                  width={500}
                  height={500}
                  className="w-full max-w-sm object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 10 — Contato */}
        <section id="contato" className="py-20 bg-[#FDF0E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Coluna esquerda */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                  Vamos florescer juntos?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-10">
                  Se você deseja agendar uma sessão de Microfisioterapia, convidar
                  Paulla Flores para uma palestra, conhecer seus projetos ou acompanhar
                  seus conteúdos, entre em contato.
                </p>
                <div className="space-y-5">
                  <a
                    href="https://wa.me/5527997385950"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-coral transition-colors"
                  >
                    <svg className="w-5 h-5 shrink-0 text-coral" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-base">(27) 99738-5950</span>
                  </a>
                  <a
                    href="mailto:contato@paullaflores.com.br"
                    className="flex items-center gap-3 text-gray-700 hover:text-coral transition-colors"
                  >
                    <svg className="w-5 h-5 shrink-0 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-base">contato@paullaflores.com.br</span>
                  </a>
                  <a
                    href="https://instagram.com/eupaullaflores"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-coral transition-colors"
                  >
                    <svg className="w-5 h-5 shrink-0 text-coral" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="text-base">@eupaullaflores</span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/nsrw6cGYoEJ6LkUd9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-700 hover:text-coral transition-colors"
                  >
                    <svg className="w-5 h-5 shrink-0 text-coral mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-base">R. Dr. Jairo de Matos Pereira, Ed. Praia Corporate — Praia da Costa, Vila Velha - ES, 29101-310</span>
                  </a>
                </div>
              </div>

              {/* Coluna direita — formulário */}
              <form className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1.5">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-coral transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-coral transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1.5">
                    Telefone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-coral transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1.5">
                    Assunto
                  </label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-coral transition-colors bg-white">
                    <option value="">Selecione um assunto</option>
                    <option value="microfisioterapia">Agendar Microfisioterapia</option>
                    <option value="palestra">Convidar para Palestra</option>
                    <option value="projetos">Projetos Sociais</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Escreva sua mensagem..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-coral transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-coral text-white py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
