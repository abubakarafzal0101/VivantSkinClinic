import { useState } from "react";
import Preloader from "../../components/ui/Preloader";
import Layout from "../../components/layout/Layout";
import ServicesPageSection from "../../components/sections/ServicesPageSection";

export default function Services() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Preloader same as Home */}
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      {/* Main Page */}
      {loaded && (
        <Layout>
          <ServicesPageSection />
        </Layout>
      )}
    </>
  );
}
