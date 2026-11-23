import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-serif',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a0c0f',
};

export const metadata: Metadata = {
  title: 'Aprovação Total — Apostilas em PDF para Concursos Públicos',
  description:
    'Apostilas completas e de questões em PDF elaboradas para concursos públicos. Material objetivo baseado no edital.',
  openGraph: {
    title: 'Aprovação Total — Apostilas em PDF para Concursos Públicos',
    description:
      'Apostilas completas e de questões em PDF elaboradas para concursos públicos.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/assets/aistudio/Aprova__o_TOtal_70aab082.png',
        width: 1536,
        height: 1024,
        alt: 'Aprovação Total — Apostilas, Simulados e Questões',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aprovação Total — Apostilas em PDF para Concursos Públicos',
    description:
      'Apostilas completas e de questões em PDF elaboradas para concursos públicos.',
    images: ['/assets/aistudio/Aprova__o_TOtal_70aab082.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${barlowCondensed.variable} ${sourceSerif.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0a0c0f] text-[#e6e8ec] font-serif selection:bg-[#c9a227] selection:text-[#0a0c0f]"
      >
        {children}
      </body>
    </html>
  );
}
