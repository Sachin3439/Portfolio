import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Move outside component so it isn't recreated on every render
const ROLES = [
  "Future Software Engineer",
  "Full Stack Developer (Learning)",
  "Tech Problem Solver",
  "Building Modern Web Experiences",
  "Exploring AI & System Design",
];

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 720]);
  const x = useTransform(scrollY, [0, 500], [0, -200]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.75]);

  const greetingText = "Hello, I'm";
  const nameText = "Nabajyoti Rout";

  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  /* ================= Greeting Typing ================= */

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setGreeting(greetingText.slice(0, i + 1));
      i++;

      if (i === greetingText.length) {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  /* ================= Name Typing ================= */

  useEffect(() => {
    let i = 0;
    let interval;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setName(nameText.slice(0, i + 1));
        i++;

        if (i === nameText.length) {
          clearInterval(interval);
        }
      }, 90);
    }, greetingText.length * 70 + 300);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  /* ================= Role Typing ================= */

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const currentRole = ROLES[roleIndex];

      if (!deleting) {
        setRoleText(currentRole.slice(0, i + 1));
        i++;

        if (i > currentRole.length) {
          deleting = true;

          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        setRoleText(currentRole.slice(0, i - 1));
        i--;

        if (i === 0) {
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          return;
        }
      }

      timeout = setTimeout(type, deleting ? 40 : 80);
    };

    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, [roleIndex]);

  return (
    <section id="home" className="hero-container">
      <div className="hero-card split-reveal">
        <h4 className="hero-greeting depth-text">
          {greeting}
        </h4>

        <h1 className="hero-title neon-text gradient-animate depth-text">
          {name}
        </h1>

        <p className="hero-role depth-text">
          {roleText}
          <span className="cursor">|</span>
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="primary-btn">
              View Projects
            </button>
          </a>

          <a href="#footer">
            <button className="secondary-btn">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      <div className="png">
        <motion.img
          initial={{ x: 0, y: 0, scale: 1 }}
          style={{
            width: "600px",
            height: "700px",
            x,
            y,
            scale,
          }}
          src="/her.png"
          alt="Nabajyoti Rout"
          className="hero-image"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}