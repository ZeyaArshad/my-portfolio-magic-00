import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ShoppingCart, Camera, Hospital } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Web App (Mini Amazon)",
    tech: ["Java Servlets", "JSP", "JDBC", "MySQL", "HTML/CSS/JS"],
    desc: "Full-stack e-commerce platform with auth, product catalog, cart, checkout, and admin dashboard for managing products & orders.",
  },
  {
    icon: Camera,
    title: "Smart Surveillance System",
    tech: ["Raspberry Pi", "Python", "OpenCV"],
    desc: "Real-time video streaming and motion detection system with camera integration and alert notifications for suspicious activities.",
  },
  {
    icon: Hospital,
    title: "Hospital Management System",
    tech: ["Java Servlets", "JSP", "JDBC", "MySQL", "MVC"],
    desc: "Web-based system managing patient registration, doctor appointments, and billing with responsive UI and CRUD operations.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container">
      <SectionHeading title="Projects" subtitle="Things I've built that I'm proud of." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <p.icon className="text-primary mb-4" size={32} />
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
