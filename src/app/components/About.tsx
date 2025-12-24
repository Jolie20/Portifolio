import { motion } from "motion/react";
import { Code2, Palette, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "Design Thinking",
    description: "User-centered design approach focusing on solving real problems with intuitive interfaces"
  },
  {
    icon: Code2,
    title: "Technical Foundation",
    description: "Strong IT background with expertise in systems Administration, networking, and virtualization"
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Building smart solutions with Arduino, IoT devices, and hardware-software integration"
  }
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6">About Me</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-zinc-400 text-lg">
            <p>
              I'm an IT student with a strong interest in design, embedded systems, IT Support and
              interactive technologies. My journey combines the analytical thinking of
              computer science with the creativity of design.
            </p>
            <p>
              I enjoy combining creativity and engineering to build meaningful digital and
              physical solutions. Whether it's designing a user interface, programming
              a microcontroller, or creating motion graphics, I'm driven by the challenge
              of making technology more accessible and engaging.
            </p>
            <p>
              My unique background allows me to bridge the gap between design and
              development, creating solutions that are not only beautiful but also
              technically sound and functional.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
