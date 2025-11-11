import Hero from '@/components/Hero';
import Accompagnement from '@/components/Accompagnement';
import ConsultationSeule from '@/components/ConsultationSeule';
import ConsultationCouple from '@/components/ConsultationCouple';
import Enfants from '@/components/Enfants';
import QuiSuisJe from '@/components/QuiSuisJe';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Accompagnement />
      <ConsultationSeule />
      <ConsultationCouple />
      <Enfants />
      <QuiSuisJe />
      <Contact />
    </div>
  );
}

