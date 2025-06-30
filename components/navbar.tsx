"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./theme/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
      style={scrolled ? { backgroundColor: 'hsla(var(--background), 0.8)' } : {}}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-xl font-bold text-foreground">ANiL</div>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 