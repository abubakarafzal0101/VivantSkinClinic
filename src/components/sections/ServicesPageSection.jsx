import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";

const services = [
  {
    id: "hydrafacial",
    number: "01",
    title: "Hydrafacial",
    subtitle: "Deep Hydration Therapy",
    description:
      "The world's most advanced facial treatment. A multi-step process that cleanses, exfoliates, extracts, and hydrates skin using patented Vortex-Fusion technology for instantly glowing results.",
    duration: "60–90 min",
    sessions: "1–3 sessions",
    rating: "5.0",
    tag: "Most Popular",
    gradient:
      "linear-gradient(135deg, rgba(201,164,108,0.12) 0%, rgba(245,239,231,0.05) 100%)",
    accent: "#C9A46C",
    benefits: [
      "Deep pore cleansing",
      "Instant hydration",
      "No downtime",
      "Visible glow",
    ],
  },
  {
    id: "acne-treatment",
    number: "02",
    title: "Acne Treatment",
    subtitle: "Clinical Clarity Protocol",
    description:
      "A medically-driven program targeting the root causes of acne. Combines chemical peels, blue light therapy, and prescription-grade topicals for clear, healthy skin.",
    duration: "45–60 min",
    sessions: "4–6 sessions",
    rating: "4.9",
    tag: "Clinical",
    gradient:
      "linear-gradient(135deg, rgba(180,200,255,0.08) 0%, rgba(140,180,255,0.03) 100%)",
    accent: "#A8C4FF",
    benefits: [
      "Reduces inflammation",
      "Prevents scarring",
      "Controls oil",
      "Clears breakouts",
    ],
  },
  {
    id: "laser-hair-removal",
    number: "03",
    title: "Laser Hair Removal",
    subtitle: "Permanent Smoothness",
    description:
      "State-of-the-art diode laser technology for permanent hair reduction on all skin types. FDA-cleared, virtually painless, and delivers long-lasting results.",
    duration: "15–60 min",
    sessions: "6–8 sessions",
    rating: "4.9",
    tag: "Permanent",
    gradient:
      "linear-gradient(135deg, rgba(255,180,180,0.08) 0%, rgba(255,140,140,0.03) 100%)",
    accent: "#FFB4B4",
    benefits: [
      "All skin types",
      "Long-lasting",
      "Fast sessions",
      "Minimal discomfort",
    ],
  },
  {
    id: "skin-rejuvenation",
    number: "04",
    title: "Skin Rejuvenation",
    subtitle: "Youth Restoration Therapy",
    description:
      "Advanced laser resurfacing and collagen induction therapy to reverse signs of aging. Reduces fine lines, uneven texture, and sun damage for a younger-looking complexion.",
    duration: "60–75 min",
    sessions: "3–5 sessions",
    rating: "5.0",
    tag: "Anti-Aging",
    gradient:
      "linear-gradient(135deg, rgba(201,164,108,0.1) 0%, rgba(255,220,150,0.04) 100%)",
    accent: "#E8C97A",
    benefits: [
      "Collagen boost",
      "Texture refinement",
      "Glow restoration",
      "Pore reduction",
    ],
  },
  {
    id: "pigmentation",
    number: "05",
    title: "Pigmentation",
    subtitle: "Even Tone Correction",
    description:
      "Targeted treatment for melasma, dark spots, and hyperpigmentation using Q-switched laser technology combined with brightening protocols for a uniform, radiant skin tone.",
    duration: "30–45 min",
    sessions: "4–8 sessions",
    rating: "4.8",
    tag: "Corrective",
    gradient:
      "linear-gradient(135deg, rgba(180,255,200,0.06) 0%, rgba(140,220,160,0.03) 100%)",
    accent: "#A8D4B0",
    benefits: [
      "Fades dark spots",
      "Even skin tone",
      "Melasma treatment",
      "Brightening effect",
    ],
  },
  {
    id: "botox-fillers",
    number: "06",
    title: "Botox & Fillers",
    subtitle: "Precision Contouring",
    description:
      "Expert administration of neurotoxins and dermal fillers by our certified aesthetic physicians. Natural-looking results for facial harmony, volume restoration, and wrinkle relaxation.",
    duration: "30–45 min",
    sessions: "1–2 sessions",
    rating: "5.0",
    tag: "Luxury",
    gradient:
      "linear-gradient(135deg, rgba(220,180,255,0.08) 0%, rgba(180,140,255,0.03) 100%)",
    accent: "#D4B0FF",
    benefits: ["Instant results", "Natural look", "No surgery", "Long-lasting"],
  },
  {
    id: "anti-aging",
    number: "07",
    title: "Anti Aging",
    subtitle: "Time Reversal Protocol",
    description:
      "A comprehensive approach to aging skin using PRP therapy, radiofrequency lifting, and peptide infusions. Restores firmness, elasticity, and youthful radiance.",
    duration: "60–90 min",
    sessions: "3–6 sessions",
    rating: "4.9",
    tag: "Regenerative",
    gradient:
      "linear-gradient(135deg, rgba(255,200,150,0.08) 0%, rgba(201,164,108,0.04) 100%)",
    accent: "#F0C060",
    benefits: ["Skin firming", "PRP therapy", "RF lifting", "Elasticity boost"],
  },
  {
    id: "skin-whitening",
    number: "08",
    title: "Skin Whitening",
    subtitle: "Radiance Amplification",
    description:
      "Science-backed brightening treatments using glutathione infusions, vitamin C boosters, and advanced laser protocols to achieve a luminous, even, and radiant complexion.",
    duration: "45–60 min",
    sessions: "6–10 sessions",
    rating: "4.8",
    tag: "Brightening",
    gradient:
      "linear-gradient(135deg, rgba(255,245,200,0.08) 0%, rgba(255,230,150,0.03) 100%)",
    accent: "#FFE87C",
    benefits: [
      "Glutathione boost",
      "Vitamin C infusion",
      "Radiant glow",
      "Melanin control",
    ],
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", width: "100%" }}
    >
      <div style={{ textDecoration: "none" }}>
        <motion.div
          animate={{
            background: hovered ? service.gradient : "rgba(255,255,255,0.01)",
            borderColor: hovered
              ? `${service.accent}40`
              : "rgba(201,164,108,0.1)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            border: "1px solid rgba(201,164,108,0.1)",
            borderRadius: "4px",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Card Top Section */}
          <div>
            {/* Header: Number & Tag */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 300,
                  color: hovered
                    ? `${service.accent}30`
                    : "rgba(201,164,108,0.08)",
                  lineHeight: 1,
                  transition: "color 0.4s ease",
                  userSelect: "none",
                }}
              >
                {service.number}
              </div>
              <div
                style={{
                  padding: "0.25rem 0.6rem",
                  border: `1px solid ${service.accent}40`,
                  borderRadius: "20px",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: service.accent,
                  whiteSpace: "nowrap",
                }}
              >
                {service.tag}
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                marginBottom: "0.3rem",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: service.accent,
                marginBottom: "1.2rem",
              }}
            >
              {service.subtitle}
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.82rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              {service.description}
            </p>

            {/* Benefits Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginBottom: "2rem",
              }}
            >
              {service.benefits.map((b) => (
                <span
                  key={b}
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.58rem",
                    letterSpacing: "0.05em",
                    color: "rgba(255,255,255,0.45)",
                    padding: "0.25rem 0.6rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "2px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Card Bottom Footer Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "1.2rem",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              marginTop: "auto",
              gap: "1rem",
            }}
          >
            {/* Meta Items Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, auto)",
                gap: "clamp(0.8rem, 2vw, 1.5rem)",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.52rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: "0.15rem",
                  }}
                >
                  Duration
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {service.duration}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.52rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: "0.15rem",
                  }}
                >
                  Sessions
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {service.sessions}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.52rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: "0.15rem",
                  }}
                >
                  Rating
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    color: service.accent,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                  }}
                >
                  <Star size={9} fill={service.accent} color={service.accent} />
                  {service.rating}
                </div>
              </div>
            </div>

            {/* Arrow Button */}
            <motion.div
              animate={{
                x: hovered ? 3 : 0,
                y: hovered ? -3 : 0,
                opacity: hovered ? 1 : 0.5,
              }}
              transition={{ duration: 0.2 }}
              style={{
                width: "36px",
                height: "36px",
                border: `1px solid ${service.accent}30`,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ArrowUpRight size={14} color={service.accent} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesPageSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div
      style={{ background: "#0D0D0D", minHeight: "100vh", overflowX: "hidden" }}
    >
      {/* ── HERO SECTION ── */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(6rem, 15vw, 10rem) clamp(1rem, 5vw, 6rem) 3rem",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Background glow (Responsive Width) */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse at top, rgba(201,164,108,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Top Border Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(201,164,108,0.08)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "100%", maxWidth: "800px" }}
        >
          {/* Label Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.8rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "clamp(20px, 5vw, 40px)",
                height: "1px",
                background: "#C9A46C",
              }}
            />
            <span
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9A46C",
                whiteSpace: "nowrap",
              }}
            >
              Our Treatments
            </span>
            <div
              style={{
                width: "clamp(20px, 5vw, 40px)",
                height: "1px",
                background: "#C9A46C",
              }}
            />
          </div>

          {/* Main Hero Title */}
          <h1
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}
          >
            Premium
            <br />
            <span
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(135deg, #C9A46C 0%, #E8D5A3 50%, #C9A46C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skin Services
            </span>
          </h1>

          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
              maxWidth: "500px",
              margin: "0 auto 2.5rem",
              padding: "0 1rem",
            }}
          >
            Eight world-class treatments crafted for your skin's unique needs.
            Each protocol is medically designed for visible, lasting results.
          </p>

          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              gap: "clamp(1.5rem, 5vw, 4rem)",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "8", label: "Treatments" },
              { value: "500+", label: "Happy Clients" },
              { value: "5★", label: "Average Rating" },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{ textAlign: "center", minWidth: "80px" }}
              >
                <div
                  style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 300,
                    color: "#C9A46C",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    marginTop: "0.2rem",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SERVICES GRID SECTION ── */}
      <section
        ref={containerRef}
        style={{
          padding: "2rem clamp(1rem, 4vw, 4rem) 6rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div className="services-responsive-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA SECTION ── */}
      <section
        style={{
          padding: "5rem clamp(1rem, 5vw, 4rem)",
          borderTop: "1px solid rgba(201,164,108,0.08)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(201,164,108,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ position: "relative", zIndex: 1, width: "100%" }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.4rem 1rem",
              border: "1px solid rgba(201,164,108,0.2)",
              borderRadius: "20px",
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A46C",
              marginBottom: "1.5rem",
            }}
          >
            <Sparkles size={10} />
            Free Consultation
          </div>

          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.8rem)",
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              marginBottom: "1.2rem",
            }}
          >
            Not sure which treatment
            <br />
            <span style={{ fontStyle: "italic", color: "#C9A46C" }}>
              is right for you?
            </span>
          </h2>

          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.85rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
              maxWidth: "450px",
              margin: "0 auto 2.5rem",
            }}
          >
            Book a free skin consultation with our expert team. We'll analyse
            your skin and recommend the perfect protocol.
          </p>

          {/* Call to Action Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="https://wa.me/923009454066?text=Hi!%20I'd%20like%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9rem 2rem",
                background: "linear-gradient(135deg, #C9A46C 0%, #E8D5A3 100%)",
                color: "#111111",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                width: "min(100%, 280px)",
                justifyContent: "center",
              }}
            >
              Book Consultation
              <ArrowUpRight size={13} />
            </motion.a>

            <motion.a
              href="tel:+923009454066"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9rem 2rem",
                border: "1px solid rgba(201,164,108,0.3)",
                color: "#C9A46C",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.68rem",
                fontWeight: 400,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                width: "min(100%, 280px)",
                justifyContent: "center",
              }}
            >
              Call: 0300-9454066
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Global Embedded Styles for Pure Responsiveness */}
      <style>{`
        .services-responsive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 24px;
        }
        
        @media (max-width: 480px) {
          .services-responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
}
