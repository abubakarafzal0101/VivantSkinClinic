import { useState } from "react";
import Preloader from "../../components/ui/Preloader";
import Layout from "../../components/layout/Layout";
import ContactPageSection from "../../components/sections/ContactPageSection";
import SEO from "../../components/ui/SEO";
export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Preloader same as Home */}
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      {/* Main Page */}
      {loaded && (
        <Layout>
          <SEO
            title="Book Consultation — Vivant Skin Clinic"
            description="Book your free skin consultation at Vivant Skin Clinic Lahore. Contact us today for personalized treatment plans."
            url="https://vivantskinclinic.com/contact"
          />
          <ContactPageSection />
        </Layout>
      )}
    </>
  );
}
