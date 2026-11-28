import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JumboMDF() {
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
            Jumbo MDF
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed"
            >
              Jumbo MDF (6ft x 12ft) is an oversized Medium-Density Fiberboard designed to meet the demands of large-scale construction and furniture projects. With its extended dimensions, Jumbo MDF offers the advantage of minimizing joints and seams, making it ideal for creating expansive surfaces such as wall panels, large cabinetry, and commercial fixtures.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-700 leading-relaxed"
            >
              Crafted from fine wood fibers bonded with high-quality resin, Jumbo MDF maintains the smooth, uniform surface and excellent workability characteristic of standard MDF, while providing enhanced coverage for large-format applications. Available in both Plain and MR (Moisture-Resistant) variants, Gesher L.L.C-FZ's Jumbo MDF ensures flexibility, durability, and efficiency for ambitious projects requiring superior material performance and seamless finishes.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}