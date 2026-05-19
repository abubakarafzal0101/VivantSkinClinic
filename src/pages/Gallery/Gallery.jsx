import Layout from "../../components/layout/Layout";
import GalleryHero from "../../components/sections/gallery/GalleryHero";
import GalleryGrid from "../../components/sections/gallery/GalleryGrid";
import SEO from "../../components/ui/SEO";
export default function Gallery() {
  return (
    <Layout>
      <SEO
        title="Gallery — Vivant Skin Clinic"
        description="View our clinic gallery and real patient transformations. See the luxury environment and amazing results at Vivant Skin Clinic Lahore."
        url="https://vivantskinclinic.com/gallery"
      />
      <GalleryHero />
      <GalleryGrid />
    </Layout>
  );
}
