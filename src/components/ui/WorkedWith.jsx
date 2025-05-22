const WorkedWith = () => {
  const companies = [
    {
      name: "Intuit_QuickBooks_logo",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/79/Intuit_QuickBooks_logo.svg"
          alt="Intuit_QuickBooks_logo"
          className="w-36 "
        />
      ),
    },
    {
      name: "XERO",
      logo: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasOICRC_6iN6K6IQiapRLMx-UE4U72jRD5w&s"
          alt="Shopify Logo"
          className="w-24 "
        />
      ),
    },
    {
      name: "Shopify",
      logo: (
        <img
          src="https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png"
          alt="Shopify Logo"
          className="w-24 "
        />
      ),
    },
    {
      name: "Amazon",
      logo: (
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
          alt="Amazon Logo"
          className="w-24 "
        />
      ),
    },
    {
      name: "Gusto",
      logo: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5A8Iv2CT-9t4XqDD2KrmeRtbEl4imeNT8Hg&s"
          alt="Amazon Logo"
          className="w-28 "
        />
      ),
    },
    {
      name: "Walmart",
      logo: (
        <img
          src="https://atowndailynews.com/wp-content/uploads/2016/06/Walmart-logo-600x338.jpg"
          alt="Walmart Logo"
          className="w-24 h-24"
        />
      ),
      logo: (
        <img
          src="https://atowndailynews.com/wp-content/uploads/2016/06/Walmart-logo-600x338.jpg"
          alt="Walmart Logo"
          className="w-24 h-24"
        />
      ),
    },
  ];
  return (
    <div className="worked-with-container mt-16">
      <h3 className="worked-with-title bg-clip-text bg-gradient-to-r text-[#4955E9]">
        We’ve worked extensively with leading software tools. <br /> Here are a
        few!
      </h3>

      <div className="companies-grid">
        <div className="companies-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="company-card flex items-center justify-center"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkedWith;
