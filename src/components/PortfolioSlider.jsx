import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1729058015948-592a8e4a1772?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Organic Garden Setup",
    subtitle: "Natural plants with modern landscaping",
  },
  {
    img: "https://images.unsplash.com/photo-1727358572955-3d66cd0d5876?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Backyard Landscape",
    subtitle: "Premium outdoor transformation",
  },
  {
    img: "https://images.unsplash.com/photo-1668503761877-88f194d0d11f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Green Home Garden",
    subtitle: "Healthy plants for peaceful living",
  },
];

export default function PortfolioSlider() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [progress, setProgress] = useState(0);

  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
      slideChanged(s) {
        setCurrent(s.track.details.rel);
        setProgress(0);
      },
    },
    [
      (s) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            s.next();
          }, 4500);
        }

        s.on("created", () => {
          s.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          s.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        s.on("dragStarted", clearNextTimeout);
        s.on("animationEnded", nextTimeout);
        s.on("updated", nextTimeout);
      },
    ]
  );

  /* progress bar animation */
  useEffect(() => {
    let id;
    if (slider.current) {
      setProgress(0);
      id = setInterval(() => {
        setProgress((p) => (p >= 100 ? 100 : p + 1));
      }, 45);
    }
    return () => clearInterval(id);
  }, [current]);

  /* ESC to close lightbox */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section id="portfolio" className="py-24 bg-gradient-to-b from-green-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-4xl font-extrabold text-green-900">
              Recent Projects
            </h3>
            <span className="text-sm text-slate-500">
              {current + 1} / {slides.length}
            </span>
          </div>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="keen-slider rounded-[2rem] overflow-hidden shadow-2xl"
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="keen-slider__slide relative group cursor-zoom-in"
                onClick={() => setLightbox(slide)}
              >
                {/* image */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-[480px] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* GLASS CAPTION */}
                <div className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-md backdrop-blur-xl bg-white/15 border border-white/20 rounded-2xl p-5 text-white shadow-xl">
                  <h4 className="text-2xl font-bold mb-1">{slide.title}</h4>
                  <p className="text-sm opacity-90">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`h-2 rounded-full transition-all ${
                  current === idx ? "w-10 bg-green-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center px-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />

            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full text-2xl shadow-lg hover:scale-110 transition"
            >
              ×
            </button>

            <div className="text-center text-white mt-6">
              <h4 className="text-2xl font-bold">{lightbox.title}</h4>
              <p className="opacity-80">{lightbox.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


