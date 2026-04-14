import { useEffect, useState } from "react";

const featuredImages = [
  {
    src: "/1.jpg",
    title: "Volunteering in the Community",
    desc: "Moments of meaningful public health engagement.",
  },
  {
    src: "/6.JPG",
    title: "Field Work and Awareness",
    desc: "Bringing research and service together.",
  },
  {
    src: "/10.JPG",
    title: "Community-Centered Impact",
    desc: "Supporting real people through health and outreach efforts.",
  },
  {
    src: "/9.JPG",
    title: "Service Through Action",
    desc: "Documenting care, leadership, and contribution.",
  },
];

export default function FeaturedMoments() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === featuredImages.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="featured-moments" className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-700 font-semibold">
          Featured Moments
        </p>
        <h3 className="mt-3 text-3xl md:text-4xl font-bold">
          A few defining moments from her journey
        </h3>
      </div>

      <div className="mt-10 relative overflow-hidden rounded-[2rem] bg-white shadow-xl border border-slate-200">
        <img
          src={featuredImages[current].src}
          alt={featuredImages[current].title}
          className="w-full h-[320px] md:h-[520px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <h4 className="text-2xl md:text-3xl font-semibold">
            {featuredImages[current].title}
          </h4>
          <p className="mt-2 text-white/90 max-w-2xl leading-7">
            {featuredImages[current].desc}
          </p>
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
          {featuredImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                current === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}