const WorkedWith = () => {
  const companies = [
    {
      name: "Shopify",
      logo: "https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png",
    },
    {
      name: "Amazon",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
    },
    {
      name: "Walmart",
      logo: "https://atowndailynews.com/wp-content/uploads/2016/06/Walmart-logo-600x338.jpg",
    },
  ];
  return (
    <div className="worked-with-container mt-16">
      <h3 className="worked-with-title bg-clip-text text-transparent bg-gradient-to-r from-black to-[#FFD580]">
        We work with tons of apps… Here are a few!
      </h3>

      <div className="companies-grid">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="company-logo "
            />
            {/* <p className="company-name">{company.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkedWith;
