import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, ChevronDown } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Bookkeeping", href: "/services#bookkeeping" },
      { name: "Accounting", href: "/services#accounting" },
      {
        name: "Corporate Finance Management",
        href: "/services#corporate-finance",
      },
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

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Determine text color based on page and scroll position
  const getTextColor = (isActive) => {
    if (!isHomePage) {
      // For all pages except home, use dark text
      return isActive ? "text-[#B69D62]" : "text-gray-800";
    } else {
      // For home page, use the original conditional styling
      return isActive
        ? isScrolled
          ? "text-[#B69D62]"
          : "text-white font-bold"
        : isScrolled
        ? "text-gray-300"
        : "text-white";
    }
  };

  // Determine navbar background style based on page and scroll position
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
  // const getBorderStyle = () => {
  //   if (!isHomePage) {
  //     // For all pages except home, use light borders
  //     return "border-gray-200 border-r-[1px]";
  //   } else {
  //     // For home page, use the original conditional styling
  //     return isScrolled
  //       ? "border-white border-r-[1px]"
  //       : "border-white/30 border-r-[1px] backdrop-blur-sm";
  //   }
  // };

  // Toggle submenu for mobile view
  const toggleSubmenu = (e, index) => {
    e.stopPropagation();
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${getNavbarStyle()}`}
    >
      <nav className="w-full  md:py-0 mx-auto flex  justify-between px-4  md:px-6 ">
        {/* Logo - Set a fixed width */}
        <Link
          to="/"
          className={`flex items-center gap-3 md:justify-end w-[230px] py-3 md:pr-7  ${
            isScrolled && isHomePage
              ? "border-gray-500 border-r-[1px]"
              : !isHomePage
              ? "border-gray-200 border-r-[1px]"
              : "border-white/30 border-r-[1px] backdrop-blur-sm"
          }`}
        >
          <img
            src="https://upsellwholesale.com/wp-content/uploads/2025/05/logo2.png"
            alt="logo"
            className="w-14 h-14"
          />
          <div
            className={`flex gap-2 text-lg md:text-2xl font-bold ${
              !isHomePage
                ? "text-[#B69D62]"
                : isScrolled
                ? "text-[#B69D62]"
                : "text-white"
            }`}
          >
            <h3 className="text-lg">
              Upsell <br />
              FinLogix
            </h3>
          </div>
        </Link>

        {/* Desktop Navigation - Give it a flex-grow to take available space */}
        <div
          className={`hidden  md:flex justify-center items-center flex-grow ${
            isScrolled && isHomePage
              ? "border-gray-700 border-r-[1px]"
              : !isHomePage
              ? "border-gray-200 border-r-[1px]"
              : "border-white/30 border-r-[1px] backdrop-blur-sm"
          }`}
        >
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <>
                  <Link
                    to={item.href}
                    className={`p-8 flex gap-2 items-center text-base font-medium transition-colors hover:text-[#B69D62] ${getTextColor(
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
                  className={`p-10 flex gap-2 text-base font-medium transition-colors hover:text-[#B69D62] ${getTextColor(
                    location.pathname === item.href
                  )}`}
                >
                  {item.name} <GoArrowUpRight size={22} />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Auth buttons or dashboard link - Set a fixed width */}
        <div
          className={`hidden gap-5 md:gap-5 md:flex items-center  space-x-2  justify-center w-[300px]`}
        >
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
                className={`p-2 bg-[#B79E63] rounded-md 
                  ${
                    isHomePage && isScrolled
                      ? "hover:bg-white hover:text-gray-800"
                      : "hover:text-white"
                  }  hover:bg-[#1E2D2F] transition duration-300  font-semibold`}
                to="/contact"
              >
                Free Consultation
              </Link>
              {/* <SignInButton mode="modal">
                <User
                  size={30}
                  className={`cursor-pointer hover:text-[#B79E63] ${
                    !isHomePage ? "text-gray-800" : "text-white"
                  }`}
                />
              </SignInButton> */}
              {/* <SignUpButton mode="modal">
          <button className="btn-primary">Sign up</button>
        </SignUpButton> */}
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className={`z-50 relative ml-4 ${
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
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu - Full screen slide from left */}
      <div
        className={`fixed inset-0 h-screen bg-black z-30 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-0 h-screen overflow-y-auto">
          {/* Centered Logo */}
          <div className="flex justify-center items-center py-10 border-b border-white/20">
            <div
              className={`flex items-center gap-4 text-2xl font-bold ${
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
                className="w-16 h-16"
              />
              <div className="leading-tight">
                <div>Upsell</div>
                <div>FinLogix</div>
              </div>
            </div>
          </div>

          {/* Navigation Links - Make this section scrollable */}
          <div className="flex -mt-1 flex-col flex-grow px-8 bg-black  ">
            <div className="w-full max-w-md space-y-8 py-4">
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
                            ? "max-h-40 opacity-100"
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
              <div className="pt-8 mt-8 border-t border-white/10 pb-8">
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
                    {/* <SignInButton mode="modal">
                      <button className="btn-secondary w-full py-3 text-lg">
                        Sign in
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="btn-primary w-full py-3 text-lg">
                        Sign up
                      </button>
                    </SignUpButton> */}
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
