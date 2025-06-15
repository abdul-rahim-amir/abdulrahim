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
            <div className="relative z-10 mt-10 md:mt-20">
                <div className="rounded-[34px] border-4 border-white">
                    <div className="relative top-20">
                        <SocialLinks />
                    </div>
                    <ProfileImage />
                </div>
            </div>
            <IntroText />
        </div>
    );
}
