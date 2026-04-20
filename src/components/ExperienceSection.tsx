import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, Award } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    title: "Web Development Intern",
    org: "CodeSoft",
    date: "Aug 2024 – Oct 2024",
    points: [
      "Built responsive websites with HTML, CSS, and JavaScript",
      "Integrated APIs with backend team, reducing load times by 20%",
      "Ensured cross-browser compatibility and performance optimization",
    ],
  },
  {
    icon: Briefcase,
    title: "Core Java Intern",
    org: "Internshala",
    date: "Jun 2023 – Aug 2023",
    points: [
      "Hands-on OOP, multithreading, collections, exception handling",
      "Built mini-projects applying Java principles",
    ],
  },
];

const certs = [
  { title: "Front End Development", org: "Simplilearn", date: "Jul 2025" },
  { title: "IoT Devices", org: "Coursera (UIUC)", date: "Oct 2023" },
  { title: "Java Programming Fundamentals", org: "Infosys Springboard", date: "Mar 2025" },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="container">
      <SectionHeading title="Experience" subtitle="Internships and professional work." />

      <div className="max-w-2xl mx-auto space-y-8 mb-20">
        {timeline.map((item, i) => (
          <motion.div
            key={item.title + item.org}
            className="relative pl-10 border-l-2 border-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <item.icon size={14} className="text-primary-foreground" />
            </div>
            <p className="text-xs font-mono text-primary mb-1">{item.date}</p>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{item.org}</p>
            <ul className="space-y-1">
              {item.points.map((p) => (
                <li key={p} className="text-sm text-muted-foreground">• {p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <SectionHeading title="Certifications" />
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            className="p-5 rounded-xl bg-card border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Award className="text-primary mx-auto mb-3" size={24} />
            <h4 className="font-semibold text-sm mb-1">{c.title}</h4>
            <p className="text-xs text-muted-foreground">{c.org}</p>
            <p className="text-xs font-mono text-primary mt-1">{c.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
