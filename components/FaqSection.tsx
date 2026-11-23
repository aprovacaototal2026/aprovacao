'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const FAQ_ITEMS = [
  {
    question: 'Como recebo o PDF?',
    answer:
      'Após a confirmação do pagamento pela Hotmart, você recebe automaticamente um e-mail com os dados de acesso para baixar o arquivo em PDF diretamente na plataforma, podendo estudar no celular, tablet ou computador.',
  },
  {
    question: 'Posso imprimir?',
    answer:
      'Sim. O material é entregue em formato PDF padrão, permitindo que você realize a impressão completa ou parcial para seu uso pessoal e estudo presencial.',
  },
  {
    question: 'Serve para outro concurso?',
    answer:
      'Cada apostila é desenvolvida especificamente a partir do edital e do perfil de banca do concurso indicado. Conteúdos básicos comuns podem auxiliar em revisões gerais, mas recomenda-se utilizar o material direcionado ao edital do seu certame.',
  },
  {
    question: 'Quais as formas de pagamento?',
    answer:
      'Os pagamentos são processados exclusivamente pela Hotmart, que oferece opções como Pix, cartão de crédito e boleto bancário, conforme disponibilidade no checkout oficial.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-b border-[#232a35] bg-[#0d1015] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-block h-[2px] w-6 bg-[#b91c1c]"
            />
            <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#c9a227]">
              Dúvidas comuns
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-[#f8fafc] sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="divide-y divide-[#232a35] rounded-sm border border-[#232a35] bg-[#11151b]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => handleToggle(index)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#171c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c9a227] sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-lg font-bold uppercase tracking-wide text-[#f8fafc] sm:text-xl">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#c9a227] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.16, ease: 'easeOut' }}
                      className="border-t border-[#1e242d] bg-[#0a0c0f]/50 px-5 py-4 sm:px-6 sm:py-5"
                    >
                      <p className="font-serif text-sm leading-relaxed text-[#b8bec8] sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
