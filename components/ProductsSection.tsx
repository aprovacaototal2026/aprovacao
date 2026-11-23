'use client';

import { useState } from 'react';
import { FileText, ShoppingBag, X } from 'lucide-react';

const PLACEHOLDER_SLOTS = [1, 2, 3, 4];

export default function ProductsSection() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  return (
    <section
      id="apostilas"
      className="scroll-mt-20 border-b border-[#232a35] bg-[#0a0c0f] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-block h-[2px] w-6 bg-[#b91c1c]"
            />
            <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#c9a227]">
              Catálogo de materiais
            </span>
          </div>
          <h2 className="text-balance font-display text-3xl font-extrabold uppercase tracking-tight text-[#f8fafc] sm:text-4xl">
            Apostilas disponíveis
          </h2>
          <p className="mt-3 font-serif text-base leading-relaxed text-[#9ca3af]">
            Espaços reservados para os próximos lançamentos em PDF voltados aos
            concursos públicos.
          </p>
        </div>

        {selectedSlot !== null && (
          <div
            role="status"
            className="mb-8 flex items-center justify-between gap-4 rounded-sm border border-[#c9a227]/50 bg-[#11151b] px-4 py-3 text-sm text-[#e6e8ec]"
          >
            <p className="font-serif">
              Espaço reservado #{selectedSlot}: este botão será vinculado ao
              link de pagamento da Hotmart{' '}
              <span className="font-display font-bold tracking-wide text-[#c9a227]">
                [LINK_HOTMART]
              </span>
              .
            </p>
            <button
              type="button"
              aria-label="Fechar aviso"
              onClick={() => setSelectedSlot(null)}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-[#9ca3af] transition-colors hover:bg-[#1e242d] hover:text-[#f8fafc]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLACEHOLDER_SLOTS.map((slot) => (
            <article
              key={slot}
              className="group relative flex flex-col justify-between rounded-sm border border-[#232a35] bg-[#11151b] p-5 transition-transform duration-150 hover:-translate-y-1 hover:border-[#c9a227]/70"
            >
              <div>
                {/* CSS-only placeholder cover area (retrato A4; ao inserir capa real, usar object-contain) */}
                <div className="relative mb-5 flex aspect-[3/4] w-full flex-col items-center justify-center overflow-hidden rounded-sm border border-dashed border-[#2c3442] bg-[#0a0c0f] p-4">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[2px] bg-[#b91c1c]/80"
                  />
                  <FileText
                    className="mb-2 h-8 w-8 text-[#c9a227]/60"
                    aria-hidden="true"
                  />
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-[#6b7280]">
                    [CAPA DA APOSTILA]
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#c9a227]">
                  [NOME DA APOSTILA]
                </h3>

                <dl className="mt-4 space-y-2.5 border-t border-[#1e242d] pt-4 text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <dt className="font-serif text-[#9ca3af]">Banca:</dt>
                    <dd className="font-display font-semibold uppercase tracking-wide text-[#e6e8ec]">
                      [BANCA]
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="font-serif text-[#9ca3af]">Páginas:</dt>
                    <dd className="font-display font-semibold uppercase tracking-wide tabular-nums text-[#e6e8ec]">
                      [Nº DE PÁGINAS]
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 border-t border-[#1e242d] pt-4">
                <div className="mb-4 flex items-baseline justify-between">
                  <span className="font-serif text-xs uppercase tracking-wider text-[#9ca3af]">
                    Investimento
                  </span>
                  <span className="font-display text-2xl font-extrabold tracking-tight tabular-nums text-[#f8fafc]">
                    [PREÇO]
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-[#c9a227] bg-transparent px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-[#c9a227] transition-colors duration-150 hover:bg-[#c9a227] hover:text-[#0a0c0f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
                >
                  <ShoppingBag className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>[Botão de compra]</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
