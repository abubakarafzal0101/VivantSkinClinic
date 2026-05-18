import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { services } from "../../data/services";
import { Link } from "react-router-dom";

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.76, 0, 0.24, 1],
      }}
      whileHover={{ y: -8 }}
      style={{
        position: "relative",
        minWidth: "320px",
        maxWidth: "320px",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(201,164,108,0.12)",
        borderRadius: "4px",
        padding: "2.8rem 2.2rem",
        cursor: "pointer",
        overflow: "hidden",
        transition: "border-color 0.4s ease",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,164,108,0.45)";
        e.currentTarget.querySelector(".card-bg").style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,164,108,0.12)";
        e.currentTarget.querySelector(".card-bg").style.opacity = "0";
      }}
    >
      {/* Hover bg */}
      <div
        className="card-bg"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(201,164,108,0.05) 0%, transparent 100%)",
          opacity: 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Number */}
      <div
        style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: "4rem",
          fontWeight: 300,
          color: "rgba(201,164,108,0.1)",
          lineHeight: 1,
          marginBottom: "1.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Tag */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.55rem",
          fontWeight: 500,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#C9A46C",
          border: "1px solid rgba(201,164,108,0.3)",
          padding: "0.3rem 0.8rem",
          borderRadius: "2px",
          marginBottom: "1.5rem",
        }}
      >
        {service.tag}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: "1.9rem",
          fontWeight: 400,
          color: "#FFFFFF",
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
          marginBottom: "0.4rem",
        }}
      >
        {service.title}
      </h3>

      {/* Subtitle */}
      <div
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.62rem",
          fontWeight: 400,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#C9A46C",
          marginBottom: "1.2rem",
          opacity: 0.8,
        }}
      >
        {service.subtitle}
      </div>

      {/* Divider */}
      <div
        style={{
          width: "40px",
          height: "1px",
          background: "linear-gradient(90deg, #C9A46C, transparent)",
          marginBottom: "1.2rem",
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.82rem",
          fontWeight: 300,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.75,
          marginBottom: "2rem",
        }}
      >
        {service.description}
      </p>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <Clock size={11} color="rgba(201,164,108,0.6)" />
          <span
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
            }}
          >
            {service.duration}
          </span>
        </div>

        <motion.div
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.3 }}
          style={{
            width: "32px",
            height: "32px",
            border: "1px solid rgba(201,164,108,0.3)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowUpRight size={13} color="#C9A46C" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#111111",
        padding: "8rem 0",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{ padding: "0 clamp(1.5rem, 6vw, 6rem)", marginBottom: "5rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <motion.div style={{ y: titleY }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
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
                  color: "#C9A46C",
                }}
              >
                Our Treatments
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 300,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Curated for
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
                Your Skin
              </span>
            </motion.h2>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ maxWidth: "300px" }}
          >
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Each treatment is tailored to your unique skin profile by our
              certified dermatologists.
            </p>
            <Link
              to={"/services"}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#C9A46C",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer",
              }}
            >
              View All Services
              <ArrowUpRight size={12} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Cards — horizontal scroll */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "1.5rem",
          padding: "1rem clamp(1.5rem, 6vw, 6rem) 3rem",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
        }}
        onMouseDown={(e) => {
          const el = scrollRef.current;
          el.dataset.dragging = "true";
          el.dataset.startX = e.pageX - el.offsetLeft;
          el.dataset.scrollLeft = el.scrollLeft;
          el.style.cursor = "grabbing";
        }}
        onMouseMove={(e) => {
          const el = scrollRef.current;
          if (el.dataset.dragging !== "true") return;
          const x = e.pageX - el.offsetLeft;
          const walk = (x - el.dataset.startX) * 1.5;
          el.scrollLeft = el.dataset.scrollLeft - walk;
        }}
        onMouseUp={(e) => {
          scrollRef.current.dataset.dragging = "false";
          scrollRef.current.style.cursor = "grab";
        }}
        onMouseLeave={(e) => {
          scrollRef.current.dataset.dragging = "false";
          scrollRef.current.style.cursor = "grab";
        }}
      >
        {services.map((s, i) => (
          <ServiceCard key={s.id} service={s} index={i} />
        ))}
      </div>

      {/* Drag hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.58rem",
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.2)",
          textTransform: "uppercase",
        }}
      >
        ← Drag to explore →
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(2rem, 8vw, 6rem)",
          padding: "5rem clamp(1.5rem, 6vw, 6rem) 0",
          flexWrap: "wrap",
          borderTop: "1px solid rgba(201,164,108,0.08)",
          marginTop: "4rem",
        }}
      >
        {[
          { number: "5000+", label: "Happy Clients" },
          { number: "12+", label: "Years Experience" },
          { number: "98%", label: "Satisfaction Rate" },
          { number: "20+", label: "Treatments" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </span>
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.62rem",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
