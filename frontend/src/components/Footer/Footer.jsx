import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import "./Footer.css";

function Footer() {

  const year = new Date().getFullYear();

  return (


    <footer className="footer">

      <div className="footer-container">

        <motion.div
          className="footer-top"

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="footer-tag">
            LET'S BUILD SOMETHING AMAZING
          </span>

          <h2>
            Ready To Work Together?
          </h2>

          <a
            href="#contact"
            className="footer-btn"
          >
            Contact Me
          </a>

        </motion.div>

        <motion.h1
          className="footer-brand"

          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          SAI NIKHIL
        </motion.h1>

        <div className="footer-grid">

          <div className="page">

            <h3>Navigation</h3>

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#contact">Contact</a>

          </div>

          <div className="contact">

            <h3>Contact</h3>
            
            <div className="footer-contact-item" aria-label="Send email to Sai Nikhil"
  title="Email">

              <FaEnvelope aria-hidden="true"/>

              <span>
                pallasainikhil19@gmail.com
              </span>

            </div>

            <div className="footer-contact-item" aria-label="Call Sai Nikhil"
  title="Phone">

              <FaPhoneAlt aria-hidden="true" />

              <span>
                +91 91546 38079
              </span>

            </div>

            <div className="footer-contact-item">

              <FaMapMarkerAlt />

              <span>
                Hyderabad, India
              </span>

            </div>


          </div>

          <div className="social">

            <h3>Social Links</h3>

            <div className="social-icons">

              <a
                href="https://github.com/sainikhil1909"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sai-nikhil-palla-19042003p/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:pallasainikhil19@gmail.com"
                aria-label="Send email to Sai Nikhil"
                title="Email"
              >
                <FaEnvelope aria-hidden="true" />
              </a>

              <a href="tel:+919154638079" aria-label="Call Sai Nikhil" title="Phone">
                <FaPhoneAlt aria-hidden="true" />
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {year} Sai Nikhil. All Rights Reserved.
          </p>

          <p>
            Built with React.js & Express.js
          </p>

        </div>

      </div>

    </footer>


  );

}

export default Footer;
