import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FilmfacedPly() {
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
            Filmfaced Plywood
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-041.jpg"
                alt="Filmfaced Plywood"
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
                Film-Faced Plywood, a robust and specialized engineered wood product, crafted from layered wood veneers bonded with adhesive and coated with a durable phenolic or melamine film, offering exceptional strength, moisture resistance, and a smooth, reusable surface. Designed for demanding applications, it is ideal for concrete formwork, scaffolding, and exterior construction projects, providing a high-quality finish and remarkable durability under harsh conditions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Its film coating ensures easy release from concrete and resistance to wear, making it a preferred choice for construction professionals. Gesher L.L.C-FZ, a leading supplier in the UAE, offers premium Film-Faced Plywood, available in various sizes and grades to meet diverse project needs. Gesher L.L.C-FZ delivers high-quality, cost-effective solutions for builders, contractors, and developers seeking reliable materials for their construction projects.
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
                  <td className="border border-gray-300 px-4 py-3">Vietnam</td>
                  <td className="border border-gray-300 px-4 py-3" rowSpan="3">W = 4ft x L = 8ft</td>
                  <td className="border border-gray-300 px-4 py-3" rowSpan="3">3.6 | 4 | 5.2 | 6 | 8 | 9 | 12 | 15 | 16 | 17.25 | 18 MM</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Indonesia</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">China</td>
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