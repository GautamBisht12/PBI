import HeroSection from "../../components/ui/HeroSection";

const PrivacyPolicy = () => {
  const heroData = {
    heroTitle: "Privacy Policy",
    heroSubtitle:
      " We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our services.",
    heroImage:
      "https://picjumbo.com/wp-content/uploads/business-woman-signing-a-contract-2210x1473.jpg",
  };
  return (
    <>
      <HeroSection heroDetails={heroData} />
    </>
  );
};

export default PrivacyPolicy;
