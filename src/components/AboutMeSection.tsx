import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const AboutMeSection = () => (
  <section id="about-me" className="py-24">
    <div className="container max-w-3xl">
      <SectionHeading title="About Me" subtitle="Who I am and what drives me." />
      <motion.p
        className="text-lg text-muted-foreground leading-relaxed text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        I'm a passionate Computer Science student and aspiring developer with hands-on
        experience in web development and Java. I love building clean, responsive interfaces
        and turning ideas into real, working products. Always curious, always learning.
      </motion.p>
    </div>
  </section>
);

export default AboutMeSection;
