import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-400 text-sm font-medium mb-3 uppercase tracking-widest">About Me</p>
          <h2 className="text-4xl font-bold text-white mb-6">Your AI Product Partner</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            I am Zohaib Ali — a Full-Stack MERN (MongoDB, Express, React, Node.js) and AI Engineer. I specialize in building "MERN products that think" — collaborating with companies and founders on a project basis to build, scale, and ship production-ready applications integrated with LLM agents and custom semantic RAG pipelines.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            Under Zohaib Systems, I function as an independent technical partner and consultant. I help startups design architecture, establish database modeling, write scalable APIs, and ship production MVPs. I partner directly with teams on fixed-scope projects or monthly engineering retainers.
          </p>

          {/* ── Animated Digital Signature Sign-Off ── */}
          <div className="flex flex-col items-start gap-2 mb-8 select-none">
            <div 
              className="font-signature text-6xl text-slate-100 leading-none"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Zohaib Ali
            </div>
            {/* Flourish line matching the indigo-to-cyan gradient */}
            <div className="w-48 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #6366F1, #06B6D4, transparent)" }}></div>
            <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-slate-500 font-mono">
              <span>AI Engineer</span>
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
              <span>zohaib-systems.tech</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/zohaib-ali-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-white text-sm font-semibold hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)" }}
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/zohaib-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-slate-900"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              View GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: "💻", title: "MERN Stack", desc: "Building scalable full-stack JS apps (Node, Express, Mongo, React)" },
            { icon: "🤖", title: "AI Orchestration", desc: "Integrating LLMs, LangChain, Gemini API, and prompt flows" },
            { icon: "🔍", title: "RAG & Vector Search", desc: "Building semantic search over custom documents" },
            { icon: "🚀", title: "Cloud & DevOps", desc: "Deploying secure microservices on Vercel, Render, AWS, and Docker" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl"
              style={{ background: "rgba(99, 102, 241, 0.08)", border: "1px solid rgba(99, 102, 241, 0.18)" }}
            >
              <p className="text-3xl mb-3">{item.icon}</p>
              <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
