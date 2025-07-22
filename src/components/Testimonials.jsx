import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        name: "Emmanuel Khondowe",
        feedback: "Outstanding UI/UX skills! The design was intuitive, user-focused, and modern. Highly recommended.",
        image: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
        name: "Gift Tembo",
        feedback: "The full stack solution delivered exceeded our expectations. Frontend was sleek and the backend rock-solid.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
        name: "Royce Eve. J",
        feedback: "A pleasure working together! Loved the clean design, performance, and attention to detail throughout.",
        image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
];

const TestimonialCard = ({ name, feedback, image }) => (
    <div className="bg-[#1A1A1A] border border-[#ffffff22] rounded-2xl p-6 w-72 shadow-xl my-4 mx-4 flex-shrink-0 transition-transform hover:scale-105 duration-300">
        <div className="flex flex-col items-center mb-4">
            <img
                src={image}
                alt={name}
                className="w-14 h-14 rounded-full mb-2 border-2 border-[#DD9700]"
            />
            <h2 className="text-white font-semibold text-lg">{name}</h2>
        </div>
        <p className="text-sm text-gray-300 italic text-center leading-relaxed">"{feedback}"</p>
    </div>
);

const VerticalMarquee = ({ direction = "up" }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;

        const scrollStep = 1;
        const intervalDelay = 30;

        const intervalId = setInterval(() => {
            if (!paused) {
                if (direction === "up") {
                    if (container.scrollTop >= content.scrollHeight / 2) {
                        container.scrollTop = 0;
                    } else {
                        container.scrollTop += scrollStep;
                    }
                } else {
                    if (container.scrollTop <= 0) {
                        container.scrollTop = content.scrollHeight / 2;
                    } else {
                        container.scrollTop -= scrollStep;
                    }
                }
            }
        }, intervalDelay);

        return () => clearInterval(intervalId);
    }, [paused, direction]);

    return (
        <div
            ref={containerRef}
            className="h-96 overflow-hidden mx-2"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div ref={contentRef}>
                {[...testimonials, ...testimonials].map((t, i) => (
                    <TestimonialCard
                        key={`${direction}-testimonial-${i}`}
                        name={t.name}
                        feedback={t.feedback}
                        image={t.image}
                    />
                ))}
            </div>
        </div>
    );
};

const HorizontalMarquee = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;

        const scrollStep = 1;
        const intervalDelay = 30;

        const intervalId = setInterval(() => {
            if (!paused) {
                if (container.scrollLeft >= content.scrollWidth / 2) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += scrollStep;
                }
            }
        }, intervalDelay);

        return () => clearInterval(intervalId);
    }, [paused]);

    return (
        <div
            ref={containerRef}
            className="w-full overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div ref={contentRef} className="flex">
                {[...testimonials, ...testimonials].map((t, i) => (
                    <TestimonialCard
                        key={`horizontal-testimonial-${i}`}
                        name={t.name}
                        feedback={t.feedback}
                        image={t.image}
                    />
                ))}
            </div>
        </div>
    );
};

const TestimonialSection = () => {
    return (
        <section className="bg-black py-16 px-4 text-center font-poppins">
            <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-10 uppercase tracking-wide">
                Testimonials
            </h2>

            {/* Mobile View: Horizontal */}
            <div className="block sm:block xl:hidden">
                <HorizontalMarquee />
            </div>

            {/* Desktop View: Multiple Vertical Columns */}
            <div className="hidden xl:flex justify-center items-start gap-8 flex-wrap">
                <VerticalMarquee direction="up" />
                <VerticalMarquee direction="down" />
                <VerticalMarquee direction="up" />
            </div>
        </section>
    );
};

export default TestimonialSection;
