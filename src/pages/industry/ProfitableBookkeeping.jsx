import HeroSection from "../../components/ui/HeroSection";

const ProfitableBookkeeping = () => {
  const heroData = {
    heroTitle: "Profitable Bookkeeping",
    heroSubtitle:
      "Unlock the secrets to financial success with our Profitable Bookkeeping services. We specialize in helping businesses optimize their financial operations, ensuring profitability and growth.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  };

  return (
    <div>
      <HeroSection heroDetails={heroData} />
    </div>
  );
};

export default ProfitableBookkeeping;
