import SectionContainer from "@/components/ui/SectionContainer";

const TIERS = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    description: "Get started with the essentials.",
    features: ["Basic material calculators", "Limited project storage"],
    cta: "Join the Waitlist",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    cadence: "/month (or $79.99/year)",
    description: "Everything you need to run your business.",
    features: [
      "Unlimited projects",
      "Branded PDF generation",
      "Full client database",
      "Project duplication",
      "Priority support",
    ],
    cta: "Get Pro at Launch",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-16 sm:py-24">
      <SectionContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple pricing, built for contractors
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free. Upgrade when you&apos;re ready for unlimited
            projects and branded quotes.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.highlighted
                  ? "bg-slate-900 text-white ring-2 ring-amber-500"
                  : "bg-white text-slate-900 ring-1 ring-slate-200"
              }`}
            >
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p
                className={`mt-4 text-sm ${
                  tier.highlighted ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold">{tier.price}</span>
                <span
                  className={`text-sm ${
                    tier.highlighted ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {tier.cadence}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={2}
                      stroke="currentColor"
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        tier.highlighted ? "text-amber-400" : "text-amber-600"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-amber-500 text-slate-900 hover:bg-amber-400"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Subscriptions are billed through the Apple App Store or Google
          Play Store once the app launches.
        </p>
      </SectionContainer>
    </section>
  );
}
