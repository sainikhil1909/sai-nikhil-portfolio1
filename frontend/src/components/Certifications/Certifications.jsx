import React from "react";
import { motion } from "framer-motion";

import {
    FaJava,
    FaPython,
    FaCode,
    FaCertificate
} from "react-icons/fa";

import "./Certifications.css";

const certifications = [

    {
        title: "Programming in Java",
        issuer: "NPTEL",
        year: "2023",
        icon: <FaJava />,
        link: "#"
    },

    {
        title: "Oracle Certified Java Programming",
        issuer: "Oracle",
        year: "2023",
        icon: <FaCertificate />,
        link: "#"
    },

    {
        title: "Programming Essentials in Python",
        issuer: "Cisco Networking Academy",
        year: "2022",
        icon: <FaPython />,
        link: "#"
    },

    {
        title: "Problem Solving through Programming in C",
        issuer: "NPTEL",
        year: "2021",
        icon: <FaCode />,
        link: "#"
    }

];

function Certifications() {

    return (

        <section
            id="certifications"
            className="certifications"
        >

            <div className="cert-header">

                <span>
                    CREDENTIALS
                </span>

                <h2>
                    Certifications
                </h2>

                <p>
                    Professional certifications and
                    technical achievements that
                    strengthen my software development
                    and programming knowledge.
                </p>

            </div>

            <div className="cert-grid">

                {certifications.map((cert, index) => (

                    <motion.div

                        key={index}

                        className="cert-card"

                        initial={{
                            opacity: 0,
                            y: 50
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            duration: 0.6,
                            delay: index * 0.1
                        }}

                    >

                        <div className="cert-icon">

                            {cert.icon}

                        </div>

                        <span className="cert-issuer">

                            {cert.issuer}

                        </span>

                        <h3>

                            {cert.title}

                        </h3>

                        <p>

                            {cert.year}

                        </p>


                    </motion.div>

                ))}

            </div>

        </section>

    );

}

export default Certifications;