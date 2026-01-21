"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  heroImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroSection({
  title = "Raum für Visionen",
  subtitle = "Wir entwickeln architektonische Lösungen, die Ästhetik, Funktion und Nachhaltigkeit miteinander verbinden.",
  heroImage = "/images/hero/hero_titelbild.png",
  ctaText = "Projekt starten",
  ctaLink = "/kontakt",
}: HeroProps) {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Architektur Hero"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Logo Animation - Flying in from left */}
          <motion.div
            initial={{ opacity: 0, x: -200, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mb-8"
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src="/images/logo/logo_weiss_schwarz.png"
                alt="Peer Höpli Architektur Logo"
                fill
                className="object-contain invert drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            {title.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={ctaLink}
              className="group relative inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1"
            >
              {ctaText}
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            <Link
              href="/projekte"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Projekte ansehen
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-sm font-medium">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 right-20 w-96 h-96 border border-white/20 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute top-40 right-40 w-64 h-64 border border-white/20 rounded-full"
      />
    </section>
  );
}
