import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MoveUpRight, User } from "lucide-react";
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
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Determine border style based on page and scroll position
  const getBorderStyle = () => {
    if (!isHomePage) {
      // For all pages except home, use light borders
      return "border-gray-200 border-r-[1px]";
    } else {
      // For home page, use the original conditional styling
      return isScrolled
        ? ""
        : "border-white/30 border-r-[1px] backdrop-blur-sm";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${getNavbarStyle()}`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center space-x-2 p-10 ${
            isScrolled && isHomePage ? "" : getBorderStyle()
          }`}
        >
          <span
            className={`text-2xl font-bold ${
              !isHomePage
                ? "text-[#B69D62]"
                : isScrolled
                ? "text-[#B69D62]"
                : "text-white"
            }`}
          >
            Company Name
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex justify-between`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`p-10 flex gap-2 text-base font-medium transition-colors hover:text-[#B69D62] ${getTextColor(
                location.pathname === item.href
              )}`}
            >
              {item.name} <GoArrowUpRight size={22} />
            </Link>
          ))}
        </div>

        {/* Auth buttons or dashboard link */}
        <div
          className={`hidden md:flex r gap-x-3 p-10 ${
            isScrolled && isHomePage
              ? ""
              : !isHomePage
              ? "border-gray-200 border-l-[1px]"
              : "border-white/30 border-l-[1px] backdrop-blur-sm"
          }`}
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
              <SignInButton mode="modal">
                <User
                  className={`cursor-pointer ${
                    !isHomePage ? "text-gray-800" : "text-white"
                  }`}
                />
              </SignInButton>
              {/* <SignUpButton mode="modal">
                <button className="btn-primary">Sign up</button>
              </SignUpButton> */}
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className={
              !isHomePage
                ? "text-gray-800"
                : isScrolled
                ? "text-gray-700"
                : "text-white"
            }
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <div className="space-y-1 px-4 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 text-base font-medium ${
                  location.pathname === item.href
                    ? "text-primary-700"
                    : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {isSignedIn ? (
              <div className="flex items-center space-x-4 py-3">
                <Link
                  to="/dashboard"
                  className="btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-9 h-9",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="flex flex-col space-y-2 py-3">
                <SignInButton mode="modal">
                  <button className="btn-secondary w-full">Sign in</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="btn-primary w-full">Sign up</button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
