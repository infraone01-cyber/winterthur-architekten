"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const faqCategories = [
  {
    category: "Allgemein",
    questions: [
      {
        question: "Was kostet ein Erstgespräch?",
        answer: "Das Erstgespräch ist unverbindlich und kostenlos. Wir nehmen uns Zeit, Ihre Wünsche und Vorstellungen kennenzulernen und Ihnen einen ersten Überblick über die Möglichkeiten zu geben."
      },
      {
        question: "In welcher Region sind Sie tätig?",
        answer: "Unser Haupttätigkeitsgebiet umfasst Winterthur, Schaffhausen und die umliegenden Regionen. Für besondere Projekte sind wir auch schweizweit und international tätig, wie unser Projekt in Thailand zeigt."
      },
      {
        question: "Welche Projektgrössen betreuen Sie?",
        answer: "Wir betreuen Projekte jeder Grösse – vom kleinen Umbau über Einfamilienhäuser bis hin zu grösseren Gewerbebauten. Jedes Projekt erhält die gleiche Aufmerksamkeit und Sorgfalt."
      },
    ]
  },
  {
    category: "Planung & Ablauf",
    questions: [
      {
        question: "Wie läuft ein typisches Projekt ab?",
        answer: "Ein Projekt durchläuft typischerweise folgende Phasen: 1. Erstgespräch und Bedarfsanalyse, 2. Konzept und Vorentwurf, 3. Bauprojekt und Bewilligung, 4. Ausführungsplanung, 5. Realisierung mit Bauleitung, 6. Abnahme und Übergabe. Wir begleiten Sie durch alle Phasen."
      },
      {
        question: "Wie lange dauert die Planungsphase?",
        answer: "Die Dauer hängt von der Projektgrösse und -komplexität ab. Für ein Einfamilienhaus rechnen Sie mit ca. 3-6 Monaten für die Planung bis zur Baueingabe. Das Bewilligungsverfahren dauert je nach Gemeinde zusätzlich 2-4 Monate."
      },
      {
        question: "Übernehmen Sie auch nur Teilleistungen?",
        answer: "Ja, wir bieten auch einzelne Leistungen an, wie z.B. nur die Baueingabe, Statik oder Bauleitung. Sprechen Sie uns an, wir finden die passende Lösung für Ihr Projekt."
      },
    ]
  },
  {
    category: "Kosten & Honorar",
    questions: [
      {
        question: "Wie werden die Architekturleistungen abgerechnet?",
        answer: "Die Honorierung erfolgt in der Regel nach SIA 102/103 als Prozentsatz der Baukosten oder nach Aufwand. Im Erstgespräch erläutern wir Ihnen die verschiedenen Möglichkeiten und erstellen ein transparentes Angebot."
      },
      {
        question: "Gibt es versteckte Kosten?",
        answer: "Nein, Transparenz ist uns wichtig. Alle Leistungen und Kosten werden im Voraus besprochen und vertraglich festgehalten. Zusätzliche Leistungen werden nur nach Absprache erbracht."
      },
      {
        question: "Wann sind Zahlungen fällig?",
        answer: "Die Zahlungen erfolgen in der Regel in Teilrechnungen nach Projektfortschritt. Die genauen Zahlungsmodalitäten werden im Architekturvertrag festgelegt."
      },
    ]
  },
  {
    category: "Bewilligungen & Vorschriften",
    questions: [
      {
        question: "Benötige ich für meinen Umbau eine Baubewilligung?",
        answer: "Das hängt von Art und Umfang des Umbaus ab. Grundsätzlich sind die meisten baulichen Veränderungen bewilligungspflichtig. Wir klären dies für Sie ab und begleiten Sie durch das Bewilligungsverfahren."
      },
      {
        question: "Was ist bei denkmalgeschützten Gebäuden zu beachten?",
        answer: "Bei denkmalgeschützten Gebäuden gelten besondere Auflagen. Wir haben Erfahrung mit solchen Projekten und arbeiten eng mit den Denkmalpflegebehörden zusammen, um optimale Lösungen zu finden."
      },
      {
        question: "Wie lange dauert ein Bewilligungsverfahren?",
        answer: "Ein ordentliches Baubewilligungsverfahren dauert in der Regel 2-4 Monate, je nach Gemeinde und Komplexität des Projekts. Bei Einsprachen kann sich dies verlängern."
      },
    ]
  },
  {
    category: "Nachhaltigkeit & Energie",
    questions: [
      {
        question: "Planen Sie auch nach Minergie-Standard?",
        answer: "Ja, wir planen auf Wunsch nach Minergie oder anderen Energiestandards. Wir beraten Sie gerne zu den verschiedenen Möglichkeiten und Förderprogrammen."
      },
      {
        question: "Welche Fördermittel gibt es für energetische Sanierungen?",
        answer: "Es gibt verschiedene kantonale und nationale Förderprogramme für energetische Massnahmen. Wir informieren Sie über die Möglichkeiten und unterstützen Sie bei der Antragstellung."
      },
    ]
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-amber-600 transition-colors"
      >
        <span className="text-lg font-medium text-gray-900 pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <svg
            className={`w-6 h-6 ${isOpen ? "text-amber-500" : "text-gray-400"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
              Hilfe & Support
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Häufig gestellte Fragen
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Architekturleistungen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-lg">
                  {categoryIndex + 1}
                </span>
                {category.category}
              </h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {category.questions.map((item, itemIndex) => (
                  <FAQItem
                    key={itemIndex}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItems[`${categoryIndex}-${itemIndex}`] || false}
                    onClick={() => toggleItem(`${categoryIndex}-${itemIndex}`)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ihre Frage war nicht dabei?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Kontaktieren Sie uns direkt – wir helfen Ihnen gerne weiter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Kontakt aufnehmen →
              </Link>
              <a
                href="tel:+41774525831"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                📞 +41 77 452 58 31
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
