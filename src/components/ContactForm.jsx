import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await axios.post("/api/contact", form);

      if (res.data && res.data.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-green-600"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80)"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready to transform your outdoor space?
          </h3>
          <p className="text-green-100 max-w-md">
            Make your garden a living masterpiece.
            <br />
            Get a free site visit & expert quote today.
          </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/80 p-8 rounded-3xl shadow-2xl border border-white/40"
        >
          <div className="grid gap-5">
            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-green-900">
                Your Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="John Doe"
              />
            </div>

            {/* Email / Phone */}
            <div>
              <label className="text-sm font-semibold text-green-900">
                Email or Phone
              </label>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="john@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-semibold text-green-900">
                Tell us about your garden
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-green-200 px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none resize-none"
                placeholder="Lawn, plants, landscaping, maintenance..."
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-green-700 py-3 text-white font-semibold tracking-wide shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Request Free Quote"}
            </button>

            {/* Status Messages */}
            {status === "sent" && (
              <p className="text-green-700 font-medium">
                ✅ Message sent — we’ll contact you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
