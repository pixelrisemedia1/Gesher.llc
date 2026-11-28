import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Plywood() {
  const types = [
    { name: "Commercial Plywood", description: "Versatile plywood for general construction and furniture applications" },
    { name: "Film-Faced Plywood", description: "Durable surface for concrete formwork and construction" },
    { name: "Waterproof Plywood", description: "Enhanced moisture resistance for humid environments" },
    { name: "Bendy Plywood", description: "Flexible plywood for curved and architectural designs" },
    { name: "Falcata Plywood", description: "Lightweight option for various applications" },
    { name: "Birch Plywood", description: "High-strength premium finish for demanding projects" }
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
            Plywood
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-011.jpg"
                alt="Plywood"
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
                Plywood, a highly versatile engineered wood product, is crafted from thin layers of wood veneers bonded together with adhesive, offering exceptional strength, stability, and adaptability for a wide range of applications. Its layered construction ensures durability and resistance to warping, making it ideal for construction, furniture, and decorative projects.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gesher L.L.C-FZ, a leading supplier in the UAE, offers an extensive range of plywood types, including Commercial Plywood for general use, Film-Faced Plywood for concrete formwork, Waterproof Plywood for moisture-prone environments, Bendy Plywood for curved designs, Falcata Plywood for lightweight applications, and Birch Plywood for high-strength, premium finishes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sourced from trusted regions such as India, Indonesia, Vietnam, Malaysia, Brazil, and China, Gesher L.L.C-FZ provides a diverse selection of sizes and grades to meet varied budgetary needs, ensuring top-quality solutions for construction, cabinetry, and interior design projects across the UAE.
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