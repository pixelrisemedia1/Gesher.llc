import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SoftwoodLogs() {
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
            Softwood Logs
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-097.jpg"
                alt="Softwood Logs"
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
                We are confident that upon experiencing our Softwood Logs, you will be delighted by their exceptional burning quality and remarkable value. Crafted primarily from Larch and Cedar, these logs offer a refined and efficient fuel source.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When measured by weight, softwood delivers an energy output comparable to that of hardwood, ensuring both warmth and economy in every use.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}