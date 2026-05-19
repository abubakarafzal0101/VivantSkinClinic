import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Ayesha Malik",
    role: "Founder & Chief Dermatologist",
    exp: "15 Years",
  },
  { name: "Dr. Sara Ahmed", role: "Aesthetic Physician", exp: "10 Years" },
  { name: "Dr. Usman Khan", role: "Laser Specialist", exp: "8 Years" },
];

export default function AboutTeam() {
  return (
    <section
      style={{
        background: "#111111",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        borderTop: "1px solid rgba(201,164,108,0.08)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "5rem" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
            Meet The Team
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          The Experts Behind
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #A67C45, #C9A46C, #E2C49A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your Transformation
          </span>
        </motion.h2>
      </div>

      {/* Team Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          maxWidth: "1100px",
        }}
      >
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: [0.76, 0, 0.24, 1],
            }}
            whileHover={{ y: -6 }}
            style={{
              border: "1px solid rgba(201,164,108,0.12)",
              borderRadius: "4px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "border-color 0.4s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(201,164,108,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(201,164,108,0.12)")
            }
          >
            {/* Photo placeholder */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                background: "linear-gradient(160deg, #1a1a1a, #1f1d18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0.8rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201,164,108,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "1.8rem",
                    color: "rgba(201,164,108,0.3)",
                  }}
                >
                  {member.name.split(" ")[1][0]}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.3em",
                  color: "rgba(255,255,255,0.15)",
                  textTransform: "uppercase",
                }}
              >
                Photo
              </div>

              {/* Experience badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.2rem",
                  right: "1.2rem",
                  background: "rgba(201,164,108,0.15)",
                  border: "1px solid rgba(201,164,108,0.25)",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "2px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.58rem",
                    letterSpacing: "0.15em",
                    color: "#C9A46C",
                  }}
                >
                  {member.exp}
                </span>
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: "1.8rem 1.8rem 2rem" }}>
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  marginBottom: "0.4rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {member.name}
              </h3>
              <div
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C9A46C",
                  opacity: 0.8,
                }}
              >
                {member.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
