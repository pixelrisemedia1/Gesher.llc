import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background - Dubai Skyline */}
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full object-cover pointer-events-none"
            src="https://www.youtube.com/embed/VCAstmdDpqE?autoplay=1&mute=1&loop=1&playlist=VCAstmdDpqE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title="Dubai Skyline"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '177.78vh',
              height: '100vh',
              minWidth: '100%',
              minHeight: '56.25vw',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>


      </section>

      <Footer />
    </div>
  );
}