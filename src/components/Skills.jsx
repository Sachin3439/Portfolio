import './css/Skill.css';
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "⚛️",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Backend",
    icon: "🛠️",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    title: "3D & Creative",
    icon: "🌌",
    skills: ["Three.js", "GSAP", "Framer Motion"]
  },
  {
    title: "Tools",
    icon: "⚙️",
    skills: ["Git", "Figma", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-wrapper">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Technical Expertise
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skills-category-card"
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.8,
              rotate: -8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12, delay: index * 0.2
            }}
            viewport={{ once: true }}
            onViewportEnter={(entry) => {
              entry.target.classList.add("mobile-glow");
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              e.currentTarget.style.setProperty("--x", `${x}px`);
              e.currentTarget.style.setProperty("--y", `${y}px`);
            }}
          >
            <div className="bg-dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Animated Background Icon */}
            <div className="floating-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <div className="skills-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}