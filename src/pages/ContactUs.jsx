import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 3000);
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
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Reach Us
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Head office</h2>
                <p className="font-semibold text-gray-800 mb-2">GESHER L.L.C-FZ</p>
                <p className="text-gray-600 mb-2">
                  Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E.
                </p>
                <p className="text-gray-600">Email: info@gesher-llc.com</p>
                <p className="text-gray-600 text-sm mt-2">First Abu Dhabi Bank PJSC (FAB)</p>
                <p className="text-gray-600 text-sm">SWIFT: NBADAEAA</p>
              </div>


            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full border-gray-300 focus:border-[#C4915C] focus:ring-[#C4915C]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full border-gray-300 focus:border-[#C4915C] focus:ring-[#C4915C]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full border-gray-300 focus:border-[#C4915C] focus:ring-[#C4915C]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C4915C] hover:bg-[#A87841] text-white py-3 rounded-lg transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-center"
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}