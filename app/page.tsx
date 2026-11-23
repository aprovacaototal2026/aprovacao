import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0c0f] text-[#e6e8ec]">
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <DifferentialsSection />
        <HowItWorksSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
