import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import "./Contact.css";

import CustomAlert from "../CustomAlert/CustomAlert";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [alertData, setAlertData] = useState({
    message: "",
    type: ""
  });
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://sai-nikhil-portfolio1.onrender.com/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.success) {

        setAlertData({
          message: data.message,
          type: "success"
        });

        setFormData({
          name: "",
          email: "",
          message: ""
        });
       

      } else {

        setAlertData({
          message: data.message,
          type: "error"
        });

      }
      console.log(data);

    } catch (error) {

      setAlertData({
        message: "Failed to send message",
        type: "error"
      });

    }

  };
  return (

    <section
      id="contact"
      className="contact"
    >
      <CustomAlert

        message={alertData.message}

        type={alertData.type}

        onClose={() =>
          setAlertData({
            message: "",
            type: ""
          })
        }

      />

      <div className="contact-container">

        <motion.div

          className="contact-left"

          initial={{
            opacity: 0,
            x: -50
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: .8
          }}

        >

          <span>
            CONTACT
          </span>

          <h2>
            Let's Build Something Amazing Together
          </h2>

          <p>
            I'm always interested in discussing
            new opportunities, freelance projects,
            collaborations and innovative ideas.
          </p>

          <div className="contact-info">

            <div>
              <FaEnvelope />
              <span>
                pallasainikhil19@gmail.com
              </span>
            </div>

            <div>
              <FaPhoneAlt />
              <span>
                +91 91546 38079
              </span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>
                Hyderabad, India
              </span>
            </div>

          </div>

          <div className="social-links">

            <a href="https://github.com/sainikhil1909" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/sai-nikhil-palla-19042003p/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        <motion.form

          className="contact-form"

          onSubmit={handleSubmit}

          initial={{
            opacity: 0,
            x: 50
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: .8
          }}

        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">

            Send Message

          </button>

        </motion.form>

      </div>

    </section>

  );

}

export default Contact;