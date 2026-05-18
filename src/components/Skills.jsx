import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaFileExcel,
  FaFilePowerpoint,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiFirebase,
  SiNumpy,
} from "react-icons/si";

const tabs = [
  "Frontend",
  "Backend",
  "Database",
  "Analytics",
  "Tools",
];

const skills = {
  Frontend: [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "React JS",
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
    },
  ],

  Backend: [
    {
      name: "Python",
      icon: <FaPython className="text-yellow-300" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-orange-400" />,
    },
    {
      name: "Node JS",
      icon: <FaNodeJs className="text-green-500" />,
    },
  ],

  Database: [
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-400" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-sky-500" />,
    },
  ],

  Analytics: [
    {
      name: "Power BI",
      icon: <FaReact className="text-yellow-400" />,
    },
    {
      name: "Pandas",
      icon: <SiPandas className="text-violet-400" />,
    },
    {
      name: "NumPy",
      icon: <SiNumpy className="text-cyan-400" />,
    },
    {
      name: "Matplotlib",
      icon: <FaPython className="text-orange-300" />,
    },
  ],

  Tools: [
    {
      name: "Excel",
      icon: <FaFileExcel className="text-green-500" />,
    },
    {
      name: "MS PowerPoint",
      icon: <FaFilePowerpoint className="text-orange-500" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-500" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-400" />,
    },
  ],
};

function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#070714] overflow-hidden pt-28 pb-10"
    >

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">

        {/* SMALL TITLE */}
        <div className="flex items-center justify-center gap-5 mb-8">

          <div className="w-20 h-[1px] bg-violet-500/30" />

          <span className="text-violet-300 uppercase tracking-[5px] text-xs font-medium">
            What I Work With
          </span>
          <br></br>
<br></br>


          <div className="w-20 h-[1px] bg-violet-500/30" />

        </div>

        {/* MAIN TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">

            Skills &{" "}

            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Technologies
            </span>

          </h2>
<br></br>

<p className="mt-8 max-w-[900px] text-left mx-auto text-gray-300 text-[18px] leading-[2] font-medium">

  I specialize in building modern web applications,
  scalable backend systems, and responsive user
  interfaces using technologies like React, Python,
  JavaScript, and SQL. My focus is on creating clean,
  high-performance digital experiences with strong
  problem-solving, optimized architecture, and
  user-friendly design principles.

</p>

        </motion.div>
<br></br>
<br></br>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-8 mt-24 mb-40">

          {tabs.map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-10 py-4 rounded-lg text-[16px] font-medium
                transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20"
                    : "border border-white/10 text-gray-400 hover:border-violet-500/40 hover:text-white"
                }
              `}
            >

              {tab}

            </button>
          ))}
        </div>
<br></br>
<br></br>

        {/* SKILLS */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            flex
            flex-wrap
            justify-center
            gap-x-12
            gap-y-14
              mt-10
          "
        >

          {skills[activeTab].map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              transition={{ duration: 0.25 }}
              className="
                w-[190px]
                h-[170px]
                rounded-2xl
                border
                border-white/10
                bg-[#0d0d18]
                hover:border-violet-500/30
                transition-all
                duration-300
                flex
                flex-col
                items-center
                justify-evenly
                text-center
              "
            >

              {/* ICON */}
              <div className="text-[4rem] mb-7">

                {skill.icon}

              </div>

              {/* TEXT */}
              <h3 className="text-[20px] font-medium text-white">

                {skill.name}

              </h3>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;