import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";




export default function Hero() {

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 720]);
  const x = useTransform(scrollY, [0, 500], [0, -200]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.75]);


  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  const greetingText = "Hello, I'm";
  const nameText = "Nabajyoti Rout";
  const roles = [
    "Future Software Engineer",
    "Full Stack Developer (Learning)",
    "Tech Problem Solver",
    "Building Modern Web Experiences",
    "Exploring AI & System Design",
  ];

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
      if (i === greetingText.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  /* ================= Name Typing ================= */
  useEffect(() => {
    let i = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setName(nameText.slice(0, i + 1));
        i++;
        if (i === nameText.length) clearInterval(interval);
      }, 90);

      return () => clearInterval(interval);
    }, greetingText.length * 70 + 300);

    return () => clearTimeout(timeout);
  }, []);

  /* ================= Role Typing ================= */
  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        setRoleText(currentRole.slice(0, i + 1));
        i++;

        if (i === currentRole.length) {
          timeout = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
          return;
        }
      } else {
        setRoleText(currentRole.slice(0, i - 1));
        i--;

        if (i === 0) {
          isDeleting = false;
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timeout = setTimeout(type, isDeleting ? 40 : 80);
    };

    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, [roleIndex]);

  return (
    <section id="home" className="hero-container">
      <div ref={wrapperRef} className="hero-card split-reveal">
        <h4 className="hero-greeting depth-text">{greeting}</h4>

        <h1 className="hero-title neon-text gradient-animate depth-text">
          {name}
        </h1>

        <p className="hero-role depth-text">{roleText}</p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="primary-btn">View Projects</button>
          </a>
          <a href="#footer">
            <button className="secondary-btn">Contact Me</button>
          </a>
        </div>
      </div>

      <div className="png">
        <motion.img
        initial={{ x: 0, y: 0, scale: 1 }}
        style={{
          width: "600px",
           height: "700px",
          y,
          x,
          scale,
        }}
          ref={imageRef}
          src="/her.png"
          alt="hero"
          className="hero-image"
        />
      </div>
    </section>
  );
}