'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Apostilas', href: '#apostilas' },
  { label: 'Por que nós', href: '#por-que-nos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Perguntas frequentes', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#232a35] bg-[#0a0c0f]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 xl:gap-8">
        <a
          href="#inicio"
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 items-center gap-3 whitespace-nowrap font-display text-xl font-extrabold uppercase tracking-wider text-[#f3f4f6] transition-colors hover:text-[#c9a227] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
        >
          <Image
            src="/assets/aistudio/Aprova__o_TOtal_70aab082.png"
            alt="Logo Aprovação Total"
            width={96}
            height={64}
            className="h-12 w-auto rounded-sm object-contain sm:h-14"
            referrerPolicy="no-referrer"
            priority
          />
          <span>Aprovação Total</span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-4 lg:flex xl:gap-6"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-wider text-[#b8bec8] transition-colors duration-150 hover:text-[#c9a227] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#apostilas"
            className="hidden shrink-0 whitespace-nowrap rounded-sm border border-[#c9a227] px-4 py-2 font-display text-sm font-bold uppercase tracking-wider text-[#c9a227] transition-colors duration-150 hover:bg-[#c9a227] hover:text-[#0a0c0f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] sm:inline-flex"
          >
            Ver apostilas
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#232a35] bg-[#11151b] text-[#e6e8ec] transition-colors hover:border-[#c9a227] hover:text-[#c9a227] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Menu móvel"
          className="border-t border-[#232a35] bg-[#0a0c0f] px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center border-b border-[#181d25] px-2 font-display text-base font-semibold uppercase tracking-wider text-[#d1d5db] transition-colors hover:text-[#c9a227]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
