import React from "react";
import { FaDribbble, FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
    return (
        <>
            {/* Dribbble - Top Left */}
            <a
                href="https://dribbble.com/emrahim"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-8 -left-8 md:-top-8 md:-left-16 bg-white text-black px-2 py-1 md:px-4 md:py-2 rounded-full shadow-xl flex items-center gap-1 md:gap-2 z-50 hover:text-pink-500 transition-colors duration-300 text-[10px] md:text-sm"
            >
                <span className="block md:inline">Dribbble</span>
                <FaDribbble className="text-pink-500 group-hover:text-white text-xs md:text-base" />
            </a>

            {/* Behance - Top Right */}
            <a
                href="https://www.behance.net/abdulrahim170"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[60px] -right-8 md:top-[60px] md:-right-16 bg-white text-black px-2 py-1 md:px-4 md:py-2 rounded-full shadow-xl flex items-center gap-1 md:gap-2 z-50 hover:text-blue-500 transition-colors duration-300 text-[10px] md:text-sm"
            >
                <span className="block md:inline">Behance</span>
                <FaBehance className="text-blue-500 group-hover:text-white text-xs md:text-base" />
            </a>

            {/* LinkedIn - Middle Left */}
            <a
                href="https://www.linkedin.com/in/abdulrahimamir/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[140px] -left-8 md:top-[140px] md:-left-20 bg-white text-black px-2 py-1 md:px-4 md:py-2 rounded-full shadow-xl flex items-center gap-1 md:gap-2 z-50 hover:text-blue-600 transition-colors duration-300 text-[10px] md:text-sm"
            >
                <span className="block md:inline">Linkedin</span>
                <FaLinkedin className="text-blue-600 group-hover:text-white text-xs md:text-base" />
            </a>

            {/* GitHub - Bottom Right */}
            <a
                href="https://github.com/abdul-rahim-amir"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[200px] -right-8 md:top-[200px] md:-right-16 bg-white text-black px-2 py-1 md:px-4 md:py-2 rounded-full shadow-xl flex items-center gap-1 md:gap-2 z-50 hover:text-black transition-colors duration-300 text-[10px] md:text-sm"
            >
                <span className="block md:inline">Github</span>
                <FaGithub className="text-black group-hover:text-white text-xs md:text-base" />
            </a>
        </>
    );
}