const timelineData = [
  {
    year: "2012 – 2016",
    title: "Nutrition Studies in Syria",
    desc: "Completed Bachelor of Health Sciences in Nutrition and built a strong academic foundation in health and wellbeing.",
  },
  {
    year: "2016 – 2018",
    title: "Teaching and Community Support",
    desc: "Worked as a teaching assistant and contributed to volunteer initiatives supporting women and children.",
  },
  {
    year: "2018 – 2021",
    title: "Advanced Studies in India",
    desc: "Pursued higher education in public health and developed a deeper research interest in nutrition and health systems.",
  },
  {
    year: "2021 – Present",
    title: "PhD, Teaching, and Research",
    desc: "Continuing academic growth through doctoral research, teaching, publications, and community-focused work.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-700 font-semibold">
          Journey
        </p>
        <h3 className="mt-3 text-3xl md:text-4xl font-bold">
          Her academic and service journey
        </h3>
      </div>

      <div className="mt-10 space-y-6">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[180px_1fr] gap-6 items-start rounded-[2rem] bg-white p-8 border border-slate-200 shadow-sm"
          >
            <div className="text-sky-700 font-bold text-lg">{item.year}</div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-3 text-slate-600 leading-8">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}