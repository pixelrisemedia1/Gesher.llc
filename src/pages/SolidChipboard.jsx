import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SolidChipboard() {
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
            Solid Chipboard
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-070.jpg"
                alt="Solid Chipboard"
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
                Solid Chipboard, also known as high-density particleboard, is a robust engineered wood product made by compressing wood chips, sawdust, and resin (typically urea-formaldehyde) under high pressure and heat, resulting in a denser, stronger board than standard chipboard. Its uniform, smooth surface and enhanced durability make it ideal for specific applications such as heavy-duty furniture components (e.g., cabinet carcasses, shelving, and tabletops), shop fittings, and interior joinery where stability and load-bearing capacity are required.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Unlike lighter plywoods like Falcata or flexible bendy plywood, solid chipboard offers greater rigidity and screw-holding strength but is less suitable for curved designs or outdoor use due to moisture sensitivity.
              </p>
            </motion.div>
          </div>

          {/* Specifications Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#C4915C] text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left">ORIGIN</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">SIZE</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">THICKNESS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Thailand</td>
                  <td className="border border-gray-300 px-4 py-3" rowSpan="2">W= 3ft x L=7ft</td>
                  <td className="border border-gray-300 px-4 py-3" rowSpan="2">33 | 38 | 44 MM</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Germany</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}