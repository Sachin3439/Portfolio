import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-wrapper">
      <motion.div
      initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1}}
        
        ref={sectionRef}
        className={`about-card ${visible ? "about-show" : ""}`}
      >
       

        {/* Right Side - Education */}
        <div className="about-right">
          <h3>Education</h3>

          <div className="edu-block">
            <span style={{color:"cyan"}}>🎓POst Graduation</span>
            <p>Master in Computer Apllication</p>
            <small>VSSUT BURLA </small><br></br>
            <small>2025-2027 </small>
          </div>

          <div className="edu-block">
            <span style={{color:"cyan"}}>🎓 Graduation</span>
            <p>Bachelor's in Computer Science</p>
            <small>BJB AUTONOMOUS COLLEGE</small><br></br>
            <small>2022-2025 </small>
          </div>

          <div className="edu-block">
            <span style={{color:"cyan"}}>📘 12th Standard</span><br></br>
            <small>BHUBANESWAR HIGHER SECONDARY SCHOOL OF COMPUTER SCIENCE AND TECHNOLOGY</small><br></br>
            <small>2020-2022 </small>
          </div>

          <div className="edu-block">
            <span style={{color:"cyan"}}>📗 10th Standard</span><br></br>
            <small>UMBP DALIKAINDA</small><br></br>
            <small>2011-2020 </small>
          </div>
        </div>
      </motion.div>
    </section>
  );
}