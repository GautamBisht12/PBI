import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MoveUpRight, User, ChevronDown } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { sub } from "framer-motion/client";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Bookkeeping", href: "/services/bookkeeping" },
      { name: "Accounting", href: "/services/accounting" },
      { name: "Corporate Finance Management ", href: "/services/finance" },
    ],
  },
  {
    name: "Industry",
    href: "/industry",
    submenu: [
      { name: "Ecommerce", href: "/industry/ecommerce " },
      { name: "Healthcare & Medical", href: "/industry/healthcare" },
      { name: "Hospitality", href: "/industry/hospitality" },
      {
        name: "Manufacturing & Wholesale Service",
        href: "/industry/manufacturing",
      },
      { name: "Construction & Contracting", href: "/industry/construction" },
    ],
  },

  { name: "Pricing", href: "/pricing" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { isSignedIn } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileMenuOpen]);

  const getTextColor = (isActive) => {
    if (!isHomePage) return isActive ? "text-[#B69D62]" : "text-gray-800";
    return isActive
      ? isScrolled
        ? "text-[#B69D62]"
        : "text-white font-bold"
      : isScrolled
      ? "text-gray-300"
      : "text-white";
  };

  const getNavbarStyle = () => {
    if (!isHomePage) {
      // For all pages except home, always use white background
      return "bg-white shadow-md";
    } else {
      // For home page, use the original conditional styling
      return isScrolled
        ? "bg-black shadow-md"
        : "bg-transparent border-white border-t-2 border-b-[1px] backdrop-blur-sm border-b-white/30";
    }
  };
  // Determine border style based on page and scroll position
  const getBorderStyle = () => {
    if (!isHomePage) {
      // For all pages except home, use light borders
      return "border-gray-200 border-r-[1px]";
    } else {
      // For home page, use the original conditional styling
      return isScrolled
        ? "border-white border-r-[1px]"
        : "border-white/30 border-r-[1px] backdrop-blur-sm";
    }
  };

  const toggleSubmenu = (e, index) => {
    e.stopPropagation();
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${getNavbarStyle()}`}
    >
      <nav className="max-w-screen-xl mx-auto flex  justify-between px-4  md:px-6 ">
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center max-w-[250px] py-3 md:py-5 pr-4 ${
            isScrolled && isHomePage
              ? "border-gray-500 border-r-[1px]"
              : !isHomePage
              ? "border-gray-200 border-r-[1px]"
              : "border-white/30 border-r-[1px] backdrop-blur-sm"
          }`}
        >
          <span
            className={`flex gap-2 text-lg md:text-2xl font-bold ${
              !isHomePage
                ? "text-[#B69D62]"
                : isScrolled
                ? "text-[#B69D62]"
                : "text-white"
            }`}
          >
            <img
              src="https://upsellwholesale.com/wp-content/uploads/2025/05/logo2.png"
              alt="logo"
              className="w-10 h-10 md:w-14 md:h-14"
            />
            <h3 className="text-lg">
              Upsell <br />
              FinLogix
            </h3>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex items-center justify-center flex-grow space-x-6 py-3 md:py-5  ${
            isScrolled && isHomePage
              ? "border-gray-700 border-r-[1px]"
              : !isHomePage
              ? "border-gray-200 border-r-[1px]"
              : "border-white/30 border-r-[1px] backdrop-blur-sm"
          }`}
        >
          {navigation.map((item, index) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <>
                  <Link
                    to={item.href}
                    className={`flex items-center gap-2 text-base font-medium transition hover:text-[#B69D62] ${getTextColor(
                      location.pathname === item.href ||
                        location.pathname.startsWith(item.href + "/")
                    )}`}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </Link>
                  <div className="absolute top-full left-0 transform opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200 ease-in-out bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-[#B69D62] hover:text-black"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className={`flex gap-1 items-center text-base font-medium transition hover:text-[#B69D62] ${getTextColor(
                    location.pathname === item.href
                  )}`}
                >
                  {item.name}
                  <GoArrowUpRight size={18} />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Auth / Call to Action */}
        <div className="hidden md:flex items-center gap-2 max-w-[300px] justify-center pl-4 ">
          {isSignedIn ? (
            <>
              <Link to="/dashboard" className="btn-primary">
                Dashboard
              </Link>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10",
                  },
                }}
              />
            </>
          ) : (
            <>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-md bg-[#B79E63] hover:bg-[#1E2D2F] text-white font-semibold transition"
              >
                Free Consultation
              </Link>
              <SignInButton mode="modal">
                <User
                  size={30}
                  className={`cursor-pointer hover:text-[#B79E63] ${
                    !isHomePage ? "text-gray-800" : "text-white"
                  }`}
                />
              </SignInButton>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className={`z-50 relative ${
              mobileMenuOpen
                ? "text-white"
                : !isHomePage
                ? "text-gray-800"
                : isScrolled
                ? "text-gray-700"
                : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-green-700 h-full z-30 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo Section */}
          <div className="flex justify-center items-center py-4 border-b border-white/20">
            <span
              className={`flex items-center gap-2 text-2xl font-bold ${
                !isHomePage
                  ? "text-[#B69D62]"
                  : isScrolled
                  ? "text-[#B69D62]"
                  : "text-white"
              }`}
            >
              <img
                src="https://upsellwholesale.com/wp-content/uploads/2025/05/logo2.png"
                alt="logo"
                className="w-16 h-16 object-contain"
              />
              <h3 className="leading-tight m-0 p-0">
                Upsell <br />
                Finlogix
              </h3>
            </span>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col items-center justify-start flex-grow px-8 bg-green-400 pt-4 pb-16">
            <div className="w-full max-w-md space-y-8">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <div
                        className={`flex items-center justify-between py-4 text-xl font-medium border-b border-white/10 ${
                          location.pathname === item.href ||
                          location.pathname.startsWith(item.href + "/")
                            ? "text-[#B69D62]"
                            : "text-white"
                        } cursor-pointer`}
                        onClick={(e) => toggleSubmenu(e, index)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            activeSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <div
                        className={`pl-4 mt-2 mb-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                          activeSubmenu === index
                            ? "max-h-96 opacity-100" // Increase from max-h-40 to max-h-96
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center py-2 text-lg text-white hover:text-[#B69D62]"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveSubmenu(null);
                            }}
                          >
                            <span>- {subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center justify-between py-4 text-xl font-medium border-b border-white/10 ${
                        location.pathname === item.href
                          ? "text-[#B69D62]"
                          : "text-white"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      <GoArrowUpRight size={24} />
                    </Link>
                  )}
                </div>
              ))}

              {/* Auth Section */}
              <div className="pt-8 mt-8 border-t border-white/10">
                {isSignedIn ? (
                  <div className="flex items-center justify-between">
                    <Link
                      to="/dashboard"
                      className="btn-primary w-full py-3 text-center text-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <div className="ml-4">
                      <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            userButtonAvatarBox: "w-12 h-12",
                          },
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-4">
                    <SignInButton mode="modal">
                      <button className="btn-secondary w-full py-3 text-lg">
                        Sign in
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="btn-primary w-full py-3 text-lg">
                        Sign up
                      </button>
                    </SignUpButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
