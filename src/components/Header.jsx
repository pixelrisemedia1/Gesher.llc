import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const productCategories = [
    { 
      name: "Sawn Timber", 
      href: createPageUrl("SawnTimber"),
      subItems: [
        { name: "Hard Wood", href: createPageUrl("Hardwood") },
        { name: "Soft Wood", href: createPageUrl("Softwood") }
      ]
    },
    { 
      name: "MDF", 
      href: createPageUrl("MDF"),
      subItems: [
        { name: "Plain", href: createPageUrl("PlainMDF") },
        { name: "MR", href: createPageUrl("MRMDF") },
        { name: "FR", href: createPageUrl("FRMDF") },
        { name: "Melamine", href: createPageUrl("MelamineMDF") },
        { name: "Jumbo", href: createPageUrl("JumboMDF") }
      ]
    },
    { 
      name: "Ply", 
      href: createPageUrl("Plywood"),
      subItems: [
        { name: "Commercial", href: createPageUrl("CommercialPly") },
        { name: "Filmfaced", href: createPageUrl("FilmfacedPly") },
        { name: "Birch", href: createPageUrl("BirchPly") },
        { name: "Falcata", href: createPageUrl("FalcataPly") },
        { name: "Bendy", href: createPageUrl("BendyPly") }
      ]
    },
    { 
      name: "Chipboard", 
      href: createPageUrl("Chipboard"),
      subItems: [
        { name: "Solid", href: createPageUrl("SolidChipboard") },
        { name: "Hollow", href: createPageUrl("HollowChipboard") }
      ]
    },
    { 
      name: "Logs", 
      href: createPageUrl("Logs"),
      subItems: [
        { name: "Hardwood", href: createPageUrl("HardwoodLogs") },
        { name: "Softwood", href: createPageUrl("SoftwoodLogs") }
      ]
    },
    { name: "OSB", href: createPageUrl("OSB") },
    { name: "Cement Board", href: createPageUrl("CementBoard") },
    { name: "Flooring", href: createPageUrl("Flooring") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-[#C4915C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center">
            <img 
              src="/Gesher.llc/assets/asset-136.png" 
              alt="GESHER LLC-FZ"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-0">
            <Link 
              to={createPageUrl("Home")} 
              className="px-5 py-2 text-sm font-medium text-gray-800 hover:text-[#B87333] transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-300 text-xl">|</span>
            <Link 
              to={createPageUrl("AboutUs")} 
              className="px-5 py-2 text-sm font-medium text-gray-800 hover:text-[#B87333] transition-colors"
            >
              About Us
            </Link>
            <span className="text-gray-300 text-xl">|</span>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => {
                setProductsOpen(false);
                setHoveredCategory(null);
              }}
            >
              <button 
                className="px-5 py-2 text-sm font-medium text-gray-800 hover:text-[#B87333] transition-colors flex items-center gap-1"
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {productsOpen && (
                <div 
                  className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-md py-2 border border-gray-100"
                >
                  {productCategories.map((item) => (
                    <div 
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setHoveredCategory(item.name)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#B87333]"
                      >
                        {item.name}
                      </Link>
                      {item.subItems && hoveredCategory === item.name && (
                        <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-100">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#B87333]"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <span className="text-gray-300 text-xl">|</span>
            <Link 
              to={createPageUrl("Gallery")} 
              className="px-5 py-2 text-sm font-medium text-gray-800 hover:text-[#B87333] transition-colors"
            >
              Gallery
            </Link>
            <span className="text-gray-300 text-xl">|</span>
            <Link 
              to={createPageUrl("ContactUs")} 
              className="px-5 py-2 text-sm font-medium text-gray-800 hover:text-[#B87333] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to={createPageUrl("Home")} 
              className="block py-2 text-gray-700 hover:text-[#B87333]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to={createPageUrl("AboutUs")} 
              className="block py-2 text-gray-700 hover:text-[#B87333]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="py-2">
              <span className="text-gray-700 font-medium">Products</span>
              <div className="ml-4 mt-2 space-y-2">
                {productCategories.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block py-1 text-sm text-gray-600 hover:text-[#B87333]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <div className="ml-4 space-y-1 mt-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block py-0.5 text-xs text-gray-500 hover:text-[#B87333]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            • {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Link 
              to={createPageUrl("Gallery")} 
              className="block py-2 text-gray-700 hover:text-[#B87333]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to={createPageUrl("ContactUs")} 
              className="block py-2 text-gray-700 hover:text-[#B87333]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}