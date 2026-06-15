import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GaleriaLightbox from "./GaleriaLightbox";

export const metadata = {
  title: "Projetos Sociais | Paulla Flores",
  description:
    "Iniciativas culturais e educativas que levam amor, literatura e cuidado emocional a comunidades no Espírito Santo e pelo Brasil.",
};

const sairDaAgressaoImages = [
  { src: "/images/logo-projetos-sociais.png", alt: "Sair da Agressão e Ir para o Amor — logo", contain: true },
  { src: "/images/sair-da-agressao-1.jpeg", alt: "Sair da Agressão — foto 1" },
  { src: "/images/sair-da-agressao-2.jpeg", alt: "Sair da Agressão — foto 2" },
  { src: "/images/sair-da-agressao-3.jpg", alt: "Sair da Agressão — foto 3" },
  { src: "/images/sair-da-agressao-4.jpg", alt: "Sair da Agressão — foto 4" },
  { src: "/images/sair-da-agressao-5.jpg", alt: "Sair da Agressão — foto 5" },
];

const amorLiterarioImages = [
  { src: "/images/amor-literario-1.jpeg", alt: "Projeto Amor Literário — foto 1" },
  { src: "/images/amor-literario-2.jpeg", alt: "Projeto Amor Literário — foto 2" },
  { src: "/images/amor-literario-3.jpg", alt: "Projeto Amor Literário — foto 3" },
  { src: "/images/amor-literario-4.jpeg", alt: "Projeto Amor Literário — foto 4" },
  { src: "/images/amor-literario-5.jpeg", alt: "Projeto Amor Literário — foto 5" },
  { src: "/images/amor-literario-6.jpeg", alt: "Projeto Amor Literário — foto 6" },
];

export default function ProjetosSociaisPage() {
  return (
    <>
      <Header />
      <main>

        {/* Seção 1 — Hero */}
        <section
          className="relative min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center py-20"
          style={{ backgroundImage: "url('/images/projetos-sociais.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
                Projetos Sociais
              </h1>
              <p className="text-white/90 text-xl mb-6">
                Levando amor, saúde mental e emocional, cultura e cuidado para quem mais precisa.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Através da ciência (saúde mental e emocional) de projetos culturais e educativos,
                Paulla Flores promove acesso democrático à literatura, música e reflexões sobre o
                bem-estar. Suas iniciativas valorizam talentos locais e estimulam o pertencimento
                coletivo, construindo pontes entre pessoas, cultura e esperança.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 2 — Sair da Agressão e Ir para o Amor */}
        <section className="py-20 bg-[#FDF0E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  Sair da Agressão e Ir para o Amor
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-5">
                  O projeto nasceu da coragem de transformar dor em propósito. Depois de
                  enfrentar relacionamentos abusivos e depressão, Paulla encontrou no
                  autoconhecimento e na arte um novo caminho, e decidiu ajudar outras
                  mulheres, adolescentes e jovens de comunidades a fazerem o mesmo.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-5">
                  Implementado em cinco municípios do Espírito Santo (Vitória, Serra,
                  Guarapari, Cachoeiro de Itapemirim e Cariacica) entre 2021 e 2025, o
                  projeto realiza palestras-show e rodas de conversa com música ao vivo,
                  trabalhando educação emocional, amor-próprio, relacionamentos saudáveis
                  e autocura, com práticas de meditação, escrita terapêutica e respiração
                  consciente.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Desde 2021, já alcançou centenas de mulheres no Espírito Santo e pelo
                  Brasil, presencialmente e online, com relatos de transformações profundas:
                  o fim de relacionamentos abusivos, o reencontro com a autoestima e o
                  início de uma nova fase de vida.
                </p>

                <blockquote className="border-l-4 border-[#F4655A] pl-6">
                  <p className="text-gray-700 text-base italic leading-relaxed mb-2">
                    &ldquo;Quando eu me amo, eu te amo mais. Porque o amor que eu dou para o
                    mundo começa dentro de mim.&rdquo;
                  </p>
                  <cite className="text-[#F4655A] font-semibold not-italic text-sm">
                    Paulla Flores
                  </cite>
                </blockquote>
              </div>

              <GaleriaLightbox images={sairDaAgressaoImages} />
            </div>
          </div>
        </section>

        {/* Seção 3 — Projeto Amor Literário */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">

              <GaleriaLightbox images={amorLiterarioImages} />

              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  Projeto Amor Literário
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-5">
                  O Projeto Amor Literário nasceu do desejo de espalhar a força da
                  literatura capixaba por todo o Brasil. Paulla Flores, autora de
                  &ldquo;Cadê o Amor? Dos Espinhos à Flor&rdquo;, e Amanda Carvalho, autora de histórias sobre
                  inclusão e infância, uniram-se para levar amor, cultura e inspiração
                  através dos livros.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-5">
                  O projeto apresenta obras de autores capixabas, realiza doações de
                  livros para acervos de bibliotecas no Brasil e no mundo, promove
                  encontros literários e desperta novos leitores, de crianças a adultos.
                  Entre os autores que fazem parte dessa jornada está Francisco Bragança,
                  jovem escritor autista, autor de &ldquo;Gregory e sua Aventura Incrível&rdquo;.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Cada livro doado é uma semente de transformação, e cada história
                  contada é um abraço entre culturas.
                </p>

                <div className="bg-[#FDF0E8] rounded-2xl p-6 mb-8">
                  <p className="text-gray-700 text-base leading-relaxed">
                    Quer ajudar esse sonho a continuar florescendo? O Projeto Amor
                    Literário é social e sem fins lucrativos. Entre em contato para
                    doar livros, apoiar financeiramente ou firmar parcerias.
                  </p>
                </div>

                <a
                  href="https://wa.me/5527997385950?text=Ola!%20Quero%20saber%20mais%20sobre%20o%20Projeto%20Amor%20Literario%20e%20como%20posso%20apoiar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#F4655A] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Quero Apoiar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4 — Premiações */}
        <section className="py-16 bg-[#FDF0E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
              Premiações
            </h2>
            <p className="text-[#6B3A2A] text-xl text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              &ldquo;Quando o amor-próprio encontra propósito, a transformação acontece. Um projeto premiado duas vezes por fortalecer mulheres e comunidades.&rdquo;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 — Prêmio Elas 2025 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/premio-elas-2025.jpg"
                    alt="Prêmio Elas 2025"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-7 h-7 text-[#F4655A] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V17H8v2h8v-2h-3v-1.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zm-2 3c0 1.65-1.35 3-3 3s-3-1.35-3-3V5h6v3zm-10 0V7H5V7c0 1.65 1.35 3 3 3V8zm14 0h-2V7h2v1z"/>
                    </svg>
                    <h3 className="text-2xl font-semibold text-gray-900">Prêmio Elas</h3>
                  </div>
                  <p className="text-gray-500 text-base">Secretaria da Mulher — Estado do Espírito Santo, 2025</p>
                </div>
              </div>

              {/* Card 2 — Prêmio ArcelorMittal 2024 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/premio-arcelormittal-2024.jpg"
                    alt="Prêmio Mulher ArcelorMittal 2024"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-7 h-7 text-[#F4655A] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V17H8v2h8v-2h-3v-1.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zm-2 3c0 1.65-1.35 3-3 3s-3-1.35-3-3V5h6v3zm-10 0V7H5V7c0 1.65 1.35 3 3 3V8zm14 0h-2V7h2v1z"/>
                    </svg>
                    <h3 className="text-2xl font-semibold text-gray-900">Prêmio Mulher ArcelorMittal</h3>
                  </div>
                  <p className="text-gray-500 text-base">ArcelorMittal, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5 — CTA Final */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">
              Ajude o amor a acontecer
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Cada palestra, cada roda de conversa, cada livro doado leva esperança
              a quem busca recomeçar. Você pode apoiar com doações, parcerias ou
              divulgação.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5527997385950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F4655A] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Falar no WhatsApp
              </a>
              <a
                href="https://www.instagram.com/eupaullaflores"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#F4655A] text-[#F4655A] px-8 py-4 rounded-full font-semibold hover:bg-[#F4655A] hover:text-white transition-colors"
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
