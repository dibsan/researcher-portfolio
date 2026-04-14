import { experience } from "../data/profileData";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-sm uppercase tracking-[0.25em] text-sky-700 font-semibold">
        Career Journey
      </p>
      <h3 className="mt-3 text-3xl font-bold">Experience</h3>

      <div className="mt-8 space-y-6">
        {experience.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm"
          >
            <div className="flex justify-between flex-wrap gap-3">
              <div>
                <h4 className="text-xl font-semibold">{item.role}</h4>
                <p className="text-slate-600 mt-1">{item.org}</p>
              </div>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-sm">
                {item.period}
              </span>
            </div>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600 leading-7">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}