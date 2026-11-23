'use client';

import { useState } from 'react';
import { Instagram, Mail, Shield } from 'lucide-react';

export default function Footer() {
  const [notice, setNotice] = useState(false);

  const handleInstagramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || href.startsWith('[')) {
      e.preventDefault();
      setNotice(true);
    }
  };

  return (
    <footer
      id="contato"
      className="bg-[#0a0c0f] py-12 text-[#b8bec8] sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-[#232a35] pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 font-display text-xl font-extrabold uppercase tracking-wider text-[#f8fafc]">
              <Shield className="h-5 w-5 text-[#c9a227]" aria-hidden="true" />
              <span>Aprovação Total</span>
            </div>
            <p className="mt-3 max-w-sm font-serif text-sm leading-relaxed text-[#9ca3af]">
              Apostilas digitais em PDF focadas em concursos de Guarda Civil
              Municipal.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-[#c9a227]">
              Navegação
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="font-serif transition-colors hover:text-[#f8fafc]"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#apostilas"
                  className="font-serif transition-colors hover:text-[#f8fafc]"
                >
                  Apostilas
                </a>
              </li>
              <li>
                <a
                  href="#por-que-nos"
                  className="font-serif transition-colors hover:text-[#f8fafc]"
                >
                  Por que nós
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="font-serif transition-colors hover:text-[#f8fafc]"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-serif transition-colors hover:text-[#f8fafc]"
                >
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-[#c9a227]">
              Contato
            </h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href="[LINK_INSTAGRAM]"
                  onClick={handleInstagramClick}
                  className="inline-flex items-center gap-2.5 font-serif text-[#e6e8ec] transition-colors hover:text-[#c9a227]"
                >
                  <Instagram
                    className="h-4 w-4 shrink-0 text-[#c9a227]"
                    aria-hidden="true"
                  />
                  <span>Instagram Aprovação Total</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className="h-4 w-4 shrink-0 text-[#c9a227]"
                  aria-hidden="true"
                />
                <span className="font-serif text-[#e6e8ec]">[E-MAIL]</span>
              </li>
            </ul>

            {notice && (
              <p className="mt-3 font-serif text-xs text-[#c9a227]">
                Espaço reservado para o perfil oficial [LINK_INSTAGRAM].
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-[#9ca3af] sm:flex-row sm:items-center">
          <p className="font-serif">
            Aprovação Total. Todos os direitos reservados.
          </p>
          <p className="font-display text-xs font-bold uppercase tracking-wider text-[#d1d5db]">
            Material de estudo — não garante aprovação
          </p>
        </div>
      </div>
    </footer>
  );
}
