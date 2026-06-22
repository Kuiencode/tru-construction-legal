import SectionContainer from "@/components/ui/SectionContainer";

const PAIN_POINTS = [
  {
    title: "Math mistakes cost you money",
    description:
      "Manual material calculations on paper or in your head lead to costly under-quotes and wasted trips back to the supplier.",
  },
  {
    title: "Slow quotes lose jobs",
    description:
      "While you're typing up an estimate at home, a faster competitor already sent theirs and won the bid.",
  },
  {
    title: "Handwritten quotes look unprofessional",
    description:
      "Scrap paper and napkin math don't inspire confidence in clients comparing multiple contractors.",
  },
  {
    title: "Client info scattered everywhere",
    description:
      "Notebooks, text messages, spreadsheets — finding a past client's details shouldn't take ten minutes of digging.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 sm:py-24">
      <SectionContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sound familiar?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every contractor knows these problems. Tru Construction
            Estimator was built to fix them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PAIN_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
