import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { useState } from "react";
import CertificationForm from "./CertificationForm";

const CTA = () => {
  const [showCertificationForm, setShowCertificationForm] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L60 40L50 30L40 40z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to Build <span className="text-accent">Trust?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of farmers, producers, and retailers who trust NutriChain for verified, traceable products.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              onClick={() => setShowCertificationForm(true)}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-10 py-4 rounded-full shadow-gold transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Get Certified Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-10 py-4 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <Users className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-accent mb-2">✓</div>
              <div className="text-sm">Instant Certification</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl font-bold text-accent mb-2">✓</div>
              <div className="text-sm">Blockchain Security</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl font-bold text-accent mb-2">✓</div>
              <div className="text-sm">Global Market Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Form Modal */}
      <CertificationForm 
        isOpen={showCertificationForm} 
        onClose={() => setShowCertificationForm(false)} 
      />
    </section>
  );
};

export default CTA;