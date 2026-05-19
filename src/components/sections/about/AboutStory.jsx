import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={ref}
      style={{
        background: "#111111",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(3rem, 8vw, 8rem)",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{ position: "relative" }}
        >
          {/* Main image placeholder */}
          <motion.div style={{ y: imgY }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "linear-gradient(160deg, #1a1a1a, #222218)",
                border: "1px solid rgba(201,164,108,0.15)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative inner */}
              <div
                style={{
                  position: "absolute",
                  inset: "20px",
                  border: "1px solid rgba(201,164,108,0.08)",
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: "3rem",
                  color: "rgba(201,164,108,0.2)",
                }}
              >
                ✦
              </div>
              <div
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  color: "rgba(255,255,255,0.2)",
                  textTransform: "uppercase",
                }}
              >
                Clinic Image
              </div>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              position: "absolute",
              bottom: "-2rem",
              right: "-1.5rem",
              background: "linear-gradient(135deg, #A67C45, #C9A46C)",
              padding: "1.5rem 2rem",
              borderRadius: "4px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "2.5rem",
                fontWeight: 300,
                color: "#111111",
                lineHeight: 1,
              }}
            >
              12+
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.58rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.7)",
                marginTop: "0.3rem",
              }}
            >
              Years of Excellence
            </div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Eyebrow */}
          <div
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
              Founded 2012
            </span>
          </div>

          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            A Legacy of
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skin Excellence
            </span>
          </h2>

          {[
            "Vivant Skin Clinic was born from a singular vision — to bring world-class dermatology and aesthetic medicine to those who demand the very best for their skin.",
            "Founded by Dr. Ayesha Malik, our clinic has grown into a sanctuary where cutting-edge science meets personalized care. Every treatment is meticulously crafted to honor the uniqueness of your skin.",
            "We believe beauty is not about perfection — it is about revealing the most radiant, confident version of yourself.",
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.88rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.9,
                marginBottom: "1.2rem",
              }}
            >
              {para}
            </motion.p>
          ))}

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ marginTop: "2.5rem" }}
          >
            <div
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#C9A46C",
                marginBottom: "0.3rem",
              }}
            >
              Dr. Ayesha Malik
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              Founder & Chief Dermatologist
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
