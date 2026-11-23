'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || href.startsWith('[')) {
      e.preventDefault();
      setShowInfo((prev) => !prev);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2 sm:right-6 sm:bottom-6">
      {showInfo && (
        <div
          role="status"
          className="flex max-w-[260px] items-center justify-between gap-2 rounded-sm border border-[#c9a227]/60 bg-[#11151b] px-3 py-2 text-xs text-[#e6e8ec] shadow-lg"
        >
          <span className="font-serif">
            Link reservado:{' '}
            <strong className="font-display tracking-wide text-[#c9a227]">
              [LINK_WHATSAPP]
            </strong>
          </span>
          <button
            type="button"
            aria-label="Fechar aviso do WhatsApp"
            onClick={() => setShowInfo(false)}
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-sm text-[#9ca3af] hover:text-[#f8fafc]"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      )}

      <a
        href="[LINK_WHATSAPP]"
        onClick={handleClick}
        aria-label="Atendimento via WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a227] bg-[#11151b] text-[#c9a227] shadow-lg transition-transform duration-150 hover:scale-105 hover:bg-[#c9a227] hover:text-[#0a0c0f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] sm:h-12 sm:w-auto sm:gap-2 sm:px-4"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="hidden whitespace-nowrap font-display text-sm font-bold uppercase tracking-wider sm:inline">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
