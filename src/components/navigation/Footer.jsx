import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Quick links data
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  // Services data
  const services = [
    { name: "Bookkeeping", to: "/services/bookkeeping" },
    { name: "Accounting (Process Support)", to: "/services/accounting" },
    { name: "Corporate Finance Management", to: "/services/finance" },
  ];

  const legal = [{ name: "Privacy Policy", to: "/privacy-policy" }];

  // Social media links
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/upsell-finlogix",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/upsellfinlogix?igsh=dzE3dGx3aDBteDkz",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        {/* Top section with logo, description, links and contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-9">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-4">
            <Link
              to="/"
              className="flex items-center justify-start space-x-2  w-[350px]"
            >
              <span
                className={`flex gap-2 text-2xl font-bold text-white hover:text-[#B79E63]
                }`}
              >
                <h3>Upsell FinLogix </h3>
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
              Empowering businesses with advanced financial analytics.
            </p>

            {/* Social media icons */}
            <div className="mt-6 flex space-x-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  to={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#B79E63] transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-5 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-[#B79E63] transition-colors duration-300 flex items-center group"
                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-5 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.to}
                    className="text-gray-400 hover:text-[#B79E63] transition-colors duration-300 flex items-center group"
                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal  */}
          <div className="col-span-1 md:col-span-2">
            <ul className="space-y-3">
              {legal.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.to}
                    className="text-gray-400 hover:text-[#B79E63] transition-colors duration-300 flex items-center group"
                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      {l.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and additional links */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-base mx-auto">
            © {currentYear}{" "}
            <span className="text-[#B79E63]">Upsell FinLogix</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
