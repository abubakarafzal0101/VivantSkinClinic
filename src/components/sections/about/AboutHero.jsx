import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      style={{
        position: "relative",
        height: "70vh",
        minHeight: "550px",
        background:
          "linear-gradient(160deg, #0a0a0a 0%, #111111 50%, #1a1410 100%)",
        display: "flex",
        alignItems: "flex-end",
        padding: "0 clamp(1.5rem, 6vw, 6rem) 6rem",
        overflow: "hidden",
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
          linear-gradient(rgba(201,164,108,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,164,108,0.03) 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          right: "5%",
          top: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,164,108,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Big background text */}
      <div
        style={{
          position: "absolute",
          right: "clamp(1.5rem, 6vw, 6rem)",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: "clamp(6rem, 18vw, 16rem)",
          fontWeight: 300,
          color: "rgba(201,164,108,0.04)",
          letterSpacing: "-0.04em",
          userSelect: "none",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        VIVANT
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "700px" }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{ width: "30px", height: "1px", background: "#C9A46C" }}
          />
          <span
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#C9A46C",
            }}
          >
            Our Story
          </span>
        </motion.div>

        {/* Heading */}
        <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Where Science
          </motion.h1>
        </div>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Meets Beauty
          </motion.h1>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: "linear-gradient(to top, #111111, transparent)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
