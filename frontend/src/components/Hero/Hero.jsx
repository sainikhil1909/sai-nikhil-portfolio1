import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {

  return (


    <section id="home" className="hero">

      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h4 className="hero-subtitle">
            Full Stack Developer
          </h4>

          <h1>

            Hi, I'm

            <span>
              Sai Nikhil
            </span>

          </h1>

          <h2>
            Building Modern Web Applications
          </h2>

          <p>

            Full Stack Developer focused on building
            modern web applications with clean UI,
            scalable backend systems, and exceptional
            user experiences using the MERN stack.

          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
            
          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="image-wrapper">

            <img
              rel="preload"
              as="image"
              src=".\hero-bg.jpg"
              alt="Sai Nikhil"
            />

          </div>

        </motion.div>

      </div>

    </section>


  );

}

export default Hero;
