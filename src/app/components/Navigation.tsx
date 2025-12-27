import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800"
          : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 text-lg tracking-wider hover:text-purple-400 transition-colors"
            aria-label="Go to top / portfolio"
          >
            {/* Portrait avatar (project root /images/portrait.jpeg) */}
            <img
              src="/images/portrait.jpeg"
              alt="Jolie Amandine portrait"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
              loading="lazy"
            />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-lg font-semibold"></span>
              <span className="text-xs uppercase tracking-wider text-zinc-400">
                Jolie Amandine GIKUNDIRO
              </span>
            </div>
          </button>

          <div className="flex gap-8">
            {["projects", "about", "tools", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
