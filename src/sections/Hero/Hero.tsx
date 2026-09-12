import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const techStack = ["React", "Node.js", "Tailwind CSS", "TypeScript", "MongoDB"];

// Variantes para animação em cascata (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Tempo de espera entre cada elemento filho
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const, // Beziér curve para animação suave
    },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden px-4 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex max-w-4xl flex-col items-center gap-4"
      >
        <motion.h1
          variants={itemVariants}
          className="min-h-14 text-6xl font-extrabold tracking-tight text-foreground"
        >
          <Typewriter
            options={{
              strings: ["DESENVOLVEDOR FULL-STACK", "FOCADO EM FRONT-END"],
              autoStart: true,
              loop: true,
              delay: 60, // Velocidades da digitação (ms)
              deleteSpeed: 40, // Velocidade de remoção de caracteres (ms)
              cursor: "|",
            }}
          />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm font-medium tracking-widest text-muted-foreground uppercase"
        >
          PORTFOLIO WEBSITE
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          {techStack.map((tech, index) => (
            <span key={tech} className="flex items-center gap-2">
              <span className="transition-colors hover:text-primary">
                {tech}
              </span>
              {index < techStack.length - 1 && (
                <span className="text-xl text-(--primary)">•</span>
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
