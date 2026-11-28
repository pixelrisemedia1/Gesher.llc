import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MelamineMDF() {
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
            Melamine MDF
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed"
            >
              Melamine MDF is a premium engineered wood product featuring a durable melamine surface finish, offering exceptional resistance to scratches, moisture, and everyday wear. This pre-finished board combines the smooth, uniform structure of MDF with a decorative melamine layer, available in a wide range of colors, patterns, and wood grain textures.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-700 leading-relaxed"
            >
              Ideal for furniture manufacturing, kitchen cabinetry, wardrobes, and interior fittings, Melamine MDF provides a cost-effective, ready-to-use solution that eliminates the need for additional painting or laminating. Gesher L.L.C-FZ offers a diverse selection of Melamine MDF from trusted brands, ensuring high-quality, stylish finishes for modern interior design projects. Choose from various sizes and designs to suit your construction and decoration needs.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}