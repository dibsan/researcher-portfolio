const testimonials = [
  {
    quote:
      "Her commitment to public health and nutrition research is reflected not only in academics, but also in meaningful community engagement.",
    name: "Academic Colleague",
    role: "Research & Teaching Network",
  },
  {
    quote:
      "She brings compassion, professionalism, and a clear sense of purpose to every outreach and volunteer activity she participates in.",
    name: "Community Collaborator",
    role: "Public Health Support Initiative",
  },
  {
    quote:
      "Her work demonstrates how research can become truly impactful when connected to real people and real communities.",
    name: "Professional Peer",
    role: "Health & Nutrition Field",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-700 font-semibold">
          Testimonials
        </p>
        <h3 className="mt-3 text-3xl md:text-4xl font-bold">
          Words that reflect her impact
        </h3>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="rounded-[2rem] bg-white p-8 border border-slate-200 shadow-sm"
          >
            <p className="text-slate-600 leading-8">“{item.quote}”</p>
            <div className="mt-6">
              <h4 className="font-semibold text-slate-900">{item.name}</h4>
              <p className="text-sm text-slate-500 mt-1">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}