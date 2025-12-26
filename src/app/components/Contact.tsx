import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "jolieamanda350@gmail.com",
    href: "mailto:jolieamanda350@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Jolie20",
    href: "https://github.com",
  },
 
  {
    icon: Phone,
    label: "Phone",
    value: "+250 786 862 905",
    href: "tel:+250786862905",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+250 786 862 905",
    href: "https://wa.me/250786862905",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-zinc-900/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Let's Connect</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="space-y-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex items-center justify-between p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <link.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-1">{link.label}</div>
                  <div className="text-zinc-200">{link.value}</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 rounded-full border border-zinc-800">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400">
              Availableee
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-sm"
        >
          <p>© 2025 Portfolio. Designed & Built with passion.</p>
        </motion.div>
      </div>
    </section>
  );
}
