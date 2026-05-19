import Layout from "../../components/layout/Layout";
import AboutHero from "../../components/sections/about/AboutHero";
import AboutStory from "../../components/sections/about/AboutStory";
import AboutValues from "../../components/sections/about/AboutValues";
// import AboutTeam from "../../components/sections/about/AboutTeam";
import AboutCTA from "../../components/sections/about/AboutCTA";
import SEO from "../../components/ui/SEO";
export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us — Vivant Skin Clinic"
        description="Meet our expert dermatologists. 12+ years experience, 5000+ happy clients, board certified specialists in Lahore."
        url="https://vivantskinclinic.com/about"
      />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      {/* <AboutTeam /> */}
      <AboutCTA />
    </Layout>
  );
}
