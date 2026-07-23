import { motion } from "framer-motion"

const skills = [
  { name: "React.js", level: 85, icon: "⚛️" },
  { name: "Node.js & Express.js", level: 80, icon: "🟢" },
  { name: "MongoDB & Mongoose", level: 80, icon: "🍃" },
  { name: "Google Gemini API", level: 90, icon: "🤖" },
  { name: "Vector Databases & RAG", level: 75, icon: "🔍" },
  { name: "LLM Prompt Engineering", level: 85, icon: "🧠" },
  { name: "Tailwind CSS", level: 85, icon: "🎨" },
  { name: "Firebase Backend", level: 75, icon: "🔥" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium mb-3 uppercase tracking-widest">What I Know</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills and Tech Stack</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">Technologies I use to build intelligent web applications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span>{skill.icon}</span>
                  <span className="text-white font-medium text-base">{skill.name}</span>
                </div>
                <span className="text-indigo-400 text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full rounded-full h-2" style={{ background: "rgba(99, 102, 241, 0.2)" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full"
                  style={{ background: "#6366F1" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills