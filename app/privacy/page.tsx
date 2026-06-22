import type { Metadata } from "next";
import SectionContainer from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "Privacy Policy | Tru Construction Estimator",
  description:
    "Privacy Policy for Tru Construction Estimator — a privacy-first construction estimating app.",
};

export default function PrivacyPage() {
  return (
    <SectionContainer className="max-w-3xl py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Privacy Policy for Tru Construction Estimator
      </h1>
      <p className="mt-2 text-sm font-medium text-slate-500">
        Last updated: May 2026
      </p>

      <p className="mt-6 text-slate-700">
        David King (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
        operates the Tru Construction Estimator mobile application (the
        &ldquo;App&rdquo;). This page informs you of our policies regarding
        the collection, use, and disclosure of personal information when
        you use our App.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        1. Information We Collect
      </h2>
      <p className="mt-3 text-slate-700">
        <strong>
          Tru Construction Estimator is a privacy-first application.
        </strong>{" "}
        We do not collect, transmit, or store any of your personal
        information on our servers.
      </p>
      <p className="mt-3 text-slate-700">
        All data created in the App — including projects, clients,
        settings, and quotes — is stored <strong>locally on your device
        only</strong> using SQLite. This data never leaves your device
        unless you explicitly choose to share it (for example, by emailing
        a generated PDF quote to a client).
      </p>

      <h3 className="mt-6 text-base font-semibold text-slate-900">
        Data You Enter Into the App
      </h3>
      <p className="mt-2 text-slate-700">
        The following data is stored locally on your device and is NOT
        transmitted to us:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
        <li>Project names, descriptions, and locations</li>
        <li>Client names, phone numbers, emails, and addresses</li>
        <li>Cost calculations and quotes</li>
        <li>Company information you enter in Settings</li>
      </ul>

      <h3 className="mt-6 text-base font-semibold text-slate-900">
        Data We Do NOT Collect
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
        <li>We do not use analytics, tracking, or telemetry</li>
        <li>We do not show advertisements</li>
        <li>We do not share data with third parties</li>
        <li>We do not track your location</li>
        <li>
          We do not access your contacts, photos, or other device data
          without your explicit action
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        2. PDF Generation
      </h2>
      <p className="mt-3 text-slate-700">
        When you generate a PDF quote in the App:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
        <li>The PDF is created on your device</li>
        <li>
          The PDF is shared via your device&apos;s standard sharing
          mechanism (email, messaging, AirDrop, etc.)
        </li>
        <li>We do not have access to or store the PDF</li>
        <li>
          It is your responsibility to ensure you have permission to
          share any client information included in the PDF
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        3. Subscription Information
      </h2>
      <p className="mt-3 text-slate-700">
        If you subscribe to Tru Construction Estimator Pro:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
        <li>
          Subscription processing is handled by Apple App Store or Google
          Play Store
        </li>
        <li>We do not receive your payment information</li>
        <li>We only receive notification that you have subscribed</li>
        <li>
          You may cancel your subscription at any time through your App
          Store or Play Store account
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        4. Children&apos;s Privacy
      </h2>
      <p className="mt-3 text-slate-700">
        Tru Construction Estimator is intended for use by professional
        adults (construction contractors). We do not knowingly collect any
        information from children under the age of 13. If you are under
        13, please do not use this application.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        5. Changes to This Privacy Policy
      </h2>
      <p className="mt-3 text-slate-700">
        We may update our Privacy Policy from time to time. We will notify
        you of any changes by posting the new Privacy Policy on this page
        and updating the &ldquo;Last updated&rdquo; date.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        6. Your Rights
      </h2>
      <p className="mt-3 text-slate-700">
        Because we do not collect or store your personal information on
        our servers, there is no data for us to delete or modify. To
        remove your data:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
        <li>Delete the app from your device, OR</li>
        <li>Use the app&apos;s built-in delete features for individual items</li>
      </ul>
      <p className="mt-3 text-slate-700">
        For users in the European Union (GDPR) or California (CCPA): You
        retain full control over your data because it remains exclusively
        on your device.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        7. Contact Us
      </h2>
      <p className="mt-3 text-slate-700">
        If you have any questions about this Privacy Policy, please
        contact us:
      </p>
      <p className="mt-3 text-slate-700">
        <strong>Email:</strong> kuirotree@gmail.com
        <br />
        <strong>Location:</strong> Kellits, Clarendon, Jamaica
      </p>
      <p className="mt-6 text-slate-700">
        By using Tru Construction Estimator, you agree to the collection
        and use of information in accordance with this policy.
      </p>
    </SectionContainer>
  );
}
