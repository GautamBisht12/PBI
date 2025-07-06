import HeroSection from "../../components/ui/HeroSection";

const Hospitality = () => {
  const heroData = {
    heroTitle: "Hospitality",
    heroSubtitle:
      "Empowering Your Business with Professional Bookkeeping, Accounting, and Corporate Finance Solutions",
    heroImage: "/hero/documents.webp",
    btnText: "Consult with our Hospitality Expert",
  };
  return (
    <>
      <HeroSection heroDetails={heroData} />
    </>
  );
};

export default Hospitality;
