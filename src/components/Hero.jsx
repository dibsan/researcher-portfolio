import { profile } from "../data/profileData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-14 md:pt-10 md:pb-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div className="order-1">
          <div className="mx-auto max-w-md sm:max-w-lg lg:max-w-xl overflow-hidden rounded-[1.75rem] bg-white shadow-xl ring-1 ring-slate-200">
            <img
              src="/hero-feature.jpg"
              alt="Featured volunteering work"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="order-2 mt-10 sm:mt-12 lg:mt-0">
          <div className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Public Health Nutrition Researcher
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-base font-medium text-slate-700 sm:text-lg md:text-xl">
            {profile.title}
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
            {profile.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#publications"
              className="w-full sm:w-auto rounded-2xl bg-teal-700 px-6 py-3 text-center text-white shadow-md hover:bg-teal-800"
            >
              View Publications
            </a>

            <a
              href="#gallery"
              className="w-full sm:w-auto rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-slate-800 hover:bg-slate-50"
            >
              Explore Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}