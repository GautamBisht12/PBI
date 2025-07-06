import HeroSection from "../../components/ui/HeroSection";

const Healthcare = () => {
  const heroData = {
    heroTitle: "Healthcare",
    heroSubtitle:
      "Empowering Your Business with Professional Bookkeeping, Accounting, and Corporate Finance Solutions.",
    heroImage: "/hero/documents.webp",
    btnText: "Consult with our Healthcare Expert",
  };
  return (
    <>
      <HeroSection heroDetails={heroData} />
    </>
  );
};

export default Healthcare;
