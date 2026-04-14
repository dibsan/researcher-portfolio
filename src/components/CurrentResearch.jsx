const currentResearch = [
  {
    title: "Food Systems and Online Food Environments",
    desc: "Studying the nutritional quality and food additive patterns in ready-to-eat products sold through online marketplaces.",
  },
  {
    title: "Maternal and Child Nutrition",
    desc: "Exploring nutrition-related challenges, awareness, and intervention opportunities for mothers and children.",
  },
  {
    title: "Public Health Nutrition Awareness",
    desc: "Investigating how evidence-based nutrition information can better reach communities through education and outreach.",
  },
];

export default function CurrentResearch() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-700 font-semibold">
          Current Research
        </p>
        <h3 className="mt-3 text-3xl md:text-4xl font-bold">
          What she is currently exploring
        </h3>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {currentResearch.map((item) => (
          <div
            key={item.title}
            className="rounded-[2rem] bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold text-slate-900">
              {item.title}
            </h4>
            <p className="mt-4 text-slate-600 leading-8">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}