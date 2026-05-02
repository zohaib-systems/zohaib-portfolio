import { motion } from "framer-motion"

const projects = [
  {
    title: "WasteWise",
    description: "AI powered waste identification app using Google Gemini API. Identifies materials in real time with 65% accuracy and 1.2M+ materials identified.",
    tech: ["React", "Gemini API", "Tailwind CSS", "Vercel"],
    link: "https://zhust.me",
    color: "#10B981",
    icon: "♻️",
  },
  {
    title: "Zohaib's Path",
    description: "Full AI powered career counseling SaaS application with dashboard, skills tracker, AI counselor chatbot, cloud sync, and Firebase authentication.",
    tech: ["React", "Firebase", "Gemini API", "Google AI Studio"],
    link: "https://zhust.me",
    color: "#7C3AED",
    icon: "🎯",
  },
  {
    title: "Study Converter",
    description: "A smart study tool that converts and simplifies academic content for students. Built with React and modern web technologies.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    link: "https://zhust.me",
    color: "#3B82F6",
    icon: "📚",
  },
  {
    title: "ZHUST Studio",
    description: "My AI development studio portfolio showcasing all projects and services. Built with React and deployed on a custom domain.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
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
          <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">My Work</p>
          <h2 className="text-4xl font-bold text-white mb-4">Live Projects</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Real AI powered applications you can test right now</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl flex flex-col gap-4"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{project.icon}</span>
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: "rgba(124,58,237,0.15)", color: "#A78BFA" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold mt-auto"
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