import Hero from '@/components/home/Hero';
import PourQui from '@/components/home/PourQui';
import CeQueJePropose from '@/components/home/CeQueJePropose';
import PourquoiConsulter from '@/components/home/PourquoiConsulter';
import OuConsulter from '@/components/home/OuConsulter';
import LeCabinet from '@/components/home/LeCabinet';
import EncadreEthique from '@/components/home/EncadreEthique';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PourQui />
      <CeQueJePropose />
      <PourquoiConsulter />
      <OuConsulter />
      <LeCabinet />
      <EncadreEthique />
      <CTASection />
    </div>
  );
}
