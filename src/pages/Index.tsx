import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bento from "@/components/Bento";
import Process from "@/components/Process";
import QuoteBuilder from "@/components/QuoteBuilder";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />
      <Hero />
      <Bento />
      <Process />
      <QuoteBuilder />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
