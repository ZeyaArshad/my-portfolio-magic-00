import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Phone } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-wider uppercase">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Zeya <span className="text-primary">Arshad</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
            Full-Stack Developer & CS Student crafting clean, performant web experiences.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start mb-8">
            <a href="mailto:zeyaarshad786@gmail.com" className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Mail size={20} />
            </a>
            <a href="tel:+917643897190" className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Phone size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />
            <img
              src={profileImg}
              alt="Zeya Arshad"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
