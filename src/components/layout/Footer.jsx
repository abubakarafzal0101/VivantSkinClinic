import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";

const links = {
  Treatments: [
    "Hydrafacial",
    "Laser Hair Removal",
    "Botox & Fillers",
    "Skin Rejuvenation",
    "Acne Treatment",
    "Skin Whitening",
  ],
  Company: ["About Us", "Our Doctor", "Gallery", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms & Conditions", "Cookie Policy"],
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
                VIVANT
              </div>
              <div
                style={{
                  fontFamily: "Manrope",
                  fontSize: "0.5rem",
                  color: "#C9A46C",
                  letterSpacing: "0.35em",
                }}
              >
                SKIN CLINIC
              </div>
            </div>

            <p
              style={{
                fontFamily: "Manrope",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: "240px",
              }}
            >
              Premium dermatology and aesthetics center dedicated to revealing
              your natural beauty.
            </p>

            {/* SOCIAL */}
            <div style={{ display: "flex", gap: "0.8rem" }}>
              {[
                { Icon: FaInstagram, href: "#" },
                { Icon: FaFacebookF, href: "#" },
              ].map(({ Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
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
                  <Icon size={16} color="#C9A46C" />
                </motion.a>
              ))}
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
                  <li key={item} style={{ marginBottom: "0.8rem" }}>
                    <Link
                      to="#"
                      style={{
                        fontFamily: "Manrope",
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.35)",
                        textDecoration: "none",
                      }}
                    >
                      {item}
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
          <div
            className="text-white"
            style={{ display: "flex", gap: "0.6rem" }}
          >
            <FiPhone color="#C9A46C" />
            +92 300 123 4567
          </div>

          <div
            className="text-white"
            style={{ display: "flex", gap: "0.6rem" }}
          >
            <FiMail color="#C9A46C" />
            hello@vivant.com
          </div>

          <div
            className="text-white"
            style={{ display: "flex", gap: "0.6rem" }}
          >
            <FiMapPin color="#C9A46C" />
            Karachi, Pakistan
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

      {/* MOBILE */}
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
