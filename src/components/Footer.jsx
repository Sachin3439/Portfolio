import '../components/css/footer.css';
import { FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const [showRocket, setShowRocket] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowRocket(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  return (
    <footer className="minimal-footer" id="footer">
       
       
       <AnimatePresence>
    {showRocket && (
      <motion.button
        className="rocket-btn"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 80 }}
        whileHover={{
          scale: 1.15,
          rotate: -10,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <FaRocket />
      </motion.button>
    )}
  </AnimatePresence>
   
     
      <div className="footer-glow-line"></div>
    
      <div className="footer-inner">

        <h2 className="footer-name">Nabajyoti Rout</h2>

        {/* Contact Info */}
        <div className="footer-contact">
          <a href="tel:+917978375481">
            <FaPhone /> +91 7978375481
          </a>

          <a href="mailto:nabajyotirout34@gmail.com">
            <FaEnvelope /> nabajyotirout34@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="footer-social">

          <motion.a
            href="https://www.linkedin.com/in/nabajyoti-rout-6883a5385?"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, y: -6 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/s_a_c_h_i_n__34?igsh=enhobG84Y3Rsa3Rz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, y: -6 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://github.com/Sachin3439"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, y: -6 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            <FaGithub />
          </motion.a>

        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Nabajyoti Rout. All Rights Reserved.
        </p>

      </div>
    
    </footer>
    
  );
}