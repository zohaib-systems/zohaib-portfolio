import { motion } from "framer-motion"

const services = [
  {
    title: "System Architecture",
    description: "Map your problem and design the system.",
  },
  {
    title: "Proof of Concept",
    description: "Build it and validate it.",
  },
  {
    title: "Production",
    description: "Deploy with monitoring and optimization.",
  },
  {
    title: "You Own It",
    description: "Full knowledge transfer so you can evolve the system.",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium mb-3 uppercase tracking-widest">What I Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Engineering Services</h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">End-to-end development of modern intelligent products built to scale</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <h3 className="text-white font-bold text-lg sm:text-xl">{service.title}</h3>
              <p className="text-base text-slate-400 leading-relaxed flex-1">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services