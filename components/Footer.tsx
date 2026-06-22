import SectionContainer from "@/components/ui/SectionContainer";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <SectionContainer className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Tru Construction Estimator
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Kellits, Clarendon, Jamaica
          </p>
        </div>

        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="/privacy" className="hover:text-slate-900">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-slate-900">
            Terms of Service
          </a>
          <a
            href="mailto:kuirotree@gmail.com"
            className="hover:text-slate-900"
          >
            Contact
          </a>
        </nav>

        <a
          href="#waitlist"
          className="text-sm font-semibold text-amber-700 hover:text-amber-600"
        >
          Join the Waitlist →
        </a>
      </SectionContainer>

      <p className="mt-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Tru Construction Estimator. All
        rights reserved.
      </p>
    </footer>
  );
}
