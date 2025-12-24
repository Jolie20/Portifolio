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
            {/* Inline SVG avatar - replace with <img src="/path/to/your-photo.jpg" /> if you have an image */}
            <span className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden
              >
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" fill="url(#g)" />
                <text
                  x="50"
                  y="58"
                  fontSize="36"
                  fontWeight="700"
                  textAnchor="middle"
                  fill="white"
                >
                  J
                </text>
              </svg>
            </span>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-lg font-semibold">PORTFOLIO</span>
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
