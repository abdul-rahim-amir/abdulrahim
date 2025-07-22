import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDownload } from 'react-icons/fa';
import img1 from '../assets/pic.jpg';
import img2 from '../assets/pic2.jpg';
import img3 from '../assets/pic3.jpg';
import myCV from '../assets/Rahim_Resume.pdf';

gsap.registerPlugin(ScrollTrigger);

const images = [img1, img2, img3];

export default function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hasTyped, setHasTyped] = useState(false);

    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const cursorRef = useRef(null);

    const fullText = `I'm Rahim, a full stack developer and UX/UI designer who loves combining design and code to build useful, user-friendly products. I started with a passion for clean interfaces and grew into a developer who enjoys the full process—from layouts to backend logic.`;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (hasTyped) return;

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                let index = 0;
                let typed = '';

                const typing = setInterval(() => {
                    if (index < fullText.length) {
                        typed += fullText[index];
                        textRef.current.innerHTML = `<i>${typed}</i>`;
                        index++;
                    } else {
                        clearInterval(typing);
                        setHasTyped(true);
                        if (cursorRef.current) {
                            cursorRef.current.style.display = 'none';
                        }
                    }
                }, 40);
            },
        });

        return () => trigger.kill();
    }, [hasTyped]);

    const handleDotClick = (index) => setCurrentImageIndex(index);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
        >
            <h2 className="text-5xl font-extrabold mb-14 relative z-10">About Me</h2>

            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
                {/* Left: Typing Text and Button */}
                <div className="flex-1 text-left">
                    <p className="text-lg leading-relaxed mb-8 min-h-[220px] tracking-wide text-gray-300">
                        <span ref={textRef}></span>
                        {!hasTyped && (
                            <span
                                ref={cursorRef}
                                className="inline-block w-[10px] h-[1.2em] bg-white animate-blink ml-1"
                            ></span>
                        )}
                    </p>

                    <a
                        href={myCV}
                        download="Rahim_CV.pdf"
                        className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition duration-300 shadow-md hover:shadow-white/30"
                    >
                        <FaDownload /> Download CV
                    </a>
                </div>

                {/* Right: Image and Dots */}
                <div className="flex-1 flex flex-col items-center group">
                    <div className="relative w-48 h-64 rounded-lg overflow-hidden shadow-xl border border-white/20 transform group-hover:rotate-1 transition-transform duration-300">
                        <img
                            src={images[currentImageIndex]}
                            alt={`Slide ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                    <div className="flex gap-3 mt-5">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentImageIndex
                                        ? 'bg-white scale-125'
                                        : 'bg-gray-600 opacity-60'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
