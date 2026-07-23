import { motion } from "framer-motion"

const projects = [
  {
    title: "AgentZ",
    description: "Multi-agent system for personal business automation. Handles job discovery, email triage, calendar scheduling, focus tracking. Built on Google ADK 2.0, MCP integrations, and Groq API. Production ready.",
    tech: ["Google ADK 2.0", "MCP", "Groq API"],
    github: "https://github.com/zohaib-ali",
    architecture: "#about",
    color: "#06B6D4",
    icon: "🤖",
    featured: true,
  },
  {
    title: "HealthSync",
    description: "AI booking system for clinics. Solves real scheduling and coordination problems. Why it matters: Operational problem solved with AI.",
    tech: ["AI Scheduling", "Clinic Ops", "Automation"],
    link: "#contact",
    color: "#A78BFA",
    icon: "🏥",
    featured: true,
  },
  {
    title: "WasteWise",
    description: "AI-powered ecological assistant. Classifies recyclables and calculates carbon offset metrics. Recognition: Top 800 nationally (ML product). Why it matters: Product proven at scale.",
    tech: ["ML Product", "Carbon Metrics", "Recycling AI"],
    link: "https://zhust.me",
    color: "#10B981",
    icon: "♻️",
  },
  {
    title: "LM-OS",
    description: "Personal knowledge system. Why it matters: Demonstrates systems thinking in personal infrastructure.",
    tech: ["Knowledge System", "Personal Infrastructure", "Systems Thinking"],
    link: "https://zhust.me",
    color: "#3B82F6",
    icon: "🧠",
  },
  {
    title: "ZHUST Studio",
    description: "Custom agency portfolio for my freelance AI studio. Manages client requests, automates service estimates using prompt templates, and hosts active project demos.",
    tech: ["Gemini API", "Framer Motion", "Tailwind CSS"],
    link: "https://zhust.me",
    color: "#F59E0B",
    icon: "🏢",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium mb-3 uppercase tracking-widest">My Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Products</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">Production-ready AI applications you can test right now</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden ${
                project.featured ? "md:col-span-2 border-indigo-500/40 bg-indigo-950/10 pt-16 sm:pt-6" : ""
              }`}
              style={{
                background: project.featured
                  ? "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(10, 15, 44, 0.6) 100%)"
                  : "rgba(255, 255, 255, 0.03)",
                border: project.featured
                  ? "1px solid rgba(99, 102, 241, 0.3)"
                  : "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 sm:left-auto sm:right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-300 bg-indigo-900/35 border border-indigo-500/30 whitespace-nowrap">
                  <span className="sm:hidden">⚡ Flagship MVP</span>
                  <span className="hidden sm:inline">⚡ Flagship Production MVP</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{project.icon}</span>
                <h3 className="text-white font-bold text-xl sm:text-2xl">{project.title}</h3>
              </div>
              <p className="text-base text-gray-400 leading-relaxed max-w-3xl">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: "rgba(124, 58, 237, 0.15)", color: "#A78BFA" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.title === "AgentZ" && (
                <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 min-h-[44px]"
                    style={{ background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)", color: "white" }}
                  >
                    View on GitHub
                  </a>
                  <a
                    href={project.architecture}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-slate-900 min-h-[44px]"
                    style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                  >
                    See Architecture
                  </a>
                </div>
              )}
              {project.title !== "AgentZ" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold mt-auto flex items-center gap-1 hover:underline"
                  style={{ color: project.color }}
                >
                  View Live Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects