import React from "react";
import Header from "./Header";
import BackgroundImage from "./BackgroundImage";
import ProfileImage from "./ProfileImage";
import IntroText from "./IntroText";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center p-4 relative min-h-screen">
            <Header />
            <BackgroundImage />
            
            {/* Profile Section - moved higher and made smaller */}
            <div className="relative z-10 mt-0 md:mt-20 scale-75 md:scale-100">
                <div className="rounded-[34px] border-4 border-white relative">
                    {/* Social Links - positioned inside the border with responsive positioning */}
                    <div className="relative top-20">
                        <SocialLinks />
                    </div>
                    <ProfileImage />
                </div>
            </div>
            {/* Intro Text - Adjusted spacing and made smaller on mobile */}
            <div className="mt-2 md:mt-4 px-4 w-full max-w-lg text-sm md:text-base">
                <IntroText />
            </div>
        </div>
    );
}