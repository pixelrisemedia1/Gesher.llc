import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Logs() {
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
            Logs
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-127.jpg"
                alt="Logs"
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
                At the heart of our distinguished offerings lies our unparalleled ability to source and supply exotic lumber logs, a testament to the expansive capacity of our 17,000-square-meter yard. This vast facility empowers us to import and meticulously store an extensive selection of premium timber, ensuring an abundant and diverse inventory.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through our direct relationships with sustainable forestry enterprises at the source, we secure prime-cut, first-option lumber logs, prioritizing environmental stewardship without compromising quality. Our commitment to sustainability is matched by our operational excellence, exemplified by our state-of-the-art sawmill facility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This enables us to provide bespoke, custom-cut solutions tailored to the precise specifications of your unique or specialized projects, particularly those requiring oversized logs. Whether your endeavor calls for the robust elegance of hardwood or the versatile efficiency of softwood, we offer a curated selection to suit your project's requirements, application, and budget, ensuring both exceptional quality and value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}