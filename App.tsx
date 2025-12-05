import React from 'react';
import Hero from './components/Hero';
import TheMirror from './components/TheMirror';
import TheProblem from './components/TheProblem';
import TheSolution from './components/TheSolution';
import TheClass from './components/TheClass';
import CommunitySection from './components/CommunitySection';
import BioSection from './components/BioSection';
import WhatsIncluded from './components/WhatsIncluded';
import PricingSection from './components/PricingSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Hero />
      <TheMirror />
      <TheProblem />
      <TheSolution />
      <TheClass />
      <CommunitySection />
      <BioSection />
      <WhatsIncluded />
      <PricingSection id="pricing-top" />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;