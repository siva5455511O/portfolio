import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaClipboardList, FaBusinessTime } from 'react-icons/fa';
import '../style/Project.css';

const projects = [
  {
    title: "Dental Clinic Management System",
    description: "Developed a responsive dental care web application that allows users to browse services, schedule appointments, and access clinic information.",
    tech: "React.js, Node.js, Express.js, MongoDB",
    icon: <FaLaptopCode />,
  },
  {
    title: "Product Service Tracking Application",
    description: "Built a full-stack product tracking application to streamline service workflows and manage product lifecycles, including real-time tracking and customer communication.",
    tech: "React.js, Node.js, Express.js, MongoDB",
    icon: <FaClipboardList />,
  },
  {
    title: "CRM Web Application",
    description: "Designed and developed a CRM system to manage leads, customer data, and sales activities with reporting tools and performance dashboards.",
    tech: "React.js, Redux, Node.js, Express.js, MongoDB",
    icon: <FaBusinessTime />,
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
