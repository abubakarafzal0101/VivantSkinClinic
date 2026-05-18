import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section
      style={{
        background: "#F5EFE7",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative corner lines */}
      <div
        style={{
          position: "absolute",
          top: "3rem",
          left: "3rem",
          width: "60px",
          height: "60px",
          borderTop: "1px solid rgba(201,164,108,0.3)",
          borderLeft: "1px solid rgba(201,164,108,0.3)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          right: "3rem",
          width: "60px",
          height: "60px",
          borderBottom: "1px solid rgba(201,164,108,0.3)",
          borderRight: "1px solid rgba(201,164,108,0.3)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
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
              color: "#A67C45",
            }}
          >
            Begin Your Journey
          </span>
          <div
            style={{ width: "30px", height: "1px", background: "#C9A46C" }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 300,
            color: "#111111",
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            marginBottom: "1.5rem",
          }}
        >
          Your Skin Deserves
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Best
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
            fontWeight: 300,
            color: "rgba(17,17,17,0.5)",
            lineHeight: 1.8,
            maxWidth: "500px",
            margin: "0 auto 3.5rem",
          }}
        >
          Book your free consultation today and let our experts craft a
          personalized skin treatment plan just for you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: "flex",
            gap: "1.2rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 10px 40px rgba(166,124,69,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                background: "#111111",
                border: "none",
                padding: "1.1rem 2.5rem",
                borderRadius: "2px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <Calendar size={14} />
              Book Free Consultation
            </motion.button>
          </Link>

          <motion.a
            href="tel:+923001234567"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#111111",
              background: "transparent",
              border: "1px solid rgba(17,17,17,0.2)",
              padding: "1.1rem 2.5rem",
              borderRadius: "2px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
            }}
          >
            <Phone size={14} />
            Call Us Now
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(1.5rem, 5vw, 4rem)",
            flexWrap: "wrap",
          }}
        >
          {[
            "Board Certified",
            "5000+ Patients",
            "12+ Years Experience",
            "Premium Equipment",
          ].map((badge) => (
            <div
              key={badge}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#C9A46C",
                }}
              />
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(17,17,17,0.5)",
                }}
              >
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
