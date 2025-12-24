import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Tools } from "./components/Tools";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Tools />
      <Contact />
    </div>
  );
}
