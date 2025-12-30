import React from "react";

export default function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-green-900 mb-6 text-center">
          Visit Our Nursery
        </h3>

        <div className="rounded-3xl overflow-hidden shadow-xl border">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Gadchiroli&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
