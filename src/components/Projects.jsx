import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import hrms from "../assets/hrms.jpg";
import dms from "../assets/dms.jpg";
import ddos from "../assets/ddos.jpg";
import analytics from "../assets/analytics.jpg";
import customeranalytics from "../assets/customeranalytics.jpg";
import DigitalMarketing from "../assets/DigitalMarketing.jpg";
const categories = [
  "All",
  "Full Stack",
  "Data Analyst",
  "Digital Marketing",
  "Others",
];

const projects = [
  {
    id: 1,
    title: "HRMS Platform",
    category: "Full Stack",
    image: hrms,

    tech:
      "React JS • Django • PostgreSQL • Tailwind CSS",

    overview:
      "Modern HR management platform built for handling employee operations, secure document workflows, workforce analytics, and organizational management.",

    features: [
      "Employee lifecycle management",
      "Organization hierarchy system",
      "Secure document handling",
      "Role-based authentication",
      "Payroll & employee tracking",
      "Analytics dashboard",
    ],

    details: `
◆ PROJECT OVERVIEW
Designed and developed a centralized HRMS platform to streamline workforce management and improve operational efficiency.

◆ CORE FEATURES
• Employee management system
• Organizational hierarchy visualization
• Secure document workflows
• Payroll & employment tracking
• Skills and certification records
• Role-based access control

◆ TECH STACK
• React JS
• Django REST API
• PostgreSQL
• Tailwind CSS

◆ PROJECT IMPACT
Improved employee data organization, workflow automation, and HR process management with a scalable enterprise-ready architecture.
`,
  },

  {
    id: 2,
    title: "Document Management System",
    category: "Full Stack",
    image: dms,

    tech:
      "React JS • Django • PostgreSQL • AWS Storage",

    overview:
      "Enterprise-grade document management system with secure storage, workflow automation, role-based access, and version tracking capabilities.",

    features: [
      "Secure document uploads",
      "Version history tracking",
      "Cloud storage integration",
      "Document verification flow",
      "Access permission control",
      "Audit trail monitoring",
    ],

    details: `
◆ PROJECT OVERVIEW
Built a secure document management platform for handling organizational and compliance-related files efficiently.

◆ CORE FEATURES
• Document categorization
• Version control system
• Expiry tracking & alerts
• Verification workflows
• Audit trail logging
• Cloud storage integration

◆ TECH STACK
• React JS
• Django
• PostgreSQL
• AWS Storage

◆ PROJECT IMPACT
Enhanced document security, reduced manual handling, and improved operational workflow management.
`,
  },

  {
    id: 3,
    title: "DDoS Attack Detection using ML",
    category: "Data Analyst",
    image: ddos,

    tech:
      "Python • Pandas • NumPy • Scikit-learn",

    overview:
      "Machine learning-based cybersecurity solution designed to identify abnormal traffic patterns and detect DDoS attacks with improved accuracy.",

    features: [
      "Traffic anomaly detection",
      "Machine learning classification",
      "Feature engineering pipeline",
      "Cybersecurity analytics",
      "Performance evaluation",
      "Data preprocessing workflow",
    ],

    details: `
◆ PROJECT OVERVIEW
Developed a machine learning-based cybersecurity solution capable of detecting suspicious traffic behavior and DDoS attacks.

◆ MACHINE LEARNING WORKFLOW
• Data preprocessing
• Feature extraction
• Traffic classification
• Model training & testing
• Accuracy optimization

◆ ALGORITHMS USED
• Random Forest
• Decision Tree
• Logistic Regression
• KNN

◆ TECH STACK
• Python
• Pandas
• NumPy
• Scikit-learn

◆ PROJECT IMPACT
Improved attack detection accuracy and enabled efficient identification of abnormal network traffic patterns.
`,
  },

  {
    id: 4,
    title: "Sales Analytics Dashboard",
    category: "Data Analyst",
    image: analytics,

    tech:
      "Power BI • SQL • Excel • Data Visualization",

    overview:
      "Interactive business intelligence dashboard created for tracking sales performance, customer insights, revenue trends, and operational KPIs.",

    features: [
      "Revenue analytics",
      "Interactive dashboards",
      "Sales trend monitoring",
      "Customer segmentation",
      "Regional insights",
      "KPI tracking",
    ],

    details: `
◆ PROJECT OVERVIEW
Designed an interactive analytics dashboard to monitor business performance and support data-driven decision making.

◆ DASHBOARD FEATURES
• Revenue trend analysis
• Customer segmentation
• Regional sales insights
• Monthly performance tracking
• Product category analysis

◆ TECH STACK
• Power BI
• SQL
• Excel

◆ PROJECT IMPACT
Provided clear business insights through visual analytics and improved reporting efficiency using interactive dashboards.
`,
  },

  {
    id: 5,
    title: "Customer Churn Prediction",
    category: "Data Analyst",
    image: customeranalytics,

    tech:
      "Python • Machine Learning • Pandas • Scikit-learn",

    overview:
      "Predictive analytics solution developed to identify customer churn risks using behavioral analysis and machine learning models.",

    features: [
      "Behavioral analytics",
      "Churn prediction modeling",
      "Retention insights",
      "Feature importance analysis",
      "Performance evaluation",
      "Data visualization",
    ],

    details: `
◆ PROJECT OVERVIEW
Built a predictive analytics system for identifying customers likely to discontinue services.

◆ CORE FEATURES
• Customer retention prediction
• Behavioral pattern analysis
• Churn probability scoring
• Performance evaluation metrics
• Data visualization reporting

◆ TECH STACK
• Python
• Pandas
• NumPy
• Scikit-learn

◆ PROJECT IMPACT
Enabled better customer retention analysis and supported proactive engagement strategies using predictive insights.
`,
  },

  {
    id: 6,
    title: "Digital Marketing & Brand Growth",
    category: "Digital Marketing",
    image: DigitalMarketing,

    tech:
      "SEO • Social Media Marketing • Content Strategy • Meta Ads",

    overview:
      "Worked as a Digital Marketing Intern at Zeex AI, contributing to social media growth, audience engagement, SEO optimization, and brand visibility campaigns.",

    features: [
      "Social media management",
      "SEO optimization",
      "Content planning",
      "Audience engagement",
      "Brand awareness campaigns",
      "Marketing analytics",
    ],

    details: `
◆ INTERNSHIP OVERVIEW
Completed a 4-month Digital Marketing Internship at Zeex AI focused on digital branding and AI product marketing initiatives.

◆ KEY RESPONSIBILITIES
• Social media campaign management
• Content strategy & planning
• LinkedIn outreach campaigns
• SEO optimization activities
• Audience engagement improvement

◆ MARKETING TOOLS & ACTIVITIES
• Content marketing
• SEO strategies
• Campaign analytics
• Brand positioning
• Social media promotions

◆ PROJECT IMPACT
Contributed to improving online visibility, engagement, and digital presence through structured marketing campaigns and branding strategies.
`,
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#070714] py-28 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-fuchsia-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
<br></br>

        {/* HEADING */}
        <div className="text-center">


          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white">

            Featured{" "}

            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>

         
        </div>
<br></br>
        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-8 mt-20 mb-20">

          {categories.map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-14 py-5 rounded-xl text-[16px] font-medium
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

        {/* PROJECT GRID */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml:6 gap-7 ">   
       {filteredProjects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
              className="
                group
                cursor-pointer
                rounded-xl
                overflow-hidden
                border
                border-white/10
                bg-[#0d0d18]
                hover:border-violet-500/40
                transition-all
                duration-300
              "
            >

             {/* IMAGE */}
<div className="h-[180px] overflow-hidden bg-[#151521]">

  <img
    src={project.image}
    alt={project.title}
    className="
      w-full
      h-full
      object-cover
      object-center
      group-hover:scale-105
      transition-all
      duration-500
    "
  />

</div>
              {/* CONTENT */}
              <div className="p-5">

                <h4 className="text-lg font-semibold text-white">
                  {project.title}
                </h4>

<p className="mt-3 text-gray-400 leading-6 text-[14px] line-clamp-2">                  {project.overview}
                </p>

              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-sm
              z-50
              flex
              items-center
              justify-center
              p-6
            "
          >

            {/* MODAL BOX */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="
                relative
                w-full
                max-w-5xl
                max-h-[90vh]
                overflow-y-auto
                rounded-1xl
                bg-[#11111d]
                border
                border-white/10
                p-10
              "
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="
                  absolute
                  top-5
                  right-5
                  text-gray-400
                  hover:text-white
                "
              >

                <X size={28} />

              </button>

              {/* TITLE */}
              <h2 className="text-3xl font-bold text-white text-center">
                {selectedProject.title}
              </h2>

              {/* INFO */}
              <div className="mt-14 grid md:grid-cols-2 gap-10">

                <div className="rounded-2xl overflow-hidden">

                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />

                </div>

                <div>

                  <div className="space-y-6">

                    <div>
                      <h4 className="text-violet-300 text-lg font-semibold">
                        Category
                      </h4>

                      <p className="mt-2 text-gray-300">
                        {selectedProject.category}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-violet-300 text-lg font-semibold">
                        Tech Stack
                      </h4>

                      <p className="mt-2 text-gray-300 leading-8">
                        {selectedProject.tech}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-violet-300 text-lg font-semibold">
                        Overview
                      </h4>

                      <p className="mt-2 text-gray-300 leading-8">
                        {selectedProject.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FEATURES */}
              <div className="mt-14">

                <h3 className="text-3xl font-semibold text-white">
                  Key Features
                </h3>

                <ul className="mt-8 space-y-5">

                  {selectedProject.features.map((feature, index) => (

                    <li
                      key={index}
                      className="text-gray-300 leading-8 flex gap-4"
                    >

                      <span className="text-violet-400 mt-2">
                        •
                      </span>

                      {feature}

                    </li>
                  ))}
                </ul>
              </div>

              {/* DETAILS */}
              <div className="mt-14">

                <h3 className="text-3xl font-semibold text-white">
                  Project Details
                </h3>

                <div className="
  mt-6
  whitespace-pre-line
  text-gray-300
  leading-7
  text-[15px]
">

                  {selectedProject.details}

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;