import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Chipboard() {
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
            Chipboard
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-079.jpg"
                alt="Chipboard"
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
                Chipboard, also known as Particleboard, is an engineered wood product made by compressing wood chips, sawdust, and resin or adhesive under high pressure and heat to form a dense, uniform board. The manufacturing process involves mixing wood particles with a synthetic resin binder, such as urea-formaldehyde, forming the mixture into sheets, and then pressing and heating it to cure the adhesive, resulting in a cost-effective, versatile material.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chipboard is widely used in furniture manufacturing (e.g., shelves, cabinets, and table cores), flooring underlayment, and interior construction for non-structural applications like wall panels and partitions due to its affordability and smooth surface suitable for laminating or veneering. Gesher L.L.C-FZ, a UAE-based supplier, offers chipboard alongside other wood products to meet various project needs.
              </p>
            </motion.div>
          </div>

          {/* Applications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Furniture Manufacturing</h3>
              <p className="text-gray-700">Ideal for shelves, cabinets, and table cores with smooth laminating surface</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flooring Underlayment</h3>
              <p className="text-gray-700">Cost-effective solution for flooring substrate applications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interior Construction</h3>
              <p className="text-gray-700">Perfect for wall panels and partitions in non-structural applications</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}