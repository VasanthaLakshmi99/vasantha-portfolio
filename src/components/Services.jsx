import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    icon: "🌐",
    title: "Full Stack Development",
    subtitle: "Modern web applications",
    desc: "Building scalable full-stack web applications with secure backend systems, responsive frontend interfaces, and optimized databases.",
    tools: ["React", "Django", "Python", "PostgreSQL", "REST APIs", "Tailwind"],
  },
  {
    icon: "🏢",
    title: "Enterprise Systems",
    subtitle: "Business automation solutions",
    desc: "Developing HRMS platforms, employee portals, and secure enterprise systems to automate business workflows.",
    tools: ["Django", "React", "PostgreSQL", "AWS", "RBAC", "APIs"],
  },
  {
    icon: "📊",
    title: "Data Analytics",
    subtitle: "Data-driven insights",
    desc: "Transforming business data into dashboards, KPI reports, and actionable insights using modern analytics tools.",
    tools: ["Python", "SQL", "Power BI", "Pandas", "Excel", "NumPy"],
  },
  {
    icon: "🛡️",
    title: "Machine Learning",
    subtitle: "AI-powered solutions",
    desc: "Integrating machine learning models for anomaly detection, prediction systems, and intelligent automation.",
    tools: ["Scikit-learn", "Python", "Pandas", "ML Models", "Jupyter", "Flask API"],
  },
  {
    icon: "🎨",
    title: "Frontend Development",
    subtitle: "Modern UI/UX design",
    desc: "Creating responsive, clean, and visually polished interfaces with smooth user experiences and modern layouts.",
    tools: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    icon: "📣",
    title: "Digital Marketing",
    subtitle: "Brand growth & visibility",
    desc: "Helping businesses improve online visibility through SEO, social media campaigns, content strategy, and engagement.",
    tools: ["SEO", "Instagram", "LinkedIn", "Meta Ads", "Analytics", "Content Strategy"],
  },
];

const quotes = [
  { author: "Rich Hickey",    text: "Programming is not about typing, it's about thinking." },
  { author: "Alan Kay",       text: "Simple things should be simple, complex things should be possible." },
  { author: "Linus Torvalds", text: "Talk is cheap. Show me the code." },
  { author: "Steve Jobs",     text: "Innovation distinguishes between a leader and a follower." },
  { author: "Andrew Ng",      text: "AI is the new electricity." },
];

export default function Services() {
  const [hovered, setHovered]       = useState(null);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .srv-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 28px;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(14px);
        }
        .srv-card:hover {
          border-color: rgba(139,92,246,0.35);
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(139,92,246,0.15);
        }
        .srv-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6, #06b6d4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .srv-card:hover::before {
          opacity: 1;
        }
        .srv-tag {
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
          background: rgba(139,92,246,0.1);
          border: 1px solid rgba(139,92,246,0.22);
          color: #c4b5fd;
          transition: all 0.2s;
        }
        .srv-card:hover .srv-tag {
          background: rgba(139,92,246,0.16);
          border-color: rgba(139,92,246,0.35);
        }
        .glow-txt {
          background: linear-gradient(135deg, #fff 30%, #c4b5fd 70%, #67e8f9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media(max-width:992px){ .services-grid{ grid-template-columns:repeat(2,1fr)!important; } }
        @media(max-width:640px){ .services-grid{ grid-template-columns:1fr!important; } }
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
        {/* BG GLOWS — same as rest of portfolio */}
        <div style={{ position:"absolute", top:0, right:0, width:"500px", height:"500px", background:"radial-gradient(circle,rgba(139,92,246,.08),transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:0, left:0, width:"500px", height:"500px", background:"radial-gradient(circle,rgba(6,182,212,.06),transparent 70%)", pointerEvents:"none" }} />

        <div style={{ maxWidth:"1160px", margin:"0 auto", padding:"0 24px", position:"relative", zIndex:10 }}>

          {/* HEADER */}
          <motion.div
            initial={{ opacity:0, y:25 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}
            style={{ textAlign:"center", marginBottom:"60px" }}
          >
            <p style={{ color:"#8b5cf6", fontSize:"12px", fontWeight:700, letterSpacing:"4px", textTransform:"uppercase", marginBottom:"14px" }}>
              WHAT I OFFER
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
              <span className="glow-txt">Services</span>
            </h2>
            <p style={{ color:"#94a3b8", fontSize:"15px", maxWidth:"620px", margin:"18px auto 0", lineHeight:1.8 }}>
              Building scalable digital products across development, analytics, AI, and digital marketing.
            </p>
          </motion.div>

          {/* SERVICES GRID */}
          <div
            className="services-grid"
            style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"22px" }}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="srv-card"
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay: i * 0.08, duration:0.5 }}
                viewport={{ once:true }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >

                {/* ICON — unified violet tint */}
                <div style={{
                  width:"56px", height:"56px", borderRadius:"16px",
                  background:"rgba(139,92,246,0.12)",
                  border:"1px solid rgba(139,92,246,0.25)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"26px", marginBottom:"20px",
                }}>
                  {s.icon}
                </div>

                {/* SUBTITLE — violet, same tracking as hero "GET IN TOUCH" */}
                <p style={{ color:"#8b5cf6", fontSize:"11px", fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", marginBottom:"8px" }}>
                  {s.subtitle}
                </p>

                {/* TITLE */}
                <h3 style={{ color:"#ffffff", fontSize:"20px", fontWeight:700, marginBottom:"12px", lineHeight:1.3 }}>
                  {s.title}
                </h3>

                {/* DESC */}
                <p style={{ color:"#94a3b8", fontSize:"14px", lineHeight:1.75, marginBottom:"22px" }}>
                  {s.desc}
                </p>

                {/* TOOLS — all violet, no per-card colors */}
                <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                  {s.tools.map((t, j) => (
                    <span key={j} className="srv-tag">{t}</span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

          {/* FAVORITE SAYINGS */}
          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}
            style={{ marginTop:"60px", textAlign:"center", position:"relative" }}
          >
            <p style={{ color:"#8b5cf6", fontSize:"12px", fontWeight:700, letterSpacing:"4px", textTransform:"uppercase", marginBottom:"14px" }}>
              WORDS THAT INSPIRE
            </p>
            <h3 style={{ fontSize:"42px", fontWeight:700, marginBottom:"8px", letterSpacing:"-1px" }}>
              <span className="glow-txt">Favorite Sayings</span>
            </h3>
            <div style={{ width:"110px", height:"4px", borderRadius:"999px", margin:"0 auto 12px", background:"linear-gradient(90deg,#8b5cf6,#06b6d4)" }} />

            <motion.div
              key={currentQuote}
              initial={{ opacity:0, y:18 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.45 }}
              style={{ maxWidth:"760px", margin:"0 auto", padding:"0 20px" }}
            >
              {/* AUTHOR */}
              <h4 style={{ color:"#ffffff", fontSize:"30px", fontWeight:700, marginBottom:"12px" }}>
                {quotes[currentQuote].author}
              </h4>

              {/* QUOTE */}
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"16px" }}>
                <span style={{ fontSize:"56px", color:"#8b5cf6", lineHeight:1, opacity:0.8 }}>❝</span>
                <p style={{ color:"#cbd5e1", fontSize:"24px", lineHeight:1.9, fontStyle:"italic", margin:0, maxWidth:"640px" }}>
                  {quotes[currentQuote].text}
                </p>
                <span style={{ fontSize:"56px", color:"#8b5cf6", lineHeight:1, opacity:0.8 }}>❞</span>
              </div>

              {/* DOTS */}
              <div style={{ display:"flex", justifyContent:"center", gap:"10px", marginTop:"36px" }}>
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    style={{
                      width: currentQuote === index ? "28px" : "10px",
                      height:"10px",
                      borderRadius:"999px",
                      border:"none",
                      cursor:"pointer",
                      transition:"all .35s ease",
                      background: currentQuote === index
                        ? "linear-gradient(90deg,#8b5cf6,#06b6d4)"
                        : "rgba(255,255,255,0.2)",
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
