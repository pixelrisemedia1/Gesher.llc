import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* About Us Content */}
      <section className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          >
            About Us
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src="/Gesher.llc/assets/asset-136.png" 
                alt="GESHER LLC-FZ"
                className="w-80 h-auto"
              />
            </motion.div>

            {/* About Text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-700 leading-relaxed space-y-4"
            >
              <p>
                Gesher L.L.C-FZ has been a beacon of excellence in the UAE and GCC markets, proudly delivering an extensive portfolio of premium construction and flooring materials with an unwavering commitment to quality, sustainability, and innovation. From our expansive yard, we offer a meticulously curated selection of exotic lumber, Medium-Density Fiberboard (MDF), plywood, hardwood and softwood sawn timber, Oriental Standard Boards (OSB), cement boards, and a comprehensive range of flooring solutions, including PVC and rubber flooring, MDF laminate boards, laminate sheets, and essential flooring accessories such as PVC skirting, edge banding, and high-performance adhesives, all tailored to meet the diverse needs of builders, architects, and designers across the region.
              </p>
            </motion.div>
          </div>

          {/* Additional Paragraphs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed"
          >
            <p>
              Our premium hardwood logs, responsibly sourced from sustainable forestry partners, ensuring environmental integrity while delivering exceptional strength, durability, and energy efficiency. With direct connections to global forestry networks and our state-of-the-art sawmill, we provide bespoke solutions to bring your vision to life with precision and elegance.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}