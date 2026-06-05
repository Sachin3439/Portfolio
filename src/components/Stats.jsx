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
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={(el) => {
              el.target.classList.add("mobile-glow");
            }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5
            }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <Counter end={stat.value} />
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}