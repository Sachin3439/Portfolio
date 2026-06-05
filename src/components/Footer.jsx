import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="minimal-footer" id="footer">
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