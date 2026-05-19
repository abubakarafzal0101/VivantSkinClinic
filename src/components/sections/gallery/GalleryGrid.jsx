import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, categories } from "../../../data/gallery";

const spanConfig = {
  large: { gridColumn: "span 2", gridRow: "span 2", aspectRatio: "1/1" },
  medium: { gridColumn: "span 2", gridRow: "span 1", aspectRatio: "2/1" },
  small: { gridColumn: "span 1", gridRow: "span 1", aspectRatio: "1/1" },
};

const gradients = [
  "linear-gradient(135deg, #1a1a18, #222218)",
  "linear-gradient(160deg, #181a18, #1e2018)",
  "linear-gradient(120deg, #1a1818, #201e18)",
  "linear-gradient(150deg, #181818, #1e1c1a)",
];

function GalleryCard({ item, index, onClick }) {
  const span = spanConfig[item.span];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.76, 0, 0.24, 1],
      }}
      onClick={() => onClick(item)}
      style={{
        ...span,
        position: "relative",
        background: gradients[index % gradients.length],
        border: "1px solid rgba(201,164,108,0.1)",
        borderRadius: "4px",
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: span.aspectRatio,
      }}
      whileHover="hover"
    >
      {/* Hover overlay */}
      <motion.div
        variants={{
          hover: { opacity: 1 },
          initial: { opacity: 0 },
        }}
        initial="initial"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.2) 60%, transparent 100%)",
          zIndex: 1,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Gold border on hover */}
      <motion.div
        variants={{ hover: { opacity: 1 }, initial: { opacity: 0 } }}
        initial="initial"
        style={{
          position: "absolute",
          inset: 0,
          border: "1px solid rgba(201,164,108,0.4)",
          borderRadius: "4px",
          zIndex: 2,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Placeholder content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        <div
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: item.span === "large" ? "4rem" : "2rem",
            color: "rgba(201,164,108,0.12)",
          }}
        >
          ✦
        </div>
        <div
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "0.55rem",
            letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.12)",
            textTransform: "uppercase",
          }}
        >
          {item.label}
        </div>
      </div>

      {/* Bottom info */}
      <motion.div
        variants={{
          hover: { y: 0, opacity: 1 },
          initial: { y: 10, opacity: 0 },
        }}
        initial="initial"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.2rem 1.5rem",
          zIndex: 3,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          transition: "all 0.4s ease",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "#FFFFFF",
              marginBottom: "0.2rem",
            }}
          >
            {item.label}
          </div>
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C9A46C",
            }}
          >
            {item.category}
          </div>
        </div>
        <div
          style={{
            width: "34px",
            height: "34px",
            border: "1px solid rgba(201,164,108,0.4)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ZoomIn size={13} color="#C9A46C" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Modal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(700px, 90vw)",
          background: "linear-gradient(160deg, #1a1a18, #222218)",
          border: "1px solid rgba(201,164,108,0.2)",
          borderRadius: "4px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.2rem",
            width: "36px",
            height: "36px",
            background: "rgba(201,164,108,0.1)",
            border: "1px solid rgba(201,164,108,0.25)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <X size={15} color="#C9A46C" />
        </button>

        {/* Image area */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16/10",
            background: "linear-gradient(160deg, #1a1a18, #2a2820)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "5rem",
              color: "rgba(201,164,108,0.15)",
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
            {item.label}
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: "2rem 2.5rem" }}>
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C9A46C",
              marginBottom: "0.6rem",
            }}
          >
            {item.category}
          </div>
          <div
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            {item.label}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (i) => i.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <>
      <section
        style={{
          background: "#111111",
          padding: "5rem clamp(1.5rem, 6vw, 6rem) 8rem",
        }}
      >
        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "4rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "0.7rem 1.6rem",
                border:
                  activeCategory === cat
                    ? "1px solid #C9A46C"
                    : "1px solid rgba(201,164,108,0.2)",
                background:
                  activeCategory === cat
                    ? "rgba(201,164,108,0.1)"
                    : "transparent",
                color:
                  activeCategory === cat ? "#C9A46C" : "rgba(255,255,255,0.4)",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {cat}
            </button>
          ))}

          {/* Count */}
          <div
            style={{
              marginLeft: "auto",
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            {filtered.length} Items
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
            gridAutoRows: "280px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={i}
                onClick={setSelectedItem}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
