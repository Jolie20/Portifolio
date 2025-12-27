import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         <span className="text-6xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            
            </span>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-center md:text-left">
              {/* Portrait on the left (uses project-root /images/portrait.jpeg) */}
              <img
                src="/images/portrait.jpeg"
                alt="Jolie Amandine GIKUNDIRO"
                className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
                loading="lazy"
              />

              <div className="flex-1">
                <span className="text-6xl mb-6 block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Jolie Amandine GIKUNDIRO
                </span>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            
            <span className="text-purple-400 uppercase tracking-widest text-sm">
            
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 text-5xl md:text-5xl"
          >
            IT | UI/UX & Graphic Designer<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg"
          >
            I design intuitive digital products, craft strong visual and motion designs, 
            and develop smart systems using embedded technologies.
             My work focuses on solving real-world problems by combining thoughtful design with practical,
              technology-driven solutions.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 transition-all rounded-full"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </motion.button>
            </div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 text-zinc-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
