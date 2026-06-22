import SectionContainer from "@/components/ui/SectionContainer";

const FEATURES = [
  {
    title: "Material Calculators",
    description:
      "Built-in calculators for concrete, lumber, drywall, paint, and more — no more guesswork or back-of-napkin math.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7h6m-6 4h6m-6 4h3m-7-9h11a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1z"
      />
    ),
  },
  {
    title: "Instant Cost Estimates",
    description:
      "Turn project specs into a complete cost estimate in minutes, not hours. Adjust pricing on the fly as jobs change.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2"
      />
    ),
  },
  {
    title: "Client Management",
    description:
      "Keep every client's contact info, project history, and quotes organized in one place — searchable in seconds.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 014-4h2a4 4 0 014 4v2m-3-12a3 3 0 11-6 0 3 3 0 016 0zm9 3a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Branded PDF Quotes",
    description:
      "Generate polished, professional PDF quotes with your logo and company details, ready to send straight from the job site.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h6.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: "Multiple Projects",
    description:
      "Track every active job side by side without losing detail, so nothing falls through the cracks.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    ),
  },
  {
    title: "Your Data Stays Yours",
    description:
      "All project and client data lives locally on your device. No accounts, no servers, no one else looking at your numbers.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v2"
      />
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-16 sm:py-24">
      <SectionContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to quote with confidence
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            One app for calculating, estimating, and quoting — built for
            how contractors actually work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
