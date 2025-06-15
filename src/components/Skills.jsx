import Marquee from "react-fast-marquee";
import canvaLogo from "../assets/canva.svg";
import tailwindLogo from "../assets/tailwind-css.svg"; // Ensure this exists

const skills = [
    // UI/UX
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Adobe XD", src: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
    { name: "Illustrator", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" },
    { name: "Photoshop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "Canva", src: canvaLogo },

    // Frontend
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vite", src: "https://vitejs.dev/logo.svg" },
    { name: "Tailwind CSS", src: tailwindLogo },
    { name: "Material UI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },

    // Backend
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "API", src: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-api-web-development-flaticons-lineal-color-flat-icons.png" },

    // Tools
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Netlify", src: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
];

const SkillsSection = () => {
    const half = Math.ceil(skills.length / 2);
    const topRow = skills.slice(0, half);
    const bottomRow = skills.slice(half);

    return (
        <section id="skills" className="py-14 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10">
                    The Tech Stack That Powers My Craft
                </h2>

                {/* Top Marquee */}
                <Marquee gradient={false} speed={40} pauseOnHover className="mb-6">
                    {topRow.map((skill, i) => (
                        <div key={i} className="flex flex-col items-center justify-center mx-4 sm:mx-6 min-w-[70px]">
                            <img
                                src={skill.src}
                                alt={skill.name}
                                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain mb-1 hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-[10px] sm:text-xs text-gray-300">{skill.name}</span>
                        </div>
                    ))}
                </Marquee>

                {/* Bottom Marquee */}
                <Marquee gradient={false} speed={40} pauseOnHover direction="right">
                    {bottomRow.map((skill, i) => (
                        <div key={i} className="flex flex-col items-center justify-center mx-4 sm:mx-6 min-w-[70px]">
                            <img
                                src={skill.src}
                                alt={skill.name}
                                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain mb-1 hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-[10px] sm:text-xs text-gray-300">{skill.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default SkillsSection;
