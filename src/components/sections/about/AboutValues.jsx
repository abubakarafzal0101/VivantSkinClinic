import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Precision",
    desc: "Every treatment is designed with clinical precision, tailored to your skin's unique biology and goals.",
  },
  {
    number: "02",
    title: "Luxury",
    desc: "From your first consultation to final result, every touchpoint reflects our commitment to premium experience.",
  },
  {
    number: "03",
    title: "Science",
    desc: "We use only FDA-approved technologies and evidence-based protocols to deliver safe, lasting results.",
  },
  {
    number: "04",
    title: "Empathy",
    desc: "Your comfort, privacy, and confidence are at the heart of everything we do at Vivant.",
  },
];

export default function AboutValues() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #111111 0%, #0d0d0d 100%)",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        borderTop: "1px solid rgba(201,164,108,0.08)",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "6rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
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
            Our Philosophy
          </span>
          <div
            style={{ width: "30px", height: "1px", background: "#C9A46C" }}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          The Vivant{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Standard
          </span>
        </motion.h2>
      </div>

      {/* Values Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1px",
          maxWidth: "1100px",
          margin: "0 auto",
          border: "1px solid rgba(201,164,108,0.1)",
        }}
      >
        {values.map((v, i) => (
          <motion.div
            key={v.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.12,
              ease: [0.76, 0, 0.24, 1],
            }}
            whileHover={{ background: "rgba(201,164,108,0.04)" }}
            style={{
              padding: "3.5rem 2.5rem",
              borderRight: i < 3 ? "1px solid rgba(201,164,108,0.1)" : "none",
              transition: "background 0.4s ease",
              cursor: "default",
            }}
          >
            <div
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "3.5rem",
                fontWeight: 300,
                color: "rgba(201,164,108,0.12)",
                lineHeight: 1,
                marginBottom: "1.5rem",
              }}
            >
              {v.number}
            </div>

            <div
              style={{
                width: "30px",
                height: "1px",
                background: "linear-gradient(90deg, #C9A46C, transparent)",
                marginBottom: "1.5rem",
              }}
            />

            <h3
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
                marginBottom: "1rem",
              }}
            >
              {v.title}
            </h3>

            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.82rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.8,
              }}
            >
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
