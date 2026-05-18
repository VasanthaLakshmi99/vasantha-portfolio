import { motion } from "framer-motion";
import {
  Briefcase,
  FolderKanban,
  Code2,
  Clock,
} from "lucide-react";

import aboutImg from "../assets/about.jpg";

const stats = [
  { icon: <Briefcase size={18} />,    value: "3+",   label: "Internships"   },
  { icon: <FolderKanban size={18} />, value: "5+",   label: "Projects"      },
  { icon: <Code2 size={18} />,        value: "10+",  label: "Technologies"  },
  { icon: <Clock size={18} />,        value: "100+", label: "Coding Hours"  },
];

function About() {
  return (
    <section
      id="about"
className="relative w-full bg-[#060816] py-20 overflow-hidden"    >
      <div className="absolute top-20 left-10 w-[260px] h-[260px] bg-violet-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-fuchsia-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center relative z-10">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
className="flex justify-center"        >
          <div className="relative group">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-40 blur-xl" />
            <div className="relative rounded-full border-4 border-violet-500/20 bg-[#0b1220] w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] shadow-[0_0_50px_rgba(139,92,246,0.25)]">
              <div className="w-full h-full overflow-hidden rounded-full">
                <img
                  src={aboutImg}
                  alt="about"
className="w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition duration-700"                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#060816]/70 via-transparent to-transparent" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[95%] px-4 py-3 rounded-2xl backdrop-blur-xl bg-black/50 border border-white/10 shadow-xl"
              >
                <p className="text-white text-sm font-medium text-center">
                  Data Analyst & Full Stack Developer
                </p>
                <span className="block text-violet-300 text-[11px] text-center mt-1">
                  Python • ReactJs • SQL • PowerBI • Excel
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
className="flex flex-col"        >
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.1] text-white max-w-[700px]">
            Building
            <span className="text-violet-400"> modern </span>
            scalable web applications and data-driven solutions
          </h2>

          <div className="mt-8 space-y-5 max-w-[700px]">
            <p className="text-gray-300 text-base sm:text-lg leading-8">
              I'm Python Full Stack Developer and Data Analyst with experience
              building responsive web applications, backend systems,
              dashboards, and database-driven solutions using React,
              Python, and SQL.
            </p>
            <p className="text-gray-400 leading-8">
              I have worked on HRMS platforms, document management systems,
              employee management applications, and analytics dashboards
              focused on performance, usability, and clean architecture.
            </p>
            <p className="text-gray-400 leading-8">
              Passionate about building scalable applications, improving
              problem-solving skills, and creating user-friendly digital
              experiences with modern technologies.
            </p>
          </div>
<br></br>
          {/* STATS */}
          <div className="grid grid-cols-2 gap-3 pt-10 max-w-[520px]">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/15 text-violet-300 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-none">{item.value}</h3>
                    <p className="text-gray-400 mt-1 text-[11px]">{item.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="h-20" />
    </section>
  );
}

export default About;
