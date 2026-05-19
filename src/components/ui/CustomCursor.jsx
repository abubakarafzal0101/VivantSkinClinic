import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.5 });

  const dotX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnterLink = () => {
      cursorRef.current?.classList.add("cursor-hover");
    };
    const onLeaveLink = () => {
      cursorRef.current?.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", move);

    // All interactive elements pe hover effect
    const addListeners = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    };

    addListeners();

    // Observer for dynamic elements
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Blob cursor */}
      <motion.div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: springX,
          top: springY,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid rgba(201,164,108,0.6)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
        }}
        className="custom-cursor-blob"
      />

      {/* Dot cursor */}
      <motion.div
        ref={dotRef}
        style={{
          position: "fixed",
          left: dotX,
          top: dotY,
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#C9A46C",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
        }}
      />

      <style>{`
        * { cursor: none !important; }

        .custom-cursor-blob {
          transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;
        }

        .cursor-hover .custom-cursor-blob,
        .custom-cursor-blob.cursor-hover {
          width: 60px !important;
          height: 60px !important;
          background: rgba(201,164,108,0.1);
          border-color: rgba(201,164,108,0.9);
        }

        @media (max-width: 768px) {
          * { cursor: auto !important; }
          .custom-cursor-blob, .custom-cursor-dot { display: none !important; }
        }
      `}</style>
    </>
  );
}
