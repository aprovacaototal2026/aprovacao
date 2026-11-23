import Image from 'next/image';
import { ArrowDownRight, FileDown, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#232a35] bg-[#0a0c0f] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="tactical-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block h-[2px] w-8 bg-[#b91c1c]"
              />
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#c9a227]">
                Concursos públicos
              </p>
            </div>

            <h1 className="max-w-2xl text-balance font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-[#f8fafc] sm:text-5xl lg:text-6xl">
              Sua aprovação{' '}
              <span className="text-[#c9a227]">começa aqui</span>
            </h1>

            <p className="mt-5 max-w-xl font-serif text-base leading-relaxed text-[#b8bec8] sm:text-lg">
              Apostilas completas e cadernos de questões em PDF elaborados para
              a preparação objetiva em concursos públicos. Estudo direcionado ao
              conteúdo programático, sem rodeios.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#apostilas"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 whitespace-nowrap rounded-sm bg-[#c9a227] px-7 py-3 font-display text-base font-extrabold uppercase tracking-wider text-[#0a0c0f] transition-all duration-150 hover:bg-[#dfb83b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c0f]"
              >
                <span>Ver apostilas</span>
                <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#1e242d] pt-6 text-sm text-[#c5cad3]">
              <div className="flex items-center gap-2">
                <FileDown
                  className="h-4 w-4 shrink-0 text-[#c9a227]"
                  aria-hidden="true"
                />
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-[#e6e8ec]">
                  PDF imediato
                </span>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-4 w-px bg-[#232a35] sm:inline-block"
              />

              <div className="flex items-center gap-2">
                <ShieldCheck
                  className="h-4 w-4 shrink-0 text-[#c9a227]"
                  aria-hidden="true"
                />
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-[#e6e8ec]">
                  Pagamento seguro via Hotmart
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-sm border border-[#232a35] bg-[#11151b] p-3">
              {/* Tactical CSS corner accents */}
              <span
                aria-hidden="true"
                className="absolute -top-px -left-px h-3 w-3 border-t-2 border-l-2 border-[#c9a227]"
              />
              <span
                aria-hidden="true"
                className="absolute -top-px -right-px h-3 w-3 border-t-2 border-r-2 border-[#c9a227]"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-[#c9a227]"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-[#c9a227]"
              />

              <div className="relative w-full overflow-hidden rounded-sm bg-[#0a0c0f]">
                <Image
                  src="/assets/aistudio/Aprova__o_TOtal_70aab082.png"
                  alt="Logotipo oficial Aprovação Total — Apostilas, Simulados e Questões"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-auto w-full object-contain"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-[#1e242d] pt-3 px-1">
                <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-[#9ca3af]">
                  Preparação para concursos
                </span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-6 bg-[#b91c1c]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
