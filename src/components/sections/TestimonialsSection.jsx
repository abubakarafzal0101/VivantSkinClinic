import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Malik",
    role: "Marketing Executive",
    rating: 5,
    text: "Vivant Skin Clinic has completely transformed my confidence. The hydrafacial treatment left my skin glowing like never before. Dr. Ahmed's expertise is unmatched — truly a luxury experience.",
    treatment: "Hydrafacial",
    city: "Karachi",
  },
  {
    name: "Sara Khan",
    role: "Entrepreneur",
    rating: 5,
    text: "I was nervous about Botox but the team made me feel completely at ease. The results are so natural — everyone notices I look refreshed, not 'done'. Absolutely worth every rupee.",
    treatment: "Botox & Fillers",
    city: "Lahore",
  },
  {
    name: "Nadia Hussain",
    role: "Teacher",
    rating: 5,
    text: "After struggling with acne for years, the clinical acne treatment here changed everything. Professional, caring staff and a beautiful clinic environment. Highly recommend!",
    treatment: "Acne Treatment",
    city: "Islamabad",
  },
  {
    name: "Fatima Zahra",
    role: "Doctor",
    rating: 5,
    text: "As a medical professional myself, I was very selective. Vivant exceeded every standard I had. The laser hair removal results are permanent and the service is world-class.",
    treatment: "Laser Hair Removal",
    city: "Karachi",
  },
];

function StarRow({ count }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#C9A46C" color="#C9A46C" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef(null);

  const go = (nextIdx, direction) => {
    setDir(direction);
    setActive(nextIdx);
  };

  const prev = () =>
    go((active - 1 + testimonials.length) % testimonials.length, -1);
  const next = () => go((active + 1) % testimonials.length, 1);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDir(1);
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  const t = testimonials[active];

  return (
    <section
      style={{
        background: "#111111",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background orb */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,164,108,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <div
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
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#C9A46C",
              }}
            >
              Client Stories
            </span>
            <div
              style={{ width: "30px", height: "1px", background: "#C9A46C" }}
            />
          </div>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Quote Icon */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Quote size={32} color="rgba(201,164,108,0.3)" />
        </div>

        {/* Testimonial card */}
        <div style={{ position: "relative", minHeight: "220px" }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={active}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              style={{ textAlign: "center" }}
            >
              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "2rem",
                }}
              >
                <StarRow count={t.rating} />
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.65,
                  letterSpacing: "0.01em",
                  marginBottom: "2.5rem",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>

              {/* Client info */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, #C9A46C, transparent)",
                    marginBottom: "1rem",
                  }}
                />
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {t.role} · {t.city}
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.58rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#C9A46C",
                    marginTop: "0.3rem",
                  }}
                >
                  {t.treatment}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "4rem",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            style={{
              width: "44px",
              height: "44px",
              border: "1px solid rgba(201,164,108,0.3)",
              borderRadius: "50%",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ChevronLeft size={16} color="#C9A46C" />
          </motion.button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "0.6rem" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > active ? 1 : -1)}
                style={{
                  width: i === active ? "24px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background:
                    i === active ? "#C9A46C" : "rgba(201,164,108,0.25)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            style={{
              width: "44px",
              height: "44px",
              border: "1px solid rgba(201,164,108,0.3)",
              borderRadius: "50%",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ChevronRight size={16} color="#C9A46C" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
