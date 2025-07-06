import HeroSection from "../../components/ui/HeroSection";

const Construction = () => {
  const heroData = {
    heroTitle: "Construction",
    heroSubtitle:
      "Contructing a Better Future: Your Partner in Building Success",
    heroImage: "/hero/documents.webp",
    btnText: "Consult with our Construction experts",
  };
  return (
    <>
      <HeroSection heroDetails={heroData} />
    </>
  );
};

export default Construction;
