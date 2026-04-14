const researchAreas = [
  "Public Health Nutrition",
  "Maternal & Child Health",
  "Food Systems Research",
  "Nutrition Epidemiology",
  "Systematic Reviews",
  "Meta-analysis",
  "Diet Quality",
  "Community Health",
];

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Research
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">
          Research interests
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-600 leading-7">
          Key areas that define her academic work and public health contribution.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {researchAreas.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}