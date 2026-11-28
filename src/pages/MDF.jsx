import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MDF() {
  const types = [
    { name: "Plain MDF", description: "Versatile general-purpose MDF for everyday applications" },
    { name: "Moisture-Resistant (MR) MDF", description: "Enhanced protection for humid environments" },
    { name: "Fire-Retardant (FR) MDF", description: "Safety-focused MDF for fire-resistant projects" },
    { name: "Melamine MDF", description: "Pre-finished surfaces with durable melamine coating" },
    { name: "Jumbo MDF (6ft x 12ft)", description: "Large-scale MDF for extensive applications" }
  ];

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
            MDF
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-031.jpg"
                alt="MDF"
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
                Medium-Density Fiberboard (MDF) is a versatile, engineered wood product crafted from fine wood fibers bonded with resin, offering a smooth, uniform surface ideal for furniture, cabinetry, and interior applications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gesher L.L.C-FZ supplies an extensive range of MDF types to meet diverse needs in the UAE market, including Plain MDF for general use, Moisture-Resistant (MR) MDF for humid environments, Fire-Retardant (FR) MDF for safety-focused projects, Melamine MDF with durable pre-finished surfaces, and Jumbo MDF (6ft x 12ft) for large-scale applications.
              </p>
            </motion.div>
          </div>

          {/* Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {types.map((type, idx) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-700">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}