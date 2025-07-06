import { Helmet } from "react-helmet-async";

const HeroImagePreload = ({ image }) => {
  if (!image) return null;
  return (
    <Helmet>
      <link rel="preload" as="image" href={image} fetchpriority="high" />
    </Helmet>
  );
};

export default HeroImagePreload;
