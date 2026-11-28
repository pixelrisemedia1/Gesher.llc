import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HollowChipboard() {
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
            Hollow Chipboard
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-087.jpg"
                alt="Hollow Chipboard"
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
                Hollow chipboard, also known as tubular chipboard or hollow core particleboard, is an engineered wood product made by compressing wood particles and resin into a lightweight board with a hollow, tubular core structure, typically formed by extruding or molding the material around a cellular framework. This construction makes it significantly lighter than solid chipboard or plywoods like Falcata, while maintaining adequate strength for non-structural applications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Its specific uses include lightweight door cores for interior doors, where its low weight reduces hardware strain, as well as partition panels, exhibition displays, and lightweight furniture components like wardrobe backs or shelving where heavy load-bearing is not required.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Compared to solid chipboard or bendy plywood, hollow chipboard is less durable and not suitable for high-moisture environments or heavy-duty applications, but its cost-effectiveness and ease of handling make it a practical choice for budget-conscious projects.
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