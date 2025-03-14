import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import '../style/Experience.css';

const experiences = [
  {
    company: "KITKAT SOFTWARE TECHNOLOGIES",
    role: "MERN Stack Developer",
    duration: "April 2024 - March 2025",
    details: [
      "Developed and optimized web applications using React.js, Node.js, and MongoDB.",
      "Worked on state management using Redux and Context API.",
      "Implemented authentication, API integrations, and responsive UI components.",
      "Enhanced performance by optimizing database queries and React components.",
      "Collaborated with UI/UX designers to improve user experience.",
      "Conducted code reviews and mentored junior developers."
    ]
  }
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Work Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div 
            className="experience-card" 
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="icon"><FaBriefcase /></div>
            <h3>{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
            <ul>
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
