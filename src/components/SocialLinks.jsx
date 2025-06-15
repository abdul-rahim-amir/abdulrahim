import React from "react";
import { FaDribbble, FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
    return (
        <>
            <a
                href="https://www.linkedin.com/in/abdulrahimamir/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[140px] -left-20 bg-white text-black px-4 py-2 rounded-full shadow-xl flex items-center gap-2 z-50 hover:text-blue-600 transition-colors duration-300"
            >
                Linkedin <FaLinkedin className="text-blue-600 group-hover:text-white" />
            </a>

            <a
                href="https://www.behance.net/abdulrahim170"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[60px] -right-16 bg-white text-black px-4 py-2 rounded-full shadow-xl flex items-center gap-2 z-50 hover:text-blue-500 transition-colors duration-300"
            >
                Behance <FaBehance className="text-blue-500 group-hover:text-white" />
            </a>

            <a
                href="https://github.com/abdul-rahim-amir"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[200px] -right-16 bg-white text-black px-4 py-2 rounded-full shadow-xl flex items-center gap-2 z-50 hover:text-black transition-colors duration-300"
            >
                Github <FaGithub className="text-black group-hover:text-white" />
            </a>

            <a
                href="https://dribbble.com/emrahim"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-8 -left-16 bg-white text-black px-4 py-2 rounded-full shadow-xl flex items-center gap-2 z-50 hover:text-pink-500 transition-colors duration-300"
            >
                Dribbble <FaDribbble className="text-pink-500 group-hover:text-white" />
            </a>
        </>
    );
}
