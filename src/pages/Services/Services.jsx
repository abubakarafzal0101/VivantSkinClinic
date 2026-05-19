import { useState } from "react";
import Preloader from "../../components/ui/Preloader";
import Layout from "../../components/layout/Layout";
import ServicesPageSection from "../../components/sections/ServicesPageSection";
import SEO from "../../components/ui/SEO";
export default function Services() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Preloader same as Home */}
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      {/* Main Page */}
      {loaded && (
        <Layout>
          <SEO
            title="Our Treatments — Vivant Skin Clinic"
            description="Explore premium skin treatments: Hydrafacial, Laser Hair Removal, Botox, Fillers, Skin Whitening, Anti Aging and more in Lahore."
            url="https://vivantskinclinic.com/services"
          />
          <ServicesPageSection />
        </Layout>
      )}
    </>
  );
}
