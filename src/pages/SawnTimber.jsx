import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SawnTimber() {
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
            Sawn Timber
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://sohotimber.com/wp-content/uploads/2025/07/Add-a-little-bit-of-body-text-15.jpg"
                alt="Sawn Timber"
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
                Sawn timber, encompassing both hardwood and softwood (White Wood), is a cornerstone of premium woodworking, offering a diverse range of strengths, aesthetics, and applications for discerning craftsmen and builders. Hardwood, derived from deciduous trees, is celebrated for its robust durability, rich grain patterns, and vibrant colors, making it ideal for luxurious furniture, intricate cabinetry, and sophisticated interior finishes. Softwood, or White Wood, sourced from coniferous trees, is prized for its light, elegant hue, smooth texture, and affordability, excelling in construction, formwork, and refined interior trim.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gesher L.L.C-FZ stands as one of the largest stockists, wholesalers, and retailers of sawn timber in the UAE, offering an extensive selection of species, sizes, and grades sourced from premier regions, including America, Europe, Africa, and the Far East for hardwoods, and Germany, Romania, Chile, and Canada for White Wood. Committed to delivering the finest quality timber, Gesher L.L.C-FZ caters to every construction, cabinetry, and interior decoration need, ensuring exceptional craftsmanship and enduring value at competitive prices for projects of all scales.
              </p>
            </motion.div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <Link to={createPageUrl("Hardwood")}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Hardwood</h3>
                <p className="text-gray-700">Premium hardwood from America, Europe, Africa, and the Far East</p>
              </motion.div>
            </Link>

            <Link to={createPageUrl("Softwood")}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Softwood (White Wood)</h3>
                <p className="text-gray-700">Quality softwood from Germany, Romania, Chile, and Canada</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}