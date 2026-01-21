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

// Statistics data
const statistics = [
  { number: "15+", label: "Jahre Erfahrung", description: "in Architektur und Bauwesen" },
  { number: "50+", label: "Projekte", description: "erfolgreich realisiert" },
  { number: "100%", label: "Engagement", description: "für Ihre Vision" },
  { number: "5", label: "Leistungsbereiche", description: "aus einer Hand" },
];

// Testimonials data
const testimonials = [
  {
    quote: "Die Zusammenarbeit mit Peer Höpli war von Anfang an professionell und unkompliziert. Unser Traumhaus wurde genau so realisiert, wie wir es uns vorgestellt haben.",
    author: "Familie Müller",
    project: "Einfamilienhaus Winterthur",
    rating: 5,
  },
  {
    quote: "Kompetente Beratung, kreative Lösungen und eine zuverlässige Umsetzung. Wir können Peer Höpli Architektur uneingeschränkt empfehlen.",
    author: "Thomas & Sandra Weber",
    project: "Umbau Altbau Schaffhausen",
    rating: 5,
  },
  {
    quote: "Besonders beeindruckt hat uns die Liebe zum Detail und das Verständnis für unsere Bedürfnisse. Das Ergebnis übertrifft unsere Erwartungen.",
    author: "Dr. Martin Schneider",
    project: "Praxisumbau Winterthur",
    rating: 5,
  },
];

// Process steps
const processSteps = [
  {
    step: "01",
    title: "Erstgespräch",
    description: "Wir lernen Sie und Ihre Wünsche kennen. In einem unverbindlichen Gespräch besprechen wir Ihre Ideen, Anforderungen und das Budget.",
    icon: "💬",
  },
  {
    step: "02",
    title: "Konzept & Entwurf",
    description: "Basierend auf Ihren Vorgaben entwickeln wir erste Entwürfe und Konzepte. Gemeinsam verfeinern wir die Planung bis zur optimalen Lösung.",
    icon: "✏️",
  },
  {
    step: "03",
    title: "Planung & Bewilligung",
    description: "Wir erstellen alle notwendigen Pläne und begleiten Sie durch das Bewilligungsverfahren. Dabei koordinieren wir alle Beteiligten.",
    icon: "📋",
  },
  {
    step: "04",
    title: "Realisierung",
    description: "Mit professioneller Bauleitung setzen wir Ihr Projekt um. Wir überwachen Qualität, Termine und Kosten bis zur Schlüsselübergabe.",
    icon: "🏗️",
  },
];

// Partners/Certifications
const certifications = [
  { name: "Dipl. Techniker HF Hochbau", icon: "🎓" },
  { name: "SIA Normen", icon: "📐" },
  { name: "Minergie Partner", icon: "🌿" },
  { name: "Brandschutz VKF", icon: "🔥" },
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

      {/* Statistics Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              Unser Prozess
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              So arbeiten wir
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der ersten Idee bis zur Schlüsselübergabe – wir begleiten Sie durch alle Phasen Ihres Projekts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-amber-500 font-bold text-sm mb-2">
                    Schritt {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-300" />
                )}
              </motion.div>
            ))}
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

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              Referenzen
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Was unsere Kunden sagen
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-amber-600">
                    {testimonial.project}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              Qualifikationen
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">
              Zertifizierungen & Standards
            </h3>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-xl"
              >
                <span className="text-2xl">{cert.icon}</span>
                <span className="font-medium text-gray-700">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
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
              <a
                href="tel:+41774525831"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +41 77 452 58 31
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
