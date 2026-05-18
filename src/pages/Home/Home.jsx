import { useState } from "react";
import Preloader from "../../components/ui/Preloader";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/sections/HeroSection";
import ServicesSection from "../../components/sections/ServicesSection";
import DoctorSection from "../../components/sections/DoctorSection";
import BeforeAfterSection from "../../components/sections/BeforeAfterSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import FAQSection from "../../components/sections/FAQSection";
import CTASection from "../../components/sections/CTASection";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <Layout>
          <HeroSection />
          <ServicesSection />
          <DoctorSection />
          <BeforeAfterSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </Layout>
      )}
    </>
  );
}
