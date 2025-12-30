// src/components/VideoShortsSlider.jsx
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const rawVideos = [
  "https://youtube.com/shorts/AkbFYAphPqk",
  "https://youtube.com/shorts/lepolncPzvE",
  "https://youtube.com/shorts/MpwnvW43Rd0",
  "https://youtube.com/shorts/5qzTrVUQHUI",
  "https://youtube.com/shorts/wUttNS0Ne94",
  "https://youtube.com/shorts/ddd4eK8CLC0",
];

// Helpers
const getId = (u) => u.split("/shorts/")[1]?.split(/[?\/]/)[0];
const embed = (id) =>
  `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
const thumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export default function VideoShortsSlider() {
  const [current, setCurrent] = useState(0);

  const videos = rawVideos.map((u) => {
    const id = getId(u);
    return { id, embed: embed(id), thumb: thumb(id) };
  });

  const [sliderRef, slider] = useKeenSlider({
    vertical: true,
    loop: true,
    slides: { perView: 1, spacing: 16 },
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
  });

  return (
    <section id="videos" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h3 className="text-3xl font-extrabold text-green-900">
            Garden Video Shorts
          </h3>
          <p className="text-slate-600 mt-2">
            Real organic nursery & landscaping work
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* MAIN VERTICAL SHORTS */}
          <div className="lg:col-span-2 flex justify-center">
            <div
              ref={sliderRef}
              className="keen-slider h-[600px] w-[340px] rounded-3xl overflow-hidden shadow-2xl bg-black"
            >
              {videos.map((v, i) => (
                <div
                  key={i}
                  className="keen-slider__slide flex items-center justify-center"
                >
                  <iframe
                    key={i === current ? "active" : "inactive"}
                    src={v.embed}
                    title={`Short ${i + 1}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>

          {/* SIDE THUMBNAILS */}
          <aside className="space-y-4">
            {videos.map((v, i) => (
              <button
                key={i}
                onClick={() => slider.current?.moveToIdx(i)}
                className={`flex items-center gap-4 w-full p-3 rounded-2xl border bg-white transition-all text-left ${
                  i === current
                    ? "border-green-500 ring-2 ring-green-400/40 shadow-md"
                    : "border-slate-200 hover:shadow"
                }`}
              >
                <img
                  src={v.thumb}
                  alt=""
                  className="w-24 h-16 rounded-lg object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-green-900">
                    Garden Short {i + 1}
                  </div>
                  <div className="text-xs text-slate-500">
                    Organic Nursery
                  </div>
                </div>
              </button>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
