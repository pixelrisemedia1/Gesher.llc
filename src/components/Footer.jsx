import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ChevronDown, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscriptionRequested, setSubscriptionRequested] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("Newsletter subscription");
    const body = encodeURIComponent(
      `Please add ${email} to the Gesher L.L.C-FZ newsletter.`
    );
    window.location.href = `mailto:info@gesher-llc.com?subject=${subject}&body=${body}`;
    setSubscriptionRequested(true);
    setEmail("");
    setTimeout(() => setSubscriptionRequested(false), 5000);
  };

  return (
    <footer className="bg-white">
      {/* Trust Banner */}
      <div className="bg-[#C4915C] py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-[0.15em] max-w-xl leading-tight">
            GENERATIONS OF TRUST, ROOTED IN QUALITY TIMBER.
          </h2>
          <div className="w-full lg:w-[450px] h-[180px] lg:h-[220px] overflow-hidden rounded-lg">
            <img 
              src="/Gesher.llc/assets/asset-136.png"
              alt="Gesher LLC-FZ"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/Gesher.llc/assets/asset-136.png" 
              alt="GESHER LLC-FZ"
              className="w-56 h-auto"
            />
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">VISIT US</h3>
            <div className="space-y-2 text-gray-600">
              <p>Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E.</p>
              <p className="text-[#C4915C]">+971551911764</p>
              <p className="text-[#C4915C]">info@gesher-llc.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">QUICK LINKS</h3>
            <nav className="space-y-2">
              <Link to={createPageUrl("Home")} className="block text-gray-600 hover:text-[#B87333] transition-colors">
                Home
              </Link>
              <Link to={createPageUrl("AboutUs")} className="block text-gray-600 hover:text-[#B87333] transition-colors">
                About Us
              </Link>
              <Link to={createPageUrl("Gallery")} className="block text-gray-600 hover:text-[#B87333] transition-colors">
                Gallery
              </Link>
              <Link to={createPageUrl("ContactUs")} className="block text-gray-600 hover:text-[#B87333] transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">NEWSLETTER</h3>
            <p className="text-gray-600 mb-4">Stay up to date with our latest news.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-gray-300"
                />
                <Button
                  type="submit"
                  className="bg-[#C4915C] hover:bg-[#B87333] text-white px-3"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              {subscriptionRequested && (
                <p className="text-sm text-green-600">Your email app will open to send your request.</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#C4915C] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white text-sm">
          © GESHER L.L.C-FZ | 2026 | On Time, Every Time 
        </div>
      </div>
    </footer>
  );
}