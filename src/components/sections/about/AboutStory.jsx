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
              {/* IMAGE REPLACED */}
              <img
                src="src/assets/images/doctorimg4.webp"
                alt="Vivant Skin Clinic Multan"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
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
              5+
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
              Vivant Skin Clinic • Multan
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
            <span style={{}}>Advanced Dermatology Care</span>
          </h2>

          {[
            "Vivant Skin Clinic & Aesthetics, Multan is a leading dermatology center offering advanced laser treatments, acne management, pigmentation correction, PRP therapy, and skin rejuvenation services.",
            "Our expert team provides personalized treatment plans based on each patient’s skin type and concerns, ensuring safe and effective results.",
            "We are committed to enhancing natural beauty through modern dermatology, clinical expertise, and patient-focused care.",
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
              Dr. Rozina Tariq
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
              Consultant Dermatologist • Vivant Skin Clinic Multan
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
