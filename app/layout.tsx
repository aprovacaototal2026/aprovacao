import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Aprovação Total — Apostilas em PDF para Guarda Civil Municipal',
  description:
    'Apostilas completas e de questões em PDF focadas em concursos de Guarda Civil Municipal. Material objetivo baseado no edital.',
  openGraph: {
    title: 'Aprovação Total — Apostilas em PDF para Guarda Civil Municipal',
    description:
      'Apostilas completas e de questões em PDF focadas em concursos de Guarda Civil Municipal.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aprovação Total — Apostilas em PDF para Guarda Civil Municipal',
    description:
      'Apostilas completas e de questões em PDF focadas em concursos de Guarda Civil Municipal.',
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
