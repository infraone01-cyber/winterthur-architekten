"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const projectsData: Record<string, any> = {
  "neubau-efh-thailand": {
    title: "Neubau EFH Thailand",
    category: "neubau",
    location: "Thailand",
    year: "2025",
    client: "Privat",
    featuredImage: "/images/projects/project_efh_thailand.jpg",
    description: `Das Projekt EFH Thailand ist ein kompaktes Tiny House Konzept mit flexiblem Design. 

    Das Einfamilienhaus wurde speziell für das tropische Klima entwickelt und verbindet moderne Architektur mit lokalen Baumaterialien und Traditionen.

    Besonderer Wert wurde auf natürliche Belüftung, Sonnenschutz und die Integration in die umgebende Landschaft gelegt.`,
    highlights: [
      "Kompaktes Tiny House Konzept",
      "Flexibles, modulares Design",
      "Angepasst an tropisches Klima",
      "Nachhaltige Baumaterialien",
    ],
    gallery: [
      "/images/projects/project_efh_thailand.jpg",
    ],
  },
  "neubau-futtersilo-kaelberauslauf": {
    title: "Neubau Futtersilo und Kälberauslauf",
    category: "neubau",
    location: "Berg am Irchel",
    year: "2024",
    client: "Landwirtschaftsbetrieb",
    featuredImage: "/images/projects/project_futtersilo.jpg",
    description: `Neubau eines Kraftfuttersilos und Kälberauslaufs für einen modernen Landwirtschaftsbetrieb in Berg am Irchel.

    Das Projekt umfasst die Planung und Realisierung eines funktionalen Wirtschaftsgebäudes, das den Anforderungen eines zeitgemässen Landwirtschaftsbetriebs entspricht.

    Besonderer Fokus lag auf der Tiergerechtheit und der effizienten Arbeitsabläufe.`,
    highlights: [
      "Funktionales Wirtschaftsgebäude",
      "Tiergerechte Gestaltung",
      "Effiziente Arbeitsabläufe",
      "Robuste Bauweise",
    ],
    gallery: [
      "/images/projects/project_futtersilo.jpg",
    ],
  },
  "aufstockung-efh-diessenhofen": {
    title: "Aufstockung EFH Diessenhofen",
    category: "erweiterung",
    location: "Diessenhofen",
    year: "2024",
    client: "Privat",
    featuredImage: "/images/projects/project_aufstockung_diessenhofen.png",
    description: `Aufstockung und Erweiterung eines bestehenden Einfamilienhauses in Diessenhofen.

    Durch die Aufstockung wurde zusätzlicher Wohnraum geschaffen, ohne die Grundstücksfläche zu vergrössern. Das Projekt zeigt, wie durch intelligente Planung bestehende Gebäude nachhaltig erweitert werden können.

    Die neue Etage fügt sich harmonisch in das bestehende Gebäude ein und wertet das Gesamterscheinungsbild auf.`,
    highlights: [
      "Zusätzlicher Wohnraum",
      "Harmonische Integration",
      "Nachhaltige Erweiterung",
      "Aufwertung des Gebäudes",
    ],
    gallery: [
      "/images/projects/project_aufstockung_diessenhofen.png",
    ],
  },
};

const categoryLabels: Record<string, string> = {
  neubau: "Neubau",
  umbau: "Umbau",
  erweiterung: "Erweiterung",
  sanierung: "Sanierung",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projekt nicht gefunden</h1>
          <Link href="/projekte" className="text-amber-600 hover:text-amber-700">
            Zurück zu allen Projekten
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-amber-500 text-black text-sm font-semibold px-4 py-1 rounded-full mb-4">
                {categoryLabels[project.category]}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {project.location}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {project.year}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Projektbeschreibung</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {project.description.split("\n\n").map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>

              {/* Highlights */}
              {project.highlights && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Projekt Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-32">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Projektdetails</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-gray-500">Kategorie</dt>
                    <dd className="text-gray-900 font-medium">{categoryLabels[project.category]}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Standort</dt>
                    <dd className="text-gray-900 font-medium">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Jahr</dt>
                    <dd className="text-gray-900 font-medium">{project.year}</dd>
                  </div>
                  {project.client && (
                    <div>
                      <dt className="text-sm text-gray-500">Auftraggeber</dt>
                      <dd className="text-gray-900 font-medium">{project.client}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link
                    href="/kontakt"
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                  >
                    Ähnliches Projekt anfragen
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/projekte"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Zurück zu allen Projekten
          </Link>
        </div>
      </section>
    </>
  );
}
