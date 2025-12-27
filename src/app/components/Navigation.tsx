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
              <span className="text-sm md:text-base font-extrabold tracking-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                JOLIE AMANDINE GIKUNDIRO
              </span>
              <span className="text-xs uppercase tracking-wider text-zinc-400 mt-0.5">
                PORTFOLIO
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
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

          {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const items = ["projects", "about", "tools", "contact"];

  return (
    <div className="md:hidden relative">
      <button
        aria-label="Open menu"
        onClick={() => setOpen((s) => !s)}
        className="p-2 rounded-md text-zinc-400 hover:text-white bg-transparent"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-zinc-900 rounded-md border border-zinc-800 shadow-lg z-50">
          <div className="flex flex-col py-2">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => {
                  const el = document.getElementById(item);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                className="text-left px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
