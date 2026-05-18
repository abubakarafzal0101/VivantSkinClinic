import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Star, Users } from "lucide-react";

const credentials = [
  { icon: Award, label: "Board Certified", sub: "Dermatologist" },
  { icon: Star, label: "12+ Years", sub: "Experience" },
  { icon: Users, label: "5000+", sub: "Patients Treated" },
];

export default function DoctorSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      style={{
        background: "#F5EFE7",
        padding: "8rem clamp(1.5rem, 8vw, 8rem)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 8vw, 7rem)",
          alignItems: "center",
        }}
        className="doctor-grid"
      >
        {/* Left — Image */}
        <motion.div style={{ y: imgY, position: "relative" }}>
          {/* Decorative frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "relative",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {/* Placeholder image — replace with real doctor photo */}
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&fit=crop&crop=face"
                alt="Dr. Sarah Ahmed - Dermatologist"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                  filter: "brightness(0.92) contrast(1.05)",
                }}
                loading="lazy"
              />
              {/* Subtle gold overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background:
                    "linear-gradient(to top, rgba(17,17,17,0.3), transparent)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Gold border accent */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                left: "1.5rem",
                right: "-1.5rem",
                bottom: "-1.5rem",
                border: "1px solid rgba(201,164,108,0.3)",
                borderRadius: "4px",
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* Floating credential card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              position: "absolute",
              bottom: "3rem",
              right: "-2rem",
              background: "#111111",
              padding: "1.5rem 2rem",
              borderRadius: "4px",
              border: "1px solid rgba(201,164,108,0.2)",
            }}
          >
            <div
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "2rem",
                fontWeight: 300,
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                98%
              </span>
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.25em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                marginTop: "0.3rem",
              }}
            >
              Patient Satisfaction
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
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
                color: "#A67C45",
              }}
            >
              Meet The Expert
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#111111",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            Dr. Sarah Ahmed
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C9A46C",
              marginBottom: "2rem",
            }}
          >
            MBBS · FCPS Dermatology · Fellowship London
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              height: "1px",
              background: "linear-gradient(90deg, #C9A46C, transparent)",
              marginBottom: "2rem",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "rgba(17,17,17,0.6)",
              lineHeight: 1.9,
              marginBottom: "2.5rem",
            }}
          >
            With over 12 years of expertise in advanced dermatology and
            aesthetic medicine, Dr. Ahmed brings a unique blend of clinical
            precision and artistic vision to every treatment. Trained at leading
            institutions in Pakistan and the UK, she is committed to delivering
            results that enhance your natural beauty.
          </motion.p>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: "flex",
              gap: "2.5rem",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {credentials.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(201,164,108,0.4)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} color="#C9A46C" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Cormorant Garamond, Georgia, serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "#111111",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "0.58rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(17,17,17,0.45)",
                    }}
                  >
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 30px rgba(201,164,108,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#111111",
              background: "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
              border: "none",
              padding: "1rem 2.2rem",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            Book With Dr. Ahmed
          </motion.button>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .doctor-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
