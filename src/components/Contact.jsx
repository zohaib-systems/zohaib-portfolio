import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Something Intelligent?</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Whether you need an AI powered web app, a custom chatbot, or a healthcare specific application — I am ready to help. Reach out through Fiverr for a professional order or WhatsApp for a quick chat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://www.fiverr.com/s/dD4ojd0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: "#7C3AED" }}
            >
              Hire Me on Fiverr
            </a>

            <a
              href="https://wa.me/923XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-white font-semibold text-sm"
              style={{ background: "#25D366" }}
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: "⚡", label: "Response Time", value: "Under 1 Hour" },
              { icon: "🌍", label: "Clients", value: "International" },
              { icon: "✅", label: "Satisfaction", value: "Guaranteed" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-2xl"
                style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
              >
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="text-white font-semibold text-sm mb-1">{item.value}</p>
                <p className="text-gray-400 text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact