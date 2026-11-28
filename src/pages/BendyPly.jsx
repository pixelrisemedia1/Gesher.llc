import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BendyPly() {
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
            Bendy Plywood
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed"
            >
              Bendy Plywood, also known as Flexible Plywood or Flexi-Ply, is a specialized engineered wood product designed to bend and curve with ease, making it ideal for creating curved surfaces and architectural designs. Unlike standard plywood, Bendy Plywood is constructed with thinner veneers and a flexible core, allowing it to conform to various radii without cracking or breaking.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-700 leading-relaxed"
            >
              Perfect for furniture design, interior decor, exhibition stands, and architectural elements such as curved walls, reception desks, and decorative panels, Bendy Plywood offers exceptional versatility and creative freedom. Gesher L.L.C-FZ provides premium Bendy Plywood sourced from trusted manufacturers, available in various thicknesses and grades to suit diverse design applications. Choose Bendy Plywood to bring innovative, curved designs to life with precision and elegance.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}