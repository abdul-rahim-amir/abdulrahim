import React from "react";
import bg from "../assets/bg.png";

export default function BackgroundImage() {
    return (
        <div
            className="absolute inset-0 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        />
    );
}
