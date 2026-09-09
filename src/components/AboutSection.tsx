import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Database, Globe, Cpu } from "lucide-react";

const skills = [
  { icon: Code2, label: "Languages", items: "Java, JavaScript, HTML, CSS, C" },
  { icon: Database, label: "Databases", items: "MySQL, MongoDB" },
  { icon: Globe, label: "Frameworks", items: "Servlet, JSP" },
  { icon: Cpu, label: "Tools", items: "GitHub, VSCode, Arduino, Eclipse" },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container">
      <SectionHeading title="Skills" subtitle="A snapshot of my skills and what drives me." />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.label}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <s.icon className="text-primary mb-4" size={28} />
            <h3 className="font-semibold mb-2">{s.label}</h3>
            <p className="text-sm text-muted-foreground">{s.items}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[
          { num: "7.42", label: "CGPA" },
          { num: "2+", label: "Internships" },
          { num: "3+", label: "Projects" },
          { num: "3+", label: "Certifications" },
        ].map((s) => (
          <div key={s.label} className="p-6 rounded-xl bg-secondary">
            <p className="text-3xl font-bold text-primary">{s.num}</p>
            <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
