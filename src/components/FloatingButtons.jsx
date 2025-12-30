import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const phone = "919975981319"; // 👉 replace with your number
  const message = encodeURIComponent(
    "Hello 👋 I am interested in gardening / landscaping services. Please contact me."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden sm:block font-semibold">WhatsApp</span>
    </a>
  );
}
