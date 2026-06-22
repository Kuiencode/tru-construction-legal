import SectionContainer from "@/components/ui/SectionContainer";
import PhoneMockup from "@/components/ui/PhoneMockup";

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-slate-50">
      <SectionContainer className="grid items-center gap-12 py-16 sm:py-24 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            Coming soon to iOS &amp; Android
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Stop guessing. Start quoting accurately.
          </h1>

          <p className="mt-5 max-w-md text-lg text-slate-600">
            Tru Construction Estimator helps contractors calculate material
            costs, build accurate estimates, and send branded PDF quotes
            in minutes — right from the job site.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
            >
              Join the Waitlist — Coming Soon
            </a>
            <a
              href="#features"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
            >
              See what it does
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Free tier available. No credit card required.
          </p>
        </div>

        <PhoneMockup />
      </SectionContainer>
    </section>
  );
}
