import { useState } from "react";
import Preloader from "../../components/ui/Preloader";
import Layout from "../../components/layout/Layout";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <Layout>
          {/* Hero section yahan aayega */}
          <div
            style={{
              height: "100vh",
              background: "#111111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 300,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                textAlign: "center",
              }}
            >
              Reveal Your
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Natural Glow
              </span>
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.7rem",
                color: "#999",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
              }}
            >
              Luxury Skin Aesthetics Center
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}
