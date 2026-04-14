export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            About
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">
            Academic profile
          </h2>

          <p className="mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-slate-600">
            Badiaa Alhalabi is a public health nutrition researcher currently pursuing a PhD at
            SRM Institute of Science and Technology, Chennai. Her work combines research, teaching,
            and community engagement with a focus on nutrition, public health, and vulnerable populations.
          </p>

          <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-slate-600">
            Her academic journey reflects both scientific commitment and real-world service across Syria and India.
          </p>
        </div>

        <div className="rounded-[1.75rem] bg-teal-700 p-6 text-white shadow-sm sm:p-8 md:p-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
            Mission
          </p>
          <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-teal-50">
            To connect public health research, nutrition science, and community wellbeing in ways
            that create practical and human-centered impact.
          </p>
        </div>
      </div>
    </section>
  );
}