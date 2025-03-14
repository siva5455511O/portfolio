import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaShoppingCart, FaClipboardList, FaBusinessTime, FaTshirt } from 'react-icons/fa';
import '../style/Project.css';

const projects = [
  {
    title: "Dental Care Website",
    description: "A modern, responsive website for dental care services.",
    tech: "HTML, CSS, JavaScript, Bootstrap, React.js",
    icon: <FaLaptopCode />,
  },
  {
    title: "KitKat Software Technologies Website",
    description: "Enhanced platform functionality to improve user experience.",
    tech: "HTML, CSS, JavaScript, React.js",
    icon: <FaBusinessTime />,
  },
  {
    title: "Product Service Tracking Application",
    description: "A system to streamline service management and optimize order processing.",
    tech: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB",
    icon: <FaClipboardList />,
  },
  {
    title: "Multi-Vendor E-Commerce Website",
    description: "Developed a complete e-commerce platform with stock management.",
    tech: "HTML, CSS, JavaScript, React.js, Node.js, MongoDB",
    icon: <FaShoppingCart />,
  },
  {
    title: "Fashion Flair (Independent Project)",
    description: "An interactive online shopping platform with user authentication.",
    tech: "HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js, MongoDB",
    icon: <FaTshirt />,
  }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
