"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logo/logo_weiss_schwarz.png"
                  alt="Peer Höpli Architektur"
                  fill
                  className="object-contain invert"
                />
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Wir entwickeln architektonische Lösungen, die Ästhetik, Funktion und Nachhaltigkeit miteinander verbinden.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/projekte", label: "Projekte" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/ueber-mich", label: "Über mich" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">📍</span>
                <span>
                  Peer Höpli Architektur<br />
                  Wieshofstrasse 103<br />
                  8408 Winterthur
                </span>
              </li>
              <li>
                <a
                  href="tel:+41774525831"
                  className="flex items-center gap-3 hover:text-amber-500 transition-colors"
                >
                  <span className="text-amber-500">📞</span>
                  +41 77 452 58 31
                </a>
              </li>
              <li>
                <a
                  href="mailto:ph@winterthur-architekten.ch"
                  className="flex items-center gap-3 hover:text-amber-500 transition-colors"
                >
                  <span className="text-amber-500">✉️</span>
                  ph@winterthur-architekten.ch
                </a>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Projekt starten</h4>
            <p className="text-gray-400 mb-6">
              Haben Sie ein Bauprojekt? Lassen Sie uns darüber sprechen.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
            >
              Kontakt aufnehmen →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Peer Höpli Architektur. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/agb" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                AGB
              </Link>
              <Link href="/datenschutz" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Datenschutz
              </Link>
              <Link href="/impressum" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
