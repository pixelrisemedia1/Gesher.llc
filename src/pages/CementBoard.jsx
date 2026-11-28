import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CementBoard() {
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
            Cement Board
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-041.jpg"
                alt="Cement Board"
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
                At Gesher L.L.C-FZ, we proudly offer premium cement boards, an innovative construction material designed to accelerate building processes and deliver unmatched durability for UAE's dynamic construction landscape. Crafted from cement, cellulose fibers, and reinforcing additives, our cement boards—available in various sizes including 6mm, 9mm, and 12mm thicknesses—feature a robust density of 1,200–1,600 kg/m³, ensuring exceptional strength, fire resistance, and dimensional stability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Their standout water resistance makes them ideal for moisture-prone areas like bathrooms, basements, and coastal projects, preventing rot and mold where wood fails. Perfect for exterior cladding, interior walls, flooring underlayment, and roofing, these versatile boards streamline installation, reduce labor time, and eliminate pre-treatment needs, helping builders meet tight deadlines and ambitious targets.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sourced from trusted manufacturers with up to a 10-year warranty, Gesher L.L.C-FZ's cement boards align with UAE's sustainability goals, offering a cost-effective, eco-conscious solution for luxury villas and commercial projects. Visit our 17,000-square-meter yard to discover how our cement boards can elevate your vision with speed, resilience, and quality.
              </p>
            </motion.div>
          </div>

          {/* Available Sizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6mm Cement Board</h3>
              <p className="text-gray-700">Lightweight option for interior applications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9mm Cement Board</h3>
              <p className="text-gray-700">Versatile thickness for various applications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">12mm Cement Board</h3>
              <p className="text-gray-700">Maximum strength for demanding projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}