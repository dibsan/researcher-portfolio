import { awards } from "../data/profileData";

export default function Awards() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
      <p className="text-sm uppercase tracking-[0.25em] text-sky-700 font-semibold">
        Recognition
      </p>
      <h3 className="mt-3 text-3xl font-bold">Awards & Honors</h3>

      <ul className="mt-6 list-disc pl-5 space-y-3 text-slate-600 leading-7">
        {awards.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>
    </div>
  );
}