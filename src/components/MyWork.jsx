// src/components/HorizontalProjects.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import figmaIcon from "../assets/figma.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Cine Hub",
        image: project1,
        description:
            "A mobile app that shows real-time cinema slot availability, helping users easily find and plan movie showtimes.",
        technologies: [figmaIcon],
    },
    {
        id: 2,
        title: "Travel Tribes",
        image: project2,
        description:
            "An app to find and connect with travel buddies globally. Plan, meet, and explore with like-minded adventurers.",
        technologies: [figmaIcon],
    },
    {
        id: 3,
        title: "Gozentric",
        image: project3,
        description:
            "An e-commerce site for drop shoulder shirts featuring unique designs, patterns, texts, and images. Focused on style, customization, and user-friendly shopping.",
        technologies: [figmaIcon, htmlIcon, cssIcon, jsIcon, reactIcon],
    },
    {
        id: 4,
        title: "NodeLabs Portal",
        image: project4,
        description:
            "A responsive employee dashboard built with React to manage internal operations, role-based access, and communication.",
        technologies: [figmaIcon, htmlIcon, cssIcon, jsIcon, reactIcon],
    },
];

export default function HorizontalProjects() {
    const containerRef = useRef();
    const scrollRef = useRef();

    useEffect(() => {
        const sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: scrollRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => `+=${scrollRef.current.offsetWidth}`,
            },
        });

        return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }, []);

    return (
        <section
            id="projects"
            ref={scrollRef}
            className="relative w-full min-h-screen overflow-hidden bg-black text-white"
        >
            {/* Section Title */}
            <h1 className="absolute top-6 left-6 sm:top-10 sm:left-10 text-3xl sm:text-5xl font-extrabold z-30">
                My Work
            </h1>

            {/* Horizontal scroll container */}
            <div ref={containerRef} className="flex w-[400vw] h-full">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="panel flex-shrink-0 w-screen min-h-screen flex items-center justify-center px-4 sm:px-10 py-20"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl w-full">
                            {/* Project Image */}
                            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[400px] xl:w-[500px] h-[400px] sm:h-[500px] lg:h-[600px] bg-black rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="text-left max-w-lg">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                                    {project.title}
                                </h2>
                                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                                    {project.description}
                                </p>
                                <h4 className="font-semibold text-white mb-2">
                                    Technologies Used:
                                </h4>
                                <div className="flex items-center gap-3 flex-wrap">
                                    {project.technologies.map((tech, i) => (
                                        <img
                                            key={i}
                                            src={tech}
                                            alt="tech-icon"
                                            className="w-6 h-6 sm:w-8 sm:h-8"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
