// src/components/About.jsx
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/pic.jpg';
import img2 from '../assets/pic2.jpg';
import img3 from '../assets/pic3.jpg';
import myCV from '../assets/Rahim_CV.pdf';

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
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-10"
        >
            <h2 className="text-5xl font-extrabold mb-10">About Me</h2>

            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 text-left">
                    <p className="text-lg leading-relaxed mb-6">
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
                        className="inline-block bg-transparent text-white font-semibold px-5 py-3 rounded-[50px] border border-white hover:bg-white hover:text-black transition duration-300"
                    >
                        Download CV
                    </a>
                </div>

                <div className="flex-1 flex flex-col items-center">
                    <img
                        src={images[currentImageIndex]}
                        alt={`Slide ${currentImageIndex + 1}`}
                        className="w-48 h-64 object-cover rounded-md transform rotate-3 shadow-lg transition-all duration-500"
                    />
                    <div className="flex gap-2 mt-4">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-500'} transition-colors duration-300`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
