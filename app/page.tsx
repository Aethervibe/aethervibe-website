import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
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
        <HowItWorks />
        <ForSellers />
        <ForBuyers />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
