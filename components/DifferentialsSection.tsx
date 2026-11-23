import { CheckSquare, Crosshair, FileCheck2, Scale } from 'lucide-react';

const DIFFERENTIALS = [
  {
    number: '01',
    title: 'Material feito a partir do edital',
    description:
      'Estrutura integralmente alinhada aos tópicos exigidos no edital oficial, sem conteúdo genérico ou matérias fora do programa da prova.',
    icon: FileCheck2,
  },
  {
    number: '02',
    title: 'Lei seca na linguagem literal',
    description:
      'Apresentação fiel do texto legal exatamente como é cobrado nas provas objetivas, facilitando a memorização dos dispositivos decisivos.',
    icon: Scale,
  },
  {
    number: '03',
    title: 'Foco nos pontos mais cobrados por cada banca',
    description:
      'Organização estratégica baseada no histórico e no estilo de cobrança da banca organizadora de cada concurso.',
    icon: Crosshair,
  },
  {
    number: '04',
    title: 'Gabarito comentado questão por questão',
    description:
      'Resolução explicada alternativa por alternativa, apontando o fundamento legal ou teórico de cada item para fixação real do conteúdo.',
    icon: CheckSquare,
  },
];

export default function DifferentialsSection() {
  return (
    <section
      id="por-que-nos"
      className="border-b border-[#232a35] bg-[#0d1015] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-block h-[2px] w-6 bg-[#b91c1c]"
            />
            <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#c9a227]">
              Padrão operacional de estudo
            </span>
          </div>
          <h2 className="text-balance font-display text-3xl font-extrabold uppercase tracking-tight text-[#f8fafc] sm:text-4xl">
            Por que a Aprovação Total
          </h2>
          <p className="mt-3 font-serif text-base leading-relaxed text-[#9ca3af]">
            Cada apostila é construída para transformar o tempo de leitura em
            preparo objetivo para a prova da Guarda Civil Municipal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DIFFERENTIALS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="relative rounded-sm border border-[#232a35] bg-[#11151b] p-6 sm:p-8"
              >
                <div className="mb-5 flex items-center justify-between border-b border-[#1e242d] pb-4">
                  <span className="font-display text-2xl font-extrabold tracking-tight tabular-nums text-[#c9a227]">
                    {item.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#232a35] bg-[#0a0c0f] text-[#c9a227]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#f8fafc] sm:text-2xl">
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
