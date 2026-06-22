import SectionContainer from "@/components/ui/SectionContainer";

const FAQS = [
  {
    question: "When does Tru Construction Estimator launch?",
    answer:
      "We're putting the finishing touches on the app now. Join the waitlist and we'll email you the moment it's available.",
  },
  {
    question: "Which platforms will it support?",
    answer: "Tru Construction Estimator will be available for both iOS and Android.",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer:
      "Free includes basic calculators and limited project storage. Pro ($9.99/month or $79.99/year) adds unlimited projects, branded PDF generation, a full client database, project duplication, and priority support.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. All project and client data is stored locally on your device — we don't collect, transmit, or store it on our servers. Read the full details on our Privacy Policy page.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, Pro subscriptions are billed through the Apple App Store or Google Play Store and can be canceled anytime through your store account.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <SectionContainer className="max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-slate-900">
                {faq.question}
                <span className="ml-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
