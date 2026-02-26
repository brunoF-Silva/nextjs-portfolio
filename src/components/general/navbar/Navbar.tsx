"use client";
import Link from "next/link";
import Logo from "./Logo";
import LinkButton from "../LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";


export const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#services", label: "Services" },
  { url: "#resume", label: "Resume" },
  { url: "#projects", label: "Projects" },
  { url: "#skills", label: "Skills" },
  { url: "#about", label: "About" },
  { url: "#testimonials", label: "Testimonials" },
  { url: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY >= 90) setNavBackground(true);
      if (window.scrollY < 90) setNavBackground(false);
    };

    window.addEventListener("scroll", navHandler);

    return () => {
      window.removeEventListener("scroll", navHandler);
    };
  }, []);

  // The custom bypass for Cumulative Layout Shift (CLS)
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
  ) => {
    e.preventDefault();

    const targetId = url.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });

      // The "Double-Tap" to correct landing position after animations fire
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }

    setNavOpen(false);
  };

  return (
    <nav
      className={`h-18 fixed z-50 w-full transition-all duration-300 ${navBackground ? "bg-slate-900 shadow-md" : ""}`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* logo */}
        <Logo />

        {/* nav-links */}
        <ul className="hidden xl:flex space-x-10">
          {navLinks.map((link) => {
            return (
              <li key={link.url}>
                <Link
                  className="text-gray-200 hover:text-cyan-300 font-medium transition-colors duration-300"
                  href={link.url}
                  onClick={(e) => handleSmoothScroll(e, link.url)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* buttons */}
        <div className="hidden xl:block">
          <LinkButton
            href="/documents/cv_bruno_ferreira_da_silva.pdf"
            text="Download CV"
            download
            icon={LuDownload}
            iconPosition="left"
          />
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="slider-btn w-8 h-8 cursor-pointer text-white z-[100] xl:hidden"
        >
          {navOpen ? <LuX size={30} /> : <LuMenu size={30} />}
        </button>

        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </nav>
  );
}
