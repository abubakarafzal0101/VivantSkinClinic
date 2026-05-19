import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";

const links = {
  Treatments: [
    { name: "Services", path: "/services" },
    { name: "Hydrafacial", path: "/services" },
    { name: "Laser Hair Removal", path: "/services" },
    { name: "Acne Treatment", path: "/services" },
    { name: "Pigmentation", path: "/services" },
    { name: "Skin Glow", path: "/services" },
  ],
  Company: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", path: "/contact" },
    { name: "Terms & Conditions", path: "/contact" },
    { name: "Cookie Policy", path: "/contact" },
  ],
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "#0A0A0A",
        padding: "6rem clamp(1.5rem, 6vw, 6rem) 0",
        borderTop: "1px solid rgba(201,164,108,0.1)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* TOP */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "5rem",
          }}
        >
          {/* BRAND */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#fff",
                  letterSpacing: "0.12em",
                }}
              >
                VIVANT SKIN CLINIC
              </div>
              <div
                style={{
                  fontFamily: "Manrope",
                  fontSize: "0.5rem",
                  color: "#C9A46C",
                  letterSpacing: "0.35em",
                }}
              >
                MULTAN • DERMATOLOGY & AESTHETICS
              </div>
            </div>

            <p
              style={{
                fontFamily: "Manrope",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: "260px",
              }}
            >
              Vivant Skin Clinic & Aesthetics provides advanced dermatology,
              laser treatments, acne care, pigmentation solutions and skin
              rejuvenation in Multan.
            </p>

            {/* SOCIAL (REAL LINKS) */}
            <div style={{ display: "flex", gap: "0.8rem" }}>
              <motion.a
                href="https://www.instagram.com/p/DX4gHLGFvq-/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                style={{
                  width: "38px",
                  height: "38px",
                  border: "1px solid rgba(201,164,108,0.2)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaInstagram size={16} color="#C9A46C" />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/vivantskincentre/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                style={{
                  width: "38px",
                  height: "38px",
                  border: "1px solid rgba(201,164,108,0.2)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaFacebookF size={16} color="#C9A46C" />
              </motion.a>
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <div
                style={{
                  fontFamily: "Manrope",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  color: "#C9A46C",
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                }}
              >
                {heading}
              </div>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item) => (
                  <li key={item.name} style={{ marginBottom: "0.8rem" }}>
                    <Link
                      to={item.path}
                      onClick={scrollTop}
                      style={{
                        fontFamily: "Manrope",
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.35)",
                        textDecoration: "none",
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            borderTop: "1px solid rgba(201,164,108,0.1)",
            borderBottom: "1px solid rgba(201,164,108,0.1)",
            padding: "2.5rem 0",
          }}
        >
          <div style={{ display: "flex", gap: "0.6rem", color: "#fff" }}>
            <FiPhone color="#C9A46C" />
            +92 300 9454066
          </div>

          <div style={{ display: "flex", gap: "0.6rem", color: "#fff" }}>
            <FiMail color="#C9A46C" />
            vivantskinclinic@gmail.com
          </div>

          <div style={{ display: "flex", gap: "0.6rem", color: "#fff" }}>
            <FiMapPin color="#C9A46C" />
            Shop#4, Sir Syed Block, M A Jinnah Rd, Multan
          </div>
        </div>

        {/* BOTTOM */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2rem 0",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 Vivant Skin Clinic
          </span>

          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "transparent",
              border: "1px solid rgba(201,164,108,0.2)",
              padding: "0.5rem 1rem",
              color: "#C9A46C",
              cursor: "pointer",
            }}
          >
            Back to Top <FiArrowUpRight />
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
