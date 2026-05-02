import { motion } from "framer-motion"

const services = [
  {
    icon: "🤖",
    title: "AI Powered Web Apps",
    description: "Full stack React web applications integrated with Google Gemini API. From single page AI tools to complete SaaS platforms.",
    price: "From $80",
    link: "https://www.fiverr.com/s/dD4ojd0",
  },
  {
    icon: "💬",
    title: "Custom AI Chatbots",
    description: "Healthcare and science specific chatbots trained on your documents using Google Gemini and Firebase RAG implementation.",
    price: "From $60",
    link: "https://www.fiverr.com/s/dD4ojd0",
  },
  {
    icon: "🧬",
    title: "Healthcare and Science Apps",
    description: "Specialized web applications for clinics, research labs, and biotech startups. Domain knowledge included — not just the code.",
    price: "Custom Quote",
    link: "https://www.fiverr.com/s/dD4ojd0",
  },
  {
    icon: "📊",
    title: "AI SaaS Dashboards",
    description: "Production ready SaaS applications with AI insights, user authentication, cloud sync, and real time data visualization.",
    price: "From $200",
    link: "https://www.fiverr.com/s/dD4ojd0",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">What I Offer</p>
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">All services available on Fiverr with clear pricing and fast delivery</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl flex flex-col gap-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-white font-bold text-lg">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{service.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-purple-400 font-semibold text-sm">{service.price}</span>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-white text-xs font-semibold"
                  style={{ background: "#7C3AED" }}
                >
                  Order on Fiverr
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services