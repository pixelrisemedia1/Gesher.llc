import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Hardwood() {
  const species = [
    {
      category: "Malaysian",
      items: [
        { name: "Red Meranti", description: "Ideal for high-end joinery, door and window frames, and luxury furniture, this material boasts a striking reddish hue. Lightweight yet exceptionally durable." },
        { name: "Malaysian Hardwood", description: "Premium Malaysian hardwood, perfect for construction, flooring, and robust outdoor furniture, offering exceptional strength and a sophisticated aesthetic." }
      ]
    },
    {
      category: "American",
      items: [
        { name: "Ash Wood", description: "Renowned for its exceptional strength and elasticity, perfect for sports equipment, high-quality furniture, and refined interior joinery." },
        { name: "White Oak", description: "Exceptional durability and moisture resistance, making it perfect for high-quality flooring, cabinetry, and wine barrels." },
        { name: "Red Oak", description: "Striking, bold grain that elevates any space. Perfect for stunning flooring, luxurious furniture, and versatile joinery." },
        { name: "Cherry Wood", description: "Rich, warm-toned hues ideal for luxury furniture, refined cabinetry, and exquisite veneers." },
        { name: "Walnut", description: "Deep, rich walnut tones embodying timeless elegance, premier choice for bespoke furniture and upscale paneling." },
        { name: "Southern Yellow Pine", description: "Cost-effective versatility, exceptional choice for construction, framing, and treated outdoor projects." }
      ]
    },
    {
      category: "European",
      items: [
        { name: "Beech Wood", description: "Exceptionally smooth texture and refined aesthetic, top choice for sophisticated furniture, elegant flooring, and sleek modern interiors." }
      ]
    },
    {
      category: "African",
      items: [
        { name: "Iroko (African Teak)", description: "Premier choice for outdoor furniture and sophisticated decking, celebrated for remarkable rot resistance." },
        { name: "Movingui", description: "Luminous golden-yellow hue ideal for luxurious furniture, refined cabinetry, and stunning veneers." },
        { name: "Okume", description: "Remarkable lightness and cost-effective versatility, exceptional for plywood and elegant furniture." },
        { name: "Mahogany", description: "Sumptuous reddish-brown hue, quintessential choice for luxurious furniture and opulent yacht interiors." },
        { name: "Sapeli", description: "Premier choice for exquisite high-end furniture, sophisticated flooring, and intricate joinery." },
        { name: "Tiama", description: "Rich reddish-brown hue, exceptional for elegant furniture and durable interior fittings." },
        { name: "Dabema", description: "Exceptional strength and robust character, distinguished choice for construction and heavy-duty furniture." },
        { name: "Wawa", description: "Lightweight and versatile option for various applications." },
        { name: "Okan", description: "Dense and durable wood for demanding applications." }
      ]
    }
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
            Hardwood
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/Gesher.llc/assets/asset-118.jpg"
                alt="Hardwood"
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
                Hardwood sawn timber, prized for its strength, durability, and exquisite natural beauty, is a premium material derived from deciduous trees, offering a rich array of grains, colors, and textures for diverse applications. Renowned for its versatility, it is ideal for high-end furniture, intricate cabinetry, robust construction, ship-building, container flooring, port decking, and sophisticated interior decoration, delivering both aesthetic elegance and structural reliability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gesher L.L.C-FZ stands as one of the largest stockists, wholesalers, and retailers of sawn hardwood timber in the UAE, boasting an unparalleled selection of species, sizes, and varieties sourced from premier regions, including America, Europe, Africa, and the Far East. With a commitment to offering the finest quality timber, Gesher L.L.C-FZ provides exceptional choices for every construction, cabinetry, and interior design need, ensuring unmatched craftsmanship and enduring value at competitive prices.
              </p>
            </motion.div>
          </div>

          {/* Species by Region */}
          <div className="space-y-12 mt-16">
            {species.map((region, idx) => (
              <motion.div
                key={region.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
              >
                <h2 className="text-2xl font-bold text-[#B87333] mb-6">{region.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {region.items.map((item) => (
                    <div key={item.name} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.name}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}