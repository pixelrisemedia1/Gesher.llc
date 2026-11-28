import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlainMDF() {
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
            Plain MDF
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed"
            >
              Our Plain MDF (Medium-Density Fiberboard), renowned for its smooth, uniform surface and consistent density, making it an ideal choice for a wide range of applications. Fine wood fibers bonded with resin and sourced from reliable, high-quality suppliers, it ensures exceptional workability for precise cutting, shaping, and finishing. Its grain-free surface provides a flawless base for painting, laminating, or veneering, delivering a polished, professional look. Commonly used in furniture manufacturing, cabinetry, shelving, and decorative moldings, Gesher L.L.C-FZ's premium MDF combines durability with design flexibility, offering a cost-effective solution for creating sleek, modern interiors with enduring appeal. Choose from a wide range of brands and sizes that is suitable for your building & construction needs.
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
                  <td className="border border-gray-300 px-4 py-3">Malaysia</td>
                  <td className="border border-gray-300 px-4 py-3">Vanachai</td>
                  <td className="border border-gray-300 px-4 py-3" rowSpan="8">Width 4 ft x Length 8ft</td>
                  <td className="border border-gray-300 px-4 py-3" rowSpan="8">2.7 | 3.6 | 4 | 5.2 | 5.5 | 6 | 8.5 | 9 | 12 | 15 | 17.25 | 18 | 25 MM</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">China</td>
                  <td className="border border-gray-300 px-4 py-3">Advance Fibre</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">India</td>
                  <td className="border border-gray-300 px-4 py-3">Robin</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Thailand</td>
                  <td className="border border-gray-300 px-4 py-3">Evergreen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"></td>
                  <td className="border border-gray-300 px-4 py-3">Green Panel</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"></td>
                  <td className="border border-gray-300 px-4 py-3">Finsa</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"></td>
                  <td className="border border-gray-300 px-4 py-3">WiseWood</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"></td>
                  <td className="border border-gray-300 px-4 py-3">Dongwah</td>
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