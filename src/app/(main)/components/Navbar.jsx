"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { sb } from "@/app/services/supabaseClient";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ThemeToggle";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { user } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = async () => {
    try {
      const { error } = await sb.auth.signOut();
      if (error) {
        console.log(error);
        toast.error("Error while logging off!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Unexpected error while logging off!");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-primary bg-clip-text text-transparent">
                Hiresense
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              How it works
            </Link>
            <Link
              href="#"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </Link>
            {user?.email && (
              <Link
                href="/dashboard"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
            )}
            {user && (
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
              >
                Logout <FiLogOut className="w-4 h-4" />
              </Button>
            )}
            <ModeToggle />
          </nav>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/"
              className="block py-3 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block py-3 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block py-3 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            {user?.email && (
              <Link
                href="/dashboard"
                className="block py-3 text-foreground/80 hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {user && (
              <Button
                variant="ghost"
                className="w-full justify-start flex gap-2 text-muted-foreground hover:text-foreground mt-2"
                onClick={() => {
                  logout();
                  setIsMobileMenuOpen(false);
                }}
              >
                <FiLogOut className="w-4 h-4" />
                Logout
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
