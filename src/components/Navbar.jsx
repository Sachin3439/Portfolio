import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navRef = useRef(null);
   let cy=new Date().getFullYear();
   let month=new Date().getMonth()+1;
   let y=2005;
   let age;
  if(month<4)
  {
   age=cy-y-1;
  }
  else{
     age=cy-y;
  }
  return (
    <>
      <nav className="navbar" ref={navRef}>
        {/* Double Click Logo */}
        <div className="logo-wrapper">
        <img
          id="logopng"
          src="/nr-logo.png"
          alt="logo"
          onClick={() => setProfileOpen(true)}
          style={{ cursor: "pointer" }}
        />
        </div>

        <div
          className="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </div>

        <div className={`links ${open ? "active" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#stats" onClick={() => setOpen(false)}>Stats</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        </div>
      </nav>

      {/* PROFILE MODAL */}
      <AnimatePresence>
        {profileOpen && (
          <motion.div
            className="profile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="profile-box"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FaTimes
                className="close-icon"
                onClick={() => setProfileOpen(false)}
              />

              <img
                src="/sachin.jpeg"
                alt="profile"
                className="profile-img"
              />

              <h2 >Nabajyoti Rout</h2>
              <br></br>
              <p>Age:{age}</p>
              <br></br>
              <p><a href="tel:+917978375481">
            <FaPhone /> +91 7978375481
          </a></p>
          <br></br>
              <p><a href="mailto:nabajyotirout34@gmail.com">
            <FaEnvelope /> nabajyotirout34@gmail.com
          </a></p>

              <div className="profile-social">
                <a href="https://www.instagram.com/s_a_c_h_i_n__34?igsh=enhobG84Y3Rsa3Rz" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/nabajyoti-rout-6883a5385?" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Sachin3439" target="_blank">
                  <FaGithub />
                </a>
              </div>

              <a href="/sachinresume.pdf" download className="resume-btn">
                <h3 style={{ color: "black" }}>Download Resume</h3>
              </a>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}