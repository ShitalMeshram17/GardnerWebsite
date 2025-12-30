import React from "react";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />

        <h3 className="text-2xl font-bold text-green-900 mb-2">
          {service.icon} {service.title}
        </h3>

        <p className="text-slate-700 leading-relaxed">
          {service.fullDesc}
        </p>
      </div>
    </div>
  );
}
