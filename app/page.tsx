import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import EmailSignup from "@/components/EmailSignup";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Pricing />
      <EmailSignup />
      <FAQ />
    </>
  );
}
