import { motion } from "framer-motion";
import "./Resume.css";

function Resume() {

  return (

    <section id="resume" className="resume">

      <motion.div
        className="resume-content"

        initial={{
          opacity:0,
          y:50
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.8
        }}
      >

        <span>
          RESUME
        </span>

        <h2>
          Download My Resume
        </h2>

        <p>

          Explore my education, technical skills,
          projects, publications and professional
          experience in detail.

        </p>

        <a
          href="/SAI NIKHIL RESUME.pdf"
         download="Sai_Nikhil_Resume.pdf"
          className="download-btn"
        >

          Download Resume

        </a>

      </motion.div>

    </section>

  );

}

export default Resume;