import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  details: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="relative h-56 md:h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-purple-600/20 backdrop-blur-sm flex items-center justify-center"
        >
          <ExternalLink className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-purple-400 text-xs uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-2xl mb-3">{project.title}</h3>
        
        <p className="text-zinc-400 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-1">
          {project.details.map((detail, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-zinc-500">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
