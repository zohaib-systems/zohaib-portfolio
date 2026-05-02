
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
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ background: "rgba(10, 15, 44, 0.85)", backdropFilter: "blur(10px)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-white font-bold text-xl tracking-tight">
          Zohaib<span style={{ color: "#7C3AED" }}>.</span>dev
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <a
          href="https://www.fiverr.com/s/dD4ojd0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90"
          style={{ background: "#7C3AED" }}
        >
          Hire Me on Fiverr
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
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
          className="md:hidden mt-4 pb-4 flex flex-col gap-4 px-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="https://www.fiverr.com/s/dD4ojd0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-semibold px-5 py-2 rounded-full text-center"
            style={{ background: "#7C3AED" }}
          >
            Hire Me on Fiverr
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar