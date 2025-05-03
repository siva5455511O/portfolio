import React, { useState } from "react";
import { motion } from "framer-motion";
import siva from "../../assests/sivapic.jpg"; 
import "../style/Hero.css";

const Hero = () => {
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    let xAxis = ((clientX - left) / width - 0.5) * 40; // Tilt left/right
    let yAxis = ((clientY - top) / height - 0.5) * -40; // Tilt up/down

    setTransformStyle(`rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle(`rotateY(0deg) rotateX(0deg) scale(1)`);
  };

  return (
    <motion.section
      id="home"
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        {/* Text Content */}
        <motion.div
          className="text-content"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1>
            Hello There! I'm <span className="highlight">Siva</span>
          </h1>
          <h2>
             <span className="highlight">MERN Stack</span> Developer
          </h2>
          <p>
            Specializing in Full-Stack Development with MongoDB, Express, React,
            and Node.js. Crafting seamless user experiences with modern web
            technologies.
          </p>

          {/* Experience, Projects, and Technologies Used */}
          <div className="stats">
            <div>
              <h3>1+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3>3+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3>10+</h3>
              <p>Technologies Used</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <a href="/Siva_Resume_.pdf" download="Siva_Resume_.pdf">
              <button className="cta-button">Download Resume</button>
            </a>
            <a href="mailto:sivakumar0710k@gmail.com">
              <button className="cta-button secondary">Email Me</button>
            </a>
          </div>
        </motion.div>

        {/* Image Content with Premium 3D Effect */}
        <motion.div
          className="image-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: transformStyle }}
        >
          <img src={siva} alt="Siva" />
          <div className="image-glow"></div> {/* Glow Effect */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
