import HeroSection from "../../components/ui/HeroSection";

const Construction = () => {
  const heroData = {
    heroTitle: "Construction",
    heroSubtitle:
      "Contructing a Better Future: Your Partner in Building Success",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    btnText: "Consult with our Construction experts",
  };
  return (
    <>
      <HeroSection heroDetails={heroData} />
    </>
  );
};

export default Construction;
