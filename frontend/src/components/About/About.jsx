import React from "react";
import { motion } from "framer-motion";
import {
     FaReact,
     FaNodeJs,
     FaPython
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";

import "./About.css";

function About() {

     return (

          <section
               id="about"
               className="about"
          >

               <div className="about-container">

                    {/* LEFT */}

                    <motion.div
                         className="about-left"

                         initial={{
                              opacity: 0,
                              x: -100
                         }}

                         whileInView={{
                              opacity: 1,
                              x: 0
                         }}

                         viewport={{
                              once: true
                         }}

                         transition={{
                              duration: 1
                         }}
                    >

                         <div className="lanyard"></div>

                         <div className="clip"></div>

                         <div className="id-card">

                              <img
                                   src=".\avatar.png"
                                   alt="Sai Nikhil"
                              />

                              <h3>
                                   Sai Nikhil
                              </h3>

                              <p>
                                   Full Stack Developer
                              </p>

                         </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div

                         className="about-right"

                         initial={{
                              opacity: 0,
                              x: 100
                         }}

                         whileInView={{
                              opacity: 1,
                              x: 0
                         }}

                         viewport={{
                              once: true
                         }}

                         transition={{
                              duration: 1
                         }}

                    >

                         <h1>

                              Hello!

                         </h1>

                         <p>

                              I'm

                              <span>

                                   SAI NIKHIL

                              </span>

                              , a passionate Full Stack Developer focused on
                              building modern, responsive, and user-friendly
                              web applications.

                              I specialize in developing scalable frontend and
                              backend solutions using React.js, Node.js,
                              Express.js, MongoDB, JavaScript, Python, and Java.

                              I enjoy transforming ideas into real-world digital
                              products, creating seamless user experiences, and
                              solving complex problems through clean and efficient
                              code.

                              My goal is to continuously grow as a software
                              developer while building innovative applications
                              that make a meaningful impact.

                         </p>

                         <div className="tech-icons">

                              <FaReact />

                              <FaNodeJs />

                              <SiMongodb />

                              <FaPython />

                         </div>

                    </motion.div>

               </div>

               {/* STARS */}

               <div className="star star1">✦</div>

               <div className="star star2">✦</div>

               <div className="star star3">✦</div>

               {/* TORN DIVIDER */}

               <svg
                    className="divider"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
               >

                    <path
                         fill="#fff"
                         d="
M0,64
L80,80
L160,50
L240,75
L320,55
L400,90
L480,60
L560,100
L640,65
L720,90
L800,50
L880,95
L960,55
L1040,85
L1120,65
L1200,95
L1280,60
L1360,85
L1440,65
L1440,120
L0,120
Z
"
                    />

               </svg>

          </section>

     );

}

export default About;