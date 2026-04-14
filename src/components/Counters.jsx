import { useEffect, useState } from "react";

function Counter({ end, label, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.max(1, Math.ceil(end / 30));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="rounded-[1.5rem] bg-white p-5 sm:p-6 text-center shadow-sm ring-1 ring-slate-200">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600">
        {label}
      </p>
    </div>
  );
}

export default function Counters() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
        <Counter end={10} label="Research Outputs" />
        <Counter end={5} label="Awards" />
        <Counter end={6} label="Years Experience" />
        <Counter end={2} label="Countries" suffix="" />
      </div>
    </section>
  );
}