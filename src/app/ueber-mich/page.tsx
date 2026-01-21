"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function UeberMichPage() {
  const values = [
    {
      title: "Qualität",
      description: "Wir setzen auf höchste Qualitätsstandards in Planung und Ausführung.",
    },
    {
      title: "Nachhaltigkeit",
      description: "Umweltbewusstes Bauen ist für uns selbstverständlich.",
    },
    {
      title: "Partnerschaft",
      description: "Enger Austausch mit unseren Kunden für optimale Ergebnisse.",
    },
    {
      title: "Innovation",
      description: "Moderne Technologien und zeitgemässe Architektur.",
    },
  ];

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
              Über mich
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Peer Höpli
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Dipl. Techniker HF Hochbau – Gründer & Architekt
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src="/images/about/about_peer.jpg"
                  alt="Peer Höpli"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-amber-500/30 rounded-2xl -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Architektur mit Leidenschaft
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Mit meinem Fachwissen als Dipl. Techniker HF Hochbau habe ich mir ein
                  breites Spektrum an interdisziplinären Kompetenzen angeeignet. Durch
                  den regelmässigen Kundenkontakt sowie die Leitung von Baustellen
                  konnte ich wertvolle Erfahrungen sammeln.
                </p>
                <p className="mb-6">
                  Die Gründung meines Architekturbüros ist nun ein konsequenter Schritt
                  in die richtige Richtung – mit der Vision, ästhetische und
                  funktionale Architektur in engem Austausch mit der Kundschaft zu
                  entwickeln.
                </p>
                <p className="mb-6">
                  Mein Ziel ist es, Räume zu schaffen, die nicht nur funktional
                  überzeugen, sondern auch emotional berühren. Jedes Projekt ist
                  einzigartig und verdient eine individuelle Herangehensweise.
                </p>
                <p>
                  Ich freue mich darauf, auch Ihr Projekt mit Engagement und
                  Fachkompetenz zu begleiten.
                </p>
              </div>

              {/* Qualifications */}
              <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Qualifikationen</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Dipl. Techniker HF Hochbau</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Langjährige Erfahrung in Bauleitung</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Expertise in Architektur & Innenarchitektur</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diese Grundsätze leiten unsere Arbeit und prägen jedes Projekt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-xl text-black/80 mb-10">
              Ich freue mich auf Ihre Kontaktaufnahme.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Kontakt aufnehmen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
