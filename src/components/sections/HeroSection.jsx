import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

const TREATMENTS = [
  "Hydrafacial",
  "Laser Therapy",
  "Botox & Fillers",
  "Skin Rejuvenation",
  "Anti Aging",
];

function AnimatedWord({ word, delay }) {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
        marginRight: "0.25em",
      }}
    >
      <motion.span
        display="inline-block"
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
        style={{ display: "inline-block" }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function HeroSection() {
  const canvasRef = useRef(null);

  // Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 164, 108, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -5) {
          p.y = H + 5;
          p.x = Math.random() * W;
        }
        if (p.x < -5) p.x = W + 5;
        if (p.x > W + 5) p.x = -5;
      });
      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Mouse glow
  const glowRef = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = e.clientX + "px";
      glowRef.current.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const line1 = ["Reveal", "Your"];
  const line2 = ["Natural", "Glow"];

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        background:
          "linear-gradient(160deg, #0a0a0a 0%, #111111 40%, #1a1410 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Mouse glow */}
      <div
        ref={glowRef}
        style={{
          position: "fixed",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,164,108,0.06) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 1,
          transition: "left 0.15s ease, top 0.15s ease",
        }}
      />

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Background texture lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `
          linear-gradient(rgba(201,164,108,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,164,108,0.03) 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold orb left */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "-10%",
          top: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,164,108,0.12) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Gold orb right */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          position: "absolute",
          right: "-5%",
          bottom: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,164,108,0.1) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <div
            className="hidden md:block"
            style={{
              width: "40px",
              height: "1px",
              background: "#C9A46C",
              opacity: 0.6,
            }}
          />
          <span
            className="hidden md:block"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: "#C9A46C",
            }}
          >
            Luxury Skin Aesthetics
          </span>
          <div
            className="hidden md:block"
            style={{
              width: "40px",
              height: "1px",
              background: "#C9A46C",
              opacity: 0.6,
            }}
          />
        </motion.div>

        {/* Main Heading Line 1 */}
        <h1
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
            fontWeight: 300,
            color: "#FFFFFF",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginBottom: "0.1em",
          }}
        >
          {line1.map((w, i) => (
            <AnimatedWord key={w} word={w} delay={0.5 + i * 0.12} />
          ))}
        </h1>

        {/* Main Heading Line 2 — Gold */}
        <h1
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginBottom: "2.5rem",
            background:
              "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A, #C9A46C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {line2.map((w, i) => (
            <AnimatedWord key={w} word={w} delay={0.75 + i * 0.12} />
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.05em",
            lineHeight: 1.8,
            maxWidth: "500px",
            margin: "0 auto 3rem",
          }}
        >
          Premium dermatology & aesthetics treatments
          <br />
          crafted for your unique skin journey.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          style={{
            display: "flex",
            gap: "1.2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(201,164,108,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#111111",
                background:
                  "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
                border: "none",
                padding: "1.1rem 2.5rem",
                borderRadius: "2px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              Book Consultation <ArrowRight size={14} />
            </motion.button>
          </Link>

          <Link to="/services" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04, borderColor: "rgba(201,164,108,0.8)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.8)",
                background: "transparent",
                border: "1px solid rgba(201,164,108,0.35)",
                padding: "1.1rem 2.5rem",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "border-color 0.3s ease",
              }}
            >
              Explore Treatments
            </motion.button>
          </Link>
        </motion.div>

        {/* Treatments ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{
            marginTop: "3.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          {TREATMENTS.map((t, i) => (
            <span
              key={t}
              style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
            >
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                }}
              >
                {t}
              </span>
              {i < TREATMENTS.length - 1 && (
                <span
                  style={{ color: "#C9A46C", fontSize: "0.5rem", opacity: 0.5 }}
                >
                  ◆
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "0.55rem",
            letterSpacing: "0.35em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} color="rgba(201,164,108,0.5)" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, #111111, transparent)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
