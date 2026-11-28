import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createPageUrl } from "@/utils";
import { ChevronDown, Download } from "lucide-react";

export default function Gallery() {
  const [expandedCategory, setExpandedCategory] = useState("Sawn Timber");
  const [activeSubTab, setActiveSubTab] = useState({
    "Sawn Timber": "Hardwood - Red Meranti (Malaysian)",
    "MDF": "Plain MDF",
    "PLY": "Commercial - India",
    "Chipboard": "Plain",
    "Logs": "Hardwood",
    "OSB": "OSB",
    "Saw Mill": "Saw Mill"
  });

  const galleryData = {
    "Sawn Timber": {
      "subcategories": [
        "Hardwood - Red Meranti (Malaysian)",
        "Hardwood - Ash wood (American)",
        "Hardwood - White Oak (American)",
        "Hardwood - Red Oak (American)",
        "Hardwood - Cherry wood (American)",
        "Hardwood - Walnut (American)",
        "Hardwood - Southern Yellow Pine (American)",
        "Hardwood - Hard Maple (American)",
        "Hardwood - Beechwood (European)",
        "Hardwood - Iroko (African)",
        "Hardwood - Movingui (African)",
        "Hardwood - Okume (African)",
        "Hardwood - Mahagony (African)",
        "Hardwood - Dabema (African)",
        "Hardwood - Okan (African)",
        "Hardwood - Wawa (African)",
        "Hardwood - Burma Teak (Burma)",
        "Softwood - Austrian White wood",
        "Softwood - Romanian White wood",
        "Softwood - Canadian White wood"
        ],
      "images": {
        "Hardwood - Red Meranti (Malaysian)": [
          "/Gesher.llc/assets/asset-114.jpg",
          "/Gesher.llc/assets/asset-058.jpg",
          "/Gesher.llc/assets/asset-016.jpg",
          "/Gesher.llc/assets/asset-082.jpg",
          "/Gesher.llc/assets/asset-104.jpg"
        ],
        "Hardwood - Ash wood (American)": [
          "/Gesher.llc/assets/asset-102.jpg",
          "/Gesher.llc/assets/asset-102.jpg",
          "/Gesher.llc/assets/asset-102.jpg",
          "/Gesher.llc/assets/asset-056.jpg",
          "/Gesher.llc/assets/asset-056.jpg",
          "/Gesher.llc/assets/asset-056.jpg",
          "/Gesher.llc/assets/asset-056.jpg"
        ],
        "Hardwood - White Oak (American)": [
          "/Gesher.llc/assets/asset-006.jpg",
          "/Gesher.llc/assets/asset-012.jpg",
          "/Gesher.llc/assets/asset-086.jpg",
          "/Gesher.llc/assets/asset-083.jpg",
          "/Gesher.llc/assets/asset-065.jpg"
        ],
        "Hardwood - Red Oak (American)": [
          "/Gesher.llc/assets/asset-094.jpg",
          "/Gesher.llc/assets/asset-082.jpg",
          "/Gesher.llc/assets/asset-094.jpg",
          "/Gesher.llc/assets/asset-104.jpg",
          "/Gesher.llc/assets/asset-104.jpg",
          "/Gesher.llc/assets/asset-104.jpg"
        ],
        "Hardwood - Cherry wood (American)": [
          "/Gesher.llc/assets/asset-118.jpg",
          "/Gesher.llc/assets/asset-126.jpg",
          "/Gesher.llc/assets/asset-092.jpg"
        ],
        "Hardwood - Walnut (American)": [
          "/Gesher.llc/assets/asset-013.jpg",
          "/Gesher.llc/assets/asset-084.jpg",
          "/Gesher.llc/assets/asset-069.jpg",
          "/Gesher.llc/assets/asset-025.jpg"
        ],
        "Hardwood - Southern Yellow Pine (American)": [
          "/Gesher.llc/assets/asset-010.jpg",
          "/Gesher.llc/assets/asset-089.jpg",
          "/Gesher.llc/assets/asset-035.jpg",
          "/Gesher.llc/assets/asset-005.jpg"
        ],
        "Hardwood - Hard Maple (American)": [
          "/Gesher.llc/assets/asset-040.jpg",
          "/Gesher.llc/assets/asset-039.jpg"
        ],
        "Hardwood - Beechwood (European)": [
          "/Gesher.llc/assets/asset-003.jpg",
          "/Gesher.llc/assets/asset-001.jpg",
          "/Gesher.llc/assets/asset-056.jpg",
          "/Gesher.llc/assets/asset-074.jpg",
          "/Gesher.llc/assets/asset-008.jpg",
          "/Gesher.llc/assets/asset-034.jpg",
          "/Gesher.llc/assets/asset-051.jpg",
          "/Gesher.llc/assets/asset-044.jpg",
          "/Gesher.llc/assets/asset-049.jpg",
          "/Gesher.llc/assets/asset-020.jpg"
        ],
        "Hardwood - Iroko (African)": [
          "/Gesher.llc/assets/asset-082.jpg",
          "/Gesher.llc/assets/asset-063.jpg",
          "/Gesher.llc/assets/asset-016.jpg",
          "/Gesher.llc/assets/asset-072.jpg"
        ],
        "Hardwood - Movingui (African)": [
          "/Gesher.llc/assets/asset-131.jpg",
          "/Gesher.llc/assets/asset-110.jpg",
          "/Gesher.llc/assets/asset-090.jpg"
        ],
        "Hardwood - Okume (African)": [
          "/Gesher.llc/assets/asset-007.jpg"
        ],
        "Hardwood - Mahagony (African)": [
          "/Gesher.llc/assets/asset-075.jpg",
          "/Gesher.llc/assets/asset-085.jpg",
          "/Gesher.llc/assets/asset-059.jpg"
        ],
        "Hardwood - Dabema (African)": [
          "/Gesher.llc/assets/asset-029.jpg",
          "/Gesher.llc/assets/asset-028.jpg",
          "/Gesher.llc/assets/asset-037.jpg",
          "/Gesher.llc/assets/asset-054.jpg"
        ],
        "Hardwood - Okan (African)": [
          "/Gesher.llc/assets/asset-099.jpg",
          "/Gesher.llc/assets/asset-104.jpg"
        ],
        "Hardwood - Wawa (African)": [
          "/Gesher.llc/assets/asset-121.jpg",
          "/Gesher.llc/assets/asset-103.jpg"
        ],
        "Hardwood - Burma Teak (Burma)": [
          "/Gesher.llc/assets/asset-114.jpg",
          "/Gesher.llc/assets/asset-094.jpg",
          "/Gesher.llc/assets/asset-137.jpg"
        ],
        "Softwood - Austrian White wood": [
          "/Gesher.llc/assets/asset-111.jpg",
          "/Gesher.llc/assets/asset-093.jpg",
          "/Gesher.llc/assets/asset-116.jpg",
          "/Gesher.llc/assets/asset-102.jpg",
          "/Gesher.llc/assets/asset-113.png"
        ],
        "Softwood - Romanian White wood": [
          "/Gesher.llc/assets/asset-106.jpg",
          "/Gesher.llc/assets/asset-122.jpg",
          "/Gesher.llc/assets/asset-105.jpg",
          "/Gesher.llc/assets/asset-098.jpg",
          "/Gesher.llc/assets/asset-107.jpg"
        ],
        "Softwood - Canadian White wood": [
          "/Gesher.llc/assets/asset-092.jpg",
          "/Gesher.llc/assets/asset-126.jpg",
          "/Gesher.llc/assets/asset-130.jpg",
          "/Gesher.llc/assets/asset-101.jpg"
        ]
      }
    },
    "MDF": {
      "subcategories": ["Plain MDF", "MR MDF", "FR MDF", "Melamine", "Jumbo MR", "Jumbo Plain"],
      "images": {
        "Plain MDF": [
          "/Gesher.llc/assets/asset-024.jpg",
          "/Gesher.llc/assets/asset-031.jpg",
          "/Gesher.llc/assets/asset-073.jpg",
          "/Gesher.llc/assets/asset-042.jpg",
          "/Gesher.llc/assets/asset-014.jpg",
          "/Gesher.llc/assets/asset-038.jpg",
          "/Gesher.llc/assets/asset-088.jpg",
          "/Gesher.llc/assets/asset-022.jpg",
          "/Gesher.llc/assets/asset-081.jpg",
          "/Gesher.llc/assets/asset-023.jpg",
          "/Gesher.llc/assets/asset-050.jpg",
          "/Gesher.llc/assets/asset-064.jpg"
        ],
        "MR MDF": [
          "/Gesher.llc/assets/logo.webp",
          "/Gesher.llc/assets/logo.webp",
          "/Gesher.llc/assets/logo.webp",
          "/Gesher.llc/assets/logo.webp",
          "/Gesher.llc/assets/logo.webp",
          "/Gesher.llc/assets/logo.webp",
          "/Gesher.llc/assets/logo.webp"
        ],
        "FR MDF": [
          "/Gesher.llc/assets/asset-017.jpg",
          "/Gesher.llc/assets/asset-060.jpg",
          "/Gesher.llc/assets/asset-048.jpg",
          "/Gesher.llc/assets/asset-076.jpg"
        ],
        "Melamine": [
          "/Gesher.llc/assets/asset-021.jpg",
          "/Gesher.llc/assets/asset-087.jpg"
        ],
        "Jumbo MR": [
          "/Gesher.llc/assets/asset-009.jpg",
          "/Gesher.llc/assets/asset-068.jpg",
          "/Gesher.llc/assets/asset-036.jpg"
        ],
        "Jumbo Plain": [
          "/Gesher.llc/assets/asset-053.jpg",
          "/Gesher.llc/assets/asset-018.jpg",
          "/Gesher.llc/assets/asset-046.jpg"
        ]
      }
    },
    "PLY": {
      "subcategories": ["Commercial - India", "Commercial - Korindo", "Commercial - Malaysia", "Film Faced", "Birch", "Bendy"],
      "images": {
        "Commercial - India": [
          "/Gesher.llc/assets/asset-030.jpg",
          "/Gesher.llc/assets/asset-032.jpg",
          "/Gesher.llc/assets/asset-061.jpg",
          "/Gesher.llc/assets/asset-027.jpg",
          "/Gesher.llc/assets/asset-062.jpg"
        ],
        "Commercial - Korindo": [
          "/Gesher.llc/assets/asset-066.jpg",
          "/Gesher.llc/assets/asset-080.jpg",
          "/Gesher.llc/assets/asset-052.jpg",
          "/Gesher.llc/assets/asset-015.jpg",
          "/Gesher.llc/assets/asset-055.jpg"
        ],
        "Commercial - Malaysia": [
          "/Gesher.llc/assets/asset-011.jpg",
          "/Gesher.llc/assets/asset-078.jpg",
          "/Gesher.llc/assets/asset-058.jpg",
          "/Gesher.llc/assets/asset-071.jpg",
          "/Gesher.llc/assets/asset-004.jpg"
        ],
        "Film Faced": [
          "/Gesher.llc/assets/asset-041.jpg"
        ],
        "Birch": [
          "/Gesher.llc/assets/asset-041.jpg"
        ],
        "Bendy": [
          "/Gesher.llc/assets/asset-041.jpg"
        ]
      }
    },
    "Chipboard": {
    "subcategories": ["Plain", "Melamine"],
    "images": {
      "Plain": [
        "/Gesher.llc/assets/asset-079.jpg",
        "/Gesher.llc/assets/asset-047.jpg",
        "/Gesher.llc/assets/asset-057.jpg",
        "/Gesher.llc/assets/asset-019.jpg",
        "/Gesher.llc/assets/asset-070.jpg"
      ],
      "Melamine": [
        "/Gesher.llc/assets/asset-021.jpg",
        "/Gesher.llc/assets/asset-087.jpg"
      ]
    }
    },
    "Logs": {
      "subcategories": ["Hardwood", "Softwood", "Poles"],
      "images": {
        "Hardwood": [
          "/Gesher.llc/assets/asset-135.jpg",
          "/Gesher.llc/assets/asset-128.jpg",
          "/Gesher.llc/assets/asset-124.jpg",
          "/Gesher.llc/assets/asset-127.jpg",
          "/Gesher.llc/assets/asset-091.jpg"
        ],
        "Softwood": [
          "/Gesher.llc/assets/asset-115.jpg",
          "/Gesher.llc/assets/asset-138.jpg",
          "/Gesher.llc/assets/asset-117.jpg",
          "/Gesher.llc/assets/asset-134.jpg",
          "/Gesher.llc/assets/asset-097.jpg"
        ],
        "Poles": [
          "/Gesher.llc/assets/asset-112.jpg",
          "/Gesher.llc/assets/asset-100.jpg",
          "/Gesher.llc/assets/asset-120.jpg",
          "/Gesher.llc/assets/asset-125.jpg",
          "/Gesher.llc/assets/asset-096.jpg"
        ]
      }
    },
    "OSB": {
      "subcategories": ["OSB"],
      "images": {
        "OSB": [
          "/Gesher.llc/assets/asset-108.jpg",
          "/Gesher.llc/assets/asset-109.jpg",
          "/Gesher.llc/assets/asset-132.jpg"
        ]
      }
    },
    "Saw Mill": {
      "subcategories": ["Saw Mill"],
      "images": {
        "Saw Mill": [
          "/Gesher.llc/assets/asset-123.jpg",
          "/Gesher.llc/assets/asset-095.jpg",
          "/Gesher.llc/assets/asset-133.jpg",
          "/Gesher.llc/assets/asset-129.jpg",
          "/Gesher.llc/assets/asset-119.jpg"
        ]
      }
    }
  };

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleSubTabClick = (category, subTab) => {
    setActiveSubTab({ ...activeSubTab, [category]: subTab });
  };

  const getCurrentImages = (category) => {
    const currentSubTab = activeSubTab[category];
    return galleryData[category]?.images[currentSubTab] || [];
  };

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
            Gallery
          </motion.h1>

          <div className="max-w-5xl mx-auto space-y-3">
            {Object.keys(galleryData).map((category) => (
              <div key={category} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">{category}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      expandedCategory === category ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedCategory === category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-gray-50 border-t border-gray-200">
                        {/* Subcategory Tabs */}
                        <div className="flex flex-wrap gap-3 mb-6">
                          {galleryData[category].subcategories.map((subTab) => (
                            <button
                              key={subTab}
                              onClick={() => handleSubTabClick(category, subTab)}
                              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                activeSubTab[category] === subTab
                                  ? 'bg-[#C4915C] text-white'
                                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                              }`}
                            >
                              {subTab}
                            </button>
                          ))}
                        </div>

                        {/* Images Grid */}
                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                           {getCurrentImages(category).map((image, index) => (
                             <Link
                               key={index}
                               to={`${createPageUrl("ImageViewer")}?url=${encodeURIComponent(image)}`}
                             >
                               <motion.div
                                 initial={{ opacity: 0, scale: 0.9 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 transition={{ duration: 0.3, delay: index * 0.05 }}
                                 className="aspect-[3/2] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                               >
                                 <img 
                                   src={image}
                                   alt={`${category} - ${activeSubTab[category]} ${index + 1}`}
                                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                 />
                               </motion.div>
                             </Link>
                           ))}
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}