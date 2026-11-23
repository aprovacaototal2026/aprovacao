import { BookOpen, Download, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Escolha a apostila',
    description:
      'Selecione no catálogo a apostila em PDF correspondente ao concurso que você vai prestar.',
    icon: BookOpen,
  },
  {
    step: '02',
    title: 'Pague com segurança na Hotmart',
    description:
      'Ao clicar no botão de compra, você é direcionado para o ambiente protegido da Hotmart para concluir o pagamento.',
    icon: ShieldCheck,
  },
  {
    step: '03',
    title: 'Receba o PDF na hora',
    description:
      'Assim que a confirmação ocorrer, o acesso para download do material em PDF é liberado imediatamente no seu e-mail e na plataforma.',
    icon: Download,
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
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
              Aquisição e entrega digital
            </span>
          </div>
          <h2 className="text-balance font-display text-3xl font-extrabold uppercase tracking-tight text-[#f8fafc] sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-3 font-serif text-base leading-relaxed text-[#9ca3af]">
            Do acesso ao catálogo até o download do arquivo no seu dispositivo em
            três etapas simples.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col rounded-sm border border-[#232a35] bg-[#11151b] p-6 sm:p-8"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-4xl font-extrabold leading-none tracking-tight tabular-nums text-[#c9a227]">
                    {item.step}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#232a35] bg-[#0a0c0f] text-[#c9a227]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#f8fafc]">
                  {item.title}
                </h3>

                <p className="mt-3 font-serif text-sm leading-relaxed text-[#b8bec8] sm:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
