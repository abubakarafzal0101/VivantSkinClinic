import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, categories } from "../../../data/gallery";

/* ===================== IMAGE IMPORTS ===================== */
import image1 from "/src/assets/images/1.webp";
import image2 from "/src/assets/images/2.webp";
import image3 from "/src/assets/images/3.webp";
import image4 from "/src/assets/images/4.webp";
import image5 from "/src/assets/images/5.webp";
import image6 from "/src/assets/images/6.webp";
import image7 from "/src/assets/images/7.webp";
import image8 from "/src/assets/images/8.webp";
import image9 from "/src/assets/images/9.webp";
import image10 from "/src/assets/images/10.webp";
import image11 from "/src/assets/images/11.webp";
import image12 from "/src/assets/images/12.webp";
import image13 from "/src/assets/images/13.webp";
import image14 from "/src/assets/images/14.webp";
import image15 from "/src/assets/images/15.webp";
import logo from "/src/assets/images/logo.webp";
import doctor3 from "/src/assets/images/doctorimg3.webp";
import doctor4 from "/src/assets/images/doctorimg4.webp";

/* ===================== IMAGE ARRAY ===================== */
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  logo,
  doctor3,
  doctor4,
];

const getImage = (index) => images[index % images.length];

/* ===================== CONFIG ===================== */
const spanConfig = {
  large: { gridColumn: "span 2", gridRow: "span 2" },
  medium: { gridColumn: "span 2", gridRow: "span 1" },
  small: { gridColumn: "span 1", gridRow: "span 1" },
};

/* ===================== CARD ===================== */
function GalleryCard({ item, index, onClick }) {
  const span = spanConfig[item.span] || spanConfig.small;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick({ item, index })}
      style={{
        ...span,
        position: "relative",
        borderRadius: "6px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#111",
      }}
    >
      {/* IMAGE */}
      <img
        src={getImage(index)}
        alt={item.label}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
        }}
      />

      {/* TEXT */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div>
          <div style={{ color: "#fff", fontSize: "1rem" }}>{item.label}</div>
          <div style={{ color: "#C9A46C", fontSize: "0.6rem" }}>
            {item.category}
          </div>
        </div>

        <ZoomIn size={16} color="#C9A46C" />
      </div>
    </motion.div>
  );
}

/* ===================== MODAL ===================== */
function Modal({ selected, onClose }) {
  if (!selected) return null;

  const { item, index } = selected;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        style={{
          width: "min(800px, 92vw)",
          background: "#111",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {/* CLICKED IMAGE ONLY */}
        <img
          src={getImage(index)}
          alt={item.label}
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "1.5rem" }}>
          <div style={{ color: "#C9A46C", fontSize: "0.7rem" }}>
            {item.category}
          </div>
          <h2 style={{ color: "#fff" }}>{item.label}</h2>
        </div>

        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "transparent",
            border: "1px solid #C9A46C",
            color: "#C9A46C",
            cursor: "pointer",
            padding: "0.4rem",
          }}
        >
          <X size={16} />
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ===================== MAIN ===================== */
export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

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
          background: "#111",
          padding: "4rem 2rem 8rem",
          overflowX: "hidden",
        }}
      >
        {/* FILTER */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #C9A46C",
                background: activeCategory === cat ? "#C9A46C" : "transparent",
                color: activeCategory === cat ? "#111" : "#fff",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
            gridAutoRows: "260px",
          }}
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <GalleryCard
                key={item.id || i}
                item={item}
                index={i}
                onClick={setSelected}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <Modal selected={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
