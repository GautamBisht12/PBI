const WorkedWith = () => {
  const companies = [
    {
      name: "Intuit_QuickBooks_logo",
      logo: (
        <img
          src="/workedwith/intuit.svg"
          alt="Intuit_QuickBooks_logo"
          className="w-36 object-contain"
          loading="lazy"
          decoding="async"
        />
      ),
    },
    {
      name: "XERO",
      logo: (
        <img
          src="workedwith/xero.webp"
          alt="Shopify Logo"
          className="w-24 object-contain"
          loading="lazy"
          decoding="async"
        />
      ),
    },
    {
      name: "Shopify",
      logo: (
        <img
          src="workedwith/Shopify-Logo.webp"
          alt="Shopify Logo"
          className="w-24 object-contain"
          loading="lazy"
          decoding="async"
        />
      ),
    },
    {
      name: "Amazon",
      logo: (
        <img
          src="workedwith/Amazon-Logo.webp"
          alt="Amazon Logo"
          loading="lazy"
          className="w-24 object-contain"
          decoding="async"
        />
      ),
    },
    {
      name: "Gusto",
      logo: (
        <img
          src="workedwith/gusto.webp"
          alt="Amazon Logo"
          loading="lazy"
          className="w-28 object-contain"
          decoding="async"
        />
      ),
    },
    {
      name: "Walmart",
      logo: (
        <img
          src="workedwith/Walmart-logo.webp"
          alt="Walmart Logo"
          loading="lazy"
          className="w-24 h-24 object-contain"
          decoding="async"
        />
      ),
    },
    {
      name: "Ebay",
      logo: (
        <img
          src="workedwith/EBay_logo.svg"
          alt="Walmart Logo"
          loading="lazy"
          className="w-24 h-24 object-contain"
          decoding="async"
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
