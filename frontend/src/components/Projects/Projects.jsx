import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import projects from "../../data/projects";

import "./Projects.css";

function Projects() {
    const sliderRef = useRef(null);

    const intervalRef = useRef(null);

    useEffect(() => {

        const slider = sliderRef.current;

        if (!slider) return;

        const startScroll = () => {

            intervalRef.current = setInterval(() => {

                const halfwayPoint =
                    slider.scrollWidth / 2;

                slider.scrollLeft += 1;

                if (slider.scrollLeft >= halfwayPoint) {

                    slider.scrollLeft = 0;

                }

            }, 180);

        };

        const stopScroll = () => {

            clearInterval(intervalRef.current);

        };

        startScroll();

        slider.addEventListener(
            "mouseenter",
            stopScroll
        );

        slider.addEventListener(
            "mouseleave",
            startScroll
        );

        return () => {

            clearInterval(intervalRef.current);

            slider.removeEventListener(
                "mouseenter",
                stopScroll
            );

            slider.removeEventListener(
                "mouseleave",
                startScroll
            );

        };

    }, []);
    const scrollLeft = () => {

        clearInterval(intervalRef.current);

        sliderRef.current.scrollBy({
            left: -430,
            behavior: "smooth"
        });

    };

    const scrollRight = () => {

        clearInterval(intervalRef.current);

        sliderRef.current.scrollBy({
            left: 430,
            behavior: "smooth"
        });

    };

    return (

        <section
            id="projects"
            className="projects"
        >

            <div className="projects-header">

                <span>
                    MY WORK
                </span>

                <h2>
                    Featured Projects
                </h2>

                <p>

                    A collection of projects showcasing
                    my skills in Full Stack Development,
                    Web Applications and Software Engineering.

                </p>

            </div>

            <div className="slider-controls">

                <button onClick={scrollLeft}>
                    <FaArrowLeft />
                </button>

                <button onClick={scrollRight}>
                    <FaArrowRight />
                </button>

            </div>

            <div
                className="projects-slider"
                ref={sliderRef}
            >

                {[...projects, ...projects].map((project, index) => (
                    <motion.div

                        key={`${project.id}-${index}`}

                        className="project-card"

                        initial={{
                            opacity: 0,
                            y: 60,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        viewport={{
                            once: true,
                        }}

                        transition={{
                            duration: 0.7,
                            delay: index * 0.1,
                        }}

                    >

                        <div className="project-image">

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                            <div className="image-watermark">
                                <span className="wm-sn">SN</span>
                                <span className="wm-line"></span>
                                <span className="wm-name">Sai Nikhil</span>
                            </div>

                        </div>

                        <div className="project-content">

                            <h3>
                                {project.title}
                            </h3>

                            <p>
                                {project.description}
                            </p>

                            <div className="tech-stack">

                                {project.tech.map((tech, i) => (

                                    <span key={i}>
                                        {tech}
                                    </span>

                                ))}

                            </div>

                            <div className="project-links">

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >

                                    <FaGithub />

                                    GitHub

                                </a>

                                <Link
                                    to={project.live}
                                    className="live-demo-btn"
                                >
                                    <FiExternalLink />
                                    Live Demo
                                </Link>

                            </div>

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>

    );

}

export default Projects;