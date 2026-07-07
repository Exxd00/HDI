export const siteConfig = {
  name: "HDI Generalvertretung Werner Böhm",
  shortName: "Werner Böhm Versicherungen",
  domain: "hdi.de/betreuer/agentur-werner-boehm",
  url: "https://versicherungkompass.de",
  description: "Ihr Versicherungspartner in Nürnberg. Spezialisten für Versicherung, Vorsorge und Risikomanagement.",
  agent: {
    name: "Werner Böhm",
    title: "Generalvertreter",
    qualification: "Versicherungsfachmann, Geprüfter Finanzanlagenfachmann IHK",
  },
  contact: {
    phone: "+4991127401900",
    phoneDisplay: "0911 2740190",
    mobile: "+49 163 4551925",
    mobileDisplay: "0163 4551925",
    fax: "+49 911 2012590",
    faxDisplay: "0911 2012590",
    email: "info@versicherungkompass.de",
    address: {
      street: "Sulzbacher Str. 70",
      zip: "90489",
      city: "Nürnberg",
      country: "Deutschland"
    }
  },
  hours: {
    weekdays: "Mo–Fr 08:30–18:00 Uhr",
    saturday: "Sa 10:00–14:00 Uhr",
    note: "Termine auch nach Vereinbarung",
    list: [
      { day: "Montag", time: "08:30 – 18:00 Uhr" },
      { day: "Dienstag", time: "08:30 – 18:00 Uhr" },
      { day: "Mittwoch", time: "08:30 – 18:00 Uhr" },
      { day: "Donnerstag", time: "08:30 – 18:00 Uhr" },
      { day: "Freitag", time: "08:30 – 18:00 Uhr" },
      { day: "Samstag", time: "10:00 – 14:00 Uhr" },
      { day: "Sonntag", time: "Geschlossen" }
    ]
  },
  reviews: {
    rating: 4.4,
    ratingDisplay: "4,4",
    count: 64,
    source: "Google",
    url: "https://www.google.com/maps?cid=15328531847618205030",
    distribution: [
      { stars: 5, percent: 79 },
      { stars: 4, percent: 3 },
      { stars: 3, percent: 2 },
      { stars: 2, percent: 0 },
      { stars: 1, percent: 16 }
    ],
    highlights: [
      { title: "Hohe Fachkompetenz", desc: "Kunden heben die fachliche Beratungsexpertise besonders hervor." },
      { title: "Freundlicher Service", desc: "Der Kontakt wird als sehr freundlich, hilfsbereit und zuvorkommend beschrieben." },
      { title: "Schnelle Hilfe", desc: "Anfragen und Anliegen werden zügig bearbeitet und gelöst." }
    ]
  },
  maps: {
    embedUrl: "https://maps.google.com/maps?hl=de&q=Sulzbacher%20Str.%2070,%2090489%20N%C3%BCrnberg&t=&z=15&ie=UTF8&iwloc=B&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Sulzbacher+Str.+70,+90489+N%C3%BCrnberg",
    placeUrl: "https://www.google.com/maps?cid=15328531847618205030"
  },
  team: [
    {
      name: "Werner Böhm",
      role: "Inhaber & Generalvertreter",
      qualification: "Versicherungsfachmann, Geprüfter Finanzanlagenfachmann IHK",
      phone: "+49 911 2740190",
      mobile: "+49 163 4551925"
    },
    {
      name: "Marc Röber",
      role: "Kundenberater",
      phone: "+49 911 2012590"
    },
    {
      name: "Stefan Janka",
      role: "Kundenberater",
      phone: "+49 911 2012590"
    }
  ],
  company: {
    name: "HDI Versicherung AG",
    registration: "Handelsregister: Amtsgericht Hannover HRB 6826",
    chamber: "IHK Nürnberg für Mittelfranken",
    hdiAddress: "HDI-Platz 1, 30659 Hannover"
  },
  vermittler: {
    insurance: {
      role: "Gebundener Versicherungsvermittler gemäß § 34d Abs. 7 GewO",
      number: "D-D1N4-DJ524-25"
    },
    financialInvestment: {
      role: "Finanzanlagenvermittler gemäß § 34f Abs. 1 GewO",
      number: "D-F-155-LE46-33"
    },
    permitAuthority: "IHK Nürnberg für Mittelfranken",
    registerName: "DIHK – Deutscher Industrie- und Handelskammertag e.V.",
    registerAddress: "Breite Straße 29, 10178 Berlin",
    registerUrl: "https://www.vermittlerregister.info"
  },
  social: {
    linkedIn: "https://www.linkedin.com/company/hdi-versicherung/",
    facebook: "https://www.facebook.com/HDI.Versicherung/",
    instagram: "https://www.instagram.com/hdi_versicherung/",
    xing: "https://www.xing.com/pages/hdiversicherung",
    youtube: "https://www.youtube.com/user/HDIVersicherungen"
  }
};

export const navigation = {
  main: [
    { label: "Startseite", href: "/" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Standorte", href: "/versicherung-franken" },
    { label: "Kontakt", href: "/kontakt" }
  ],
  regions: [
    { label: "Versicherung in Franken", href: "/versicherung-franken" },
    { label: "Nürnberg", href: "/versicherung-nuernberg" },
    { label: "Fürth", href: "/versicherung-fuerth" },
    { label: "Erlangen", href: "/versicherung-erlangen" },
    { label: "Bamberg", href: "/versicherung-bamberg" },
    { label: "Würzburg", href: "/versicherung-wuerzburg" },
    { label: "Ansbach", href: "/versicherung-ansbach" }
  ],
  services: [
    { label: "Lebensversicherung", href: "/service/lebensversicherung" },
    { label: "Risikolebensversicherung", href: "/service/risikolebensversicherung" },
    { label: "Berufsunfähigkeit", href: "/service/berufsunfaehigkeit" },
    { label: "Altersvorsorge", href: "/service/altersvorsorge" },
    { label: "Private Krankenversicherung", href: "/service/private-krankenversicherung" },
    { label: "Sachversicherungen", href: "/service/sachversicherungen" }
  ],
  decisions: [
    { label: "Familie absichern", href: "/familie-absichern" },
    { label: "Immobilienkredit absichern", href: "/immobilienkredit-absichern" },
    { label: "Einkommen absichern", href: "/einkommen-absichern" },
    { label: "Selbstständige", href: "/selbststaendige-absicherung" },
    { label: "Kinder absichern", href: "/kinder-absichern" },
    { label: "Paare absichern", href: "/paare-absicherung" }
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Erstinformation", href: "/erstinformation" }
  ]
};
