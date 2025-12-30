import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLeaf,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white pt-16 pb-8">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">
        {/* BRAND */}
        <div>
          <h3 className="flex items-center gap-2 text-2xl font-extrabold">
            <FaLeaf className="text-green-400" />
            Organic Farming
          </h3>
          <p className="text-slate-300 mt-4 text-sm leading-relaxed">
            We design, plant and maintain beautiful, sustainable gardens that
            bring nature closer to your home.  
            <span className="block mt-2 text-green-400 font-medium">
              Make your garden a living masterpiece 🌱
            </span>
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4 text-green-300">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-4 text-green-300">Our Services</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Landscape Design</li>
            <li>Garden Maintenance</li>
            <li>Organic Plants</li>
            <li>Drip Irrigation</li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h4 className="font-semibold mb-4 text-green-300">Get in Touch</h4>
          <p className="text-sm text-slate-300">
            📍 Gadchiroli, Maharashtra  
            <br />
            📞 +91 99759 81319  
            <br />
            ✉️ bhoyarvaibhav85@gmail.com
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/vaibhav_bhoyar9?"
              className="p-2 rounded-full bg-white/10 hover:bg-green-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/17Z931YTKE/"
              className="p-2 rounded-full bg-white/10 hover:bg-green-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/919975981319"
              className="p-2 rounded-full bg-white/10 hover:bg-green-600 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <span>
            © {new Date().getFullYear()} . All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
