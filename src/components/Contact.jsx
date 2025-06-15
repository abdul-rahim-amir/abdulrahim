import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaDribbble, FaBehance } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className="bg-black text-white py-16 px-6" id="contact">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold mb-6">Let's Connect</h2>
                <p className="text-gray-400 mb-12 text-lg">
                    Got a project idea or just want to say hi? I’d love to hear from you. Let’s build something great together.
                </p>

                {/* Two-Column Section */}
                <div className="flex flex-col md:flex-row justify-between gap-10 text-left">
                    {/* Left: Contact Details */}
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-white text-lg" />
                            <span className="text-gray-300 text-lg">+92 324 7219681</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-white text-lg" />
                            <span className="text-gray-300 text-lg">chaudharyabdulrahimamir@gmail.com</span>
                        </div>
                    </div>

                    {/* Right: Social Links */}
                    <div className="flex-1 space-y-6">
                        <a
                            href="https://www.linkedin.com/in/abdulrahimamir/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-gray-300 hover:text-white transition"
                        >
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/abdul-rahim-amir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-gray-300 hover:text-white transition"
                        >
                            <FaGithub /> GitHub
                        </a>
                        <a
                            href="https://dribbble.com/emrahim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-gray-300 hover:text-white transition"
                        >
                            <FaDribbble /> Dribbble
                        </a>
                        <a
                            href="https://www.behance.net/abdulrahim170"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-gray-300 hover:text-white transition"
                        >
                            <FaBehance /> Behance
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
