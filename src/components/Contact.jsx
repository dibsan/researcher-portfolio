import { profile } from "../data/profileData";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="overflow-hidden rounded-[1.75rem] bg-teal-700 p-6 text-white shadow-xl sm:p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
              Contact
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
              Open to academic collaboration and meaningful conversations
            </h2>
            <p className="mt-5 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-teal-50">
              Connect for research collaboration, academic discussion, public health initiatives,
              and professional networking.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-2xl bg-white px-6 py-3 text-center font-medium text-teal-800"
              >
                Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/30 px-6 py-3 text-center font-medium text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur sm:p-6">
            <div className="space-y-4 text-sm sm:text-base">
              <p><span className="font-semibold text-white">Email:</span> {profile.email}</p>
              <p><span className="font-semibold text-white">Phone:</span> {profile.phone}</p>
              <p><span className="font-semibold text-white">Location:</span> {profile.location}</p>
              <p><span className="font-semibold text-white">Nationality:</span> {profile.nationality}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}