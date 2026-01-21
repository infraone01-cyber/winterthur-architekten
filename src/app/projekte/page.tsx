"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
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

export default function ProjektePage() {
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
              Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Unsere Projekte
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Entdecken Sie eine Auswahl unserer realisierten Projekte – von
              Neubauten über Umbauten bis hin zu Erweiterungen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
