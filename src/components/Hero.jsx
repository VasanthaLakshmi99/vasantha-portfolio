
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaPython } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePhoto from "../assets/profileimg.jpg";


const socialLinks = [
  { icon: <FaLinkedin />,  label: "LinkedIn",  href: "https://www.linkedin.com/in/vasantha-lakshmi-thotireddy-88083428a/" },
  { icon: <FaGithub />,    label: "GitHub",    href: "https://github.com/VasanthaLakshmi99" },
  { icon: <MdEmail />,     label: "Email",     href: "mailto:vasanthathotireddy99@gmail.com" },
  { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/_t_vasantha?igsh=ajN6ZjlzemNkM3o="},
];
const ExcelIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#21A366">
    <path d="M23 1.5l-9 2.2v16.5l9 2.2V1.5zM12 4.4L1.5 6.2v11.6l10.5 1.8V4.4zM9 14.8l-1.5-3.1-1.5 3.1h-1.6l2.3-4.4-2.2-4.1h1.7l1.3 2.7 1.3-2.7h1.6L8.1 10.4l2.4 4.4H9z" />
  </svg>
);

const PowerBIIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="#F2C811">
    <path d="M10 20h4v8h-4v-8zm6-10h4v18h-4V10zm6-10h4v28h-4V0z" />
  </svg>
);
const skillBadges = [
  {
    text: "React",
    icon: <FaReact className="text-cyan-400 text-lg" />,
    style: { top: "8%", right: "2%" },
    delay: 0,
  },
  {
  text: "Excel",
  icon: <ExcelIcon />,
  style: { bottom: "45%", left: "2%" },
  delay: 0.3,
},
  {
    text: "Python",
    icon: <FaPython className="text-yellow-400 text-lg" />,
    style: { bottom: "28%", left: "-2%" },
    delay: 0.6,
  },
  {
  text: "Power BI",
  icon: <PowerBIIcon />,
  style: { top: "32%", right: "-2%" },
  delay: 1.2,
},
  {
    text: "SQL",
    icon: <SiPostgresql className="text-blue-400 text-lg" />,
    style: { bottom: "10%", right: "4%" },
    delay: 1.8,
  },
];

function Hero() {
  return (
<section
  id="home"
  className="relative min-h-[100svh] bg-[#0b0014] flex items-center overflow-hidden pt-24"
>      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

     {/* Ambient glow blobs
      <div className="absolute top-[-120px] left-[-80px] w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-20 xl:px-28 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center py-14">

        {/* ════════════ LEFT COLUMN ════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          //className="flex flex-col gap-6"
className="flex flex-col gap-6 max-w-[620px] lg:ml-24 xl:ml-32"        >

          {/* Available pill */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/8"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_6px_rgba(167,139,250,0.9)]" />
            <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">
              Available for Work
            </span>
          </motion.div>

          {/* Greeting — NOW VISIBLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 text-lg sm:text-xl font-medium"
          >
            Hi Amigos, I'm
          </motion.p>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col leading-none gap-1"
          >
            {[
              { word: "VASANTHA",    size: "clamp(32px, 5vw, 56px)" },
              { word: "LAKSHMI",     size: "clamp(32px, 5vw, 56px)" },
              { word: "THOTIREDDY", size: "clamp(26px, 4.2vw, 48px)" },
            ].map(({ word, size }, i) => (
              <motion.h1
                key={word}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                style={{ fontSize: size, lineHeight: 1.1 }}
                className="font-black tracking-tight bg-gradient-to-r from-white via-violet-100 to-violet-400 bg-clip-text text-transparent"
              >
                {word}
              </motion.h1>
            ))}
          </motion.div>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[2px] rounded-full bg-violet-400 shrink-0" />
            <TypeAnimation
              sequence={[
                "Python Full Stack Developer", 2000,
                "Data Analyst",               2000,
                "Freelancer",                 2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-xl sm:text-2xl font-bold text-violet-300 tracking-wide"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-gray-400 text-base sm:text-[17px] leading-relaxed max-w-[490px]"
          >
            I build scalable web applications, modern frontend interfaces, and
            business-driven data solutions using{" "}
            <span className="text-violet-300 font-semibold">Python</span>,{" "}
            <span className="text-violet-300 font-semibold">React</span>,{" "}
            <span className="text-violet-300 font-semibold">SQL</span>, and{" "}
            <span className="text-violet-300 font-semibold">Power BI</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
  href="#contact"
  whileHover={{ scale: 1.04, y: -1 }}
  whileTap={{ scale: 0.97 }}
  className="
    relative overflow-hidden
    w-[158px] h-[39px]
    rounded-xl
    bg-gradient-to-r
    from-violet-500
    to-purple-600
    text-white
    text-[15px]
    font-bold
    tracking-wide
    shadow-[0_4px_20px_rgba(139,92,246,0.4)]
    hover:shadow-[0_8px_30px_rgba(139,92,246,0.6)]
    transition-shadow duration-300
    shrink-0
    flex items-center justify-center
  "
>
  Hire Me
</a>
            <a
  href="#projects"
  className="w-[158px] h-[40px] border border-violet-400/60 text-violet-300 rounded-xl text-[15px] font-semibold tracking-wide hover:bg-violet-400/10 hover:border-violet-400 hover:scale-105 transition-all duration-300 flex items-center justify-center"
>
  View Projects ↗
</a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center gap-4 pt-1"
          >
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 rounded-xl border border-gray-700 bg-white/[0.02] flex items-center justify-center text-xl text-gray-400 hover:border-violet-400 hover:text-violet-300 hover:bg-violet-400/10 hover:-translate-y-1 transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </motion.div>

        </motion.div>

        {/* ════════════ RIGHT COLUMN — Image2 style ════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
className="hidden lg:flex justify-center items-center relative h-[380px]"        >

          {/* Large glowing background orb behind image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-t from-purple-700/40 via-violet-600/20 to-transparent blur-2xl pointer-events-none" />

          {/* Decorative orbit rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 left-1/2 -translate-x-1/2 w-[440px] h-[440px] rounded-full border border-dashed border-violet-500/15 pointer-events-none"
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.9)]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[510px] h-[510px] rounded-full border border-violet-400/[0.07] pointer-events-none"
          >
            <div className="absolute top-1/3 -right-1 w-1.5 h-1.5 rounded-full bg-violet-300 shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
            <div className="absolute bottom-1/3 -left-1 w-1.5 h-1.5 rounded-full bg-violet-300 shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
          </motion.div>

          {/* PROFILE IMAGE — full body style like image2, no circular crop */}
<div className="relative z-10 w-[260px] h-[100px] flex items-center justify-center">

            {/* Subtle glow under feet */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-violet-500/40 blur-2xl rounded-full" />

            {/* Image container — bottom-anchored, no circle clip */}
        {/* Image container — circular, aligned with rings */}
<div
  className="relative w-[260px] h-[300px] rounded-full overflow-hidden z-10"
  style={{ border: "2px solid rgba(139,92,246,0.5)" }}
>
  <img
    src={profilePhoto}
    alt="Vasantha Lakshmi Thotireddy"
    className="w-full h-full object-cover object-center"
    style={{ filter: "brightness(1.05) contrast(1.05)" }}
  />
</div>
          </div>

          {/* Floating skill badges — icon + label style like image2 */}
          {skillBadges.map(({ text, icon, style, delay }, i) => (
            <motion.div
              key={text}
              style={style}
              className="absolute"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 0.6 + delay, duration: 0.5 },
                scale: { delay: 0.6 + delay, duration: 0.5 },
                y: {
                  delay: 0.6 + delay,
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] min-w-[72px]">
                <div className="text-2xl">{icon}</div>
                <span className="text-white text-[11px] font-semibold tracking-wide">{text}</span>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
