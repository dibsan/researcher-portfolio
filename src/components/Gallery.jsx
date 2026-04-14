import { useEffect, useMemo, useState } from "react";

const galleryImages = [
  {
    src: "/1.jpg",
    title: "Community Outreach 1",
    desc: "Public health and volunteering activity.",
    category: "Outreach",
  },
  {
    src: "/2.jpg",
    title: "Community Outreach 2",
    desc: "Supporting people through field engagement.",
    category: "Outreach",
  },
  {
    src: "/3.jpg",
    title: "Community Outreach 3",
    desc: "Health awareness and nutrition support.",
    category: "Health",
  },
  {
    src: "/5.jpg",
    title: "Community Outreach 4",
    desc: "Meaningful public health contribution.",
    category: "Impact",
  },
  {
    src: "/6.JPG",
    title: "Community Outreach 6",
    desc: "Professional and social impact moment.",
    category: "Impact",
  },
  {
    src: "/7.JPG",
    title: "Community Outreach 7",
    desc: "Field-based public health engagement.",
    category: "Field Work",
  },
  {
    src: "/9.JPG",
    title: "Community Outreach 8",
    desc: "Awareness and support activities.",
    category: "Health",
  },
  {
    src: "/10.JPG",
    title: "Community Outreach 9",
    desc: "Community-centered volunteering work.",
    category: "Outreach",
  },
  {
    src: "/11.JPG",
    title: "Community Outreach 10",
    desc: "Contributing to health education efforts.",
    category: "Health",
  },
  {
    src: "/13.jpg",
    title: "Community Outreach 11",
    desc: "On-ground public health experience.",
    category: "Field Work",
  },
  {
    src: "/14.jpg",
    title: "Community Outreach 12",
    desc: "Field work and volunteer engagement.",
    category: "Field Work",
  },
  {
    src: "/15.jpg",
    title: "Community Outreach 13",
    desc: "Care, service, and awareness in action.",
    category: "Impact",
  },
  {
    src: "/17.jpg",
    title: "Community Outreach 14",
    desc: "Human-centered health support efforts.",
    category: "Impact",
  },
  {
    src: "/18.jpg",
    title: "Community Outreach 15",
    desc: "Documenting community service impact.",
    category: "Outreach",
  },
  {
    src: "/19.jpg",
    title: "Community Outreach 16",
    desc: "Real-world public health volunteering.",
    category: "Field Work",
  },
];

const AUTO_SLIDE_MS = 3000;

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isPlaying, setIsPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  const categories = useMemo(() => {
    return ["All", ...new Set(galleryImages.map((img) => img.category))];
  }, []);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, 6);

  const openModal = (image) => {
    const actualIndex = galleryImages.findIndex((item) => item.src === image.src);
    setSelectedIndex(actualIndex);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
    setIsPlaying(true);
  };

  const showPrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null || !isPlaying) return;

    const timer = setInterval(() => {
      setSelectedIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, AUTO_SLIDE_MS);

    return () => clearInterval(timer);
  }, [selectedIndex, isPlaying]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setShowAll(false);
  }, [activeCategory]);

  const handleImageLoad = (src) => {
    setLoadedImages((prev) => (prev.includes(src) ? prev : [...prev, src]));
  };

  return (
    <section id="gallery" className="max-w-6xl mx-auto px-6 py-14 md:py-20">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-700 font-semibold">
          Field Work & Impact
        </p>
        <h3 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
          Photo Gallery
        </h3>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
          A visual story of volunteering, outreach, public health engagement,
          and community impact.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const active = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-slate-900 text-white shadow"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {visibleImages.map((image, index) => (
          <div
            key={image.src}
            className={`group relative break-inside-avoid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
              loadedImages.includes(image.src)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
            onClick={() => openModal(image)}
          >
            <div className="relative overflow-hidden bg-slate-100">
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                draggable="false"
                onLoad={() => handleImageLoad(image.src)}
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-auto object-cover transition duration-700 group-hover:scale-105 select-none"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                  {image.category}
                </div>
                <h4 className="mt-3 text-lg font-semibold">{image.title}</h4>
                <p className="mt-1 text-sm text-white/90 leading-6">
                  {image.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length > 6 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-2xl bg-slate-900 px-6 py-3 text-white font-medium shadow hover:opacity-90 transition"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center px-4 py-6"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 rounded-full bg-white/90 px-4 py-2 text-black font-semibold shadow hover:bg-white"
            >
              ✕
            </button>

            <button
              onClick={showPrev}
              className="absolute left-2 md:left-4 z-20 rounded-full bg-white/90 px-4 py-3 text-black text-xl font-bold shadow hover:bg-white"
            >
              ‹
            </button>

            <div className="w-full rounded-[2rem] overflow-hidden bg-white shadow-2xl">
              <div className="bg-black">
                <img
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].title}
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full max-h-[75vh] object-contain select-none"
                />
              </div>

              <div className="p-6 md:p-7 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-100">
                      {galleryImages[selectedIndex].category}
                    </div>
                    <h4 className="mt-3 text-xl md:text-2xl font-semibold">
                      {galleryImages[selectedIndex].title}
                    </h4>
                    <p className="mt-2 text-slate-600 leading-7">
                      {galleryImages[selectedIndex].desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsPlaying((prev) => !prev)}
                    className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                  </button>
                </div>

                <div className="mt-5 text-sm text-slate-500">
                  Use ← and → to navigate, Esc to close, Space to play or pause slideshow.
                </div>
              </div>
            </div>

            <button
              onClick={showNext}
              className="absolute right-2 md:right-4 z-20 rounded-full bg-white/90 px-4 py-3 text-black text-xl font-bold shadow hover:bg-white"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}