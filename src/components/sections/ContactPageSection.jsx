// src/pages/Contact/Contact.jsx
// Vivant Skin Clinic — Luxury Contact Page
// Form submits to WhatsApp: 03009454066

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Send } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const treatments = [
  "Hydrafacial",
  "Acne Treatment",
  "Laser Hair Removal",
  "Skin Rejuvenation",
  "Pigmentation Treatment",
  "Botox & Fillers",
  "Anti Aging",
  "Skin Whitening",
  "Other / General Inquiry",
];

const contactInfo = [
  {
    Icon: Phone,
    label: "Call Us",
    value: "+92 300 945 4066",
    sub: "Mon – Sat, 10am – 8pm",
    href: "tel:+923009454066",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "hello@vivantskinclinic.com",
    sub: "We reply within 24 hours",
    href: "mailto:hello@vivantskinclinic.com",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "DHA Phase 6, Karachi",
    sub: "Pakistan",
    href: "https://maps.google.com",
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Mon – Sat: 10am – 8pm",
    sub: "Sunday: Closed",
    href: null,
  },
];

// ─── WHATSAPP SUBMIT ──────────────────────────────────────────────────────────

function sendToWhatsApp({ name, phone, email, treatment, message }) {
  const number = "923009454066"; // international format, no +
  const text = [
    `🌿 *New Consultation Request — Vivant Skin Clinic*`,
    ``,
    `👤 *Name:* ${name}`,
    `📞 *Phone:* ${phone}`,
    `📧 *Email:* ${email}`,
    `💆 *Treatment:* ${treatment || "Not specified"}`,
    `💬 *Message:* ${message || "No additional message"}`,
    ``,
    `_Sent via Vivant Skin Clinic website_`,
  ].join("\n");

  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// ─── FLOATING LABEL INPUT ────────────────────────────────────────────────────

function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div style={{ position: "relative", marginBottom: "2rem" }}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        autoComplete="off"
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${active ? "#C9A46C" : "rgba(255,255,255,0.12)"}`,
          padding: "1.2rem 0 0.6rem",
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.9rem",
          fontWeight: 300,
          color: "#FFFFFF",
          outline: "none",
          transition: "border-color 0.3s ease",
          boxSizing: "border-box",
        }}
      />
      <motion.div
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "1px",
          background: "linear-gradient(90deg, #C9A46C, rgba(201,164,108,0.3))",
          transformOrigin: "left",
        }}
      />
      <motion.label
        animate={{
          y: active ? -22 : 0,
          fontSize: active ? "0.55rem" : "0.82rem",
          color: active ? "#C9A46C" : "rgba(255,255,255,0.3)",
          letterSpacing: active ? "0.25em" : "0.05em",
        }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "absolute",
          top: "1.2rem",
          left: 0,
          fontFamily: "Manrope, sans-serif",
          fontWeight: 400,
          textTransform: active ? "uppercase" : "none",
          pointerEvents: "none",
        }}
      >
        {label}
      </motion.label>
    </div>
  );
}

// ─── FLOATING LABEL TEXTAREA ─────────────────────────────────────────────────

function FloatingTextarea({ label, name, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div style={{ position: "relative", marginBottom: "2rem" }}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${active ? "#C9A46C" : "rgba(255,255,255,0.12)"}`,
          padding: "1.8rem 0 0.6rem",
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.9rem",
          fontWeight: 300,
          color: "#FFFFFF",
          outline: "none",
          resize: "none",
          transition: "border-color 0.3s ease",
          boxSizing: "border-box",
        }}
      />
      <motion.div
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "1px",
          background: "linear-gradient(90deg, #C9A46C, rgba(201,164,108,0.3))",
          transformOrigin: "left",
        }}
      />
      <motion.label
        animate={{
          y: active ? -36 : 0,
          fontSize: active ? "0.55rem" : "0.82rem",
          color: active ? "#C9A46C" : "rgba(255,255,255,0.3)",
          letterSpacing: active ? "0.25em" : "0.05em",
        }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "absolute",
          top: "1.8rem",
          left: 0,
          fontFamily: "Manrope, sans-serif",
          fontWeight: 400,
          textTransform: active ? "uppercase" : "none",
          pointerEvents: "none",
        }}
      >
        {label}
      </motion.label>
    </div>
  );
}

// ─── CUSTOM SELECT ────────────────────────────────────────────────────────────

function LuxurySelect({ value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative", marginBottom: "2rem" }}>
      <div
        style={{
          fontSize: "0.55rem",
          fontFamily: "Manrope, sans-serif",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#C9A46C",
          marginBottom: "0.6rem",
        }}
      >
        Treatment Interest
      </div>
      <motion.div
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.99 }}
        style={{
          width: "100%",
          padding: "0.8rem 0",
          borderBottom: `1px solid ${open ? "#C9A46C" : "rgba(255,255,255,0.12)"}`,
          fontFamily: "Manrope, sans-serif",
          fontSize: "0.88rem",
          fontWeight: 300,
          color: value ? "#FFFFFF" : "rgba(255,255,255,0.3)",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          userSelect: "none",
          transition: "border-color 0.3s ease",
        }}
      >
        {value || "Select a treatment"}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight size={14} color="rgba(201,164,108,0.6)" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#1a1a1a",
              border: "1px solid rgba(201,164,108,0.15)",
              zIndex: 100,
              maxHeight: "220px",
              overflowY: "auto",
            }}
          >
            {treatments.map((t) => (
              <div
                key={t}
                onClick={() => {
                  onChange(t);
                  setOpen(false);
                }}
                style={{
                  padding: "0.85rem 1.2rem",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  color: value === t ? "#C9A46C" : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(201,164,108,0.06)";
                  e.currentTarget.style.color = "#C9A46C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color =
                    value === t ? "#C9A46C" : "rgba(255,255,255,0.5)";
                }}
              >
                {t}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function ContactPageSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email) {
      setError("Please fill in Name, Phone, and Email.");
      return;
    }
    sendToWhatsApp(form);
  };

  return (
    <div style={{ background: "#111111", minHeight: "100vh" }}>
      {/* ── HERO BANNER ── */}
      <section
        style={{
          padding: "6rem clamp(1.5rem, 8vw, 8rem) 4rem",
          marginBottom: "1rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(201,164,108,0.05) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,164,108,0.25), transparent)",
            marginBottom: "3rem",
            transformOrigin: "left",
          }}
        />

        <div style={{ maxWidth: "900px" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{ width: "30px", height: "1px", background: "#C9A46C" }}
            />
            <span
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.55rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#C9A46C",
              }}
            >
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              marginBottom: "2.5rem",
            }}
          >
            Book Your
            <br />
            <em style={{ color: "#C9A46C" }}>Consultation</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(0.82rem, 1.5vw, 1rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.9,
              maxWidth: "480px",
            }}
          >
            Fill in your details and you'll be redirected to WhatsApp — our team
            will confirm your appointment instantly.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section
        style={{
          padding: "0 clamp(1.5rem, 8vw, 8rem) 8rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 8vw, 8rem)",
          alignItems: "start",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="contact-grid"
      >
        {/* ── LEFT: INFO ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#C9A46C",
              marginBottom: "1.5rem",
            }}
          >
            Clinic Information
          </div>

          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "3.5rem",
            }}
          >
            We'd Love to
            <br />
            Hear From You
          </h2>

          {contactInfo.map(({ Icon, label, value, sub, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.5rem",
                padding: "1.8rem 0",
                borderBottom: "1px solid rgba(201,164,108,0.08)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  border: "1px solid rgba(201,164,108,0.2)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={15} color="#C9A46C" strokeWidth={1.5} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 400,
                      color: "#FFFFFF",
                      textDecoration: "none",
                      display: "block",
                      marginBottom: "0.2rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#C9A46C")}
                    onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                  >
                    {value}
                  </a>
                ) : (
                  <div
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 400,
                      color: "#FFFFFF",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {value}
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  {sub}
                </div>
              </div>
            </motion.div>
          ))}

          {/* WhatsApp direct button */}
          <motion.a
            href="https://wa.me/923009454066"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ borderColor: "#25D366", color: "#25D366" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
              marginTop: "2.5rem",
              padding: "1rem 2rem",
              border: "1px solid rgba(37,211,102,0.3)",
              color: "rgba(37,211,102,0.7)",
              textDecoration: "none",
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
          >
            {/* WhatsApp icon SVG */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* ── RIGHT: FORM ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            border: "1px solid rgba(201,164,108,0.1)",
            padding: "clamp(2rem, 5vw, 4rem)",
            position: "relative",
          }}
        >
          {/* Corner accents */}
          <div
            style={{
              position: "absolute",
              top: -1,
              right: -1,
              width: "40px",
              height: "40px",
              borderTop: "2px solid #C9A46C",
              borderRight: "2px solid #C9A46C",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -1,
              left: -1,
              width: "40px",
              height: "40px",
              borderBottom: "2px solid #C9A46C",
              borderLeft: "2px solid #C9A46C",
            }}
          />

          {/* Form header */}
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.55rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#C9A46C",
                marginBottom: "1rem",
              }}
            >
              Consultation Request
            </div>
            <h3
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 300,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Start Your
              <br />
              Skin Journey
            </h3>
          </div>

          {/* WhatsApp badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.5rem 1rem",
              background: "rgba(37,211,102,0.06)",
              border: "1px solid rgba(37,211,102,0.15)",
              borderRadius: "2px",
              marginBottom: "2.5rem",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.58rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(37,211,102,0.8)",
              }}
            >
              Submits directly to WhatsApp
            </span>
          </div>

          {/* Name + Phone */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
            className="form-row"
          >
            <FloatingInput
              label="Full Name *"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <FloatingInput
              label="Phone Number *"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <FloatingInput
            label="Email Address *"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* Treatment */}
          <LuxurySelect
            value={form.treatment}
            onChange={(val) => setForm((p) => ({ ...p, treatment: val }))}
          />

          {/* Message */}
          <FloatingTextarea
            label="Tell us about your skin concerns"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.72rem",
                  color: "#e07070",
                  marginBottom: "1.5rem",
                }}
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Submit → WhatsApp */}
          <motion.button
            onClick={handleSubmit}
            whileHover={{
              background: "#25D366",
              color: "#111111",
              borderColor: "#25D366",
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: "100%",
              padding: "1.2rem 2rem",
              background: "transparent",
              border: "1px solid rgba(37,211,102,0.5)",
              color: "rgba(37,211,102,0.85)",
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.8rem",
              transition: "all 0.35s ease",
              marginBottom: "1.5rem",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send via WhatsApp
          </motion.button>

          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.6rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.18)",
              textAlign: "center",
              lineHeight: 1.7,
            }}
          >
            Clicking the button will open WhatsApp with your details pre-filled.
            Your information is kept strictly confidential.
          </p>
        </motion.div>
      </section>

      {/* ── TRUST BAR ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          padding: "4rem clamp(1.5rem, 8vw, 8rem)",
          borderTop: "1px solid rgba(201,164,108,0.08)",
          display: "flex",
          justifyContent: "center",
          gap: "clamp(2rem, 6vw, 6rem)",
          flexWrap: "wrap",
        }}
      >
        {[
          { number: "500+", label: "Happy Clients" },
          { number: "5★", label: "Average Rating" },
          { number: "8+", label: "Treatments" },
          { number: "24h", label: "Response Time" },
        ].map(({ number, label }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#C9A46C",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {number}
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </motion.section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
