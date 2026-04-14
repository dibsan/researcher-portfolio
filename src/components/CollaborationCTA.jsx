import { profile } from "../data/profileData";

export default function CollaborationCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="rounded-[2rem] bg-gradient-to-r from-sky-600 to-slate-900 text-white p-8 md:p-12 shadow-lg">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-200 font-semibold">
          Collaboration
        </p>
        <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
          Open to research collaboration, academic discussion, and community initiatives
        </h3>
        <p className="mt-5 text-white/90 leading-8 max-w-3xl">
          She welcomes opportunities to collaborate on research, academic
          projects, public health work, and knowledge-sharing initiatives in
          nutrition and community wellbeing.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-2xl bg-white px-6 py-3 text-slate-900 font-medium"
          >
            Email Her
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/30 px-6 py-3 text-white font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}