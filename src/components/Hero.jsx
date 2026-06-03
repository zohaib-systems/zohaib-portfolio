import { motion } from "framer-motion"
import heroImg from "../assets/hero.png"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.4)", color: "#818CF8" }}
          >
            Full-Stack MERN & AI Engineer
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Building MERN Products
            <br />
            <span className="text-gradient">That Think</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed"
          >
            I design and develop intelligent, production-ready full-stack applications
            integrated with LLMs, custom agentic workflows, and semantic document search (RAG).
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)" }}
            >
              Book Discovery Call
            </a>
            
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:bg-white hover:text-slate-900"
              style={{ border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.03)" }}
            >
              View Case Studies
            </a>
            
            <a
              href="https://wa.me/+923293531951"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
              style={{ background: "#25D366", color: "white" }}
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 md:gap-10"
          >
            {[
              { number: "5+", label: "Shipped AI Products" },
              { number: "100%", label: "On-Time Delivery" },
              { number: "Fixed/Retainer", label: "Contract Model" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Avatar Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div className="relative group max-w-sm w-full aspect-square">
            {/* Glowing Backlight matching color scheme */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Glass frame & Image */}
            <div className="relative glass-panel rounded-3xl p-4 overflow-hidden border border-white/10 shadow-2xl h-full flex items-center justify-center">
              <img 
                src={heroImg}
                alt="Zohaib Ali - Full-Stack MERN & AI Engineer"
                className="w-full h-full object-cover rounded-2xl hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero