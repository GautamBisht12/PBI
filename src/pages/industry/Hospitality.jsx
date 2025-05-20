import HeroSection from "../../components/ui/HeroSection";

const Hospitality = () => {
  const heroData = {
    heroTitle: "Hospitality",
    heroSubtitle:
      "Empowering Your Business with Professional Bookkeeping, Accounting, and Corporate Finance Solutions",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    btnText: "Consult with our Hospitality Expert",
  };
  return (
    <>
      <HeroSection heroDetails={heroData} />
    </>
  );
};

export default Hospitality;
