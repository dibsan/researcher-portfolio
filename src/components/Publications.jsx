import { useState } from "react";
import { publications } from "../data/profileData";

export default function Publications() {
  const [selectedPublication, setSelectedPublication] = useState(null);

  return (
    <section id="publications" className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-700 font-semibold">
          Selected Work
        </p>
        <h3 className="mt-3 text-3xl md:text-4xl font-bold">Publications</h3>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
          A selected list of research publications, academic work, and ongoing contributions.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="rounded-[2rem] bg-white border border-slate-200 p-6 md:p-7 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-3xl">
                <h4 className="text-lg md:text-xl font-semibold text-slate-900 leading-8">
                  {pub.title}
                </h4>
                <p className="mt-2 text-slate-600">
                  {pub.journal} • {pub.year}
                </p>
              </div>

              <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 border border-sky-100">
                {pub.status}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {pub.doi && (
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:opacity-90 transition"
                >
                  DOI
                </a>
              )}

              <button
                onClick={() => setSelectedPublication(pub)}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                Read Abstract
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPublication && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-6"
          onClick={() => setSelectedPublication(null)}
        >
          <div
            className="w-full max-w-3xl rounded-[2rem] bg-white p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-sky-700 font-semibold">
                  Abstract
                </p>
                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  {selectedPublication.title}
                </h4>
                <p className="mt-2 text-slate-500">
                  {selectedPublication.journal} • {selectedPublication.year}
                </p>
              </div>

              <button
                onClick={() => setSelectedPublication(null)}
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 font-semibold hover:bg-slate-200 transition"
              >
                ✕
              </button>
            </div>

            <p className="mt-6 text-slate-600 leading-8">
              {selectedPublication.abstract}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {selectedPublication.doi && (
                <a
                  href={selectedPublication.doi}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-white text-sm font-medium"
                >
                  Open DOI
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}