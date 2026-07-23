import { motion } from "framer-motion"

const heroAlt = "Zohaib Ali portrait for Zohaib Systems"
const heroSizes = "(max-width: 767px) 72vw, (max-width: 1024px) 38vw, 26vw"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.4)", color: "#818CF8" }}
          >
            AI System Architect
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            AI System Architect
            <br />
            <span className="text-gradient"></span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed"
          >
           I build production AI systems that solve operational problems for startups.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 min-h-[44px]"
              style={{ background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)" }}
            >
              Start a conversation
            </a>
            
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:bg-white hover:text-slate-900 min-h-[44px]"
              style={{ border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.03)" }}
            >
              View Case Studies
            </a>
            
            
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md"
          >
            {[
              { number: "5+", label: "Shipped AI Systems" },
              { number: "100%", label: "Production-First Focus" },
              
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</p>
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
          className="flex justify-center items-center w-full"
        >
          <div className="relative group w-full max-w-[18rem] sm:max-w-[22rem] md:max-w-sm aspect-square mx-auto">
            {/* Glowing Backlight matching color scheme */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Glass frame & Image */}
            <div className="relative glass-panel rounded-3xl p-3 sm:p-4 overflow-hidden border border-white/10 shadow-2xl h-full flex items-center justify-center">
              <picture className="block w-full h-full">
                <source
                  type="image/webp"
                  srcSet="/headshot-640.webp 640w, /headshot.webp 1024w"
                  sizes={heroSizes}
                />
                <img
                  src="/headshot.png"
                  srcSet="/headshot-640.png 640w, /headshot.png 1024w"
                  sizes={heroSizes}
                  width="1254"
                  height="1254"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  alt={heroAlt}
                  className="w-full h-full max-w-full object-cover rounded-2xl hover:scale-[1.02] transition-all duration-300"
                />
              </picture>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero