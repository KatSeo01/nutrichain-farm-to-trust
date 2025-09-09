import blockchainImage from "@/assets/blockchain-network.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">NutriChain</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              NutriChain ensures food and pharmaceutical products are verified, traceable, and trusted from source to shelf. We work with certification boards, governments, and producers to digitize compliance, reduce fraud, and unlock new markets for African farmers and exporters.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <div className="text-2xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Farmers Targeted</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <div className="text-2xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Blockchain Verified</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src={blockchainImage}
                alt="Blockchain network visualization representing trust and certification"
                className="w-full h-96 object-cover rounded-lg shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;