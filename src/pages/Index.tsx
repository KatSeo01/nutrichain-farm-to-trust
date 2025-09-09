import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Impact from "@/components/Impact";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <Trust />
      <Impact />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
