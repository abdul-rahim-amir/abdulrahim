import React, { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <>
            {/* Header Bar */}
            <div className="absolute top-4 left-0 right-0 px-6 flex justify-between items-center text-sm font-poppins z-50">
                <div className="w-full text-center leading-tight">
                    <span className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide">
                        <span className="block">UI/UX DESIGNER</span>
                        <span className="block">FULL STACK WEB DEVELOPER</span>
                    </span>
                </div>

                {/* Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="absolute right-6 w-8 h-8 flex flex-col justify-center items-center gap-1 z-50"
                >
                    <span
                        className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`}
                    ></span>
                    <span
                        className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
                    ></span>
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-black text-white p-6 transform transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <nav className="mt-16 space-y-6 text-lg font-poppins">
                    <a href="#about" onClick={handleLinkClick} className="block hover:text-gray-300">About</a>
                    <a href="#services" onClick={handleLinkClick} className="block hover:text-gray-300">Services</a>
                    <a href="#skills" onClick={handleLinkClick} className="block hover:text-gray-300">Skills</a>
                    <a href="#projects" onClick={handleLinkClick} className="block hover:text-gray-300">Projects</a>
                    <a href="#contact" onClick={handleLinkClick} className="block hover:text-gray-300">Contact</a>
                </nav>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleMenu}
                ></div>
            )}
        </>
    );
}
