import { motion } from "framer-motion"

const skills = [
  { name: "React.js", level: 80, icon: "⚛️" },
  { name: "Google Gemini API", level: 85, icon: "🤖" },
  { name: "Google AI Studio", level: 80, icon: "🧠" },
  { name: "Tailwind CSS", level: 85, icon: "🎨" },
  { name: "Firebase", level: 75, icon: "🔥" },
  { name: "JavaScript", level: 80, icon: "⚡" },
  { name: "REST APIs", level: 75, icon: "🔗" },
  { name: "Vercel/Netlify", level: 90, icon: "🚀" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">What I Know</p>
          <h2 className="text-4xl font-bold text-white mb-4">Skills and Tech Stack</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Technologies I use to build intelligent web applications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
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
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
                <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full rounded-full h-2" style={{ background: "rgba(124,58,237,0.2)" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full"
                  style={{ background: "#7C3AED" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-2xl text-center"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <p className="text-2xl mb-2">🧬</p>
          <p className="text-white font-semibold mb-1">Microbiology Background</p>
          <p className="text-gray-400 text-sm">Undergraduate degree in microbiology — giving me genuine domain knowledge for healthcare and science applications that pure developers cannot offer</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills