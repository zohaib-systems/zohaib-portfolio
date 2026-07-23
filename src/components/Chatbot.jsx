import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const STORAGE_KEY = "zohaib-portfolio-chatbot-messages"

const responses = [
  { keywords: ["hi", "hello", "hey", "sup"], response: "Hi there! I am Zohaib's assistant. Ask me about his services, projects, skills, or how to contact him." },
  { keywords: ["service", "what do you do", "build", "offer"], response: "Zohaib architects production AI systems, custom RAG document search engines, AI agent workflows, and backend systems." },
  { keywords: ["project", "portfolio", "work", "example"], response: "Check out AgentZ, HealthSync, WasteWise, and LM-OS — production AI systems focused on operations and automation." },
  { keywords: ["price", "cost", "how much", "rate", "charge"], response: "Zohaib works on a project-by-project contract basis. Reach out via email (contact@zohaib-systems.dev) or WhatsApp with your requirements to get an estimate." },
  { keywords: ["skill", "tech", "stack", "technology", "use"], response: "Zohaib specializes in MongoDB, Express, React, Node.js, Google Gemini API, Vector Databases (RAG), Firebase, and Tailwind CSS." },
  { keywords: ["contact", "hire", "work together", "order"], response: "You can email Zohaib directly at contact@zohaib-systems.dev or chat on WhatsApp (+923293531951)." },
  { keywords: ["company", "studio", "systems", "zohaib systems"], response: "Zohaib Systems is Zohaib Ali's independent contract development brand, building production-ready AI products for clients." },
  { keywords: ["other", "others"], response: "Thanks for reaching out. For detailed inquiries please contact Zohaib directly — send an email to contact@zohaib-systems.dev or use the WhatsApp link below." },
]

const quickReplies = ["Services", "Projects", "Skills", "Contact", "Others"]

const getResponse = (input) => {
  const lower = input.toLowerCase().replace(/[^a-z0-9\s]/g, " ")
  const match = responses.find((r) => r.keywords.some((k) => lower.includes(k)))
  return match ? match.response : "I did not quite catch that. Try asking about Zohaib's services, projects, skills, or contact options."
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(() => {
    if (typeof window === "undefined") {
      return [{ from: "bot", text: "Hi! I am Zohaib's assistant. Ask me anything about his services, projects, or how to contact him." }]
    }

    try {
      const savedMessages = window.localStorage.getItem(STORAGE_KEY)
      if (savedMessages) {
        return JSON.parse(savedMessages)
      }
    } catch {
      // Ignore malformed saved state and fall back to the default greeting.
    }

    return [{ from: "bot", text: "Hi! I am Zohaib's assistant. Ask me anything about his services, projects, or how to contact him." }]
  })
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const endRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch {
      // Ignore storage failures so the chatbot still works in private browsing.
    }
  }, [messages])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages, isTyping, isOpen])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const sendMessage = () => {
    const trimmedInput = input.trim()
    if (!trimmedInput || isTyping) return

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    const userMsg = { from: "user", text: trimmedInput }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    timeoutRef.current = window.setTimeout(() => {
      const botMsg = { from: "bot", text: getResponse(trimmedInput) }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 650)
  }

  const handleKey = (e) => {
    if (e.key === "Enter") sendMessage()
  }

  const handleQuickReply = (reply) => {
    const trimmed = reply.trim()
    if (!trimmed || isTyping) return

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    const userMsg = { from: "user", text: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    timeoutRef.current = window.setTimeout(() => {
      const botMsg = { from: "bot", text: getResponse(trimmed) }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 650)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#090d1a", border: "1px solid rgba(99, 102, 241, 0.3)" }}
          >
            <div className="px-4 py-3 flex items-center justify-between" style={{ background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <p className="text-white text-sm font-semibold">Zohaib's Assistant</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white text-lg leading-none">×</button>
            </div>

            <div className="p-4 h-64 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <p
                    className="text-xs px-3 py-2 rounded-2xl max-w-xs leading-relaxed"
                    style={{
                      background: msg.from === "user" ? "#6366F1" : "rgba(255,255,255,0.05)",
                      color: "white",
                    }}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-2xl max-w-xs leading-relaxed text-xs text-white" style={{ background: "rgba(255,255,255,0.05)" }}>
                    Typing...
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            <div className="px-3 pb-3 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1 rounded-full text-[10px] font-semibold text-white"
                  style={{ background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.3)" }}
                >
                  {reply}
                </button>
              ))}
            </div>

            <div className="px-3 py-3 flex gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything..."
                className="flex-1 text-xs px-3 py-2 rounded-full outline-none text-white"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(99, 102, 241, 0.25)" }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="px-3 py-2 rounded-full text-white text-xs font-semibold"
                style={{ background: "#6366F1", opacity: !input.trim() || isTyping ? 0.6 : 1, cursor: !input.trim() || isTyping ? "not-allowed" : "pointer" }}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-full text-white shadow-lg leading-none"
        style={{ background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, scale: 0.85, rotate: -75 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 75 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="absolute inset-0 grid place-items-center"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="block h-6 w-6">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ opacity: 0, scale: 0.85, y: 3 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -3 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="absolute inset-0 grid place-items-center"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="block h-6 w-6">
                <path
                  d="M6.5 5.5h11A2.5 2.5 0 0 1 20 8v5a2.5 2.5 0 0 1-2.5 2.5H12L8 19v-3.5H6.5A2.5 2.5 0 0 1 4 13V8a2.5 2.5 0 0 1 2.5-2.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export default Chatbot
