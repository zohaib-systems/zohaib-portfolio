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
          <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">About Me</p>
          <h2 className="text-4xl font-bold text-white mb-6">The Scientific Architect</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            I am Zohaib Ali — a React developer and Google Gemini API specialist with a microbiology undergraduate degree. I build AI powered web applications that solve real problems for healthcare providers, science businesses, and startups.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            My unique combination of development skills and biological sciences background means I understand both the code and the domain — making me the ideal developer for science and healthcare applications.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            I run ZHUST — my AI development studio — and work with international clients through Fiverr delivering production ready AI powered applications.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.fiverr.com/s/dD4ojd0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-white text-sm font-semibold"
              style={{ background: "#7C3AED" }}
            >
              Hire Me on Fiverr
            </a>
            <a
              href="https://zhust.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-white text-sm font-semibold"
              style={{ border: "1px solid #7C3AED" }}
            >
              Visit ZHUST
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
            { icon: "🧬", title: "Microbiology", desc: "Undergraduate degree bridging science and technology" },
            { icon: "⚛️", title: "React Developer", desc: "Building modern responsive web applications" },
            { icon: "🤖", title: "AI Integration", desc: "Google Gemini API and Google AI Studio specialist" },
            { icon: "🚀", title: "Full Deployment", desc: "Vercel and Netlify production deployments" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl"
              style={{ background: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.2)" }}
            >
              <p className="text-3xl mb-3">{item.icon}</p>
              <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About