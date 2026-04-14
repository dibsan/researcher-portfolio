const stats = [
  {
    icon: "📘",
    title: "Publications",
    value: "10+",
    desc: "Research papers and academic outputs.",
  },
  {
    icon: "🏆",
    title: "Awards",
    value: "5+",
    desc: "Recognitions for academic and presentation excellence.",
  },
  {
    icon: "🌍",
    title: "Global Journey",
    value: "2 Countries",
    desc: "Academic and field experience across Syria and India.",
  },
  {
    icon: "🤝",
    title: "Community Impact",
    value: "Ongoing",
    desc: "Volunteering and outreach that connects research to real people.",
  },
];

export default function ResearchStats() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-700 font-semibold">
          Research Snapshot
        </p>
        <h3 className="mt-3 text-3xl md:text-4xl font-bold">
          A quick look at her academic profile
        </h3>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm text-center"
          >
            <div className="text-4xl">{item.icon}</div>
            <h4 className="mt-4 text-xl font-semibold">{item.title}</h4>
            <div className="mt-2 text-2xl font-bold text-sky-700">{item.value}</div>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-7">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}