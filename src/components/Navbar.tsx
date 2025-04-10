import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldX } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Premium", href: "/premium" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={scrollToTop}
          >
            <div className="h-9 w-9 bg-schedise-red rounded-full flex items-center justify-center">
              <div className="text-white">
                <ShieldX className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg leading-none">AD BLOCKER</span>
              <span className="text-xs text-schedise-indigo">by Schedise</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={scrollToTop}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "text-schedise-indigo bg-schedise-indigo/5"
                        : "text-gray-700 hover:text-schedise-indigo hover:bg-gray-50"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="ml-6">
              <Button
                asChild
                className="bg-schedise-red hover:bg-schedise-red/90 text-white"
              >
                <Link
                  to="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Chrome
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-schedise-indigo focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b border-gray-100">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive
                    ? "text-schedise-indigo bg-schedise-indigo/5"
                    : "text-gray-700 hover:text-schedise-indigo hover:bg-gray-50"
                )}
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="py-2">
            <Button
              asChild
              className="w-full bg-schedise-red hover:bg-schedise-red/90 text-white"
            >
              <Link
                to="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Add to Chrome
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
