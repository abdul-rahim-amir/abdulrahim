import React from "react";
import HeroSection from "./components/HeroSection"; // ✅ Contains Header + Hero content
import About from "./components/About";
import Services from "./components/ServicesSection";
import Skills from "./components/Skills";
import Work from "./components/MyWork";
import Footer from "./components/Contact";

export default function App() {
  return (
    <>
      {/* Hero section with Header and content */}
      <div className="min-h-screen bg-black text-white relative">
        <HeroSection />
      </div>

      {/* Page content sections */}
      <About />
      <Skills />
      <Services />
      <Work />
      <Footer />
    </>
  );
}
