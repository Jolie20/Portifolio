import { motion } from "motion/react";

const toolCategories = [
  {
    category: "Design",
    tools: ["Figma", "Adobe Photoshop", "Illustrator"," Canva",],
    color: "from-pink-500 to-purple-500"
  },
  {
    category: "Animation",
    tools: ["Animaker", "Visual effects", "Motion","Video Editing & storytelling"],
    color: "from-purple-500 to-blue-500"
  },
  {
    category: "Tech",
    tools: ["Arduino", "C/C++", "Python", "SQL","HTML/CSS"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "IT",
    tools: ["Networking", "IT Support", "Systems Admin", "Windows Server","Data management"],
    color: "from-cyan-500 to-teal-500"
  }
];

export function Tools() {
  return (
    <section id="tools" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Tools & Skills</h2>
          <p className="text-zinc-400 text-lg">
            Technologies and tools I work with across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all group"
            >
              <div className="mb-6">
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm mb-4`}>
                  {category.category}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className="text-zinc-300">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20"
        >
          <p className="text-center text-zinc-300 text-lg">
            Always learning and exploring new technologies to expand my skill set
          </p>
        </motion.div>
      </div>
    </section>
  );
}
