import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CommercialPly() {
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
            Commercial Plywood
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed"
            >
              Commercial Plywood, a versatile engineered wood product, offering a balanced combination of strength, stability, and affordability. Its smooth, consistent surface makes it ideal for a wide range of applications, including furniture manufacturing, interior paneling, shelving, and general-purpose construction projects. Renowned for its ease of workability and ability to accept paints, laminates, or veneers, Commercial Plywood is a staple for creating durable, aesthetically pleasing interiors.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-700 leading-relaxed"
            >
              Gesher L.L.C-FZ, a leading supplier in the UAE, offers premium Commercial Plywood sourced from trusted global suppliers, available in various sizes and grades to meet diverse project needs. With the ability to supply any quantity at competitive pricing, Gesher L.L.C-FZ ensures high-quality solutions for builders, designers, and contractors seeking reliable, budget-friendly materials for their projects.
            </motion.p>
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
                  <th className="border border-gray-300 px-4 py-3 text-left">BRAND</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">SIZE</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">THICKNESS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Thailand</td>
                  <td className="border border-gray-300 px-4 py-3">Advance Fibre</td>
                  <td className="border border-gray-300 px-4 py-3">W = 6ft x L = 12ft</td>
                  <td className="border border-gray-300 px-4 py-3">12 | 18 MM</td>
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