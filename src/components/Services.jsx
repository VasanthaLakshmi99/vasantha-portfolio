import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const services = [
  {
    icon: "🌐",
    title: "Full Stack Development",
    color: "#8b5cf6",
    subtitle: "Modern web applications",

    desc:
      "Building scalable full-stack web applications with secure backend systems, responsive frontend interfaces, and optimized databases.",

    tools: [
      "React",
      "Django",
      "Python",
      "PostgreSQL",
      "REST APIs",
      "Tailwind",
    ],
  },

  {
    icon: "🏢",
    title: "Enterprise Systems",
    color: "#06b6d4",
    subtitle: "Business automation solutions",

    desc:
      "Developing HRMS platforms, employee portals, and secure enterprise systems to automate business workflows.",

    tools: [
      "Django",
      "React",
      "PostgreSQL",
      "AWS",
      "RBAC",
      "APIs",
    ],
  },

  {
    icon: "📊",
    title: "Data Analytics",
    color: "#10b981",
    subtitle: "Data-driven insights",

    desc:
      "Transforming business data into dashboards, KPI reports, and actionable insights using modern analytics tools.",

    tools: [
      "Python",
      "SQL",
      "Power BI",
      "Pandas",
      "Excel",
      "NumPy",
    ],
  },

  {
    icon: "🛡️",
    title: "Machine Learning",
    color: "#ec4899",
    subtitle: "AI-powered solutions",

    desc:
      "Integrating machine learning models for anomaly detection, prediction systems, and intelligent automation.",

    tools: [
      "Scikit-learn",
      "Python",
      "Pandas",
      "ML Models",
      "Jupyter",
      "Flask API",
    ],
  },

  {
    icon: "🎨",
    title: "Frontend Development",
    color: "#f59e0b",
    subtitle: "Modern UI/UX design",

    desc:
      "Creating responsive, clean, and visually polished interfaces with smooth user experiences and modern layouts.",

    tools: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Framer Motion",
    ],
  },

  {
    icon: "📣",
    title: "Digital Marketing",
    color: "#f43f5e",
    subtitle: "Brand growth & visibility",

    desc:
      "Helping businesses improve online visibility through SEO, social media campaigns, content strategy, and engagement.",

    tools: [
      "SEO",
      "Instagram",
      "LinkedIn",
      "Meta Ads",
      "Analytics",
      "Content Strategy",
    ],
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);
const [currentQuote, setCurrentQuote] = useState(0);

const quotes = [
  {
    author: "Rich Hickey",
    text:
      "Programming is not about typing, it's about thinking.",
  },

  {
    author: "Alan Kay",
    text:
      "Simple things should be simple, complex things should be possible.",
  },

  {
    author: "Linus Torvalds",
    text:
      "Talk is cheap. Show me the code.",
  },

  {
    author: "Steve Jobs",
    text:
      "Innovation distinguishes between a leader and a follower.",
  },

  {
    author: "Andrew Ng",
    text:
      "AI is the new electricity.",
  },
];
useEffect(() => {

  const interval = setInterval(() => {

    setCurrentQuote((prev) =>
      prev === quotes.length - 1
        ? 0
        : prev + 1
    );

  }, 4000);

  return () => clearInterval(interval);

}, []);
  return (
    <>
      <style>{`
        .srv-card{
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);
          border-radius:24px;
          padding:24px;
          transition:all .35s ease;
          position:relative;
          overflow:hidden;
          backdrop-filter:blur(14px);
        }

        .srv-tag{
          padding:6px 12px;
          border-radius:999px;
          font-size:11px;
          font-weight:600;
          white-space:nowrap;
        }

        .glow-txt{
          background:linear-gradient(
            135deg,
            #fff 30%,
            #c4b5fd 70%,
            #67e8f9
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media(max-width:992px){
          .services-grid{
            grid-template-columns:repeat(2,1fr)!important;
          }
        }

        @media(max-width:640px){
          .services-grid{
            grid-template-columns:1fr!important;
          }
        }
      `}</style>

      <section
        id="services"
        style={{
          background: "#060816",
          padding: "90px 0",
          position: "relative",
          overflow: "hidden",
          scrollMarginTop: "100px",
        }}
      >
        {/* BG GLOW */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle,rgba(139,92,246,.08),transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle,rgba(6,182,212,.06),transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <p
              style={{
                color: "#8b5cf6",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              WHAT I OFFER
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white text-center">
              <span className="glow-txt">
                Services
              </span>
            </h2>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "15px",
                maxWidth: "620px",
                margin: "18px auto 0",
                lineHeight: 1.8,
              }}
            >
              Building scalable digital products across development,
              analytics, AI, and digital marketing.
            </p>
          </motion.div>

          {/* SERVICES GRID */}
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "22px",
            }}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="srv-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderColor:
                    hovered === i
                      ? `${s.color}40`
                      : "rgba(255,255,255,.08)",

                  transform:
                    hovered === i
                      ? "translateY(-8px)"
                      : "translateY(0)",

                  boxShadow:
                    hovered === i
                      ? `0 15px 35px ${s.color}20`
                      : "none",
                }}
              >
                {/* TOP LINE */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg,${s.color},transparent)`,
                    opacity: hovered === i ? 1 : 0,
                    transition: ".3s",
                  }}
                />

                {/* ICON */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: `${s.color}18`,
                    border: `1px solid ${s.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                    marginBottom: "18px",
                  }}
                >
                  {s.icon}
                </div>

                {/* SUBTITLE */}
                <p
                  style={{
                    color: s.color,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {s.subtitle}
                </p>

                {/* TITLE */}
                <h3 className="text-[22px] font-bold text-white leading-snug mb-3">
                  {s.title}
                </h3>

                {/* DESC */}
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    marginBottom: "22px",
                  }}
                >
                  {s.desc}
                </p>

                {/* TOOLS */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {s.tools.map((t, j) => (
                    <span
                      key={j}
                      className="srv-tag"
                      style={{
                        background: `${s.color}10`,
                        border: `1px solid ${s.color}25`,
                        color: s.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAVORITE SAYINGS */}
          {/* FAVORITE SAYINGS */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  style={{
    marginTop: "100px",
    textAlign: "center",
    position: "relative",
  }}
>

  {/* SECTION TITLE */}
  <h3
    style={{
      fontSize: "52px",
      fontWeight: 800,
      color: "#f8fafc",
      marginBottom: "18px",
      letterSpacing: "-1px",
    }}
  >
    Favorite Sayings
  </h3>

  {/* UNDERLINE */}
  <div
    style={{
      width: "110px",
      height: "4px",
      borderRadius: "999px",
      margin: "0 auto 55px",
      background:
        "linear-gradient(90deg,#8b5cf6,#06b6d4)",
    }}
  />

  {/* QUOTE CARD */}
  <motion.div
    key={currentQuote}
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    style={{
      maxWidth: "760px",
      margin: "0 auto",
      padding: "0 20px",
    }}
  >

    {/* PERSON NAME */}
    <h4
      style={{
        color: "#ffffff",
        fontSize: "34px",
        fontWeight: 700,
        marginBottom: "28px",
      }}
    >
      {quotes[currentQuote].author}
    </h4>

    {/* QUOTE */}
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "18px",
      }}
    >

      {/* LEFT QUOTE */}
      <span
        style={{
          fontSize: "62px",
          color: "#60a5fa",
          lineHeight: 1,
          opacity: 0.9,
        }}
      >
        ❝
      </span>

      {/* TEXT */}
      <p
        style={{
          color: "#cbd5e1",
          fontSize: "28px",
          lineHeight: 1.9,
          fontStyle: "italic",
          margin: 0,
          maxWidth: "900px",
        }}
      >
        {quotes[currentQuote].text}
      </p>

      {/* RIGHT QUOTE */}
      <span
        style={{
          fontSize: "62px",
          color: "#60a5fa",
          lineHeight: 1,
          opacity: 0.9,
        }}
      >
        ❞
      </span>

    </div>

    {/* DOTS */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "40px",
      }}
    >

      {quotes.map((_, index) => (

        <button
          key={index}
          onClick={() => setCurrentQuote(index)}
          style={{
            width: currentQuote === index ? "28px" : "12px",
            height: "12px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            transition: "all .35s ease",
            background:
              currentQuote === index
                ? "#3b82f6"
                : "rgba(255,255,255,.28)",
          }}
        />

      ))}

    </div>

  </motion.div>
</motion.div>
        </div>
      </section>
    </>
  );
}