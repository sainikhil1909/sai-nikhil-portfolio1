import React, { useState } from "react";
import { motion } from "framer-motion";

import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaPython,
    FaTools,
    FaBrain
} from "react-icons/fa";

import "./Skills.css";

const skills = [

    {
        icon: <FaReact />,
        title: "Frontend",
        items: [
            { name: "HTML5", level: 85 },
            { name: "CSS3", level: 80 },
            { name: "JavaScript", level: 78 },
            { name: "React.js", level: 82 }
        ]
    },

    {
        icon: <FaNodeJs />,
        title: "Backend",
        items: [
            { name: "Node.js", level: 70 },
            { name: "Express.js", level: 75 },
            { name: "Flask", level: 70 }
        ]
    },

    {
        icon: <FaDatabase />,
        title: "Database",
        items: [
            { name: "MongoDB", level: 80 },
            { name: "SQL", level: 70 }
        ]
    },

    {
        icon: <FaPython />,
        title: "Programming",
        items: [
            { name: "Python", level: 85 },
            { name: "Java", level: 75 },
            { name: "JavaScript", level: 78 }
        ]
    },

    {
        icon: <FaBrain />,
        title: "Machine Learning",
        items: [
             { name: "Machine Learning", level: 70},
            { name: "NumPy", level: 80 },
            {name:"Pandas", level:80},
            { name: "Scikit-Learn", level: 80 }
        ]
    },

    {
        icon: <FaTools />,
        title: "Tools",
        items: [
            { name: "Git", level: 90 },
            { name: "GitHub", level: 90 },
            { name: "VS Code", level: 75 },
            { name: "Postman", level: 80 }
        ]
    }

];

function Skills() {

    const [selectedSkill, setSelectedSkill] = useState(null);

    return (

        <section
            id="skills"
            className="skills"
        >

            <div className="skills-header">

                <span>
                    MY EXPERTISE
                </span>

                <h2>
                    Technologies I Work With
                </h2>

                <p>
                    Technologies, frameworks and tools
                    I use to build scalable web applications
                    and modern software solutions.
                </p>

            </div>

            <div className="skills-grid">

                {skills.map((skill, index) => (

                    <motion.div

                        key={index}

                        className="skill-card"

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

                        <div className="skill-icon">

                            {skill.icon}

                        </div>

                        <h3>

                            {skill.title}

                        </h3>

                        <div className="skills-list">

                            {skill.items.map((item, id) => (

                                <div

                                    key={id}

                                    className="skill-item"

                                    onClick={() =>

                                        setSelectedSkill(

                                            selectedSkill === item.name
                                                ? null
                                                : item.name

                                        )

                                    }

                                >

                                    <div className="skill-name">

                                        {item.name}

                                    </div>

                                    {selectedSkill === item.name && (

                                        <div className="skill-popup">

                                            <div className="popup-percent">

                                                {item.level}%

                                            </div>

                                            <div className="progress-bar">

                                                <div
                                                    className="progress-fill"
                                                    style={{
                                                        width: `${item.level}%`
                                                    }}
                                                />

                                            </div>

                                        </div>

                                    )}

                                </div>

                            ))}

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>

    );

}

export default Skills;