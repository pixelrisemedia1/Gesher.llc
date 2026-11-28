import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FalcataPly() {
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
            Falcata Plywood
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed"
            >
              Falcata Plywood is a lightweight, cost-effective engineered wood product made from Falcata (Paraserianthes falcataria) wood, a fast-growing tropical hardwood. Known for its exceptional lightness and ease of handling, Falcata Plywood is ideal for applications where weight reduction is a priority without compromising structural integrity.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-700 leading-relaxed"
            >
              Perfect for furniture manufacturing, interior paneling, packaging, and DIY projects, this plywood offers good workability, a smooth surface, and affordability. Gesher L.L.C-FZ supplies premium Falcata Plywood from reliable sources, available in various sizes and thicknesses to meet diverse construction and design needs. Choose Falcata Plywood for projects requiring a balance of performance, lightweight characteristics, and budget-friendly solutions.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}