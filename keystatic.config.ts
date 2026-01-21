// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Peer Höpli Architektur',
    },
  },
  collections: {
    // Projekte Collection
    projects: collection({
      label: 'Projekte',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'description' },
      entryLayout: 'content',
      columns: ['title', 'category', 'year'],
      schema: {
        title: fields.slug({ name: { label: 'Projekt Titel' } }),
        category: fields.select({
          label: 'Kategorie',
          options: [
            { label: 'Neubau', value: 'neubau' },
            { label: 'Umbau', value: 'umbau' },
            { label: 'Erweiterung', value: 'erweiterung' },
            { label: 'Sanierung', value: 'sanierung' },
          ],
          defaultValue: 'neubau',
        }),
        year: fields.text({ label: 'Jahr' }),
        location: fields.text({ label: 'Standort' }),
        client: fields.text({ label: 'Auftraggeber', validation: { isRequired: false } }),
        featuredImage: fields.image({
          label: 'Hauptbild',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        gallery: fields.array(
          fields.image({
            label: 'Bild',
            directory: 'public/images/projects',
            publicPath: '/images/projects/',
          }),
          {
            label: 'Galerie',
            itemLabel: (props: any) => 'Galerie Bild',
          }
        ),
        description: fields.markdoc({
          label: 'Beschreibung',
          options: {
            image: {
              directory: 'public/images/projects',
              publicPath: '/images/projects/',
            },
          },
        }),
        highlights: fields.array(
          fields.text({ label: 'Highlight' }),
          {
            label: 'Projekt Highlights',
            itemLabel: (props: any) => props.value || 'Neues Highlight',
          }
        ),
        featured: fields.checkbox({
          label: 'Auf Startseite anzeigen',
          defaultValue: false,
        }),
        order: fields.integer({
          label: 'Reihenfolge',
          defaultValue: 0,
        }),
      },
    }),

    // Leistungen Collection
    services: collection({
      label: 'Leistungen',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'description' },
      columns: ['title', 'order'],
      schema: {
        title: fields.slug({ name: { label: 'Leistung Titel' } }),
        icon: fields.select({
          label: 'Icon',
          options: [
            { label: 'Architektur', value: 'architecture' },
            { label: 'Innenarchitektur', value: 'interior' },
            { label: 'Statik', value: 'structure' },
            { label: 'Bauleitung', value: 'construction' },
            { label: 'Brandschutz', value: 'fire' },
            { label: 'Beratung', value: 'consulting' },
          ],
          defaultValue: 'architecture',
        }),
        shortDescription: fields.text({
          label: 'Kurzbeschreibung',
          multiline: true,
        }),
        description: fields.markdoc({
          label: 'Ausführliche Beschreibung',
        }),
        bulletPoints: fields.array(
          fields.text({ label: 'Punkt' }),
          {
            label: 'Leistungspunkte',
            itemLabel: (props: any) => props.value || 'Neuer Punkt',
          }
        ),
        order: fields.integer({
          label: 'Reihenfolge',
          defaultValue: 0,
        }),
      },
    }),
  },

  singletons: {
    // Homepage Singleton
    home: singleton({
      label: 'Startseite',
      path: 'src/content/home',
      format: { data: 'json' },
      schema: {
        heroTitle: fields.text({ label: 'Hero Titel', defaultValue: 'Raum für Visionen' }),
        heroSubtitle: fields.text({
          label: 'Hero Untertitel',
          multiline: true,
          defaultValue: 'Architektur, die begeistert',
        }),
        heroImage: fields.image({
          label: 'Hero Bild',
          directory: 'public/images/hero',
          publicPath: '/images/hero/',
        }),
        aboutPreviewTitle: fields.text({ label: 'Über uns Vorschau Titel' }),
        aboutPreviewText: fields.text({
          label: 'Über uns Vorschau Text',
          multiline: true,
        }),
        ctaText: fields.text({ label: 'CTA Button Text', defaultValue: 'Projekt starten' }),
        ctaLink: fields.text({ label: 'CTA Button Link', defaultValue: '/kontakt' }),
      },
    }),

    // About Singleton
    about: singleton({
      label: 'Über mich',
      path: 'src/content/about',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Seitentitel', defaultValue: 'Über mich' }),
        name: fields.text({ label: 'Name', defaultValue: 'Peer Höpli' }),
        role: fields.text({ label: 'Position', defaultValue: 'Gründer & Architekt' }),
        qualification: fields.text({
          label: 'Qualifikation',
          defaultValue: 'Dipl. Techniker HF Hochbau',
        }),
        portrait: fields.image({
          label: 'Portrait Bild',
          directory: 'public/images/about',
          publicPath: '/images/about/',
        }),
        content: fields.markdoc({
          label: 'Über mich Text',
          options: {
            image: {
              directory: 'public/images/about',
              publicPath: '/images/about/',
            },
          },
        }),
        philosophy: fields.text({
          label: 'Philosophie',
          multiline: true,
        }),
        values: fields.array(
          fields.object({
            title: fields.text({ label: 'Wert Titel' }),
            description: fields.text({ label: 'Beschreibung', multiline: true }),
          }),
          {
            label: 'Werte',
            itemLabel: (props: any) => props.fields.title.value || 'Neuer Wert',
          }
        ),
      },
    }),

    // Contact Singleton
    contact: singleton({
      label: 'Kontakt',
      path: 'src/content/contact',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Seitentitel', defaultValue: 'Kontakt' }),
        subtitle: fields.text({
          label: 'Untertitel',
          defaultValue: 'Lassen Sie uns über Ihr Projekt sprechen',
        }),
        companyName: fields.text({ label: 'Firmenname', defaultValue: 'Peer Höpli Architektur' }),
        address: fields.text({ label: 'Adresse', defaultValue: 'Wieshofstrasse 103' }),
        postalCode: fields.text({ label: 'PLZ', defaultValue: '8408' }),
        city: fields.text({ label: 'Stadt', defaultValue: 'Winterthur' }),
        phone: fields.text({ label: 'Telefon', defaultValue: '+41 77 452 58 31' }),
        email: fields.text({ label: 'E-Mail', defaultValue: 'ph@winterthur-architekten.ch' }),
        mapEmbed: fields.text({
          label: 'Google Maps Embed URL',
          multiline: true,
          validation: { isRequired: false },
        }),
      },
    }),

    // Site Settings Singleton
    settings: singleton({
      label: 'Website Einstellungen',
      path: 'src/content/settings',
      format: { data: 'json' },
      schema: {
        siteName: fields.text({ label: 'Website Name', defaultValue: 'Peer Höpli Architektur' }),
        siteDescription: fields.text({
          label: 'Website Beschreibung (SEO)',
          multiline: true,
          defaultValue: 'Architekturbüro in Winterthur - Neubau, Umbau, Sanierung',
        }),
        logo: fields.image({
          label: 'Logo',
          directory: 'public/images/logo',
          publicPath: '/images/logo/',
        }),
        logoDark: fields.image({
          label: 'Logo (Dunkel)',
          directory: 'public/images/logo',
          publicPath: '/images/logo/',
        }),
        socialLinks: fields.object({
          instagram: fields.text({ label: 'Instagram URL', validation: { isRequired: false } }),
          linkedin: fields.text({ label: 'LinkedIn URL', validation: { isRequired: false } }),
          facebook: fields.text({ label: 'Facebook URL', validation: { isRequired: false } }),
        }),
        footerText: fields.text({
          label: 'Footer Text',
          defaultValue: '© 2025 Peer Höpli Architektur. Alle Rechte vorbehalten.',
        }),
      },
    }),
  },
});
