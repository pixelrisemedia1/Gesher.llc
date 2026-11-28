import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HardwoodLogs() {
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
            Hardwood Logs
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-135.jpg"
                alt="Hardwood Logs"
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
                Are you seeking robust, enduring, and exotic lumber to elevate your distinguished villa project or prestigious construction endeavor? We invite you to explore our finest collection of premium hardwood logs, where uncompromising quality meets exceptional variety.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our extensive range includes the remarkably dense and resilient Red and Yellow Balau, ideal for projects demanding superior strength and longevity; the versatile mid-range Bilinga and Iroko, renowned for their balanced durability and aesthetic appeal; and the cost-effective yet reliable Dabema, offering steadfast performance for diverse applications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We warmly welcome you to visit our expansive yard and saw-mill, where you can immerse yourself in the grandeur of our substantial lumber logs and hand-select the perfect species to bring your vision to life with unmatched elegance and durability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}