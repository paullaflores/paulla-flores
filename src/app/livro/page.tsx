import Image from "next/image";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "./ProductCard";

export const metadata = {
  title: "Cadê o Amor? Dos Espinhos à Flor | Paulla Flores",
  description:
    "Um guia para reencontrar o amor-próprio e transformar feridas em flores. Livro de Paulla Flores.",
};

const bookFeatures = [
  {
    title: "Cura Interior",
    description: "Um caminho para compreender e acolher suas próprias dores",
    icon: "/images/icone-cura-interior.svg",
  },
  {
    title: "Amor-próprio",
    description: "Ferramentas práticas para se reconectar com você mesmo",
    icon: "/images/icone-amor-proprio.svg",
  },
  {
    title: "Superação",
    description: "Histórias reais de transformação e recomeços",
    icon: "/images/icone-superacao.svg",
  },
  {
    title: "Relacionamentos",
    description: "Como curar feridas do passado e construir vínculos mais saudáveis",
    icon: "/images/icone-relacionamentos.svg",
  },
  {
    title: "Criança Interior",
    description: "O resgate da sua essência e autenticidade",
    icon: "/images/icone-crianca-interior.svg",
  },
  {
    title: "Fé e Propósito",
    description: "Uma jornada espiritual de autodescoberta e significado",
    icon: "/images/icone-fe-proposito.svg",
  },
];

export default function LivroPage() {
  return (
    <>
      <Header />
      <main>

        {/* Seção 1 — Hero */}
        <section
          className="min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center py-20"
          style={{ backgroundImage: "url('/images/livro-background.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <div className="max-w-xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Um guia completo e interativo para a mulher reencontrar o amor-próprio,
                com passo a passo prático, QR codes, músicas autorais e vídeos exclusivos
                que acompanham cada capítulo.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Através de sua autobiografia, Paulla compartilha sua jornada como terapeuta
                e como protagonista de mais de uma década de relacionamentos abusivos,
                enfrentando depressão e ansiedade, e como encontrou o caminho da cura.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                O livro ajuda a mulher a identificar padrões de abuso, cuidar da saúde
                emocional e aprender a se amar profundamente antes de buscar esse amor
                em outra pessoa.
              </p>
              <blockquote className="border-l-4 border-[#F4655A] pl-6">
                <p className="text-gray-700 text-base italic leading-relaxed mb-2">
                  &ldquo;Quando eu me amo, eu te amo mais.&rdquo;
                </p>
                <cite className="text-[#F4655A] font-semibold not-italic text-sm">
                  Paulla Flores
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Seção 2 — O que você vai encontrar */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
              O que você vai encontrar neste livro
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">
                    <Image src={feature.icon} alt={feature.title} width={48} height={48} />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção 3 — Comprar */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <ProductCard />
          </div>
        </section>

        {/* Seção 4 — Sobre a Autora */}
        <section className="py-20 bg-[#FDF0E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  src="/images/paulla-autora.jpg"
                  alt="Paulla Flores"
                  width={560}
                  height={480}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  Sobre a Autora
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Antes, Paula Bragança. Hoje, Paulla Flores, para o desabrochar da vida.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Durante muitos anos, Paulla escondeu sua arte e sua voz. Sua vida
                  profissional começou no curso de Letras, mas foi na Fisioterapia que
                  encontrou um caminho de cura, primeiro para si, depois para centenas
                  de pessoas que passaram por seu consultório.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Há 20 anos atua como fisioterapeuta, e há 19 anos se dedica à
                  Microfisioterapia, a fisioterapia das emoções, técnica desenvolvida na
                  França e que consiste em estimular a autorregulação e a autocura do
                  organismo através das mãos. É pioneira no Espírito Santo e uma das
                  pioneiras no Brasil nessa técnica.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Hoje, como fisioterapeuta, escritora, cantora e palestrante, sua missão
                  é transformar dores em flores, histórias em inspiração e corpos em vozes
                  que falam, sentem e se curam.
                </p>
                <p className="text-sm text-gray-400 mt-4">CREFITO 105294-F</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5 — Depoimentos */}
        <section className="py-16 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold text-gray-900 mb-3">
                O que as leitoras dizem
              </h2>
              <p className="text-gray-600 text-lg">
                Experiências reais de quem já leu
              </p>
            </div>
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div
              className="elfsight-app-bde7a5fe-cd56-489b-9136-2dd386dd7e1a"
              data-elfsight-app-lazy
            />
          </div>
        </section>

        {/* Seção 6 — Próximo Livro */}
        <section
          className="relative py-24 bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "url('/images/palestras.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <div className="max-w-xl text-left">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Próximo livro a caminho
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-3">
                A pedido de muitas leitoras, &ldquo;Cadê o Amor? 2&rdquo; já está sendo escrito.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-10">
                Siga no Instagram para acompanhar bastidores e ser a primeira a saber quando será lançado.
              </p>
              <a
                href="https://www.instagram.com/eupaullaflores"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F4655A] text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Seguir no Instagram
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
