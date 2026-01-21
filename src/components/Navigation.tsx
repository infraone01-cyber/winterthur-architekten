"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projekte", label: "Projekte" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/ueber-mich", label: "Über mich" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/logo/logo_weiss_schwarz.png"
                    alt="Peer Höpli Architektur"
                    fill
                    className={`object-contain transition-all duration-300 ${
                      isScrolled ? "" : "invert"
                    }`}
                  />
                </div>
                <span
                  className={`font-semibold text-lg hidden sm:block transition-colors duration-300 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Peer Höpli Architektur
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className={`relative font-medium transition-colors duration-300 hover:text-amber-500 ${
                      isScrolled ? "text-gray-700" : "text-white"
                    } group`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 p-2"
              aria-label="Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2 bg-gray-900"
                      : isScrolled
                      ? "bg-gray-900"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0"
                      : isScrolled
                      ? "bg-gray-900"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-2 bg-gray-900"
                      : isScrolled
                      ? "bg-gray-900"
                      : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl"
            >
              <div className="pt-24 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-medium text-gray-800 hover:text-amber-500 transition-colors border-b border-gray-100"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
