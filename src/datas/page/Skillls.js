import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaAws, FaTools } from 'react-icons/fa';
import '../style/Skills.css';

const skillsData = [
  { title: "Frontend", icon: <FaReact />, skills: "HTML, CSS, Bootstrap, JavaScript, React.js, Redux, React Router, Responsive Design" },
  { title: "Backend", icon: <FaNodeJs />, skills: "Node.js, Express.js, RESTful APIs, Authentication (JWT & OAuth)" },
  { title: "Database", icon: <FaDatabase />, skills: "MongoDB" },
  { title: "Version Control", icon: <FaGitAlt />, skills: "Git, GitHub" },
  { title: "Cloud & Deployment", icon: <FaAws />, skills: "Amazon Web Services" },
  { title: "Tools", icon: <FaTools />, skills: "Postman, VS Code" },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div 
            className="skill-category" 
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.skills}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};   

export default Skills;
