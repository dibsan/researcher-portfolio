const impactCards = [
  {
    title: "Community Health Outreach",
    desc: "Contributing to field-based health and nutrition engagement through volunteering and awareness programs.",
  },
  {
    title: "Evidence-Based Research",
    desc: "Producing research that supports public health understanding, nutrition education, and food systems improvement.",
  },
  {
    title: "Women & Child Wellbeing",
    desc: "Supporting vulnerable communities with a focus on maternal health, child nutrition, and wellbeing initiatives.",
  },
  {
    title: "Academic & Teaching Contribution",
    desc: "Bridging classroom knowledge with real-world public health practice through teaching and mentoring.",
  },
];

export default function ResearchImpact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-700 font-semibold">
          Research Impact
        </p>
        <h3 className="mt-3 text-3xl md:text-4xl font-bold">
          Work that connects research with society
        </h3>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {impactCards.map((card) => (
          <div
            key={card.title}
            className="rounded-[2rem] bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-2xl font-semibold text-slate-900">{card.title}</h4>
            <p className="mt-4 text-slate-600 leading-8">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}