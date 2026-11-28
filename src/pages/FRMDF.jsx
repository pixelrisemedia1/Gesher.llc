import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FRMDF() {
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
            FR MDF (Fire-Retardant)
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed"
            >
              FR MDF (Fire-Retardant Medium-Density Fiberboard) is an engineered wood product specifically designed to enhance fire safety in residential and commercial spaces. Crafted from fine wood fibers bonded with specialized fire-retardant resins, it offers superior flame resistance while maintaining the smooth, consistent surface and workability that MDF is known for.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-700 leading-relaxed"
            >
              Perfect for applications requiring enhanced fire safety standards, such as commercial buildings, hotels, hospitals, and public spaces. Gesher L.L.C-FZ offers premium FR MDF from trusted brands, ensuring compliance with safety regulations while delivering exceptional quality and performance. Choose from a wide range of sizes suitable for your building & construction needs.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}