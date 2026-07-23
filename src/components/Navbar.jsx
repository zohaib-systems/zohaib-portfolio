
import { useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6"
      style={{ background: "rgba(2, 6, 23, 0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          {/* Boxed Icon */}
          <div className="w-8 h-8 rounded border border-indigo-500/50 flex items-center justify-center relative bg-slate-950/80">
            <div className="absolute inset-[2px] border border-slate-950 rounded-sm"></div>
            <span className="font-serif italic text-base text-indigo-400 relative z-10 font-light leading-none">Z</span>
          </div>
          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span className="font-serif text-sm tracking-wider text-slate-100 uppercase font-light">Zohaib</span>
            <span className="font-mono text-[7px] tracking-[0.4em] text-cyan-400 uppercase font-bold pl-[1px] mt-[1px]">Systems</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90 min-h-[44px]"
          style={{ background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)" }}
        >
          Let's Talk
        </a>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          id="mobile-nav-menu"
          className="md:hidden mt-4 pb-4 flex flex-col gap-4 px-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center text-white text-sm font-semibold px-5 py-2 rounded-full text-center min-h-[44px]"
            style={{ background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)" }}
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar