// Local-SEO Datenmodell für Franken.
// Jede Seite hat einzigartige, ortsbezogene Inhalte (E-E-A-T, kein Thin Content).
// Keine werblichen Superlative ("beste/günstigste") – rein beratungsorientiert.

export type LocationFaq = { q: string; a: string };
export type LocationFact = { value: string; label: string };
export type RelatedLink = { label: string; href: string };

export type LocationData = {
  slug: string;
  kind: "region" | "city" | "audience";
  /** Anzeigename, z. B. "Nürnberg" oder "Franken". */
  name: string;
  /** Für Schema areaServed. */
  areaServed: string;
  areaServedType: "City" | "AdministrativeArea";
  badge: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  contextHeading: string;
  contextParagraphs: string[];
  facts: LocationFact[];
  /** Optionaler Zusatzblock (z. B. Zielgruppen-Fokus). */
  focusHeading?: string;
  focusParagraphs?: string[];
  faqs: LocationFaq[];
  related: RelatedLink[];
  /** Nur Region-Hub: Städteliste. */
  cities?: RelatedLink[];
};

export const locations: LocationData[] = [
  // ─────────────────────────────────────────── REGION HUB
  {
    slug: "versicherung-franken",
    kind: "region",
    name: "Franken",
    areaServed: "Franken",
    areaServedType: "AdministrativeArea",
    badge: "Ihre Region: Franken",
    h1: "Versicherungsberatung in Franken",
    metaTitle: "Versicherungsberatung in Franken | HDI Werner Böhm",
    metaDescription:
      "Persönliche Versicherungs- und Vorsorgeberatung für Privatkunden, Familien und Selbstständige in Franken – von Nürnberg über Fürth und Erlangen bis Bamberg, Würzburg und Ansbach.",
    intro: [
      "VersicherungKompass ist Ihre persönliche Anlaufstelle für Versicherung, Vorsorge und Risikomanagement in Franken. Als HDI Generalvertretung Werner Böhm mit Sitz in Nürnberg begleiten wir Menschen und Unternehmen in der gesamten Metropolregion – verständlich, langfristig und auf Augenhöhe.",
      "Wir verstehen die Region und ihre Menschen: vom Angestellten im Nürnberger Süden über die Familie in Fürth bis zur Fachkraft bei einem der großen Arbeitgeber in Erlangen. Unser Ziel ist nicht der schnelle Abschluss, sondern eine Absicherung, die wirklich zu Ihrer Lebenssituation passt.",
    ],
    contextHeading: "Warum regionale Beratung in Franken sinnvoll ist",
    contextParagraphs: [
      "Franken ist wirtschaftlich vielfältig: Ein starker Mittelstand, mehrere Universitäten, internationale Konzerne und viele Selbstständige prägen die Region. Genau diese Vielfalt bedeutet unterschiedliche Absicherungsbedarfe – und dafür braucht es einen Ansprechpartner, der die Gegebenheiten vor Ort kennt.",
      "Wir beraten Sie persönlich bei Ihnen zu Hause, in unserem Büro in Nürnberg oder per Videocall. So bleibt die Beratung persönlich, egal ob Sie in der Innenstadt, im Umland oder in einer der Nachbarstädte wohnen.",
    ],
    facts: [
      { value: "Nürnberg", label: "Unser Standort & Ausgangspunkt" },
      { value: "6 Städte", label: "Schwerpunktregionen in Franken" },
      { value: "25+ Jahre", label: "Erfahrung in der Region" },
    ],
    faqs: [
      {
        q: "Welche Region deckt VersicherungKompass ab?",
        a: "Unseren Schwerpunkt bildet die Metropolregion Nürnberg mit Nürnberg, Fürth und Erlangen. Darüber hinaus beraten wir Kundinnen und Kunden in ganz Franken, unter anderem in Bamberg, Würzburg und Ansbach.",
      },
      {
        q: "Muss ich für die Beratung nach Nürnberg kommen?",
        a: "Nein. Wir beraten Sie wahlweise bei Ihnen zu Hause, in unserem Büro in Nürnberg oder bequem per Videocall – ganz wie es für Sie am besten passt.",
      },
      {
        q: "Beraten Sie nur Privatpersonen?",
        a: "Nein, wir beraten Privatkunden und Familien ebenso wie Selbstständige, Berufstätige und internationale Fachkräfte in der Region.",
      },
    ],
    cities: [
      { label: "Nürnberg", href: "/versicherung-nuernberg" },
      { label: "Fürth", href: "/versicherung-fuerth" },
      { label: "Erlangen", href: "/versicherung-erlangen" },
      { label: "Bamberg", href: "/versicherung-bamberg" },
      { label: "Würzburg", href: "/versicherung-wuerzburg" },
      { label: "Ansbach", href: "/versicherung-ansbach" },
    ],
    related: [
      { label: "Versicherung für Familien in Franken", href: "/versicherung-familien-franken" },
      { label: "Versicherung für Selbstständige in Nürnberg", href: "/versicherung-selbststaendige-nuernberg" },
      { label: "Versicherung für internationale Fachkräfte", href: "/versicherung-internationale-fachkraefte-franken" },
    ],
  },

  // ─────────────────────────────────────────── NÜRNBERG
  {
    slug: "versicherung-nuernberg",
    kind: "city",
    name: "Nürnberg",
    areaServed: "Nürnberg",
    areaServedType: "City",
    badge: "Nürnberg & Umgebung",
    h1: "Versicherungsberatung in Nürnberg",
    metaTitle: "Versicherungsberatung in Nürnberg | HDI Werner Böhm",
    metaDescription:
      "Persönliche Versicherungsberatung in Nürnberg: Vorsorge, Berufsunfähigkeit, Krankenversicherung und mehr – für Privatkunden, Familien und Selbstständige. Beratung vor Ort oder per Videocall.",
    intro: [
      "Nürnberg ist unsere Heimat: Unser Büro in der Sulzbacher Straße liegt mitten in der Stadt, und von hier aus betreuen wir Kundinnen und Kunden in allen Stadtteilen – von der Altstadt über die Südstadt und Langwasser bis Erlenstegen und das nördliche Umland.",
      "Als HDI Generalvertretung vor Ort nehmen wir uns Zeit für Ihre Situation. Ob Absicherung der Arbeitskraft, Aufbau der Altersvorsorge oder Schutz für die Familie – wir entwickeln gemeinsam mit Ihnen ein Konzept, das zu Ihrem Leben in Nürnberg passt.",
    ],
    contextHeading: "Absicherung in einer wachsenden Wirtschaftsregion",
    contextParagraphs: [
      "Als wirtschaftliches Zentrum Frankens ist Nürnberg geprägt von einem breiten Mix aus Angestellten großer Arbeitgeber, einem lebendigen Mittelstand und vielen Selbstständigen. Für jede dieser Gruppen sind andere Bausteine wichtig – von der Berufsunfähigkeitsversicherung bis zur privaten Vorsorge gegen die Rentenlücke.",
      "Weil die gesetzlichen Leistungen für viele Menschen nicht ausreichen, lohnt sich ein strukturierter Blick auf die eigene Situation. Wir analysieren bestehende Verträge, decken Lücken auf und zeigen Ihnen transparent, welche Absicherung sinnvoll ist – ohne Verkaufsdruck.",
    ],
    facts: [
      { value: "Sulzbacher Str. 70", label: "Unser Büro in Nürnberg" },
      { value: "Vor Ort", label: "Beratung zu Hause oder im Büro" },
      { value: "Alle Stadtteile", label: "Von Altstadt bis Langwasser" },
    ],
    faqs: [
      {
        q: "Kommen Sie für die Beratung zu mir nach Hause in Nürnberg?",
        a: "Ja, gerne. Innerhalb Nürnbergs und des Umlands besuchen wir Sie auf Wunsch zu Hause. Alternativ beraten wir Sie in unserem Büro in der Sulzbacher Straße oder per Videocall.",
      },
      {
        q: "Bieten Sie auch Termine außerhalb der üblichen Bürozeiten an?",
        a: "Nach Vereinbarung sind auch Termine am Abend oder am Samstag möglich. Sprechen Sie uns einfach an, wir richten uns nach Ihrem Alltag.",
      },
      {
        q: "Welche Versicherungen sind für Nürnberger besonders relevant?",
        a: "Das hängt von Ihrer Lebenssituation ab. Häufige Themen sind die Absicherung der Arbeitskraft (Berufsunfähigkeit), private Altersvorsorge, Krankenversicherung sowie Haftpflicht- und Sachversicherungen.",
      },
    ],
    related: [
      { label: "Versicherung für Selbstständige in Nürnberg", href: "/versicherung-selbststaendige-nuernberg" },
      { label: "Versicherungsberatung in Fürth", href: "/versicherung-fuerth" },
      { label: "Versicherungsberatung in Erlangen", href: "/versicherung-erlangen" },
      { label: "Überblick: Versicherung in Franken", href: "/versicherung-franken" },
    ],
  },

  // ─────────────────────────────────────────── FÜRTH
  {
    slug: "versicherung-fuerth",
    kind: "city",
    name: "Fürth",
    areaServed: "Fürth",
    areaServedType: "City",
    badge: "Fürth & Umgebung",
    h1: "Versicherungsberatung in Fürth",
    metaTitle: "Versicherungsberatung in Fürth | HDI Werner Böhm",
    metaDescription:
      "Persönliche Versicherungs- und Vorsorgeberatung in Fürth – für Familien, Berufstätige und Selbstständige. Kurze Wege aus Nürnberg, Beratung vor Ort oder per Videocall.",
    intro: [
      "Fürth und Nürnberg wachsen seit Jahrzehnten zusammen – und genau deshalb sind wir auch in der Kleeblattstadt schnell für Sie da. Von unserem Nürnberger Büro sind die Wege kurz, sodass eine persönliche Beratung in Fürth unkompliziert möglich ist.",
      "Ob junge Familie, Berufstätige oder Selbstständige: Wir helfen Ihnen, den Überblick über Ihre Absicherung zu behalten und die richtigen Prioritäten zu setzen.",
    ],
    contextHeading: "Beratung für eine vielfältige Stadt",
    contextParagraphs: [
      "Fürth hat sich von einer klassischen Industriestadt zu einem vielfältigen Wirtschaftsstandort entwickelt. Viele Bürgerinnen und Bürger pendeln in die Region oder sind selbstständig tätig – beides bringt eigene Anforderungen an die Absicherung mit sich.",
      "Wir schauen uns Ihre bestehende Situation genau an: Welche Verträge laufen bereits, wo bestehen Lücken, und was ist für Ihre Zukunft wirklich wichtig? So entsteht eine Absicherung mit klarer Struktur statt einem Sammelsurium an Policen.",
    ],
    facts: [
      { value: "Kurze Wege", label: "Direkt aus Nürnberg" },
      { value: "Persönlich", label: "Beratung vor Ort in Fürth" },
      { value: "Familien", label: "Ein Schwerpunkt unserer Arbeit" },
    ],
    faqs: [
      {
        q: "Beraten Sie auch in Fürth persönlich vor Ort?",
        a: "Ja. Da Fürth direkt an Nürnberg grenzt, sind die Wege kurz. Wir besuchen Sie gerne zu Hause oder beraten Sie im Büro bzw. per Videocall.",
      },
      {
        q: "Wir sind eine junge Familie in Fürth – womit sollten wir anfangen?",
        a: "Sinnvoll ist meist die Absicherung der Arbeitskraft und ein Grundschutz für die Familie (z. B. Haftpflicht und Risikoabsicherung). In einem kostenlosen Erstgespräch klären wir gemeinsam Ihre Prioritäten.",
      },
      {
        q: "Kann ich bestehende Verträge prüfen lassen?",
        a: "Selbstverständlich. Wir analysieren Ihre vorhandenen Verträge und sagen Ihnen ehrlich, wo Sie gut aufgestellt sind und wo Handlungsbedarf besteht.",
      },
    ],
    related: [
      { label: "Versicherung für Familien in Franken", href: "/versicherung-familien-franken" },
      { label: "Versicherungsberatung in Nürnberg", href: "/versicherung-nuernberg" },
      { label: "Versicherungsberatung in Erlangen", href: "/versicherung-erlangen" },
      { label: "Überblick: Versicherung in Franken", href: "/versicherung-franken" },
    ],
  },

  // ─────────────────────────────────────────── ERLANGEN
  {
    slug: "versicherung-erlangen",
    kind: "city",
    name: "Erlangen",
    areaServed: "Erlangen",
    areaServedType: "City",
    badge: "Erlangen & Umgebung",
    h1: "Versicherungsberatung in Erlangen",
    metaTitle: "Versicherungsberatung in Erlangen | HDI Werner Böhm",
    metaDescription:
      "Versicherungs- und Vorsorgeberatung in Erlangen – für Akademiker, Fachkräfte, internationale Mitarbeitende und Studierende. Persönlich vor Ort oder per Videocall.",
    intro: [
      "Erlangen ist geprägt von Wissenschaft, Medizintechnik und einem hohen Anteil an Akademikerinnen und Akademikern. Mit der Friedrich-Alexander-Universität und großen Arbeitgebern im Bereich Gesundheit und Technik hat die Stadt ein besonderes Profil – und entsprechend spezifische Absicherungsfragen.",
      "Wir beraten Fachkräfte, Angestellte und Selbstständige in Erlangen dabei, ihre Arbeitskraft und ihr Einkommen sinnvoll abzusichern und frühzeitig für später vorzusorgen.",
    ],
    contextHeading: "Absicherung für Fachkräfte und Akademiker",
    contextParagraphs: [
      "Wer eine qualifizierte Tätigkeit ausübt, hat oft ein höheres Einkommen – und damit auch mehr zu verlieren, wenn die Arbeitskraft ausfällt. Gerade für Akademiker und Fachkräfte ist eine passgenaue Berufsunfähigkeitsabsicherung und eine durchdachte Altersvorsorge besonders wichtig.",
      "In Erlangen leben und arbeiten zudem viele internationale Fachkräfte. Wir erklären das deutsche Versicherungssystem verständlich und helfen dabei, die richtigen Entscheidungen zu treffen – bei Bedarf auch für Themen wie die private Krankenversicherung.",
    ],
    facts: [
      { value: "FAU", label: "Universitätsstadt mit vielen Akademikern" },
      { value: "Fachkräfte", label: "Schwerpunkt Arbeitskraft & Vorsorge" },
      { value: "International", label: "Beratung auch für Fachkräfte aus dem Ausland" },
    ],
    faqs: [
      {
        q: "Ich arbeite als Akademiker in Erlangen – welche Absicherung ist wichtig?",
        a: "Für qualifizierte Berufe ist die Absicherung der Arbeitskraft zentral, da das Einkommen ein wesentlicher Wert ist. Ergänzend sind private Altersvorsorge und – je nach Einkommen – die Wahl der Krankenversicherung relevant.",
      },
      {
        q: "Beraten Sie auch internationale Fachkräfte in Erlangen?",
        a: "Ja. Viele internationale Mitarbeitende stehen vor der Frage, wie das deutsche System funktioniert. Wir erklären die Grundlagen verständlich und begleiten Sie bei den passenden Entscheidungen.",
      },
      {
        q: "Kann ich mich als Studierende oder Studierender der FAU beraten lassen?",
        a: "Ja. Für Studierende gibt es eigene, gut kalkulierbare Bausteine – etwa Haftpflicht oder ein früher, günstiger Einstieg in die Berufsunfähigkeitsabsicherung. Details finden Sie auf unserer Seite für Studierende in Erlangen.",
      },
    ],
    related: [
      { label: "Versicherung für internationale Fachkräfte", href: "/versicherung-internationale-fachkraefte-franken" },
      { label: "Versicherung für Studenten in Erlangen", href: "/versicherung-studenten-erlangen" },
      { label: "Versicherungsberatung in Nürnberg", href: "/versicherung-nuernberg" },
      { label: "Überblick: Versicherung in Franken", href: "/versicherung-franken" },
    ],
  },

  // ─────────────────────────────────────────── BAMBERG
  {
    slug: "versicherung-bamberg",
    kind: "city",
    name: "Bamberg",
    areaServed: "Bamberg",
    areaServedType: "City",
    badge: "Bamberg & Umgebung",
    h1: "Versicherungsberatung in Bamberg",
    metaTitle: "Versicherungsberatung in Bamberg | HDI Werner Böhm",
    metaDescription:
      "Versicherungs- und Vorsorgeberatung in Bamberg – für Familien, Handwerk, Mittelstand und Angestellte im öffentlichen Dienst. Persönlich und verständlich.",
    intro: [
      "Bamberg verbindet Tradition und Moderne: eine der besterhaltenen Altstädte Deutschlands, eine lebendige Universität und ein starker, oft familiengeführter Mittelstand. Für viele Menschen in und um Bamberg zählt genau dieser persönliche, verlässliche Umgang – auch bei Versicherungsfragen.",
      "Wir beraten Familien, Handwerksbetriebe, Selbstständige und Angestellte in der Region und helfen dabei, den Schutz übersichtlich und bezahlbar zu gestalten.",
    ],
    contextHeading: "Beratung für Mittelstand, Handwerk und Familien",
    contextParagraphs: [
      "Handwerk und Mittelstand prägen die Wirtschaft rund um Bamberg. Für Betriebe und Selbstständige ist die Absicherung der eigenen Arbeitskraft ebenso wichtig wie die Vorsorge fürs Alter, da hier kein automatischer gesetzlicher Schutz greift.",
      "Auch für Familien und Angestellte – etwa im öffentlichen Dienst – lohnt sich ein klarer Blick auf die eigene Absicherung. Wir sortieren gemeinsam mit Ihnen, was Sie wirklich brauchen, und was verzichtbar ist.",
    ],
    facts: [
      { value: "Mittelstand", label: "Beratung für Betriebe & Selbstständige" },
      { value: "Familien", label: "Solide Grundabsicherung" },
      { value: "Persönlich", label: "Verlässlicher Ansprechpartner" },
    ],
    faqs: [
      {
        q: "Ich bin selbstständig im Handwerk in Bamberg – was ist besonders wichtig?",
        a: "Für Selbstständige gibt es keinen automatischen gesetzlichen Schutz bei Krankheit oder im Alter. Deshalb sind Themen wie Berufsunfähigkeit, Krankentagegeld und private Vorsorge besonders wichtig.",
      },
      {
        q: "Beraten Sie auch Beamte und Angestellte im öffentlichen Dienst?",
        a: "Ja. Für diese Gruppen gelten teils besondere Regelungen. Wir berücksichtigen Ihre konkrete Situation und zeigen sinnvolle Ergänzungen auf.",
      },
      {
        q: "Findet die Beratung in Bamberg statt?",
        a: "Wir beraten Sie flexibel per Videocall oder nach Absprache persönlich. So bleibt die Beratung bequem, auch wenn unser Büro in Nürnberg liegt.",
      },
    ],
    related: [
      { label: "Versicherung für Familien in Franken", href: "/versicherung-familien-franken" },
      { label: "Versicherungsberatung in Würzburg", href: "/versicherung-wuerzburg" },
      { label: "Versicherungsberatung in Erlangen", href: "/versicherung-erlangen" },
      { label: "Überblick: Versicherung in Franken", href: "/versicherung-franken" },
    ],
  },

  // ─────────────────────────────────────────── WÜRZBURG
  {
    slug: "versicherung-wuerzburg",
    kind: "city",
    name: "Würzburg",
    areaServed: "Würzburg",
    areaServedType: "City",
    badge: "Würzburg & Umgebung",
    h1: "Versicherungsberatung in Würzburg",
    metaTitle: "Versicherungsberatung in Würzburg | HDI Werner Böhm",
    metaDescription:
      "Versicherungs- und Vorsorgeberatung in Würzburg – für Studierende, Mediziner, Akademiker und Familien. Verständlich, persönlich und unabhängig von Verkaufsdruck.",
    intro: [
      "Würzburg ist eine lebendige Universitäts- und Weinstadt mit einem starken Gesundheits- und Bildungssektor. Studierende, Medizinerinnen und Mediziner, Akademiker und Familien prägen das Bild der Stadt – und bringen jeweils eigene Absicherungsfragen mit.",
      "Wir helfen Ihnen, die für Ihre Lebensphase passenden Bausteine zu finden – vom günstigen Einstieg für junge Menschen bis zur durchdachten Vorsorge für Fachkräfte und Familien.",
    ],
    contextHeading: "Beratung für Uni-Stadt und Gesundheitsstandort",
    contextParagraphs: [
      "Rund um Universität und Universitätsklinikum arbeiten viele Menschen in qualifizierten Berufen. Gerade in Gesundheitsberufen ist die Absicherung der Arbeitskraft zentral, da die Tätigkeit körperlich und mental anspruchsvoll ist.",
      "Für Studierende wiederum geht es zunächst um bezahlbaren Grundschutz und um die Chance, sich frühzeitig günstige Konditionen zu sichern. Wir beraten alters- und situationsgerecht – ohne unnötige Verträge.",
    ],
    facts: [
      { value: "Uni & Klinik", label: "Beratung für Gesundheitsberufe" },
      { value: "Studierende", label: "Bezahlbarer Grundschutz" },
      { value: "Familien", label: "Vorsorge mit klarer Struktur" },
    ],
    faqs: [
      {
        q: "Ich arbeite im Gesundheitswesen in Würzburg – worauf sollte ich achten?",
        a: "In Gesundheitsberufen ist die Absicherung der Arbeitskraft besonders wichtig. Eine passende Berufsunfähigkeitsversicherung und eine solide Altersvorsorge stehen hier meist im Vordergrund.",
      },
      {
        q: "Lohnt sich eine Beratung schon während des Studiums?",
        a: "Ja. Wer jung und gesund ist, sichert sich oft besonders günstige Konditionen – etwa bei der Berufsunfähigkeitsabsicherung. Zudem sind Haftpflicht und Krankenversicherung wichtige Themen für Studierende.",
      },
      {
        q: "Wie läuft die Beratung ab, wenn ich in Würzburg wohne?",
        a: "Bequem per Videocall oder nach Absprache persönlich. Sie erhalten dieselbe sorgfältige Beratung wie vor Ort in Nürnberg.",
      },
    ],
    related: [
      { label: "Versicherung für Studenten in Erlangen", href: "/versicherung-studenten-erlangen" },
      { label: "Versicherungsberatung in Bamberg", href: "/versicherung-bamberg" },
      { label: "Versicherung für Familien in Franken", href: "/versicherung-familien-franken" },
      { label: "Überblick: Versicherung in Franken", href: "/versicherung-franken" },
    ],
  },

  // ─────────────────────────────────────────── ANSBACH
  {
    slug: "versicherung-ansbach",
    kind: "city",
    name: "Ansbach",
    areaServed: "Ansbach",
    areaServedType: "City",
    badge: "Ansbach & Umgebung",
    h1: "Versicherungsberatung in Ansbach",
    metaTitle: "Versicherungsberatung in Ansbach | HDI Werner Böhm",
    metaDescription:
      "Versicherungs- und Vorsorgeberatung in Ansbach – für Angestellte im öffentlichen Dienst, Familien, Handwerk und die internationale Community. Persönlich und verständlich.",
    intro: [
      "Ansbach ist als Regierungssitz von Mittelfranken stark vom öffentlichen Dienst geprägt und zugleich Heimat eines soliden Mittelstands und Handwerks. Auch eine internationale Community gehört zum Bild der Stadt.",
      "Wir beraten Angestellte, Beamtinnen und Beamte, Familien sowie Selbstständige in Ansbach und Umgebung – strukturiert, verständlich und mit Blick auf Ihre konkrete Situation.",
    ],
    contextHeading: "Beratung für öffentlichen Dienst, Handwerk und Familien",
    contextParagraphs: [
      "Für Beschäftigte im öffentlichen Dienst gelten oft besondere Regelungen bei Vorsorge und Absicherung. Umso wichtiger ist eine Beratung, die diese Besonderheiten berücksichtigt und sinnvolle Ergänzungen aufzeigt.",
      "Handwerk und Mittelstand brauchen dagegen vor allem verlässlichen Schutz der Arbeitskraft und eine eigenverantwortliche Vorsorge. Wir helfen Ihnen, die richtigen Schwerpunkte zu setzen – ohne überflüssige Verträge.",
    ],
    facts: [
      { value: "Öff. Dienst", label: "Beratung mit Blick auf Besonderheiten" },
      { value: "Handwerk", label: "Schutz der Arbeitskraft" },
      { value: "International", label: "Auch für die Community vor Ort" },
    ],
    faqs: [
      {
        q: "Ich bin im öffentlichen Dienst in Ansbach tätig – was ist zu beachten?",
        a: "Je nach Status (z. B. Beamtin/Beamter oder Angestellte/Angestellter) gelten unterschiedliche Regeln bei Kranken- und Altersvorsorge. Wir berücksichtigen Ihre Situation und zeigen passende Ergänzungen auf.",
      },
      {
        q: "Beraten Sie auch englischsprachige Kundinnen und Kunden in Ansbach?",
        a: "Für die internationale Community erklären wir das deutsche Versicherungssystem verständlich. Weitere Informationen finden Sie auf unserer Seite für internationale Fachkräfte in Franken.",
      },
      {
        q: "Ist eine Beratung ohne Anfahrt nach Nürnberg möglich?",
        a: "Ja. Per Videocall beraten wir Sie ortsunabhängig; persönliche Termine sind nach Absprache möglich.",
      },
    ],
    related: [
      { label: "Versicherung für internationale Fachkräfte", href: "/versicherung-internationale-fachkraefte-franken" },
      { label: "Versicherung für Familien in Franken", href: "/versicherung-familien-franken" },
      { label: "Versicherungsberatung in Nürnberg", href: "/versicherung-nuernberg" },
      { label: "Überblick: Versicherung in Franken", href: "/versicherung-franken" },
    ],
  },

  // ─────────────────────────────────────────── ZIELGRUPPE: SELBSTSTÄNDIGE NÜRNBERG
  {
    slug: "versicherung-selbststaendige-nuernberg",
    kind: "audience",
    name: "Selbstständige in Nürnberg",
    areaServed: "Nürnberg",
    areaServedType: "City",
    badge: "Zielgruppe: Selbstständige",
    h1: "Versicherung für Selbstständige in Nürnberg",
    metaTitle: "Versicherung für Selbstständige in Nürnberg | HDI Werner Böhm",
    metaDescription:
      "Absicherung für Selbstständige und Unternehmer in Nürnberg: Berufsunfähigkeit, Krankenversicherung, Krankentagegeld und private Vorsorge – persönlich und ohne Verkaufsdruck.",
    intro: [
      "Als Selbstständige oder Selbstständiger in Nürnberg tragen Sie die Verantwortung für Ihre Absicherung selbst – es gibt kein automatisches gesetzliches Netz, das im Ernstfall einspringt. Genau hier setzen wir an: mit einer Beratung, die Ihre unternehmerische Realität ernst nimmt.",
      "Ob Solo-Selbstständige, Freiberuflerin oder Handwerksbetrieb – wir helfen Ihnen, die wirklich wichtigen Risiken abzusichern und gleichzeitig die Kosten im Blick zu behalten.",
    ],
    contextHeading: "Warum Selbstständige besonders vorsorgen sollten",
    contextParagraphs: [
      "Fällt die Arbeitskraft aus, fehlt bei Selbstständigen oft sofort das Einkommen. Deshalb gehören die Berufsunfähigkeitsversicherung und – je nach Situation – ein Krankentagegeld zu den zentralen Bausteinen. Sie sorgen dafür, dass laufende Kosten und Lebenshaltung auch im Krankheitsfall gedeckt sind.",
      "Auch die Altersvorsorge liegt allein in Ihrer Hand. Modelle wie die Rürup-Rente oder andere private Lösungen können steuerlich und langfristig sinnvoll sein. Wir prüfen gemeinsam, welche Kombination zu Ihrem Geschäft und Ihren Zielen passt.",
    ],
    focusHeading: "Typische Themen für Selbstständige",
    focusParagraphs: [
      "Absicherung der Arbeitskraft (Berufsunfähigkeit), Krankenversicherung und Krankentagegeld, private und steuerlich geförderte Altersvorsorge sowie betriebliche Haftpflicht- und Sachrisiken. Welche Bausteine sinnvoll sind, hängt von Branche, Einkommen und Lebensphase ab.",
    ],
    facts: [
      { value: "0 €", label: "Automatischer gesetzlicher Schutz" },
      { value: "Arbeitskraft", label: "Ihr wichtigstes Kapital" },
      { value: "Individuell", label: "Lösungen je nach Branche" },
    ],
    faqs: [
      {
        q: "Welche Versicherung ist für Selbstständige am wichtigsten?",
        a: "In der Regel die Absicherung der Arbeitskraft, da bei Ausfall das Einkommen wegbricht. Ergänzend sind Krankenversicherung, Krankentagegeld und private Altersvorsorge zentrale Themen.",
      },
      {
        q: "Lohnt sich eine private Krankenversicherung für Selbstständige?",
        a: "Das hängt von Ihrer Situation ab. Selbstständige können unabhängig vom Einkommen wählen. Ob die private oder gesetzliche Variante sinnvoller ist, klären wir individuell mit Ihnen.",
      },
      {
        q: "Wie sorge ich als Selbstständige/r fürs Alter vor?",
        a: "Es gibt mehrere Wege – von der Rürup-Rente bis zu flexiblen privaten Lösungen. Wir vergleichen die Optionen mit Blick auf Steuer, Flexibilität und Ihre Ziele.",
      },
    ],
    related: [
      { label: "Versicherungsberatung in Nürnberg", href: "/versicherung-nuernberg" },
      { label: "Selbstständige absichern (Überblick)", href: "/selbststaendige-absicherung" },
      { label: "Berufsunfähigkeitsversicherung", href: "/service/berufsunfaehigkeit" },
      { label: "Überblick: Versicherung in Franken", href: "/versicherung-franken" },
    ],
  },

  // ─────────────────────────────────────────── ZIELGRUPPE: FAMILIEN FRANKEN
  {
    slug: "versicherung-familien-franken",
    kind: "audience",
    name: "Familien in Franken",
    areaServed: "Franken",
    areaServedType: "AdministrativeArea",
    badge: "Zielgruppe: Familien",
    h1: "Versicherung für Familien in Franken",
    metaTitle: "Versicherung für Familien in Franken | HDI Werner Böhm",
    metaDescription:
      "Absicherung für Familien in Franken: Schutz der Eltern, Kinderabsicherung, Vorsorge und Haftpflicht – strukturiert, verständlich und auf Ihre Familie zugeschnitten.",
    intro: [
      "Wenn Kinder da sind, ändern sich die Prioritäten – auch bei der Absicherung. Für Familien in Franken geht es vor allem darum, die Menschen zu schützen, die einem am wichtigsten sind, und die Familie finanziell auf ein sicheres Fundament zu stellen.",
      "Wir helfen Ihnen, mit klarer Struktur die richtigen Schwerpunkte zu setzen – ohne Sie mit unnötigen Verträgen zu belasten.",
    ],
    contextHeading: "Absicherung, die zur Familie passt",
    contextParagraphs: [
      "Der wichtigste Baustein für Familien ist häufig die Absicherung der Einkommen der Eltern: Fällt ein Einkommen durch Krankheit oder einen Schicksalsschlag weg, gerät schnell die gesamte Familie unter Druck. Berufsunfähigkeits- und Risikoabsicherung schaffen hier ein Sicherheitsnetz.",
      "Darüber hinaus sind ein solider Haftpflichtschutz, die Absicherung der Kinder und – wo sinnvoll – der frühzeitige Aufbau von Vorsorge und Rücklagen wichtig. Wir gehen Ihre Situation Schritt für Schritt mit Ihnen durch.",
    ],
    focusHeading: "Typische Themen für Familien",
    focusParagraphs: [
      "Absicherung der Arbeitskraft beider Elternteile, Risikoabsicherung für den Ernstfall, Kinderabsicherung, private Haftpflicht sowie Vorsorge und Sparformen für Ausbildung und Zukunft der Kinder.",
    ],
    facts: [
      { value: "Eltern", label: "Einkommen absichern" },
      { value: "Kinder", label: "Früh und günstig absichern" },
      { value: "Struktur", label: "Klare Prioritäten statt Policenchaos" },
    ],
    faqs: [
      {
        q: "Womit sollte eine junge Familie beginnen?",
        a: "Meist mit der Absicherung der Arbeitskraft der Eltern und einem Grundschutz wie der privaten Haftpflicht. Danach folgen Themen wie Kinderabsicherung und Vorsorge.",
      },
      {
        q: "Lohnt sich eine Versicherung speziell für Kinder?",
        a: "Für Kinder können früh abgeschlossene Bausteine günstig sein und wichtige Gesundheitsfragen frühzeitig sichern. Was sinnvoll ist, hängt von Ihrer Familiensituation ab.",
      },
      {
        q: "Beraten Sie Familien in ganz Franken?",
        a: "Ja. Ob Nürnberg, Fürth, Erlangen oder das weitere Franken – wir beraten Sie persönlich vor Ort oder per Videocall.",
      },
    ],
    related: [
      { label: "Familie absichern (Überblick)", href: "/familie-absichern" },
      { label: "Kinder absichern", href: "/kinder-absichern" },
      { label: "Versicherungsberatung in Nürnberg", href: "/versicherung-nuernberg" },
      { label: "Überblick: Versicherung in Franken", href: "/versicherung-franken" },
    ],
  },

  // ─────────────────────────────────────────── ZIELGRUPPE: INTERNATIONALE FACHKRÄFTE
  {
    slug: "versicherung-internationale-fachkraefte-franken",
    kind: "audience",
    name: "Internationale Fachkräfte in Franken",
    areaServed: "Franken",
    areaServedType: "AdministrativeArea",
    badge: "Zielgruppe: Internationale Fachkräfte",
    h1: "Versicherung für internationale Fachkräfte in Franken",
    metaTitle: "Versicherung für internationale Fachkräfte in Franken | HDI Werner Böhm",
    metaDescription:
      "Orientierung im deutschen Versicherungssystem für internationale Fachkräfte in Franken: Krankenversicherung, Arbeitskraftabsicherung und Vorsorge – verständlich erklärt.",
    intro: [
      "Franken – und besonders die Region um Nürnberg und Erlangen – zieht viele internationale Fachkräfte an, etwa in Technik, IT und im Gesundheitswesen. Wer neu in Deutschland ist, steht oft vor einem komplexen und ungewohnten Versicherungssystem.",
      "Wir helfen internationalen Fachkräften, sich zu orientieren: Was ist Pflicht, was ist sinnvoll, und worauf sollte man verzichten? Ziel ist eine solide Absicherung ohne unnötige Kosten.",
    ],
    contextHeading: "Das deutsche System verständlich erklärt",
    contextParagraphs: [
      "Ein häufiges Thema ist die Krankenversicherung: die Unterscheidung zwischen gesetzlicher und privater Krankenversicherung und die Frage, was in der individuellen Situation passt. Wir erklären die Grundlagen klar und ohne Fachjargon.",
      "Darüber hinaus sind die Absicherung der Arbeitskraft, die Altersvorsorge und ein Grundschutz wie die private Haftpflicht wichtige Bausteine. Wir gehen die relevanten Themen strukturiert mit Ihnen durch.",
    ],
    focusHeading: "Typische Fragen internationaler Fachkräfte",
    focusParagraphs: [
      "Gesetzliche oder private Krankenversicherung? Wie sichere ich mein Einkommen ab? Wie funktioniert Altersvorsorge in Deutschland? Welche Grundabsicherung brauche ich wirklich? Diese Fragen klären wir gemeinsam.",
    ],
    facts: [
      { value: "Orientierung", label: "System verständlich erklärt" },
      { value: "GKV/PKV", label: "Krankenversicherung im Vergleich" },
      { value: "Individuell", label: "Passend zu Ihrer Situation" },
    ],
    faqs: [
      {
        q: "I just moved to Germany – do you also advise in English?",
        a: "Wir erklären das deutsche Versicherungssystem verständlich und gehen auf die Bedürfnisse internationaler Fachkräfte ein. Sprechen Sie uns zu Ihren konkreten Anforderungen an, wir finden einen passenden Weg.",
      },
      {
        q: "Gesetzliche oder private Krankenversicherung – was ist besser für mich?",
        a: "Das hängt von Einkommen, Familiensituation und Ihren Plänen in Deutschland ab. Wir stellen die Unterschiede neutral dar, damit Sie eine informierte Entscheidung treffen können.",
      },
      {
        q: "Welche Absicherung brauche ich als internationale Fachkraft wirklich?",
        a: "Neben der Krankenversicherung sind meist die Absicherung der Arbeitskraft und eine private Haftpflicht sinnvoll. Die Altersvorsorge ist je nach Bleibeperspektive ein weiteres Thema.",
      },
    ],
    related: [
      { label: "Versicherungsberatung in Erlangen", href: "/versicherung-erlangen" },
      { label: "Private Krankenversicherung", href: "/service/private-krankenversicherung" },
      { label: "Versicherungsberatung in Nürnberg", href: "/versicherung-nuernberg" },
      { label: "Überblick: Versicherung in Franken", href: "/versicherung-franken" },
    ],
  },

  // ─────────────────────────────────────────── ZIELGRUPPE: STUDENTEN ERLANGEN
  {
    slug: "versicherung-studenten-erlangen",
    kind: "audience",
    name: "Studenten in Erlangen",
    areaServed: "Erlangen",
    areaServedType: "City",
    badge: "Zielgruppe: Studierende",
    h1: "Versicherung für Studenten in Erlangen",
    metaTitle: "Versicherung für Studenten in Erlangen | HDI Werner Böhm",
    metaDescription:
      "Absicherung für Studierende in Erlangen (FAU): Haftpflicht, Krankenversicherung und ein früher, günstiger Einstieg in die Arbeitskraftabsicherung – verständlich erklärt.",
    intro: [
      "Als Studierende oder Studierender an der FAU in Erlangen brauchen Sie keine großen Policen – aber ein paar sinnvolle Bausteine, die Sie im Alltag absichern und Ihnen später Vorteile bringen können.",
      "Wir beraten alters- und situationsgerecht: bezahlbar, transparent und ohne Ihnen etwas aufzuschwatzen, das Sie nicht brauchen.",
    ],
    contextHeading: "Sinnvolle Absicherung im Studium",
    contextParagraphs: [
      "Für Studierende sind vor allem drei Themen relevant: die private Haftpflicht (oft noch über die Eltern abgedeckt, aber nicht immer), die Krankenversicherung im studentischen Status und – für Weitblickende – der frühe Einstieg in die Absicherung der Arbeitskraft.",
      "Gerade beim letzten Punkt gilt: Wer jung und gesund ist, sichert sich häufig besonders günstige und langfristig stabile Konditionen. Wir zeigen Ihnen, was heute schon sinnvoll ist und was warten kann.",
    ],
    focusHeading: "Typische Themen für Studierende",
    focusParagraphs: [
      "Private Haftpflicht, Krankenversicherung im Studium, ein früher (und dadurch günstiger) Einstieg in die Berufsunfähigkeitsabsicherung sowie Orientierung für internationale Studierende zum deutschen System.",
    ],
    facts: [
      { value: "FAU", label: "Beratung für Studierende in Erlangen" },
      { value: "Günstig", label: "Früh einsteigen, Konditionen sichern" },
      { value: "Ehrlich", label: "Nur, was wirklich sinnvoll ist" },
    ],
    faqs: [
      {
        q: "Welche Versicherung brauche ich als Studierende/r wirklich?",
        a: "Meist ist die private Haftpflicht der wichtigste Basisschutz. Zusätzlich sind die Krankenversicherung und – für Weitblickende – ein früher Einstieg in die Arbeitskraftabsicherung sinnvoll.",
      },
      {
        q: "Warum sollte ich mich schon im Studium mit Berufsunfähigkeit befassen?",
        a: "Weil junge und gesunde Menschen oft besonders günstige Konditionen erhalten. Ein früher Einstieg kann sich langfristig auszahlen – ohne dass hohe Kosten entstehen.",
      },
      {
        q: "Beraten Sie auch internationale Studierende an der FAU?",
        a: "Ja. Wir erklären das deutsche System verständlich. Mehr dazu finden Sie auf unserer Seite für internationale Fachkräfte in Franken.",
      },
    ],
    related: [
      { label: "Versicherungsberatung in Erlangen", href: "/versicherung-erlangen" },
      { label: "Versicherung für internationale Fachkräfte", href: "/versicherung-internationale-fachkraefte-franken" },
      { label: "Berufsunfähigkeitsversicherung", href: "/service/berufsunfaehigkeit" },
      { label: "Überblick: Versicherung in Franken", href: "/versicherung-franken" },
    ],
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export const cityLocations = locations.filter((l) => l.kind === "city");
export const audienceLocations = locations.filter((l) => l.kind === "audience");
