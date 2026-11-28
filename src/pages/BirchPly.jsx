import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BirchPly() {
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
            Birch Plywood
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed"
            >
              Birch Plywood is a premium-grade engineered wood product renowned for its exceptional strength, stability, and aesthetic appeal. Crafted from multiple layers of birch veneer bonded together with high-quality adhesive, it offers superior durability and a smooth, uniform surface with a characteristic light, attractive grain pattern.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-700 leading-relaxed"
            >
              Ideal for high-end furniture, cabinetry, interior design, and decorative applications, Birch Plywood is prized for its excellent screw-holding capacity, resistance to warping, and ability to accept stains, paints, and finishes beautifully. Gesher L.L.C-FZ offers top-quality Birch Plywood sourced from trusted suppliers, ensuring premium performance and elegant finishes for discerning projects. Choose from various thicknesses and grades to meet your specific construction and design requirements.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}