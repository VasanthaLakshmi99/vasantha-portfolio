import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = ["Home", "About", "Skills", "Projects","Services" ,"Contact"];

function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {

  const handleScroll = () => {

  const scrollY = window.scrollY;

  navLinks.forEach((link) => {

    const section = document.getElementById(
      link.toLowerCase()
    );

    if (!section) return;

    const top =
      section.offsetTop - 200;

    const bottom =
      section.offsetTop +
      section.offsetHeight -
      120;

    if (
      scrollY >= top &&
      scrollY < bottom
    ) {
      setActive(link);
    }
  });
};

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#0b0014]/85 border-b border-violet-500/10"
    >
      {/* Top accent line — violet */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500/60 to-transparent pointer-events-none" />

      {/* INNER WRAPPER — same padding as Hero */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 xl:px-28 h-[70px] flex items-center justify-between gap-4">

        {/* ── LOGO ── */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 cursor-pointer shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-[0_0_14px_rgba(139,92,246,0.55)] shrink-0">
            <span className="text-[11px] font-black text-white tracking-tighter">TVL</span>
          </div>
          <span className="text-[22px] font-bold tracking-tight bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent whitespace-nowrap">
            Vasantha Thotireddy
          </span>
        </motion.div>

        {/* ── NAV LINKS (desktop) ── */}
        <ul className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link} className="relative">
              <button
onClick={() => {
  setActive(link);

  const section = document.getElementById(
    link.toLowerCase()
  );

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}}                className={`
                  relative px-5 py-2 rounded-lg text-[15px] font-medium tracking-wide
                  transition-all duration-250 cursor-pointer
                  ${active === link
                    ? "text-violet-300"
                    : "text-gray-400 hover:text-gray-200"}
                `}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-highlight"
                    className="absolute inset-0 rounded-lg bg-violet-500/12 border border-violet-500/25"
transition={{
  type: "spring",
  stiffness: 300,
  damping: 25,
}}                  />
                )}
                <span className="relative z-10">{link}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* ── RIGHT SIDE ── */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Open to work badge */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <span className="text-emerald-400 text-[12px] font-medium tracking-wide whitespace-nowrap">
              Open to work
            </span>
          </div>

          {/* HIRE ME BUTTON — violet/purple */}
        <motion.a
  href="#contact"
  whileHover={{ scale: 1.04, y: -1 }}
  whileTap={{ scale: 0.97 }}
  className="
    relative overflow-hidden
    w-[120px] h-[42px]
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

  <span className="relative z-10">
    Hire Me
  </span>

  <motion.span
    initial={{ x: "-130%" }}
    whileHover={{ x: "230%" }}
    transition={{ duration: 0.45 }}
    className="
      absolute top-0 left-0
      w-1/2 h-full
      bg-white/20
      skew-x-12
      pointer-events-none
    "
  />

</motion.a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-6 h-0.5 bg-violet-300 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-violet-300 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-violet-300 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0b0014]/95 border-t border-violet-500/10 px-6 py-4 flex flex-col gap-2"
        >
          {navLinks.map((link) => (
            <button
              key={link}
onClick={() => {

  setActive(link);
  setMenuOpen(false);

  const section = document.getElementById(
    link.toLowerCase()
  );

  if (section) {

    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}}              className={`text-left px-4 py-2.5 rounded-lg text-[15px] font-medium transition-all duration-200
                ${active === link
                  ? "text-violet-300 bg-violet-500/10 border border-violet-500/20"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"}`}
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
