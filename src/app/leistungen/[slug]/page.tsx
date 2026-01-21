"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

// Services data with full details
const servicesData: Record<string, any> = {
  architektur: {
    title: "Architektur",
    icon: "🏛️",
    heroImage: "/images/projects/project_efh_thailand.jpg",
    shortDescription: "Aufnahmen und Bestandespläne, Entwürfe, Baueingaben sowie Bauprojekte, Ausschreibungspläne, Ausführungspläne, Detailpläne.",
    fullDescription: "Von der ersten Idee bis zur Fertigstellung begleiten wir Sie durch alle Phasen Ihres Bauprojekts. Unsere Architekturleistungen umfassen die komplette Planung und Projektierung von Neubauten, Umbauten und Sanierungen. Mit einem ganzheitlichen Ansatz entwickeln wir massgeschneiderte Lösungen, die Ihre individuellen Bedürfnisse mit höchsten ästhetischen und funktionalen Ansprüchen verbinden.",
    detailedSections: [
      {
        title: "Planungsphase",
        description: "In der Planungsphase erfassen wir den Bestand, analysieren die Gegebenheiten und entwickeln erste Entwürfe. Wir berücksichtigen dabei alle relevanten Faktoren wie Bauvorschriften, Budget und Ihre persönlichen Wünsche.",
        points: ["Aufnahmen und Bestandespläne", "Machbarkeitsstudien", "Entwürfe und Konzeptstudien", "Kostenschätzungen"]
      },
      {
        title: "Bewilligungsverfahren",
        description: "Wir begleiten Sie durch das gesamte Bewilligungsverfahren und koordinieren die Kommunikation mit den Behörden. Unsere Erfahrung garantiert einen reibungslosen Ablauf.",
        points: ["Baueingaben", "Behördenkoordination", "Nachbarschaftsverhandlungen", "Bewilligungsmanagement"]
      },
      {
        title: "Ausführungsplanung",
        description: "Die detaillierte Ausführungsplanung bildet die Grundlage für eine präzise Umsetzung. Wir erstellen alle notwendigen Pläne und Dokumente für die Bauausführung.",
        points: ["Bauprojekte und Kostenvoranschläge", "Ausschreibungspläne", "Ausführungspläne", "Detailpläne"]
      }
    ],
    bulletPoints: [
      "Aufnahmen und Bestandespläne",
      "Entwürfe und Konzeptstudien",
      "Baueingaben und Bewilligungsverfahren",
      "Bauprojekte und Kostenvoranschläge",
      "Ausschreibungspläne und Vergabe",
      "Ausführungspläne und Detailpläne",
    ],
    relatedProjects: ["neubau-efh-thailand", "aufstockung-efh-diessenhofen"],
  },
  innenarchitektur: {
    title: "Innenarchitektur",
    icon: "🛋️",
    heroImage: "/images/projects/project_aufstockung_diessenhofen.png",
    shortDescription: "Gebäudegrundrisse, Entwürfe, Farbberatungen, Raumkonzepte für die Region Schaffhausen und Umgebung.",
    fullDescription: "Wir gestalten Innenräume, die funktional und ästhetisch überzeugen. Von der Raumplanung über die Materialauswahl bis zur Farbgestaltung entwickeln wir massgeschneiderte Lösungen, die Ihren Lebensstil widerspiegeln und Wohlbefinden schaffen.",
    detailedSections: [
      {
        title: "Raumkonzeption",
        description: "Wir analysieren Ihre Räume und entwickeln Konzepte, die Funktionalität und Ästhetik optimal verbinden. Dabei berücksichtigen wir Ihre individuellen Bedürfnisse und Ihren persönlichen Stil.",
        points: ["Raumanalyse", "Grundrissoptimierung", "Zonierung", "Funktionsplanung"]
      },
      {
        title: "Material & Farbe",
        description: "Die richtige Auswahl von Materialien und Farben schafft Atmosphäre. Wir beraten Sie umfassend und erstellen stimmige Gesamtkonzepte.",
        points: ["Farbberatung", "Materialauswahl", "Oberflächengestaltung", "Moodboards"]
      },
      {
        title: "Detailplanung",
        description: "Von der Möblierung bis zur Beleuchtung planen wir jedes Detail, um ein harmonisches Gesamtbild zu schaffen.",
        points: ["Möblierungskonzepte", "Lichtplanung", "Küchen- und Badplanung", "Visualisierungen"]
      }
    ],
    bulletPoints: [
      "Raumkonzepte und Grundrissoptimierung",
      "Farbberatung und Materialauswahl",
      "Möblierungskonzepte",
      "Lichtplanung",
      "Küchen- und Badplanung",
      "Visualisierungen",
    ],
    relatedProjects: ["aufstockung-efh-diessenhofen"],
  },
  statik: {
    title: "Statik",
    icon: "📐",
    heroImage: "/images/projects/project_futtersilo.jpg",
    shortDescription: "Tragwerksplanung und statische Berechnungen für sichere und effiziente Baustrukturen.",
    fullDescription: "Unsere statischen Berechnungen gewährleisten die Sicherheit und Stabilität Ihres Bauwerks. Wir arbeiten mit modernsten Berechnungsmethoden und berücksichtigen alle relevanten Normen und Vorschriften.",
    detailedSections: [
      {
        title: "Tragwerksplanung",
        description: "Wir entwickeln effiziente Tragwerkskonzepte, die Sicherheit mit Wirtschaftlichkeit verbinden.",
        points: ["Konzeptentwicklung", "Systemwahl", "Materialoptimierung", "Kosteneffizienz"]
      },
      {
        title: "Berechnungen & Nachweise",
        description: "Alle statischen Berechnungen werden nach aktuellen Normen durchgeführt und dokumentiert.",
        points: ["Statische Berechnungen", "Bauphysikalische Nachweise", "Erdbebensicherheit", "Brandschutznachweise"]
      },
      {
        title: "Detailplanung",
        description: "Präzise Detailpläne gewährleisten eine fehlerfreie Ausführung auf der Baustelle.",
        points: ["Konstruktive Detailplanung", "Bewehrungspläne", "Anschlussdetails", "Sanierungskonzepte"]
      }
    ],
    bulletPoints: [
      "Tragwerksplanung",
      "Statische Berechnungen",
      "Konstruktive Detailplanung",
      "Bauphysikalische Nachweise",
      "Erdbebensicherheit",
      "Sanierungskonzepte",
    ],
    relatedProjects: ["neubau-futtersilo-kaelberauslauf", "aufstockung-efh-diessenhofen"],
  },
  bauleitung: {
    title: "Bauleitung",
    icon: "👷",
    heroImage: "/images/projects/project_futtersilo.jpg",
    shortDescription: "Professionelle Bauüberwachung und Koordination aller Gewerke für einen reibungslosen Bauablauf.",
    fullDescription: "Als Ihr Bauleiter koordinieren wir alle am Bau beteiligten Unternehmen und sorgen für die termingerechte und qualitativ hochwertige Ausführung Ihres Projekts. Wir sind Ihr Ansprechpartner auf der Baustelle.",
    detailedSections: [
      {
        title: "Koordination",
        description: "Wir koordinieren alle Gewerke und sorgen für einen reibungslosen Bauablauf.",
        points: ["Baustellenkoordination", "Gewerkeabstimmung", "Lieferantenmanagement", "Kommunikation"]
      },
      {
        title: "Überwachung",
        description: "Kontinuierliche Überwachung von Terminen, Kosten und Qualität.",
        points: ["Terminplanung", "Kostenkontrolle", "Qualitätskontrolle", "Baustellenprotokoll"]
      },
      {
        title: "Abschluss",
        description: "Professionelle Abnahme und Dokumentation für einen sauberen Projektabschluss.",
        points: ["Abnahmen", "Mängelbehebung", "Dokumentation", "Übergabe"]
      }
    ],
    bulletPoints: [
      "Baustellenkoordination",
      "Terminplanung und -überwachung",
      "Qualitätskontrolle",
      "Kostenkontrolle",
      "Abnahmen und Mängelbehebung",
      "Dokumentation",
    ],
    relatedProjects: ["neubau-futtersilo-kaelberauslauf", "neubau-efh-thailand"],
  },
  brandschutz: {
    title: "Brandschutz",
    icon: "🔥",
    heroImage: "/images/projects/project_aufstockung_diessenhofen.png",
    shortDescription: "Brandschutzkonzepte und -nachweise gemäss aktuellen Vorschriften und Normen.",
    fullDescription: "Wir erstellen Brandschutzkonzepte und -nachweise für Ihr Bauprojekt. Dabei berücksichtigen wir alle relevanten Vorschriften und arbeiten eng mit den zuständigen Behörden zusammen, um die Sicherheit Ihres Gebäudes zu gewährleisten.",
    detailedSections: [
      {
        title: "Konzeption",
        description: "Entwicklung massgeschneiderter Brandschutzkonzepte für Ihr Projekt.",
        points: ["Risikoanalyse", "Konzeptentwicklung", "Schutzzieldefinition", "Massnahmenplanung"]
      },
      {
        title: "Planung",
        description: "Detaillierte Planung aller brandschutztechnischen Massnahmen.",
        points: ["Flucht- und Rettungswege", "Brandabschnittsbildung", "Anlagentechnik", "Materialwahl"]
      },
      {
        title: "Behörden",
        description: "Koordination mit Behörden und Erstellung aller erforderlichen Nachweise.",
        points: ["Brandschutznachweise", "Behördenkoordination", "Abnahmebegleitung", "Brandschutzberatung"]
      }
    ],
    bulletPoints: [
      "Brandschutzkonzepte",
      "Brandschutznachweise",
      "Flucht- und Rettungswegplanung",
      "Brandabschnittsbildung",
      "Behördenkoordination",
      "Brandschutzberatung",
    ],
    relatedProjects: ["aufstockung-efh-diessenhofen", "neubau-futtersilo-kaelberauslauf"],
  },
};

// Related projects data
const projectsData: Record<string, any> = {
  "neubau-efh-thailand": {
    title: "Neubau EFH Thailand",
    slug: "neubau-efh-thailand",
    category: "Neubau",
    location: "Thailand",
    year: "2025",
    featuredImage: "/images/projects/project_efh_thailand.jpg",
  },
  "neubau-futtersilo-kaelberauslauf": {
    title: "Neubau Futtersilo und Kälberauslauf",
    slug: "neubau-futtersilo-kaelberauslauf",
    category: "Neubau",
    location: "Berg am Irchel",
    year: "2024",
    featuredImage: "/images/projects/project_futtersilo.jpg",
  },
  "aufstockung-efh-diessenhofen": {
    title: "Aufstockung EFH Diessenhofen",
    slug: "aufstockung-efh-diessenhofen",
    category: "Erweiterung",
    location: "Diessenhofen",
    year: "2024",
    featuredImage: "/images/projects/project_aufstockung_diessenhofen.png",
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section
      setShowStickyCTA(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Leistung nicht gefunden</h1>
          <Link href="/leistungen" className="text-amber-600 hover:text-amber-700">
            Zurück zu allen Leistungen
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = service.relatedProjects?.map((slug: string) => projectsData[slug]).filter(Boolean) || [];

  return (
    <>
      {/* Sticky CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: showStickyCTA ? 0 : 100, opacity: showStickyCTA ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">{service.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 hidden sm:block">Interesse an dieser Leistung?</p>
              </div>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              Jetzt anfragen →
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-4 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Alle Leistungen
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{service.icon}</span>
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  {service.title}
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl">
                {service.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Übersicht</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                  {service.fullDescription}
                </p>
              </motion.div>

              {/* Detailed Sections */}
              <div className="space-y-12">
                {service.detailedSections?.map((section: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-gray-600 mb-6">{section.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.points.map((point: string, i: number) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* All Services List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Alle Leistungen im Überblick</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.bulletPoints.map((point: string, index: number) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-900 rounded-2xl p-8 sticky top-32"
              >
                <h3 className="text-xl font-bold text-white mb-4">Interesse geweckt?</h3>
                <p className="text-gray-400 mb-6">
                  Kontaktieren Sie uns für ein unverbindliches Erstgespräch zu Ihrem Projekt.
                </p>
                <Link
                  href="/kontakt"
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-4 rounded-xl transition-all duration-300"
                >
                  Kontakt aufnehmen →
                </Link>
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-4">Oder rufen Sie uns direkt an:</p>
                  <a
                    href="tel:+41774525831"
                    className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors"
                  >
                    <span className="text-amber-500">📞</span>
                    +41 77 452 58 31
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
                Referenzen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Verwandte Projekte
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project: any, index: number) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/projekte/${project.slug}`} className="group block">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={project.featuredImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <span className="text-amber-600 text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.location} · {project.year}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA Section */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl mb-6 block">{service.icon}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {service.title} für Ihr Projekt?
            </h2>
            <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              Jetzt Projekt anfragen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Spacer for sticky CTA */}
      <div className="h-20" />
    </>
  );
}
