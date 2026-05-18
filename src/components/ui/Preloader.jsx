import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return prev + 1;
      });
    }, 18);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (done) setTimeout(onComplete, 900);
  }, [done]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#111111",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ textAlign: "center" }}
          >
            <div
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "#FFFFFF",
                letterSpacing: "0.15em",
                lineHeight: 1,
              }}
            >
              VIVANT
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "clamp(0.55rem, 1.5vw, 0.7rem)",
                fontWeight: 400,
                color: "#C9A46C",
                letterSpacing: "0.4em",
                marginTop: "0.5rem",
              }}
            >
              SKIN CLINIC
            </div>
          </motion.div>

          {/* Gold Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: count / 100 }}
            transition={{ duration: 0.1 }}
            style={{
              width: "200px",
              height: "1px",
              background: "linear-gradient(90deg, #A67C45, #C9A46C, #E2C49A)",
              transformOrigin: "left",
            }}
          />

          {/* Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.7rem",
              color: "#999999",
              letterSpacing: "0.3em",
            }}
          >
            {count.toString().padStart(3, "0")}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
