import React from "react";
import badgeIcon from "../assets/verified-badge.png"; // Save your uploaded image as this

export default function IntroText() {
    return (
        <div className="absolute bottom-10 left-10 max-w-md">
            <h1 className="font-poppins text-4xl font-bold mb-2 flex items-center gap-2">
                abdul_rahim
                <img
                    src={badgeIcon}
                    alt="Verified Badge"
                    className="w-5 h-5"
                    title="Verified"
                />
            </h1>
            <p className="font-poppins text-md text-gray-300">
                I love building easy-to-use, visually appealing web apps.<br />
                With a passion for both design and development, I turn ideas into smooth, working products.
            </p>
        </div>
    );
}
