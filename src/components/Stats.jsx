import './css/Stats.css';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* =========================
   Counter Component
========================= */

function Counter({ end }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  // Subscribe to motion value changes
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  // Animate when visible
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, {
        duration: 2,
        ease: "easeOut"
      });

      return () => controls.stop();
    }
  }, [isInView, end, count]);

  return (
    <h2 ref={ref} className="stat-number">
      {display}+
    </h2>
  );
}

/* =========================
   Stats Section
========================= */

export default function Stats() {
  const stats = [
    { icon: "🚀", value: 12, label: "Projects Built" },
    { icon: "🧠", value: 10, label: "Technologies Explored" },
    { icon: "📦", value: 15, label: "GitHub Repositories" },
    { icon: "📚", value: 3, label: "Years Learning" }
  ];

  return (
    <section id="stats" className="stats-section">
      <motion.h2
        className="stats-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Development Journey
      </motion.h2>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stat-card"
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
              damping: 12,
              delay: i * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateX: 8,
              rotateY: -8,
              y: -10,
            }}
          >
            <div className="shine"></div>
            <div className="glow"></div>
            <div className="stat-icon">{stat.icon}</div>
            <Counter end={stat.value} />
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}