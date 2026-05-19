import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0d0d0d, #111111)",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        borderTop: "1px solid rgba(201,164,108,0.08)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(201,164,108,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "0.6rem",
            fontWeight: 500,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#C9A46C",
            marginBottom: "1.5rem",
          }}
        >
          Begin Your Journey
        </div>

        <h2
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Ready to Reveal Your
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Best Skin?
          </span>
        </h2>

        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "0.88rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.8,
            maxWidth: "450px",
            margin: "0 auto 3rem",
          }}
        >
          Book your personalized consultation today and let our experts craft
          the perfect skin journey for you.
        </p>

        <Link to="/contact" style={{ textDecoration: "none" }}>
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 50px rgba(201,164,108,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#111111",
              background: "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
              border: "none",
              padding: "1.2rem 3rem",
              borderRadius: "2px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            Book Consultation <ArrowRight size={14} />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
