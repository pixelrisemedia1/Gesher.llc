import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Flooring() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Flooring
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-041.jpg"
                alt="Flooring"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-gray-700 leading-relaxed">
                Transform your environments with our premium range of flooring and tile solutions, designed to blend functionality with aesthetic appeal. We offer an extensive selection of high-quality materials, including PVC and rubber flooring in both printed and solid formats, catering to diverse needs. Our tile collection features laminate sheets, metal laminates, decorative metal laminates, acrylic sheets, and HPL compact sheets, ensuring versatility for various applications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our products are tailored for a wide range of settings, including commercial spaces, semi-commercial environments, hospitals and clinics, gymnasiums, nurseries, elevators, and residential properties. In addition, we provide complementary products such as PVC skirting, edge banding, adhesives, and cement boards to deliver comprehensive solutions for your projects.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a commitment to quality and innovation, our offerings combine durability, style, and practicality to meet the unique demands of every space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}