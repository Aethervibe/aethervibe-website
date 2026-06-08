import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedDeal from "@/components/FeaturedDeal";
import WhyNow from "@/components/WhyNow";
import HowItWorks from "@/components/HowItWorks";
import ForSellers from "@/components/ForSellers";
import ForBuyers from "@/components/ForBuyers";
import BuyerInquiryForm from "@/components/BuyerInquiryForm";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedDeal />
        <WhyNow />
        <HowItWorks />
        <ForSellers />
        <ForBuyers />
        <BuyerInquiryForm />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
