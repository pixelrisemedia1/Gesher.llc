import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MRMDF() {
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
            MR MDF
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed"
            >
              Gesher L.L.C-FZ's MR MDF (Moisture-Resistant Medium-Density Fiberboard), is designed for exceptional performance in humid environments, making it a premier choice for the UAE market. Crafted from premium wood fibers bonded with moisture-resistant resins and sourced from trusted, top-tier suppliers, it offers a smooth, consistent surface ideal for painting, laminating, or veneering. Its enhanced resistance to moisture ensures durability in challenging conditions, while its excellent workability supports precise cutting and shaping for flawless finishes. Perfect for kitchen cabinetry, bathroom vanities, and decorative interior elements, Gesher L.L.C-FZ's MR MDF delivers unmatched reliability and aesthetic versatility, creating enduring, stylish solutions for modern interiors. Choose from a wide range of brands and sizes that is suitable for your building & construction needs.
            </motion.p>
          </div>

          {/* Specifications Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#C4915C] text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left">ORIGIN</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">BRAND</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">SIZE</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Thickness in MM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Thailand</td>
                  <td className="border border-gray-300 px-4 py-3">Dongwah</td>
                  <td className="border border-gray-300 px-4 py-3" rowSpan="7">W = 4ft x L = 8ft</td>
                  <td className="border border-gray-300 px-4 py-3" rowSpan="7">6 | 9 | 11.25 | 12 | 18 MM</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Malaysia</td>
                  <td className="border border-gray-300 px-4 py-3">Vanachai</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">China</td>
                  <td className="border border-gray-300 px-4 py-3">EverGreen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"></td>
                  <td className="border border-gray-300 px-4 py-3">Finsa</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"></td>
                  <td className="border border-gray-300 px-4 py-3">Advance Fibre</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"></td>
                  <td className="border border-gray-300 px-4 py-3">Panel Plus</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"></td>
                  <td className="border border-gray-300 px-4 py-3">WiseWood</td>
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