import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    level: "B.Tech in Computer Science (IOT)",
    school: "Noida Institute of Engineering and Technology",
    board: "AKTU",
    year: "Nov 2022 – Aug 2026",
    score: "CGPA: 7.42",
  },
  {
    level: "Intermediate (12th)",
    school: "Z.A Islamia PG College",
    board: "BSEB",
    year: "2020-2021",
    score: "67%",
  },
  {
    level: "Matriculation (10th)",
    school: "Mother's International Academy",
    board: "CBSE Board",
    year: "2019",
    score: "84%",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 bg-secondary/20">
    <div className="container">
      <SectionHeading title="Education" subtitle="Academic background and qualifications." />

      <div className="max-w-2xl mx-auto space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={edu.level}
            className="relative pl-10 border-l-2 border-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap size={14} className="text-primary-foreground" />
            </div>
            <p className="text-xs font-mono text-primary mb-1">{edu.year}</p>
            <h3 className="font-semibold text-lg">{edu.level}</h3>
            <p className="text-sm text-muted-foreground">{edu.school}</p>
            <p className="text-sm text-muted-foreground">
              {edu.board} • <span className="text-primary font-semibold">{edu.score}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
