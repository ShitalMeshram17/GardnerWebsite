import React, { useState } from "react";
import servicesData from "../data/servicesData";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-[radial-gradient(ellipse_at_top,#dcfce7,transparent_70%)] reveal"
    >
       <img
  src="https://images.unsplash.com/photo-1701031856978-c3962a0363be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt=""
  className="absolute inset-0 w-full h-full object-cover opacity-10"
/>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-4">
          Our Services
        </h2>
        <p className="text-green-700 mb-12 max-w-xl mx-auto">
          Sustainable gardening solutions tailored for you
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelected(s)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg
                         hover:shadow-2xl transition-all duration-500"
            >
              {/* Lazy image with blur */}
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-64 object-cover blur-sm scale-105
                           group-hover:blur-0 group-hover:scale-110
                           transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-0 p-6 text-left text-white">
                <div className="text-4xl mb-2">{s.icon}</div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-sm text-green-100">{s.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
