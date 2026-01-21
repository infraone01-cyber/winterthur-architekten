"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function KontaktPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              Kontakt
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Sprechen wir über Ihr Projekt
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Haben Sie ein Bauprojekt oder eine Frage? Kontaktieren Sie uns –
              wir freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Schreiben Sie uns
              </h2>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Kontaktinformationen
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Peer Höpli Architektur<br />
                      Wieshofstrasse 103<br />
                      8408 Winterthur
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <a
                      href="tel:+41774525831"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      +41 77 452 58 31
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-Mail</h3>
                    <a
                      href="mailto:ph@winterthur-architekten.ch"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      ph@winterthur-architekten.ch
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.5!2d8.7!3d47.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMwJzAwLjAiTiA4wrA0MicwMC4wIkU!5e0!3m2!1sde!2sch!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort Peer Höpli Architektur"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
