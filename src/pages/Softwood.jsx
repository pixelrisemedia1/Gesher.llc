import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Softwood() {
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
            Softwood (White Wood)
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-113.png"
                alt="Softwood White Wood"
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
                White Wood sawn timber, esteemed for its light, elegant appearance and robust versatility, is a premium softwood derived from coniferous trees, offering a smooth texture and consistent grain ideal for a wide range of applications. Renowned for its strength, affordability, and ease of workability, it is a preferred choice for construction, furniture crafting, and refined interior finishes, delivering both structural integrity and a clean, timeless aesthetic.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gesher L.L.C-FZ stands as one of the largest stockists, wholesalers, and retailers of White Wood sawn timber in the UAE, offering an extensive selection of sizes and grades sourced from premier regions, including Germany, Romania, Chile, and Canada. With a commitment to providing the finest quality timber, Gesher L.L.C-FZ ensures exceptional choices for construction, cabinetry, and interior decoration needs, delivering superior craftsmanship and lasting value at competitive prices.
              </p>
            </motion.div>
          </div>

          {/* Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">White Wood</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                White Wood sawn timber offers a smooth texture and consistent grain ideal for a wide range of applications. Perfect for construction, furniture crafting, and refined interior finishes.
              </p>
              <p className="text-sm text-gray-600">Origin: Germany, Chile, Romania, Austria</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Canadian S4S</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Impeccably smooth finish and immediate usability, Canadian S4S (Surfaced Four Sides) is a refined choice for crafting elegant furniture and sophisticated interior trim. Its meticulously planed surfaces and consistent texture offer a polished, ready-to-use material.
              </p>
              <p className="text-sm text-gray-600">Origin: Canadian mills (SPF/softwoods)</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}