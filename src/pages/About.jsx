
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpeg";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-white">

      {/* GLOW BACKGROUNDS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-lime-400/20 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-400/40 to-lime-400/30 blur-2xl group-hover:blur-3xl transition" />
            <img
              src={aboutImg}
              alt="Nursery Owner"
              className="relative rounded-3xl shadow-[0_30px_80px_rgba(16,185,129,0.35)]
                         object-cover w-full h-[460px]"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full
                             bg-emerald-100 text-emerald-700 text-sm font-semibold uppercase">
              About Me
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-900 leading-tight mb-6">
              Growing Green Spaces <br className="hidden sm:block" />
              With Passion & Purpose
            </h1>

            <p className="text-green-800 leading-relaxed text-lg mb-6">
              I am deeply passionate about organic farming and sustainable gardening.
              My mission is to grow healthy, high-quality plants using natural methods
              that respect the environment and promote long-term growth.
            </p>

            <p className="text-green-800 leading-relaxed mb-10">
              From indoor and outdoor plants to fruit-bearing, flowering, and bonsai varieties,
              I focus on nurturing plants that are strong, vibrant, and perfectly suited
              to local conditions.
            </p>

            {/* CTA */}
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/#contact"
                  className="relative px-10 py-4 rounded-full text-white font-semibold
                             bg-gradient-to-r from-emerald-500 to-green-600
                             shadow-[0_20px_50px_rgba(16,185,129,0.45)] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/10 blur-xl opacity-0 hover:opacity-100 transition" />
                  Let’s Connect
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/#portfolio"
                  className="px-10 py-4 rounded-full border border-emerald-300
                             text-emerald-700 font-semibold
                             backdrop-blur bg-white/60 shadow-md hover:bg-emerald-50 transition"
                >
                  View My Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "10+", label: "Years of Experience" },
            { value: "500+", label: "Plants Grown" },
            { value: "200+", label: "Happy Customers" },
            { value: "100%", label: "Organic Practices" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.1 }}
              className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8
                         border border-emerald-200
                         shadow-[0_25px_60px_rgba(16,185,129,0.25)]"
            >
              <h3 className="text-4xl font-extrabold text-emerald-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-emerald-900 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 mb-12">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Anita Sharma",
                text: "The plants are healthy, vibrant, and grown with so much care. My home garden has completely transformed.",
              },
              {
                name: "Rahul Patil",
                text: "Excellent guidance and organic practices. I’ve learned how to maintain my garden the right way.",
              },
              {
                name: "Sneha Kulkarni",
                text: "From selection to maintenance, everything was explained clearly. Highly recommended.",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative bg-white/60 backdrop-blur-xl rounded-2xl p-8
                           border border-emerald-200
                           shadow-[0_25px_60px_rgba(34,197,94,0.25)]"
              >
                <p className="text-green-800 mb-6 leading-relaxed">
                  “{t.text}”
                </p>
                <h4 className="font-semibold text-emerald-900">
                  — {t.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 mb-12">
            Areas of Expertise
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Indoor Plants",
              "Outdoor Plants",
              "Bonsai Plants",
              "Fruit Plants",
              "Flowering Plants",
              "Organic Seeds",
              "Gardening Services",
            ].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.15 }}
                className="px-6 py-2 rounded-full font-medium text-emerald-800
                           bg-gradient-to-r from-emerald-100 to-lime-100
                           border border-emerald-200 shadow-sm"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

