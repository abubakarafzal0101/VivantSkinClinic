import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What treatments do you offer at Vivant Skin Clinic?",
    a: "We offer a wide range of premium treatments including Hydrafacial, Laser Hair Removal, Botox & Fillers, Skin Rejuvenation, Acne Treatment, Skin Whitening, Anti Aging therapies, and Pigmentation treatments — all performed by certified dermatologists.",
  },
  {
    q: "How do I book a consultation?",
    a: "You can book a consultation by clicking the 'Book Now' button on our website, filling out the contact form, or calling us directly. Our team will confirm your appointment within 24 hours.",
  },
  {
    q: "Are the treatments safe?",
    a: "Absolutely. All our treatments are FDA-approved and performed by board-certified dermatologists with 12+ years of experience. We follow strict clinical protocols to ensure your safety and comfort.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of sessions varies depending on the treatment and your skin condition. During your initial consultation, Dr. Ahmed will assess your skin and recommend a personalized treatment plan.",
  },
  {
    q: "Is there any downtime after treatments?",
    a: "Most of our treatments require little to no downtime. Some procedures like laser therapy may cause mild redness for 24–48 hours. We'll provide full aftercare instructions after every session.",
  },
  {
    q: "What makes Vivant different from other clinics?",
    a: "Vivant combines clinical excellence with a luxury experience. We use only medical-grade equipment, premium skincare products, and a personalized approach. Every treatment is crafted specifically for your unique skin profile.",
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{
        borderBottom: "1px solid rgba(201,164,108,0.12)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "2rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 400,
            color: open ? "#C9A46C" : "#FFFFFF",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            transition: "color 0.3s ease",
          }}
        >
          {faq.q}
        </span>

        <motion.div
          animate={{ rotate: open ? 0 : 0 }}
          style={{
            flexShrink: 0,
            width: "36px",
            height: "36px",
            border: `1px solid ${open ? "rgba(201,164,108,0.6)" : "rgba(201,164,108,0.2)"}`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "border-color 0.3s ease",
          }}
        >
          {open ? (
            <Minus size={13} color="#C9A46C" />
          ) : (
            <Plus size={13} color="rgba(201,164,108,0.7)" />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.88rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.85,
                paddingBottom: "2rem",
                paddingRight: "3rem",
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section
      style={{
        background: "#0D0D0D",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "clamp(3rem, 8vw, 8rem)",
            alignItems: "start",
          }}
          className="faq-grid"
        >
          {/* Left — Sticky header */}
          <div style={{ position: "sticky", top: "8rem" }}>
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
                FAQ
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
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Frequently
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
                Asked
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.8,
              }}
            >
              Everything you need to know before your first visit.
            </motion.p>
          </div>

          {/* Right — FAQ items */}
          <div
            style={{
              borderTop: "1px solid rgba(201,164,108,0.12)",
            }}
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
