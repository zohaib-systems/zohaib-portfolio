import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-4 py-2 rounded-full text-sm font-medium"
          style={{ background: "rgba(124, 58, 237, 0.2)", border: "1px solid #7C3AED", color: "#A78BFA" }}
        >
          The Scientific Architect
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Building Intelligent
          <span style={{ color: "#7C3AED" }}> AI Powered</span>
          <br />
          Web Applications
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
        >
          React developer and Google Gemini API specialist with a microbiology background.
          I build smart web apps for healthcare, science, and startups.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          
          <a
            href="#projects"
            className="px-8 py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{ background: "#7C3AED" }}
          >
            See My Work
          </a>
          
          <a
            href="https://www.fiverr.com/s/dD4ojd0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:bg-white hover:text-purple-900"
            style={{ border: "1px solid #7C3AED" }}
          >
            Hire Me on Fiverr
          </a>
          
          <a
            href="https://wa.me/+923293531951"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200"
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
          className="grid grid-cols-3 gap-8 md:gap-16"
        >
          {[
            { number: "3+", label: "Live AI Projects" },
            { number: "2", label: "Fiverr Gigs" },
            { number: "Under 1 Hour", label: "Response Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Hero