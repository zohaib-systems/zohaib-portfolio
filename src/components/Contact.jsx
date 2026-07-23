import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-400 text-sm font-medium mb-3 uppercase tracking-widest">LET'S TALK</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start a Conversation</h2>
          <p className="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            I architect AI systems for startups. What's the problem?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:contact@zohaib-systems.dev"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 min-h-[44px]"
              style={{ background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)" }}
            >
              Start a Conversation
            </a>

            
          </div>

          {/* <div className="grid grid-cols-3 gap-4">
            {[
              { icon: "🎯", label: "Delivery Model", value: "Fixed-Scope / Retainers" },
              { icon: "⏱️", label: "Sprint Output", value: "Weekly Milestones" },
              { icon: "🤝", label: "Collaboration", value: "Direct Partnership" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-2xl"
                style={{ background: "rgba(99, 102, 241, 0.08)", border: "1px solid rgba(99, 102, 241, 0.18)" }}
              >
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="text-white font-semibold text-sm mb-1">{item.value}</p>
                <p className="text-slate-400 text-xs">{item.label}</p>
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact