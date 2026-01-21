"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ServicesSection from "@/components/ServicesSection";

// Sample data - will be replaced with Keystatic data
const featuredProjects = [
  {
    title: "Neubau EFH Thailand",
    slug: "neubau-efh-thailand",
    category: "neubau",
    location: "Thailand",
    year: "2025",
    featuredImage: "/images/projects/project_efh_thailand.jpg",
  },
  {
    title: "Neubau Futtersilo und Kälberauslauf",
    slug: "neubau-futtersilo-kaelberauslauf",
    category: "neubau",
    location: "Berg am Irchel",
    year: "2024",
    featuredImage: "/images/projects/project_futtersilo.jpg",
  },
  {
    title: "Aufstockung EFH Diessenhofen",
    slug: "aufstockung-efh-diessenhofen",
    category: "erweiterung",
    location: "Diessenhofen",
    year: "2024",
    featuredImage: "/images/projects/project_aufstockung_diessenhofen.png",
  },
];

const services = [
  {
    title: "Architektur",
    slug: "architektur",
    icon: "architecture",
    shortDescription:
      "Aufnahmen und Bestandespläne, Entwürfe, Baueingaben sowie Bauprojekte, Ausschreibungspläne, Ausführungspläne, Detailpläne.",
  },
  {
    title: "Innenarchitektur",
    slug: "innenarchitektur",
    icon: "interior",
    shortDescription:
      "Gebäudegrundrisse, Entwürfe, Farbberatungen, Raumkonzepte für die Region Schaffhausen und Umgebung.",
  },
  {
    title: "Statik",
    slug: "statik",
    icon: "structure",
    shortDescription:
      "Tragwerksplanung und statische Berechnungen für sichere und effiziente Baustrukturen.",
  },
  {
    title: "Bauleitung",
    slug: "bauleitung",
    icon: "construction",
    shortDescription:
      "Professionelle Bauüberwachung und Koordination aller Gewerke für einen reibungslosen Bauablauf.",
  },
  {
    title: "Brandschutz",
    slug: "brandschutz",
    icon: "fire",
    shortDescription:
      "Brandschutzkonzepte und -nachweise gemäss aktuellen Vorschriften und Normen.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Raum für Visionen"
        subtitle="Wir entwickeln architektonische Lösungen, die Ästhetik, Funktion und Nachhaltigkeit miteinander verbinden. Unser Anspruch ist es, Lebensräume zu schaffen, die langfristig überzeugen."
        heroImage="/images/hero/hero_titelbild.png"
        ctaText="Projekt starten"
        ctaLink="/kontakt"
      />

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
                Über uns
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Architektur mit Leidenschaft
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Mit meinem Fachwissen als Dipl. Techniker HF Hochbau habe ich mir ein
                breites Spektrum an interdisziplinären Kompetenzen angeeignet. Durch
                den regelmässigen Kundenkontakt sowie die Leitung von Baustellen
                konnte ich wertvolle Erfahrungen sammeln.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Die Gründung meines Architekturbüros ist nun ein konsequenter Schritt
                in die richtige Richtung – mit der Vision, ästhetische und
                funktionale Architektur in engem Austausch mit der Kundschaft zu
                entwickeln.
              </p>
              <Link
                href="/ueber-mich"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group"
              >
                Mehr erfahren
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/projects/project_efh_thailand.jpg"
                  alt="Architektur Projekt"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-amber-500/30 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Ausgewählte Projekte
              </h2>
            </div>
            <Link
              href="/projekte"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-amber-500 font-semibold hover:text-amber-400 transition-colors group"
            >
              Alle Projekte
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* CTA Section */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Kontaktieren Sie
              uns für ein unverbindliches Erstgespräch.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              Kontakt aufnehmen
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
