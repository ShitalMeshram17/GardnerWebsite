import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PortfolioSlider from "../components/PortfolioSlider";
import VideoSlider from "../components/VideoSlider";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import MapSection from "../components/MapSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-slate-900">
      <Header />

      <main>
        <Hero />
        <Services />
        <PortfolioSlider />
        <VideoSlider />
        <ContactForm />
        <MapSection />
      </main>

      <Footer />
    </div>
  );
}
