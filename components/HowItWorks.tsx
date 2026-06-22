import SectionContainer from "@/components/ui/SectionContainer";

const STEPS = [
  {
    number: "1",
    title: "Enter project details",
    description:
      "Add the client, the job, and the materials or labor involved using built-in calculators.",
  },
  {
    number: "2",
    title: "Generate an instant estimate",
    description:
      "Tru does the math and builds a complete cost breakdown in seconds.",
  },
  {
    number: "3",
    title: "Send a branded PDF quote",
    description:
      "Share a polished, professional quote with your client right from the job site.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24">
      <SectionContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From job site to signed quote in three steps
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
