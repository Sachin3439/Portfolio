import './css/Projectslider.css';
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Spotify Clone",
    desc: "A modern Spotify clone with music player UI and responsive design.",
    img: "/spotify.png",
    github: "https://github.com/yourrepo1",
  },

  {
    title: "Fitlife",
    desc: "A full-stack fitness dashboard where users can calculate BMI, track diet plans, and monitor progress with charts.",
    img: "/fitlife.png",
    github: "https://github.com/Sachin3439/fitlife1",
  },

  {
    title: "Kanban Task Manager",
    desc: "Drag and drop task management system inspired by Trello.",
    img: "/kanban.png",
    github: "https://github.com/yourrepo3",
  },

  {
    title: "AI Chatbot",
    desc: "An AI-powered chatbot built using React frontend and Node.js backend with modern animations.",
    img: "/ai.png",
    github: "https://github.com/Sachin3439/aichatbot",
  },

  {
    title: "EV Charging Station",
    desc: "Real-time EV charging station management system with live monitoring.",
    img: "/ev.png",
    github: "https://github.com/Sachin3439/evstation",
  },

  {
    title: "Real-Time User Search",
    desc: "Dynamic user explorer with real-time filtering using Vanilla JavaScript.",
    img: "/user.png",
    github: "https://github.com/Sachin3439/user-search",
  },

  {
    title: "Image Editor",
    desc: "Interactive image editor built with React for editing and downloading images.",
    img: "/imageeditor.png",
    github: "https://github.com/sachin3439/image-editor",
  },

  {
    title: "Birthday Wish Card",
    desc: "Personalized birthday card with music, animations, and photos.",
    img: "/birthday.png",
    github: "https://wishbirtday.vercel.app/",
  },

  {
    title: "HabitFlow",
    desc: "Habit tracking web app for daily consistency and progress monitoring.",
    img: "/habitflow.png",
    github: "https://github.com/sachin3439/habitflow",
  },

  {
    title: "Uber Clone",
    desc: "Full-stack Uber clone with ride tracking and authentication.",
    img: "/uber.png",
    github: "https://github.com/sachin3439/uberclone",
  },
];

export default function ProjectCarousel() {

  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (distance > 50) {
      next();
    } else if (distance < -50) {
      prev();
    }
  };

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="carousel-wrapper">
      <h2 className="carousel-title">Projects</h2>

      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        <button className="nav-btn left" onClick={prev}>
          ‹
        </button>

        {projects.map((project, i) => {

          let offset = i - index;

          if (offset < -projects.length / 2) {
            offset += projects.length;
          }

          if (offset > projects.length / 2) {
            offset -= projects.length;
          }

          let x = offset * 320;
          let scale = offset === 0 ? 1 : 0.82;
          let opacity = offset === 0 ? 1 : 0.4;
          let rotateY = offset * -15;
          let zIndex = projects.length - Math.abs(offset);

          return (
            <motion.div
              key={i}
              className={`carousel-card ${offset === 0 ? "active-card" : ""
                }`}

              animate={{
                x,
                scale,
                opacity,
                rotateY,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}

              style={{
                zIndex,
                touchAction: "pan-y",
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                decoding="async"
              />

              <h3>{project.title}</h3>

              <button
                className="view-btn"
                onClick={() => setSelected(project)}
              >
                View Project
              </button>

              {offset === 0 && (
                <div className="swipe-indicator">
                  <span>← Swipe →</span>
                </div>
              )}
            </motion.div>
          );
        })}

        <button className="nav-btn right" onClick={next}>
          ›
        </button>

      </div>
      <div className="mobile-swipe-hint">
        👈 Swipe Projects 👉
      </div>

      {/* MODAL */}

      <AnimatePresence>

        {selected && (

          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >

            <motion.div
              className="modal-box"
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                y: 50,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
            >

              <span
                className="close-icon"
                onClick={() => setSelected(null)}
              >
                ✕
              </span>

              <div className="modal-content">

                <div className="modal-image">
                  <img
                    src={selected.img}
                    alt={selected.title}
                  />
                </div>

                <div className="modal-desc">

                  <h2>{selected.title}</h2>

                  <p>{selected.desc}</p>

                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    View GitHub Repo
                  </a>

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}