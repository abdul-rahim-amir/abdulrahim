import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { LayoutDashboard } from "lucide-react";
import uiuxImage from "../assets/uiux-image.png";
import webImage from "../assets/web-image.png";

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState("uiux");

    const tabs = [
        { id: "uiux", label: "UI/UX Design", icon: <LayoutDashboard /> },
        { id: "web", label: "Web Development", icon: <FaCode /> },
    ];

    const tabContent = {
        uiux: {
            title: "UI/UX Design",
            description:
                "I design intuitive, modern interfaces that put the user first. From wireframes to final visuals, I ensure every pixel serves a purpose and elevates user experience.",
            image: uiuxImage,
        },
        web: {
            title: "Full Stack Web Development",
            description:
                "From frontend to backend, I build responsive, scalable, and fast web applications using modern technologies like React, Node.js, MongoDB, and more.",
            image: webImage,
        },
    };

    const { title, description, image } = tabContent[activeTab];

    return (
        <section id="services" className="py-20 bg-[#1A1A1A] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">My Services</h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                        Explore how I bring ideas to life through creative design and modern web development.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition text-sm sm:text-base border border-white/10 ${
                                activeTab === tab.id
                                    ? "bg-white text-black shadow-lg"
                                    : "bg-[#2a2a2a] text-white hover:bg-[#333] hover:text-white"
                            }`}
                        >
                            <span className="text-lg">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Card */}
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-[#222] rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-500">
                    {/* Left Side */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="w-14 h-14 mx-auto lg:mx-0 mb-6 rounded-full bg-white text-black flex items-center justify-center shadow-lg text-xl">
                            {tabs.find((t) => t.id === activeTab)?.icon}
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h3>
                        <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
                            {description}
                        </p>
                        <a
                            href="https://wa.me/923247219681"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-gray-200 transition-shadow shadow-md hover:shadow-white/30"
                        >
                            Let’s Chat <BiMessageRoundedDots className="text-base" />
                        </a>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden group">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-xl"
                        />
                        {/* Grid overlay only (no blur!) */}
                        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0 pointer-events-none z-10">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div key={i} className="border border-white/10" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
