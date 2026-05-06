import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import HowItWorks from "@/components/HowItWorks";
import ForSellers from "@/components/ForSellers";
import ForBuyers from "@/components/ForBuyers";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyNow />
        <HowItWorks />
        <ForSellers />
        <ForBuyers />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
