import React from "react";
import { motion } from "framer-motion";

export default function BrandCarousel() {
  const brands = [
    { 
      name: "DURO", 
      image: "/Gesher.llc/assets/asset-135.jpg"
    },
    { 
      name: "GP", 
      image: "/Gesher.llc/assets/asset-137.jpg"
    },
    { 
      name: "Kronospan", 
      image: "/Gesher.llc/assets/asset-127.jpg"
    },
    { 
      name: "MIKA", 
      image: "/Gesher.llc/assets/asset-082.jpg"
    },
  ];

  // Triple the brands for seamless infinite scroll
  const allBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Brands we represent in UAE
        </h2>
        
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {allBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-52 h-36 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain p-6"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}