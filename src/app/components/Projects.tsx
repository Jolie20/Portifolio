import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Smart Parking system",
    category: "Embedded Systems & IoT",
    description:
      "A Smart Parking System designed to help drivers easily find available parking spaces. The system uses sensors to detect whether a parking slot is occupied or free and displays real-time parking status. This reduces traffic congestion, saves time, and improves parking efficiency.",
    image: new URL("../../../images/smart_parking.jpeg", import.meta.url).href,
    tags: [
      "IoT",
      "Embedded systems",
      "Real Time Monitoring",
      "Prototyping",
      "LCD Display",
      "Sensors",
    ],
    details: [
      "System design",
      "Interface Design",
      "Interactive prototype",
      "Usability testing",
    ],
  },
  {
    id: 2,
    title: "IT Admin Dashboard",
    category: "UI Dashboard Design",
    description:
      "Modern dashboard interface for IT system monitoring with real-time data visualization and control panels.",
    image: new URL(
      "../../../images/Good Food - Food Delivery App UI.jpeg",
      import.meta.url
    ).href,
    tags: ["Dashboard", "Data Viz", "UI Design", "Components"],
    details: [
      "Component library",
      "Data visualization",
      "Responsive layout",
      "Admin controls",
    ],
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "Graphic Design & Branding",
    description:
      "Complete brand identity system including logo design, color palettes, typography, and marketing materials.",
    // Use Vite-compatible URL so the image from project root 'images/' is bundled and served
    // (relative path: from src/app/components -> go up three levels to project root)
    image: new URL("../../../images/drip_maker.jpeg", import.meta.url).href,
    tags: ["Branding", "Logo Design", "Illustrator", "Print Design"],
    details: [
      "Logo concepts",
      "Brand guidelines",
      "Marketing materials",
      "Social media designs",
    ],
  },
  
  //{
  //id: 3,
  //title: "Arduino Sensor System",
  //category: "Embedded / IoT Project",
  //description: "Smart monitoring system using Arduino, sensors, and LCD display for real-time environmental data tracking.",
  //image: "https://images.unsplash.com/photo-1553063085-dbbf64d936ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwZWxlY3Ryb25pY3MlMjBjaXJjdWl0fGVufDF8fHx8MTc2NjU1NTQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //tags: ["Arduino", "C/C++", "Sensors", "LCD Display"],
  //details: ["Circuit design", "Sensor integration", "Data processing", "Real-time display"]
  //},
  //{
  //id: 4,
  //title: "IoT Monitoring Dashboard",
  //category: "UI + Embedded Connection",
  //description: "Mobile app interface connected to IoT devices for real-time sensor data visualization and remote control.",
  //image: "https://images.unsplash.com/photo-1753039495488-434a2fe53e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBzbWFydCUyMGRldmljZXxlbnwxfHx8fDE3NjY1NTU0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //tags: ["IoT", "Mobile UI", "Real-time Data", "Integration"],
  //details: ["App UI design", "Data visualization", "Device connectivity", "Remote control features"]
  //},
  {
    id: 4,
    title: "IT Support & Systems",
    category: "IT Support Services",
    description:
      "Reliable IT support services focused on troubleshooting hardware and software issues, maintaining systems, and ensuring smooth day-to-day technology operations for users and organizations.",
    image:
      new URL("../../../images/ITSUPPORT.jpeg", import.meta.url).href,
    tags: [
      "IT Support",
      "Technical Support",
      "System administration",
      "Networking",
      " Troubleshooting",
      "Ticketing",
    ],
    details: [
      "Hardware & software troubleshooting",
      "Operating system installation & configuration",
      "Network setup & basic maintenance",
      "User support & helpdesk services",
      "System monitoring & maintenance",
    ],
  },
  {
    id: 5,
    title: "UI Animation Showcase",
    category: "Animation / Motion Design",
    description:
      "Interactive UI animations and micro-interactions designed to enhance user experience and engagement.",
    image: new URL("../../../images/programmer.jpeg", import.meta.url).href,
    tags: ["After Effects", "Motion", "UI Animation", "Micro-interactions"],
    details: [
      "Loading animations",
      "Transition effects",
      "Interactive prototypes",
      "Explainer videos",
    ],
  },
   {
    id: 3,
    title: "NETWORKING & IT INFRASTRUCTURE",
    category: "Networking Design & Implementation",
    description:
    "Complete networking solutions including network planning, installation, configuration, and maintenance to ensure secure, reliable, and efficient communication systems",
    // Use Vite-compatible URL so the image from project root 'images/' is bundled and served
    // (relative path: from src/app/components -> go up three levels to project root)
    image: new URL("../../../images/drip_maker.jpeg", import.meta.url).href,
    tags: ["Networking", "LAN/WAN", "Routing & Switching", "Networking Security"],
    details: [
    "Networking topology design",
      "Router & switch configuration",
      "LAN/WAN setup",
      "IP addressing & Subnetting",
      "Network troubleshooting",
      "Security configuration (firewalls, access control)",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A showcase of my work across my skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
