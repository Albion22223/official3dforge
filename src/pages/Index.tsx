import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bento from "@/components/Bento";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />
      <Hero />
      <Bento />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
