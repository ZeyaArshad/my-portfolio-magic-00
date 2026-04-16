import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, ExternalLink } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container">
      <SectionHeading title="Get In Touch" subtitle="Feel free to reach out for collaborations or opportunities." />
      <motion.div
        className="max-w-md mx-auto space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {[
          { icon: Mail, label: "zeyaarshad786@gmail.com", href: "mailto:zeyaarshad786@gmail.com" },
          { icon: Phone, label: "+91 7643897190", href: "tel:+917643897190" },
          { icon: ExternalLink, label: "LinkedIn", href: "https://linkedin.com" },
          { icon: ExternalLink, label: "GitHub", href: "https://github.com" },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
          >
            <c.icon className="text-primary" size={20} />
            <span className="text-sm">{c.label}</span>
          </a>
        ))}
      </motion.div>

      <p className="text-center text-xs text-muted-foreground mt-16">
        © {new Date().getFullYear()} Zeya Arshad. All rights reserved.
      </p>
    </div>
  </section>
);

export default ContactSection;
