import { useState } from "react";
import Preloader from "../../components/ui/Preloader";
import Layout from "../../components/layout/Layout";
import ContactPageSection from "../../components/sections/ContactPageSection";

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Preloader same as Home */}
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      {/* Main Page */}
      {loaded && (
        <Layout>
          <ContactPageSection />
        </Layout>
      )}
    </>
  );
}
