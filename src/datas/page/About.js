import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../style/About.css';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="about-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p>
            I’m a <span className="highlight">MERN Stack Developer</span> with 1 year of experience in
            building <span className="highlight">scalable, high-performance</span> web applications.
            Passionate about <span className="highlight">clean code, optimized performance, and UI/UX design</span>.
          </p>
          <p>
            Currently working at <span className="highlight">Kitkat Software Technologies</span>, I
            specialize in <span className="highlight">React.js, Node.js, Express.js, MongoDB, Redux</span>,
            and RESTful APIs. Seeking an opportunity to apply my skills in a dynamic environment.
          </p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <SocialIcon href="https://linkedin.com/in/yourusername" icon={<FaLinkedin />} />
          <SocialIcon href="https://instagram.com/the_sassy_man_" icon={<FaInstagram />} />
          <SocialIcon href="https://wa.me/9025600849" icon={<FaWhatsapp />} />
        </motion.div>
      </div>
    </motion.section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    className="social-icon"
  >
    {icon}
  </motion.a>
);

export default About;
