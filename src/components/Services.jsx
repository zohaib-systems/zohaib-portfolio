import { motion } from "framer-motion"

const services = [
  {
    icon: "💻",
    title: "Intelligent MERN SaaS Apps",
    description: "Full-stack MongoDB, Express, React, and Node.js web applications embedded with reasoning LLM agents, user dashboards, and automated workflows.",
    scope: "MVP to Scale",
  },
  {
    icon: "🔍",
    title: "AI RAG & Document Search",
    description: "Enterprise-grade knowledge base integration using Vector Databases (Pinecone/MongoDB), semantic embedding models, and custom prompt templates.",
    scope: "Data Integration",
  },
  {
    icon: "⚙️",
    title: "AI Backend & API Design",
    description: "Robust Express/Node.js API servers built to orchestrate heavy LLM workloads, streaming completions, token optimization, and secure integrations.",
    scope: "Backend / DevOps",
  },
  {
    icon: "🧬",
    title: "BioTech & Science AI Systems",
    description: "Secure, regulatory-aware applications for biotech startups and healthcare providers, bridging complex science requirements with clean code.",
    scope: "Domain Specific",
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
          <p className="text-indigo-400 text-sm font-medium mb-3 uppercase tracking-widest">What I Offer</p>
          <h2 className="text-4xl font-bold text-white mb-4">Engineering Services</h2>
          <p className="text-slate-400 max-w-xl mx-auto">End-to-end development of modern intelligent products built to scale</p>
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
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex justify-between items-start">
                <span className="text-4xl">{service.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-indigo-900/30 text-indigo-300 border border-indigo-500/20">
                  {service.scope}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{service.description}</p>
              <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="text-indigo-400 text-xs font-semibold">Production Ready</span>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full text-white text-xs font-semibold transition-all duration-200 hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)" }}
                >
                  Discuss Project
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