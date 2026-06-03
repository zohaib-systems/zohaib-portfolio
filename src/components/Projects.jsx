import { motion } from "framer-motion"

const projects = [
  {
    title: "Zohaib's Path",
    description: "A production-grade AI-powered career counseling SaaS that 'thinks'. Features a fully responsive user dashboard, interactive AI advisor chatbot, automated custom roadmap generator, and secure MongoDB/Firebase resume sync.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Gemini API", "Firebase Auth"],
    link: "https://zhust.me",
    color: "#A78BFA",
    icon: "🎯",
    featured: true,
  },
  {
    title: "WasteWise",
    description: "AI-powered ecological assistant. Captures real-time webcam streams to classify recyclables, calculates carbon offset metrics, and saves logs into a cloud backend database.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Gemini Vision API"],
    link: "https://zhust.me",
    color: "#10B981",
    icon: "♻️",
  },
  {
    title: "Study Converter",
    description: "Intelligent content synthesizer that parses lecture notes and academic papers, converting them into structured study guides, flashcards, and custom quizzes using Gemini.",
    tech: ["Node.js", "Express", "React", "Gemini API", "Tailwind CSS"],
    link: "https://zhust.me",
    color: "#3B82F6",
    icon: "📚",
  },
  {
    title: "ZHUST Studio",
    description: "Custom agency portfolio for my freelance AI studio. Manages client requests, automates service estimates using prompt templates, and hosts active MERN stack project live demos.",
    tech: ["MERN Stack", "Gemini API", "Framer Motion", "Tailwind CSS"],
    link: "https://zhust.me",
    color: "#F59E0B",
    icon: "🏢",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium mb-3 uppercase tracking-widest">My Work</p>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Production-ready MERN & AI applications you can test right now</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden ${
                project.featured ? "md:col-span-2 border-indigo-500/40 bg-indigo-950/10" : ""
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
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-300 bg-indigo-900/35 border border-indigo-500/30">
                  ⚡ Flagship Production MVP
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{project.icon}</span>
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">{project.description}</p>
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold mt-auto flex items-center gap-1 hover:underline"
                style={{ color: project.color }}
              >
                View Live Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects