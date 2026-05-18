import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "1rem 2.5rem" : "1.8rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(17,17,17,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,164,108,0.15)" : "none",
          transition: "all 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div>
            <div
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "1.6rem",
                fontWeight: 300,
                color: "#FFFFFF",
                letterSpacing: "0.12em",
                lineHeight: 1,
              }}
            >
              VIVANT
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.5rem",
                fontWeight: 400,
                color: "#C9A46C",
                letterSpacing: "0.35em",
                marginTop: "2px",
              }}
            >
              SKIN CLINIC
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.72rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                color:
                  location.pathname === link.href
                    ? "#C9A46C"
                    : "rgba(255,255,255,0.75)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#C9A46C")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  location.pathname === link.href
                    ? "#C9A46C"
                    : "rgba(255,255,255,0.75)")
              }
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Button */}
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#111111",
                background:
                  "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
                border: "none",
                padding: "0.7rem 1.6rem",
                borderRadius: "2px",
                cursor: "pointer",
              }}
            >
              Book Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            color: "#FFFFFF",
            cursor: "pointer",
            display: "none",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(17,17,17,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={link.href}
                  style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.65rem",
                color: "#C9A46C",
                letterSpacing: "0.3em",
                marginTop: "1rem",
              }}
            >
              LUXURY AESTHETICS
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile CSS */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
