const journeySteps = [
  {
    country: "Syria",
    flag: "🇸🇾",
    city: "Homs, Syria",
    title: "Foundation in Nutrition & Community Service",
    desc: "Her journey began in Syria, where she built her academic foundation in nutrition and contributed to teaching support and community-focused service.",
    icon: "📘",
  },
  {
    country: "Transition",
    flag: "✈️",
    city: "Academic Journey",
    title: "A Path Across Borders",
    desc: "Her move from Syria to India reflects resilience, growth, and a deep commitment to advancing knowledge through research and public health.",
    icon: "🌍",
  },
  {
    country: "India",
    flag: "🇮🇳",
    city: "Chennai, India",
    title: "Research, Teaching & Public Health Impact",
    desc: "In India, she continued with higher education, research publications, teaching, and public health engagement that connect science with real communities.",
    icon: "🎓",
  },
];

export default function GlobalJourney() {
  return (
    <section
      id="journey"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:p-10">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Global Journey
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">
            From Syria to India
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 text-slate-600">
            A journey shaped by learning, resilience, service, and a growing
            commitment to public health nutrition and academic impact.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="relative mt-12 hidden lg:block">
          <div className="absolute left-0 right-0 top-10 h-1 rounded-full bg-teal-100" />
          <div className="absolute left-0 top-10 h-1 w-full rounded-full bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700" />

          <div className="grid grid-cols-3 gap-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl shadow-md ring-4 ring-teal-100">
                  {step.flag}
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-[#f8f6f2] p-6 text-left ring-1 ring-slate-200 shadow-sm hover:-translate-y-1 transition">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-teal-700">
                        {step.city}
                      </p>
                      <h3 className="text-lg font-semibold text-slate-800">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile + tablet stacked journey */}
        <div className="mt-10 space-y-6 lg:hidden">
          {journeySteps.map((step, index) => (
            <div key={index} className="relative pl-14">
              {index !== journeySteps.length - 1 && (
                <div className="absolute left-[1.15rem] top-12 bottom-[-1.5rem] w-1 rounded-full bg-gradient-to-b from-teal-300 to-teal-700" />
              )}

              <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow ring-2 ring-teal-100">
                {step.flag}
              </div>

              <div className="rounded-[1.5rem] bg-[#f8f6f2] p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{step.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-teal-700">
                      {step.city}
                    </p>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-800">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-sm sm:text-base leading-7 text-slate-600">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom journey path */}
        <div className="mt-10 rounded-[1.5rem] bg-gradient-to-r from-teal-50 to-[#f8f6f2] p-5 ring-1 ring-slate-200">
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <span className="text-2xl">🇸🇾</span>
              <span>Syria</span>
            </div>

            <div className="text-2xl text-teal-700">→</div>

            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <span className="text-2xl">🇮🇳</span>
              <span>India</span>
            </div>
          </div>

          <p className="mt-3 text-center text-sm sm:text-base text-slate-600">
            A cross-border journey of academic growth, public health service, and
            research-driven impact.
          </p>
        </div>
      </div>
    </section>
  );
}