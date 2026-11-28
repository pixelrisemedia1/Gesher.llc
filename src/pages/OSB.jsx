import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OSB() {
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
            OSB (Oriented Strand Board)
          </motion.h1>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-700 leading-relaxed"
            >
              <p>
                Oriented Strand Board (OSB) is an engineered wood panel made from compressed layers of wood strands bonded with adhesive. It offers excellent strength, durability, and cost-effectiveness for various construction applications.
              </p>
              <p>
                OSB is widely used in residential and commercial construction for sheathing, subflooring, and roof decking. Its structural integrity and moisture resistance make it a reliable choice for builders and contractors.
              </p>
              <p>
                Gesher L.L.C-FZ provides high-quality OSB products that meet international standards, ensuring optimal performance for your construction projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}