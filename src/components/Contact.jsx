import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {

  e.preventDefault();

  emailjs.sendForm(
    "service_8fija6h",
    "template_ni4dnjt",
    form.current,
    "7YSlgRfkaUNlYxTfo"
  )

  .then(() => {

alert("Message sent successfully! I'll get back to you soon.");

  })

  .catch((error) => {
  console.error("EmailJS Error:", error);
  alert("Failed to send message.");
});

};
  return (
    <section
      id="contact"
      className="relative bg-[#060816] py-24 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-violet-400 uppercase tracking-[4px] text-sm font-semibold mb-4">
            GET IN TOUCH
          </p>
<br></br>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
              Contact Me
          </h3>

          <div className="w-80 h-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-6" />

          {/* FIX 1: text-left → text-center */}
          <br></br>
        </motion.div>

        {/* CONTACT GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
<br></br>

            {/* FIX 2: All cards identical — p-5, rounded-2xl, max-w-sm reduces card width */}

            {/* LOCATION */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-xl max-w-sm">
              <div className="flex items-center gap-4">
                {/* FIX 3: icon box consistent w-12 h-12 on all cards */}
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-violet-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">Location</h3>
                  <p className="text-gray-400 text-[15px]">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-xl max-w-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Mail className="text-cyan-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">Email</h3>
                  <a
                    href="mailto:vasanthathotireddy99@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition text-[14px] break-all"
                  >
                    vasanthathotireddy99@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* PHONE */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-xl max-w-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/20 flex items-center justify-center shrink-0">
                  <Phone className="text-pink-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">Call</h3>
                  <p className="text-gray-400 text-[15px]">+91 7981653987</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >

            <h3 className="text-4xl font-bold text-white mb-3">
              Let's Talk
            </h3>

            <p className="text-gray-400 leading-7 mb-8">
              Have a project idea, collaboration opportunity, or just want to connect?
              Send a message and I'll get back to you soon.
            </p>

            {/* FIX 4: Replaced <form> space-y-6 with flex flex-col gap-5 for consistent spacing.
                       Each field uses flex flex-col gap-2 so label and input are tightly paired. */}
<form
  ref={form}
  onSubmit={sendEmail}
  className="flex flex-col gap-5"
>
              {/* NAME */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm font-medium">
                  Full Name
                </label>
                <input
  type="text"
  name="from_name"
  required
  placeholder="Enter your name"
                  className="w-full h-12 px-5 rounded-xl bg-[#0c1224] border border-white/10 text-white outline-none focus:border-violet-500 transition placeholder:text-gray-600 text-[15px]"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm font-medium">
                  Email Address
                </label>
                <input
  type="email"
  name="from_email"
  required
  placeholder="Enter your email"
                  className="w-full h-12 px-5 rounded-xl bg-[#0c1224] border border-white/10 text-white outline-none focus:border-cyan-500 transition placeholder:text-gray-600 text-[15px]"
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm font-medium">
                  Your Message
                </label>
                <textarea
  name="message"
  required
  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-5 py-3 rounded-xl bg-[#0c1224] border border-white/10 text-white outline-none resize-none focus:border-pink-500 transition placeholder:text-gray-600 text-[15px]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-[15px] hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_40px_rgba(139,92,246,0.35)] mt-1"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>
        {/* FOOTER */}
        <br></br>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >

          <h2 className="text-5xl font-bold text-white mb-4">
            Vasantha Thotireddy
          </h2>

          <p className="text-gray-400 italic text-lg">
            Fearless explorer, constant learner.
          </p>
<br></br>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-5 mt-10">

            <a
              href="https://www.linkedin.com/in/vasantha-lakshmi-thotireddy-88083428a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#0c1224] border border-white/10 flex items-center justify-center text-white hover:bg-violet-500 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/VasanthaLakshmi99"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#0c1224] border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="mailto:vasanthathotireddy99@gmail.com"
              className="w-14 h-14 rounded-full bg-[#0c1224] border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:scale-110 transition-all duration-300"
            >
              <MdEmail className="w-5 h-5" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100078427908203"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#0c1224] border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/_t_vasantha?igsh=ajN6ZjlzemNkM3o="
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#0c1224] border border-white/10 flex items-center justify-center text-white hover:bg-rose-500 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
