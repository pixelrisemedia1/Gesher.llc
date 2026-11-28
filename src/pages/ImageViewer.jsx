import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function ImageViewer() {
  const params = new URLSearchParams(window.location.search);
  const imageUrl = params.get("url");

  if (!imageUrl) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="pt-36 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Image Not Found</h1>
            <Link to={createPageUrl("Gallery")} className="text-[#C4915C] hover:text-[#B87333]">
              Back to Gallery
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-36 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={createPageUrl("Gallery")} className="inline-flex items-center gap-2 text-[#C4915C] hover:text-[#B87333] mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
          
          <div className="flex justify-center">
            <img 
              src={imageUrl} 
              alt="Gallery Image" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}