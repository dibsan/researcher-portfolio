import { education } from "../data/profileData";

export default function Education() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
      <p className="text-sm uppercase tracking-[0.25em] text-sky-700 font-semibold">
        Education
      </p>
      <h3 className="mt-3 text-3xl font-bold">Academic Background</h3>

      <div className="mt-6 space-y-5">
        {education.map((item, index) => (
          <div key={index}>
            <h4 className="font-semibold">{item.degree}</h4>
            <p className="text-slate-600">{item.institute}</p>
            <p className="text-sm text-slate-500">{item.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
}