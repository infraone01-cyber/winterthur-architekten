"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Architektur",
    slug: "architektur",
    icon: "🏛️",
    shortDescription: "Aufnahmen und Bestandespläne, Entwürfe, Baueingaben sowie Bauprojekte, Ausschreibungspläne, Ausführungspläne, Detailpläne.",
    fullDescription: "Von der ersten Idee bis zur Fertigstellung begleiten wir Sie durch alle Phasen Ihres Bauprojekts. Unsere Architekturleistungen umfassen die komplette Planung und Projektierung von Neubauten, Umbauten und Sanierungen.",
    bulletPoints: [
      "Aufnahmen und Bestandespläne",
      "Entwürfe und Konzeptstudien",
      "Baueingaben und Bewilligungsverfahren",
      "Bauprojekte und Kostenvoranschläge",
      "Ausschreibungspläne und Vergabe",
      "Ausführungspläne und Detailpläne",
    ],
  },
  {
    title: "Innenarchitektur",
    slug: "innenarchitektur",
    icon: "🛋️",
    shortDescription: "Gebäudegrundrisse, Entwürfe, Farbberatungen, Raumkonzepte für die Region Schaffhausen und Umgebung.",
    fullDescription: "Wir gestalten Innenräume, die funktional und ästhetisch überzeugen. Von der Raumplanung über die Materialauswahl bis zur Farbgestaltung entwickeln wir massgeschneiderte Lösungen.",
    bulletPoints: [
      "Raumkonzepte und Grundrissoptimierung",
      "Farbberatung und Materialauswahl",
      "Möblierungskonzepte",
      "Lichtplanung",
      "Küchen- und Badplanung",
      "Visualisierungen",
    ],
  },
  {
    title: "Statik",
    slug: "statik",
    icon: "📐",
    shortDescription: "Tragwerksplanung und statische Berechnungen für sichere und effiziente Baustrukturen.",
    fullDescription: "Unsere statischen Berechnungen gewährleisten die Sicherheit und Stabilität Ihres Bauwerks. Wir arbeiten mit modernsten Berechnungsmethoden und berücksichtigen alle relevanten Normen.",
    bulletPoints: [
      "Tragwerksplanung",
      "Statische Berechnungen",
      "Konstruktive Detailplanung",
      "Bauphysikalische Nachweise",
      "Erdbebensicherheit",
      "Sanierungskonzepte",
    ],
  },
  {
    title: "Bauleitung",
    slug: "bauleitung",
    icon: "👷",
    shortDescription: "Professionelle Bauüberwachung und Koordination aller Gewerke für einen reibungslosen Bauablauf.",
    fullDescription: "Als Ihr Bauleiter koordinieren wir alle am Bau beteiligten Unternehmen und sorgen für die termingerechte und qualitativ hochwertige Ausführung Ihres Projekts.",
    bulletPoints: [
      "Baustellenkoordination",
      "Terminplanung und -überwachung",
      "Qualitätskontrolle",
      "Kostenkontrolle",
      "Abnahmen und Mängelbehebung",
      "Dokumentation",
    ],
  },
  {
    title: "Brandschutz",
    slug: "brandschutz",
    icon: "🔥",
    shortDescription: "Brandschutzkonzepte und -nachweise gemäss aktuellen Vorschriften und Normen.",
    fullDescription: "Wir erstellen Brandschutzkonzepte und -nachweise für Ihr Bauprojekt. Dabei berücksichtigen wir alle relevanten Vorschriften und arbeiten eng mit den zuständigen Behörden zusammen.",
    bulletPoints: [
      "Brandschutzkonzepte",
      "Brandschutznachweise",
      "Flucht- und Rettungswegplanung",
      "Brandabschnittsbildung",
      "Behördenkoordination",
      "Brandschutzberatung",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              Was wir bieten
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Umfassende Architekturdienstleistungen aus einer Hand – von der
              ersten Idee bis zur schlüsselfertigen Übergabe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <ul className="space-y-3">
                    {service.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                          ✓
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl flex items-center justify-center">
                    <span className="text-9xl opacity-30">{service.icon}</span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500/20 rounded-2xl -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interesse geweckt?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Kontakt aufnehmen →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
