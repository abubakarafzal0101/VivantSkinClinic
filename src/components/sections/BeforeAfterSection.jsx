import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

// Yeh 3 cases data replace karo:
const cases = [
  {
    label: "Acne Treatment",
    duration: "8 weeks",
    beforeImg:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop",
  },
  {
    label: "Skin Rejuvenation",
    duration: "12 weeks",
    beforeImg:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=600&q=80&fit=crop",
  },
  {
    label: "Anti Aging",
    duration: "6 weeks",
    beforeImg:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80&fit=crop",
  },
];

// Function signature change karo:
function ComparisonSlider({ beforeImg, afterImg }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePos = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      if (dragging) updatePos(e.clientX);
    },
    [dragging, updatePos],
  );

  const onTouchMove = useCallback(
    (e) => {
      updatePos(e.touches[0].clientX);
    },
    [updatePos],
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={onTouchMove}
      onTouchEnd={() => setDragging(false)}
      style={{
        position: "relative",
        aspectRatio: "3/4",
        borderRadius: "4px",
        overflow: "hidden",
        cursor: "col-resize",
        userSelect: "none",
      }}
    >
      {/* AFTER image (base) */}
      <img
        src={afterImg}
        alt="After treatment"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        draggable={false}
      />

      {/* BEFORE image (clipped) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
          transition: dragging ? "none" : "clip-path 0.05s",
        }}
      >
        <img
          src={beforeImg}
          alt="Before treatment"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: "2px",
          background: "rgba(255,255,255,0.9)",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          boxShadow: "0 0 12px rgba(0,0,0,0.3)",
        }}
      />

      {/* Handle */}
      <div
        onMouseDown={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onTouchStart={() => setDragging(true)}
        style={{
          position: "absolute",
          top: "50%",
          left: `${pos}%`,
          transform: "translate(-50%, -50%)",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "#FFFFFF",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "col-resize",
          zIndex: 10,
          border: "2px solid rgba(201,164,108,0.5)",
        }}
      >
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <span style={{ fontSize: "0.55rem", color: "#C9A46C" }}>◀</span>
          <span style={{ fontSize: "0.55rem", color: "#C9A46C" }}>▶</span>
        </div>
      </div>

      {/* Before label */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.55rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          background: "rgba(17,17,17,0.55)",
          backdropFilter: "blur(8px)",
          padding: "0.35rem 0.8rem",
          borderRadius: "2px",
          opacity: pos > 15 ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        Before
      </div>

      {/* After label */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.55rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#111111",
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(8px)",
          padding: "0.35rem 0.8rem",
          borderRadius: "2px",
          opacity: pos < 85 ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        After
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
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
              Real Results
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
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "#111111",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Visible Transformations
          </motion.h2>
        </div>

        {/* Sliders Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {cases.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <ComparisonSlider
                index={i}
                beforeImg={c.beforeImg}
                afterImg={c.afterImg}
              />
              <div style={{ marginTop: "1.2rem", textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "#111111",
                    marginBottom: "0.3rem",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#C9A46C",
                  }}
                >
                  Results in {c.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: "center",
            marginTop: "3rem",
            fontFamily: "Manrope, sans-serif",
            fontSize: "0.7rem",
            color: "rgba(17,17,17,0.35)",
            fontStyle: "italic",
          }}
        >
          * Drag the slider to compare before and after results. Individual
          results may vary.
        </motion.p>
      </div>
    </section>
  );
}
