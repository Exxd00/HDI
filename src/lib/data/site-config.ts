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
    email: "werner.boehm@hdi.de",
    address: {
      street: "Sulzbacher Str. 70",
      zip: "90489",
      city: "Nürnberg",
      country: "Deutschland"
    }
  },
  hours: {
    weekdays: "Nach Vereinbarung",
    note: "Öffnet Montag 08:30 Uhr",
    appointment: "Termine nach Vereinbarung jederzeit möglich"
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
    { label: "Kontakt", href: "/kontakt" }
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
    { label: "Datenschutz", href: "/datenschutz" }
  ]
};
