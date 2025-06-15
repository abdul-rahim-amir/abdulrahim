import React from "react";
import profile from "../assets/pic.jpg";

export default function ProfileImage() {
    return (
        <div className="relative bg-white rounded-[30px] overflow-hidden w-[280px] shadow-lg">
            <img
                src={profile}
                alt="Abdul Rahim"
                className="w-full object-cover h-[380px]"
            />
        </div>
    );
}
