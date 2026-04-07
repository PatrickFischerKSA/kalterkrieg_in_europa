const MODULES = [
  {
    id: "ueberblick",
    step: "1",
    title: "Vom Kriegsende zum Systemkonflikt",
    era: "1945 bis fruehe 1950er Jahre",
    intro:
      "Diese Auftaktstation schafft den begrifflichen und historischen Rahmen: Warum spricht man ueberhaupt von einem Kalten Krieg, welche Rolle spielten Besatzung, Blockbildung und Abschreckung, und weshalb wurde Deutschland zum Nervenzentrum der neuen Weltordnung?",
    goal:
      "Du kannst den Kalten Krieg als Kombination aus Sicherheitsinteressen, Ideologie, Wirtschaftspolitik und globalem Machtanspruch erklaeren.",
    route:
      "Sichtung der beiden Ueberblicksvideos, danach Arbeit mit dem PDF und den beiden Frageblaettern. Erst sichern, dann vergleichen, dann deuten.",
    teacherNote:
      "Die Station eignet sich als gemeinsamer Einstieg oder als Hausauftragsmodul vor einer Vertiefung zu Deutschland.",
    teacherToolkit: {
      duration: "35 bis 45 Minuten oder als vorbereitender Hausauftrag",
      socialForms: [
        "Einzelarbeit mit anschliessendem Partnervergleich",
        "Plenumssicherung der Leitbegriffe",
        "kurze Schreibphase zur Vergleichsfrage"
      ],
      assessmentFocus: [
        "Kalter Krieg nicht auf Atomkrieg verkuerzen",
        "Deutschland als Symbol- und Konfliktraum verstehen",
        "Sicherheits-, Ideologie- und Wirtschaftsfaktor verknuepfen"
      ],
      misconceptions: [
        "Kalter Krieg bedeute automatisch direkten Krieg",
        "Deutschland sei nur Nebenschauplatz des Konflikts",
        "Wirtschaftshilfe und Ideologie haetten nichts miteinander zu tun"
      ],
      product:
        "Vergleichender Kurzkommentar zu den beiden Ueberblicksvideos oder ein Begriffsnetz mit Deutschland als Zentrum.",
      extension:
        "Mit der Transferfrage die Unterschiede zwischen monokausalen und mehrdimensionalen Deutungen sichtbar machen."
    },
    prompts: [
      "Achte auf die Verbindung von Ideologie und Sicherheitsdenken.",
      "Notiere, wie die Videos Deutschland und Berlin positionieren.",
      "Halte fest, welche Rolle Wirtschaftspolitik fuer die Blockbildung spielt."
    ],
    resources: [
      {
        id: "r-kalterkrieg-video-1",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Der Kalte Krieg erklaert",
        focus: "kompakter Ueberblick ueber Blockbildung, Wettruesten und globale Spannungen",
        link: "https://www.dropbox.com/scl/fi/6xntwkrpxez1uf4afzuc3/Der-Kalte-Krieg-erkl-rt.mp4?rlkey=lwodknc7fvcfm9qeket97tnlo&e=1&st=ezj0u2ah&dl=0",
        tags: ["Dropbox", "Pflicht", "Erklaervideo"]
      },
      {
        id: "r-kalterkrieg-video-2",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "wissen2go: Der Kalte Krieg erklaert",
        focus: "zweite Deutungsperspektive mit starker Verdichtung zentraler Begriffe",
        link: "https://www.dropbox.com/scl/fi/htf92dran68b25c3ta8cg/wissen2go-Der-Kalte-Krieg-erkl-rt.mp4?rlkey=skhzmdaaova647elxuq5vap32&e=1&st=umkqm5af&dl=0",
        tags: ["Dropbox", "Pflicht", "Vergleich"]
      },
      {
        id: "r-kalterkrieg-pdf",
        bucket: "Reader und Uebersichten",
        type: "PDF",
        title: "KalterKrieg.pdf",
        focus: "Materialbasis fuer Wiederholung, Begriffssicherung und Orientierung",
        link: "assets/materials/KalterKrieg.pdf",
        tags: ["lokal", "Reader"]
      },
      {
        id: "r-erklaervideo-fragen",
        bucket: "Arbeitsblaetter",
        type: "PDF",
        title: "Fragen zum Erklaervideo",
        focus: "Frageblatt zur Erarbeitung zentraler Grundbegriffe",
        link: "assets/materials/Fragen-zum-Erklaervideo.pdf",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-zusammenfassung-fragen",
        bucket: "Arbeitsblaetter",
        type: "PDF",
        title: "Fragen zur Zusammenfassung des Kalten Kriegs",
        focus: "komprimierte Sicherung fuer Wiederholung und Repetition",
        link: "assets/materials/Fragen-Zusammenfassung-Kalter-Krieg.pdf",
        tags: ["lokal", "Repetition"]
      }
    ],
    questions: [
      {
        id: "q-ueberblick-1",
        type: "single-choice",
        challenge: "Faktencheck",
        prompt:
          "Welche Aussage trifft den Begriff Kalter Krieg am besten?",
        help:
          "Waehle die Antwort, die Machtpolitik, ideologischen Gegensatz und indirekte Austragungsformen zusammenbringt.",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-video-2"],
        options: [
          {
            id: "a",
            text: "Ein direkter militaerischer Krieg zwischen USA und UdSSR mit einer einzigen Front in Deutschland."
          },
          {
            id: "b",
            text: "Ein globaler Systemkonflikt zwischen den Supermaechten, der meist indirekt ueber Abschreckung, Stellvertreterkonflikte und Einflusszonen ausgetragen wurde."
          },
          {
            id: "c",
            text: "Eine reine Wirtschaftskrise Europas ohne ideologische oder militaerische Dimension."
          },
          {
            id: "d",
            text: "Ein ausschliesslich deutsches Problem, das nach der Gruendung von BRD und DDR beendet war."
          }
        ],
        correctOptionId: "b",
        explanation:
          "Der Kalte Krieg war kein heisser Grosskrieg zwischen den Supermaechten, sondern ein globaler System- und Machtkonflikt mit Abschreckung, Buendnispolitik, Propaganda und Stellvertreterkriegen."
      },
      {
        id: "q-ueberblick-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erklaere knapp, warum Deutschland und besonders Berlin zum Brennpunkt des Kalten Krieges wurden.",
        help:
          "Sofortkorrektur erkennt auch Synonyme. Nenne mindestens zwei der drei zentralen Dimensionen.",
        placeholder: "Deutschland/Berlin wurden zum Brennpunkt, weil ...",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-pdf"],
        conceptGroups: [
          {
            label: "Viermaechte- oder Besatzungsordnung",
            variants: [
              "viermaechte",
              "vier maechte",
              "besatzungszonen",
              "besatzung",
              "vier maechte status",
              "geteiltes berlin"
            ]
          },
          {
            label: "Symbolischer Schauplatz zweier Systeme",
            variants: [
              "zwei systeme",
              "systemkonflikt",
              "symbolraum",
              "schaufenster",
              "ideologischer gegensatz",
              "ost und west direkt gegenueber"
            ]
          },
          {
            label: "Strategische oder politische Zuspitzung",
            variants: [
              "blockade",
              "luftbruecke",
              "machtkampf",
              "buendnisse",
              "spannung",
              "konfrontation"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Deutschland lag im Zentrum der Nachkriegsordnung, weil es von vier Siegermächten besetzt wurde. Berlin wurde zum direkten Kontakt- und Konfliktraum beider Systeme. Spätestens mit Blockade, Luftbrücke und der späteren Staatsgründung verdichtete sich hier die gesamte Logik des Kalten Krieges."
      },
      {
        id: "q-ueberblick-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Vergleiche die beiden Ueberblicksvideos: Wie verbinden sie Sicherheitsinteressen, Ideologie und Wirtschaft zu einer Erklaerung des Kalten Krieges? Begruende mit konkreten Bezuengen auf die Materialien.",
        help:
          "Ziel ist keine Nacherzaehlung, sondern ein strukturierter Vergleich mit eigener Gewichtung.",
        placeholder: "Die beiden Videos setzen unterschiedliche Akzente, aber beide zeigen, dass ...",
        teacherPrompt:
          "Lass die Lernenden zuerst eine eigene These formulieren und erst danach gezielt mit Materialsignalen absichern.",
        commonPitfall:
          "Hauefig werden die Videos nur nacheinander nacherzaehlt, statt ihre Erklaerungslogik systematisch zu vergleichen.",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-video-2", "r-zusammenfassung-fragen"],
        minWords: 120,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance"],
          targetHits: 5
        },
        sourceHints: [
          "kalter krieg",
          "erklaert",
          "wissen2go",
          "reader",
          "zusammenfassung"
        ],
        rubric: [
          { concept: "Sicherheitslogik", keywords: ["sicherheit", "abschreckung", "bedrohung", "ruestung", "einflusszone"] },
          { concept: "Ideologischer Gegensatz", keywords: ["kapitalismus", "kommunismus", "ideologie", "demokratie", "sozialismus"] },
          { concept: "Wirtschaftspolitik", keywords: ["marshallplan", "wirtschaft", "hilfeprogramm", "versorgung", "aufbau"] },
          { concept: "Deutschland oder Berlin", keywords: ["deutschland", "berlin", "besatzung", "blockade", "luftbruecke"] },
          { concept: "Vergleichende Gewichtung", keywords: ["waehrend", "hingegen", "beide", "unterschied", "gemeinsam"] },
          { concept: "Mehrkausale Deutung statt Einzelfaktor", keywords: ["nicht nur", "zusammenspiel", "mehrere faktoren", "verknuepft", "mehrdimensional"] }
        ],
        modelAnswer:
          "Beide Videos deuten den Kalten Krieg nicht nur als Machtkampf, sondern als Verbindung aus Sicherheitsdenken, ideologischem Gegensatz und wirtschaftlicher Ordnung. Das erste Video arbeitet staerker mit der globalen Blockbildung und dem Wettruesten, das zweite verdichtet die Logik der Abschreckung und die zentrale Rolle Deutschlands. Gemeinsam ist beiden Deutungen, dass Misstrauen, Einflusszonen und Wirtschaftshilfe nicht getrennt voneinander verstanden werden koennen."
      }
    ]
  },
  {
    id: "teilung",
    step: "2",
    title: "Die deutsche Teilung und die Gruendung zweier Staaten",
    era: "1948 bis 1949",
    intro:
      "Die Teilung Deutschlands war keine bloss technische Verwaltungsloesung, sondern Ausdruck einer politischen und ideologischen Verhaertung. In dieser Station geht es um die Gruendung von BRD und DDR sowie um die Logik zweier gegensaetzlicher Staatsentwuerfe.",
    goal:
      "Du kannst erklaeren, weshalb aus Besatzungszonen zwei Staaten wurden und wie sich BRD und DDR unterschiedlich legitimierten.",
    route:
      "Zuerst die Gruendungsvideos vergleichen, dann die Folgen fuer Staat, Gesellschaft und internationale Einbindung sichern.",
    teacherNote:
      "Diese Station schliesst direkt an die Berlin-Blockade und die Zuspitzung von 1948/49 an.",
    teacherToolkit: {
      duration: "40 bis 50 Minuten",
      socialForms: [
        "arbeitsteilige Sichtung: BRD-Video und DDR-Video getrennt vorbereiten",
        "Tafel- oder Boardvergleich zur Legitimation beider Staaten",
        "individuelle Transferantwort als Abschluss"
      ],
      assessmentFocus: [
        "politische Ordnung und Herrschaftspraxis unterscheiden",
        "Teilung als Systementscheidung und nicht nur als Verwaltung erklaeren",
        "Legitimationssprache kritisch lesen"
      ],
      misconceptions: [
        "beide Staatsgruendungen seien politisch symmetrisch gewesen",
        "die DDR sei einfach eine zweite Demokratie mit anderem Wirtschaftsmodell gewesen",
        "die Teilung habe sich 1949 von selbst erledigt und sei danach fix gewesen"
      ],
      product:
        "Vergleichstabelle BRD/DDR mit anschliessender begruendeter These zur Bedeutung von 1949.",
      extension:
        "Die Transferfrage kann als Mini-Essay oder muendliche Streitfrage zwischen zwei Gruppen genutzt werden."
    },
    prompts: [
      "Achte auf Unterschiede zwischen politischer Gruendungslegitimation und realer Machtordnung.",
      "Notiere, welche Rolle die Westintegration beziehungsweise die Sowjetzone spielt.",
      "Vergleiche Selbstbeschreibung und Fremdwahrnehmung beider Staaten."
    ],
    resources: [
      {
        id: "r-ddr-gruendung-1",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Gruendung der Deutschen Demokratischen Republik",
        focus: "Entstehung der DDR aus der sowjetischen Besatzungszone",
        link: "https://www.dropbox.com/scl/fi/yc58bohgv682fx8726flc/Gr-ndung-der-Deutschen-Demokratischen-Republik-DDR-Geschichte.mp4?rlkey=d8ia31ok2n68tjd6bnu582tqz&e=1&st=b4lbq4sg&dl=0",
        tags: ["Dropbox", "Pflicht", "DDR"]
      },
      {
        id: "r-ddr-gruendung-2",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Die Gruendung der DDR",
        focus: "zweite Perspektive auf Parteimacht, Staatsform und sowjetischen Einfluss",
        link: "https://www.dropbox.com/scl/fi/4e4vuvcn6w3bld4tmoj31/Die-Gr-ndung-der-DDR.mp4?rlkey=yl3sv5meft578lwcj5nu2m4at&e=1&st=ct1joczu&dl=0",
        tags: ["Dropbox", "Pflicht", "Vergleich"]
      },
      {
        id: "r-brd-gruendung",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Gruendung der Bundesrepublik",
        focus: "Grundgesetz, foederale Ordnung und Westbindung",
        link: "https://www.dropbox.com/scl/fi/vjn8buy2vzlxjbrjpoi61/Gr-ndung-der-Bundesrepublik.mp4?rlkey=6tr7p24y7in1lmxrz7nguuisn&e=1&st=0x8t1j9m&dl=0",
        tags: ["Dropbox", "Pflicht", "BRD"]
      }
    ],
    questions: [
      {
        id: "q-teilung-1",
        type: "multi-select",
        challenge: "Vergleich",
        prompt:
          "Welche Entwicklungen vertieften 1948/49 die Teilung Deutschlands besonders stark?",
        help:
          "Mehrere Antworten sind richtig. Gesucht sind die Schritte, die aus der Krisenlage zwei Staatsprojekte machten.",
        sourceIds: ["r-ddr-gruendung-1", "r-brd-gruendung"],
        options: [
          { id: "a", text: "die Waehrungsreform und die daraus folgende Zuspitzung in Berlin" },
          { id: "b", text: "die Gruendung von BRD und DDR als zwei unterschiedliche Staatsordnungen" },
          { id: "c", text: "die Berlin-Blockade und die Luftbruecke als Symbol politischer Konfrontation" },
          { id: "d", text: "die voellige Aufhebung aller Besatzungsrechte im Jahr 1948" },
          { id: "e", text: "die zunehmende Einbindung der westlichen Zonen in westliche Wirtschafts- und Sicherheitsstrukturen" }
        ],
        correctOptionIds: ["a", "b", "c", "e"],
        explanation:
          "Gerade Waehrungsreform, Berlin-Krise, Staatsgruendungen und die westliche Integration trieben die Trennung voran. Von einer vollstaendigen Aufhebung aller Besatzungsrechte kann 1948 keine Rede sein."
      },
      {
        id: "q-teilung-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erklaere knapp den wichtigsten Unterschied zwischen der politischen Legitimation von BRD und DDR.",
        help:
          "Nutze moeglichst Fachbegriffe. Die Korrektur erkennt verschiedene sinnnahe Formulierungen.",
        placeholder: "Die BRD legitimierte sich vor allem ..., waehrend die DDR ...",
        sourceIds: ["r-ddr-gruendung-2", "r-brd-gruendung"],
        conceptGroups: [
          {
            label: "BRD: Grundgesetz, Parlament, foederale Demokratie",
            variants: [
              "grundgesetz",
              "parlamentarische demokratie",
              "bundestag",
              "foederal",
              "westliche demokratie",
              "freie wahlen"
            ]
          },
          {
            label: "DDR: sozialistischer oder antifaschistischer Anspruch",
            variants: [
              "sozialistischer staat",
              "antifaschistisch",
              "arbeiter und bauernstaat",
              "volksdemokratie",
              "sozialismus"
            ]
          },
          {
            label: "Machtrolle der SED oder sowjetischer Einfluss",
            variants: [
              "sed",
              "einparteienherrschaft",
              "sowjetischer einfluss",
              "sowjetzone",
              "partei lenkte den staat"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die BRD legitimierte sich ueber das Grundgesetz, parlamentarische Repräsentation und einen foederalen demokratischen Aufbau. Die DDR berief sich auf einen antifaschistisch-sozialistischen Neubeginn, war aber real stark durch die SED und den sowjetischen Einfluss bestimmt."
      },
      {
        id: "q-teilung-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Begruende, warum die Gruendung zweier deutscher Staaten 1949 mehr war als eine Verwaltungsfolge der Besatzung. Zeige, welche unterschiedlichen Zukunftsentwuerfe dahinterstanden.",
        help:
          "Erwarte wird eine Deutung: politische Ordnung, internationale Einbindung, Wirtschaftsmodell und Herrschaftsstruktur zusammenfuehren.",
        placeholder: "Die Staatsgruendungen waren mehr als Verwaltung, weil ...",
        teacherPrompt:
          "Fordere eine klare These ein: Warum reicht die Formel 'Verwaltungsfolge der Besatzung' gerade nicht aus?",
        commonPitfall:
          "Viele Antworten listen nur Unterschiede zwischen BRD und DDR auf, ohne zu zeigen, warum daraus zwei gegensaetzliche Zukunftsentwuerfe wurden.",
        sourceIds: ["r-ddr-gruendung-1", "r-ddr-gruendung-2", "r-brd-gruendung"],
        minWords: 110,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["gruendung", "ddr", "bundesrepublik", "brd", "grundgesetz"],
        rubric: [
          { concept: "Unterschiedliche politische Ordnung", keywords: ["demokratie", "partei", "pluralismus", "sed", "parlament"] },
          { concept: "Internationale Einbindung", keywords: ["westintegration", "sowjetunion", "block", "ostblock", "westen"] },
          { concept: "Wirtschaftsmodell", keywords: ["soziale marktwirtschaft", "planwirtschaft", "wirtschaft", "aufbau", "ordnung"] },
          { concept: "Legitimationssprache", keywords: ["antifaschistisch", "freiheit", "demokratisch", "arbeiter und bauernstaat", "grundgesetz"] },
          { concept: "Eigene Bewertung", keywords: ["deshalb", "somit", "zeigt", "deutlich", "entscheidend"] },
          { concept: "Abgrenzung von blossen Verwaltungsfolgen", keywords: ["nicht nur verwaltung", "mehr als besatzung", "systemkonflikt", "keine reine verwaltung", "mehr als verwaltungsfolge"] }
        ],
        modelAnswer:
          "Die Gruendung von BRD und DDR war nicht bloss die Endstufe einer Verwaltungsteilung, sondern die institutionelle Form des Systemkonflikts. Mit der BRD entstand ein parlamentarisch-foederaler Weststaat, mit der DDR ein sozialistischer Staat unter fuehrender Rolle der SED. Dahinter standen nicht nur verschiedene Verfassungen, sondern verschiedene Vorstellungen von Demokratie, Wirtschaft, Freiheit und internationaler Zugehoerigkeit."
      }
    ]
  },
  {
    id: "alltag",
    step: "3",
    title: "Alltag, Konsum und Lebenswelten in der DDR",
    era: "1950er bis 1980er Jahre",
    intro:
      "Die DDR war nicht nur Mauer und Stasi. Sie war auch Arbeitswelt, Versorgungssystem, Frauenbeschaeftigung, Wohnen, Reisen, Konsumsehnsucht und Umweltbelastung. Diese Station fragt nach dem Spannungsverhaeltnis zwischen sozialer Absicherung, Mangel und Unfreiheit.",
    goal:
      "Du kannst den DDR-Alltag differenziert beschreiben, ohne ihn auf reine Diktatur oder reine Sozialromantik zu verkuerzen.",
    route:
      "Bearbeite zunaechst die alltagsgeschichtlichen Videos, danach die drei lokalen Materialien. Die Leitidee ist: Ambivalenzen sammeln und nicht vorschnell vereinfachen.",
    teacherNote:
      "Besonders geeignet fuer Diskussionen ueber Lebensqualitaet, Handlungsspielraeume und Grenzen sozialistischer Modernisierung.",
    teacherToolkit: {
      duration: "45 bis 60 Minuten",
      socialForms: [
        "materialgestuetzte Gruppenarbeit nach Themenfeldern",
        "Placemat oder T-Chart zu Leistung und Begrenzung",
        "individuelle Stellungnahme zur Leitthese"
      ],
      assessmentFocus: [
        "Ambivalenz statt Schwarz-Weiss-Urteil",
        "Alltag als politisch regulierter Raum erkennen",
        "soziale Leistungen und Unfreiheit zusammen denken"
      ],
      misconceptions: [
        "DDR-Alltag sei entweder komplett idyllisch oder komplett leer und angstbestimmt gewesen",
        "Konsumfragen seien unpolitisch",
        "Frauenpolitik bedeute automatisch reale Gleichstellung"
      ],
      product:
        "Schriftliche Abwaegung zur Frage, ob soziale Sicherheit fehlende Freiheit kompensieren konnte.",
      extension:
        "Die Materialien lassen sich in einer Debatte 'Sozialstaat oder Kontrollstaat?' zuspitzen."
    },
    prompts: [
      "Notiere in jedem Material mindestens eine soziale Leistung und mindestens eine Begrenzung.",
      "Achte auf den Gegensatz zwischen offizieller Gleichheit und realen Privilegien.",
      "Pruefe, wie Konsum, Wohnen, Arbeit und Reisen politisch reguliert wurden."
    ],
    resources: [
      {
        id: "r-reiseweltmeister",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Reiseweltmeister",
        focus: "Reisen, Urlaubskultur und die politische Brisanz von Bewegungsfreiheit",
        link: "https://www.dropbox.com/scl/fi/uaf61gihk15vr0phy00fz/Reiseweltmeister.mp4?rlkey=c6lug8w0pivb0xgv2pih85en1&e=1&st=2l361js3&dl=0",
        tags: ["Dropbox", "Pflicht", "Reisen"]
      },
      {
        id: "r-bananenrepublik-video",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Bananenrepublik",
        focus: "Konsum, Mangelwirtschaft und symbolische Bedeutung des Westvergleichs",
        link: "https://www.dropbox.com/scl/fi/fii2s9xwoppkxqo2ysfq0/Bananenrepublik.mp4?rlkey=vytdyll9io8b1tyfq80y5ng40&e=1&st=g6c10zn3&dl=0",
        tags: ["Dropbox", "Pflicht", "Konsum"]
      },
      {
        id: "r-von-wegen-brav",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Von wegen brav",
        focus: "nonkonforme Jugendkulturen und Reibungen zwischen Alltag und Normierung",
        link: "https://www.dropbox.com/scl/fi/8pgtxko1l47qahpt4xgyl/Von-wegen-brav.mp4?rlkey=7qgnp7ldize4ophclk3nhbvs6&e=1&st=a2sj2vde&dl=0",
        tags: ["Dropbox", "Vertiefung", "Jugend"]
      },
      {
        id: "r-frauenland-video",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Frauenland",
        focus: "Frauenarbeit, Gleichstellungspolitik und ihre Grenzen",
        link: "https://www.dropbox.com/scl/fi/4h0lpgh0xhalfbpoc03nz/Frauenland.mp4?rlkey=nv4h4yiqkbvtf4rg01me54fqq&e=1&st=5t4o0ryn&dl=0",
        tags: ["Dropbox", "Pflicht", "Geschlechtergeschichte"]
      },
      {
        id: "r-wohnraumvergabe",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Wohnraumvergabe",
        focus: "Wohnungspolitik zwischen Versorgung, Knappheit und Abhaengigkeit",
        link: "https://www.dropbox.com/scl/fi/x3x07idrurdous2nhob4u/Wohnraumvergabe.mp4?rlkey=w2o4zn045d7he2fkummpmnt51&e=1&st=wymeme53&dl=0",
        tags: ["Dropbox", "Pflicht", "Wohnen"]
      },
      {
        id: "r-arbeitsalltag",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Arbeitsalltag",
        focus: "Arbeitswelt, Normen, Planerfuellung und betriebliche Kultur",
        link: "https://www.dropbox.com/scl/fi/bvqx4onainj8ngworvq9t/Arbeitsalltag.mp4?rlkey=p8zd0ysrqngwj7sjtq8zi2mjk&e=1&st=f8f0e87a&dl=0",
        tags: ["Dropbox", "Pflicht", "Arbeit"]
      },
      {
        id: "r-umweltverschmutzung",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Umweltverschmutzung",
        focus: "oekologische Kosten der Industriepolitik und ein Feld spaeter Opposition",
        link: "https://www.dropbox.com/scl/fi/uceuzu4209vh87ky7ujo9/Umweltverschmutzung.mp4?rlkey=zhahyppee4egu2d1zcvalxbzo&e=1&st=ncymj5vo&dl=0",
        tags: ["Dropbox", "Pflicht", "Umwelt"]
      },
      {
        id: "r-geld-regiert-ddr",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Geld regiert die DDR",
        focus: "Finanzierungsprobleme, Devisenmangel und Oekonomie des Mangels",
        link: "https://www.dropbox.com/scl/fi/utq8j6csfaoy6e0ao5jp6/Geld-regiert-die-DDR.mp4?rlkey=s6dh1ip6xa2jovo4gs4seh2qf&e=1&st=hxrzmta9&dl=0",
        tags: ["Dropbox", "Pflicht", "Wirtschaft"]
      },
      {
        id: "r-reisen-docx",
        bucket: "Lokale Materialien",
        type: "DOCX",
        title: "Reisen in der DDR",
        focus: "stichwortartige Uebersicht zu Urlaubskultur, FDGB und Reisefreiheit",
        link: "assets/materials/Reisen-in-der-DDR.docx",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-bananenrepublik-pdf",
        bucket: "Lokale Materialien",
        type: "PDF",
        title: "Bananenrepublik.pdf",
        focus: "ergänzendes Material zur Symbolik von Mangel und Konsum",
        link: "assets/materials/Bananenrepublik.pdf",
        tags: ["lokal", "Vertiefung"]
      },
      {
        id: "r-frauenland-pdf",
        bucket: "Lokale Materialien",
        type: "PDF",
        title: "DDR - Frauenland.pdf",
        focus: "ergänzendes Material zu Geschlechterrollen und Erwerbsarbeit",
        link: "assets/materials/DDR-Frauenland.pdf",
        tags: ["lokal", "Vertiefung"]
      }
    ],
    questions: [
      {
        id: "q-alltag-1",
        type: "multi-select",
        challenge: "Vergleich",
        prompt:
          "Welche Spannungen des DDR-Alltags werden durch die Materialien besonders deutlich?",
        help:
          "Gesucht ist kein einseitiges Urteil, sondern die Kombination von sozialer Absicherung und strukturellen Grenzen.",
        sourceIds: ["r-reiseweltmeister", "r-bananenrepublik-video", "r-frauenland-video", "r-wohnraumvergabe"],
        options: [
          { id: "a", text: "soziale Sicherheit und staatliche Versorgung gingen oft mit Mangel und eingeschraenkter Wahlfreiheit zusammen" },
          { id: "b", text: "Urlaub und Wohnen waren voellig unpolitische Privatsachen ohne staatlichen Einfluss" },
          { id: "c", text: "Frauen hatten haeufig frueher Erwerbschancen als im Westen, trugen aber trotzdem oft die Doppelbelastung" },
          { id: "d", text: "Konsumwuerde war bedeutungslos; der Vergleich mit dem Westen spielte im Alltag keine Rolle" },
          { id: "e", text: "Privilegien, Knappheit und politische Steuerung praegten selbst scheinbar alltaegliche Bereiche" }
        ],
        correctOptionIds: ["a", "c", "e"],
        explanation:
          "Gerade die Ambivalenz ist entscheidend: staatliche Leistungen existierten, zugleich waren Versorgung, Wahlfreiheit und Zugang haeufig politisch oder planwirtschaftlich begrenzt."
      },
      {
        id: "q-alltag-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum ist der Titel 'Bananenrepublik' fuer die DDR-Geschichte so zugespitzt und aussagekraeftig?",
        help:
          "Nenne mindestens drei Sinnschichten: Konsum, Symbolik und Westvergleich.",
        placeholder: "Der Titel ist zugespitzt, weil ...",
        sourceIds: ["r-bananenrepublik-video", "r-bananenrepublik-pdf"],
        conceptGroups: [
          {
            label: "Mangel oder Versorgungsluecken",
            variants: ["mangel", "knappheit", "versorgungsluecke", "selten", "nicht verfuegbar"]
          },
          {
            label: "Banane als Symbol fuer Konsumwuensche",
            variants: ["banane als symbol", "konsum", "sehnsucht", "westprodukt", "alltagswunsch"]
          },
          {
            label: "Vergleich mit dem Westen oder Legitimationsproblem",
            variants: ["westvergleich", "vergleich mit dem westen", "legitimationsproblem", "wohlstand", "propaganda gegen realitaet"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Der Titel ist deshalb zugespitzt, weil eine scheinbar banale Frucht zum Symbol fuer Mangel, Konsumsehnsucht und den staendigen Vergleich mit dem Westen wurde. Er zeigt, dass sich politische Legitimation im Alltag auch an Versorgung, Auswahl und erlebter Lebensqualitaet entschied."
      },
      {
        id: "q-alltag-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Nimm Stellung zur Aussage: 'Die soziale Sicherheit der DDR machte den Mangel an Freiheit weitgehend wett.' Pruefe die Aussage mithilfe der Materialien zu Reisen, Arbeit, Wohnen, Frauen und Konsum.",
        help:
          "Erwartet wird eine abwaegende Antwort, keine reine Pro-oder-Contra-Behauptung.",
        placeholder: "Die Aussage greift zu kurz, weil ...",
        teacherPrompt:
          "Lass vor dem Schreiben mindestens drei Spannungspaare sammeln: Sicherheit vs. Kontrolle, Gleichstellung vs. Doppelbelastung, Versorgung vs. Mangel.",
        commonPitfall:
          "Haeufig kippen Antworten in ein pauschales Gesamturteil, ohne einzelne Lebensbereiche differenziert auszuwerten.",
        sourceIds: ["r-reiseweltmeister", "r-arbeitsalltag", "r-frauenland-video", "r-wohnraumvergabe", "r-geld-regiert-ddr"],
        minWords: 120,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["reisen", "arbeitsalltag", "frauenland", "wohnraum", "bananenrepublik", "geld"],
        rubric: [
          { concept: "soziale Leistungen", keywords: ["betreuung", "arbeit", "sicherheit", "versorgung", "urlaub", "kita"] },
          { concept: "Mangel oder Abhaengigkeit", keywords: ["mangel", "wartezeit", "knappheit", "privileg", "devisen", "abhaengigkeit"] },
          { concept: "fehlende Freiheit oder Kontrolle", keywords: ["reisefreiheit", "wahlfreiheit", "kontrolle", "staat", "einschraenkung"] },
          { concept: "differenzierende Abwaegung", keywords: ["einerseits", "andererseits", "zugleich", "dennoch", "allerdings"] },
          { concept: "konkrete Materialbezuenge", keywords: ["bananenrepublik", "frauenland", "reiseweltmeister", "wohnraum", "arbeitsalltag"] },
          { concept: "Urteil zur Leitthese", keywords: ["macht nicht wett", "kompensiert nicht", "nur teilweise", "greift zu kurz", "nicht ausreichend"] }
        ],
        modelAnswer:
          "Die Aussage ist zu pauschal. Die DDR bot in Teilbereichen soziale Sicherheiten, etwa bei Erwerbsarbeit, Kinderbetreuung oder staatlich organisiertem Urlaub. Gleichzeitig blieb Bewegungsfreiheit massiv eingeschraenkt, Konsum war haeufig knapp, und selbst Wohnen oder Reisen waren politisch reguliert. Gerade deshalb muss man die DDR als Kombination aus sozialer Sicherung, Mangel und Unfreiheit beschreiben."
      }
    ]
  },
  {
    id: "herrschaft",
    step: "4",
    title: "Herrschaft, Mauer, Grenze und Ueberwachung",
    era: "1950er bis 1980er Jahre",
    intro:
      "Die DDR stabilisierte sich nicht nur ueber soziale Angebote, sondern auch ueber Grenzregime, militaerische Sicherung, Ueberwachung und politische Einschuechterung. Diese Station untersucht die Werkzeuge der Machtsicherung.",
    goal:
      "Du kannst erklaeren, wie Mauer, Grenzsystem, NVA, Stasi und Haftorte zusammenwirkten.",
    route:
      "Arbeite vom aeußeren Grenzregime nach innen: erst Mauer und Grenze, dann Militaer, Geheimdienst und Haft.",
    teacherNote:
      "Die Station eignet sich gut fuer ein Strukturmodell diktatorischer Herrschaft.",
    teacherToolkit: {
      duration: "45 Minuten",
      socialForms: [
        "analytische Sicherung in einem Herrschaftsdiagramm",
        "Partnerarbeit zur Trennung von offizieller Sprache und realer Funktion",
        "Transferfrage als strukturierende Schreibaufgabe"
      ],
      assessmentFocus: [
        "Herrschaft nicht nur als Gewalt, sondern als System lesen",
        "Grenze, Ueberwachung und Haft miteinander verknuepfen",
        "offizielle Legitimationssprache kritisch entlarven"
      ],
      misconceptions: [
        "die Mauer habe nur symbolische Bedeutung gehabt",
        "Stasi und Kriminalpolizei seien fast dasselbe gewesen",
        "Grenzsicherung und innere Repression haetten nichts miteinander zu tun"
      ],
      product:
        "Strukturmodell 'Aeusserer Schutz - innere Kontrolle - abschreckende Sanktion'.",
      extension:
        "Als Zusatz kann der Begriff 'Sicherheitsstaat' gegen 'Diktatur' begrifflich differenziert werden."
    },
    prompts: [
      "Achte auf den Unterschied zwischen offizieller Begruendung und realer Funktion.",
      "Frage immer: Wovor schuetzte das System sich - und wen kontrollierte es?",
      "Verbinde raeumliche Kontrolle mit psychologischer Wirkung."
    ],
    resources: [
      {
        id: "r-veb-horch-und-guck",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "VEB Horch und Guck",
        focus: "Stasi, Informantennetz und Logik vorbeugender Kontrolle",
        link: "https://www.dropbox.com/scl/fi/30zqnlo53gugonn0smujr/VEB-Horch-und-Guck.mp4?rlkey=yysdlzffb3419psip5sv6sxzs&e=1&st=1ni8q86l&dl=0",
        tags: ["Dropbox", "Pflicht", "Stasi"]
      },
      {
        id: "r-nva",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Nationale Volksarmee",
        focus: "Militarisierung, Wehrpflicht und Schutz des sozialistischen Staates",
        link: "https://www.dropbox.com/scl/fi/mzknoiqwiofkshf801fuj/Nationale-Volksarmee.mp4?rlkey=2k4cty6v4qdbrcgbqsl01j47q&e=1&st=ewxzqh5r&dl=0",
        tags: ["Dropbox", "Pflicht", "Militaer"]
      },
      {
        id: "r-berliner-mauer",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Die Berliner Mauer",
        focus: "Mauerbau, Fluchtverhinderung und symbolische Verdichtung des Kalten Krieges",
        link: "https://www.dropbox.com/scl/fi/jj66vvt2j2qh3ycrpkita/Die-Berliner-Mauer.mp4?rlkey=84xvknm3ezxrw368y0f3ro4gn&e=1&st=11nbhfvc&dl=0",
        tags: ["Dropbox", "Pflicht", "Mauer"]
      },
      {
        id: "r-stasi-gefaengnis",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Das Stasi-Gefaengnis Dresden",
        focus: "politische Haft, Verhoer und Einschuechterung im Innern",
        link: "https://www.dropbox.com/scl/fi/rznw2wn6puhejtkbhbec0/Das-Stasi-Gef-ngnis-Dresden-Deutsche-Geschichte-Zeitzeugen-DDR.mp4?rlkey=hvrh9zxdizorb2n9q60535ag2&e=1&st=zdz0z3be&dl=0",
        tags: ["Dropbox", "Pflicht", "Haft"]
      },
      {
        id: "r-eingemauert",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Eingemauert: Die innerdeutsche Grenze",
        focus: "Grenzregime jenseits Berlins und Alltag der Abschottung",
        link: "https://www.dropbox.com/scl/fi/2n12qp8e3fcsosbpyaxu4/Eingemauert-Die-innerdeutsche-Grenze-DW-Deutsch.mp4?rlkey=oj1fe10kvl1jpyqnpcb945a1r&e=1&st=ez690szt&dl=0",
        tags: ["Dropbox", "Pflicht", "Grenze"]
      },
      {
        id: "r-ein-tag-im-august",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Ein Tag im August",
        focus: "Verdichtung des Mauerbaus und seiner unmittelbaren Folgen",
        link: "https://www.dropbox.com/scl/fi/12wcfnvar4bnp7fbt7y3r/Ein-Tag-im-August.mp4?rlkey=5mit0zgze7crgdprflzfc4yt0&e=1&st=i8ehse8v&dl=0",
        tags: ["Dropbox", "Vertiefung", "August 1961"]
      }
    ],
    questions: [
      {
        id: "q-herrschaft-1",
        type: "single-choice",
        challenge: "Faktencheck",
        prompt:
          "Welche Funktion hatte der Mauerbau vom 13. August 1961 aus Sicht der DDR-Fuehrung real am ehesten?",
        help:
          "Nicht die offizielle Selbstbeschreibung, sondern die tatsächliche Machtfunktion ist gefragt.",
        sourceIds: ["r-berliner-mauer", "r-eingemauert", "r-ein-tag-im-august"],
        options: [
          {
            id: "a",
            text: "Er sollte vor allem den Kontakt zwischen Ost- und Westberliner Kulturinstitutionen erleichtern."
          },
          {
            id: "b",
            text: "Er sollte die Massenflucht stoppen, die wirtschaftliche und politische Stabilitaet der DDR sichern und den Kontrollverlust beenden."
          },
          {
            id: "c",
            text: "Er war ein weitgehend symbolisches Bauprojekt ohne alltagspraktische Folgen."
          },
          {
            id: "d",
            text: "Er wurde ausschliesslich auf Wunsch der Westmaechte errichtet."
          }
        ],
        correctOptionId: "b",
        explanation:
          "Die Mauer sollte die Abwanderung stoppen und damit Arbeitskraefte, politische Stabilitaet und Herrschaftssicherung garantieren. Die Formel vom 'antifaschistischen Schutzwall' verdeckte diese Funktion."
      },
      {
        id: "q-herrschaft-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erklaere kurz, was die Stasi von einer 'normalen' Kriminalpolizei unterschied.",
        help:
          "Nenne mindestens drei Aspekte. Synonyme fuer Ueberwachung, Informanten und Einschuechterung werden erkannt.",
        placeholder: "Die Stasi unterschied sich von einer normalen Polizei dadurch, dass ...",
        sourceIds: ["r-veb-horch-und-guck", "r-stasi-gefaengnis"],
        conceptGroups: [
          {
            label: "politische Ueberwachung oder praeventive Kontrolle",
            variants: ["ueberwachung", "praeventiv", "politische kontrolle", "vorbeugend", "staatsfeinde beobachten"]
          },
          {
            label: "Informantennetz",
            variants: ["informanten", "inoffizielle mitarbeiter", "im", "spitzel", "netzwerk"]
          },
          {
            label: "Einschuechterung, Druck oder Selbstzensur",
            variants: ["einschuechterung", "angst", "druck", "selbstzensur", "verhoer", "abschreckung"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Die Stasi war keine normale Kriminalpolizei, sondern ein politisches Ueberwachungsinstrument. Sie arbeitete mit einem dichten Netz informeller Mitarbeiter, beobachtete Menschen vorbeugend und erzeugte ueber Verhoere, Drohung und Angst ein Klima der Selbstzensur."
      },
      {
        id: "q-herrschaft-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Erklaere, wie Mauer, Grenzregime, NVA, Stasi und politische Haft zusammen ein Herrschaftssystem bildeten. Zeige, dass diese Elemente sich gegenseitig stuetzten.",
        help:
          "Gesucht ist eine strukturierende Analyse, kein bloßes Aufzaehlen einzelner Institutionen.",
        placeholder: "Die einzelnen Elemente bildeten ein System, weil ...",
        teacherPrompt:
          "Lass die Lernenden zunaechst Pfeilverbindungen zwischen Grenze, NVA, Stasi und Haft einzeichnen, bevor sie schreiben.",
        commonPitfall:
          "Viele Antworten sammeln Institutionen nebeneinander, erklaeren aber nicht ihr wechselseitiges Zusammenspiel.",
        sourceIds: ["r-berliner-mauer", "r-eingemauert", "r-nva", "r-veb-horch-und-guck", "r-stasi-gefaengnis"],
        minWords: 115,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["mauer", "grenze", "nva", "stasi", "gefaengnis", "horch und guck"],
        rubric: [
          { concept: "raeumliche Abriegelung", keywords: ["mauer", "grenze", "flucht", "abriegelung", "schiessbefehl"] },
          { concept: "militaerische Absicherung", keywords: ["nva", "wehrpflicht", "militaer", "bewaffnet", "verteidigung"] },
          { concept: "innere Ueberwachung", keywords: ["stasi", "informanten", "ueberwachung", "kontrolle"] },
          { concept: "repression oder Haft", keywords: ["haft", "gefaengnis", "verhoer", "einschuechterung", "politische gefangene"] },
          { concept: "Systemcharakter", keywords: ["zusammen", "stuetzen", "erganzen", "herrschaftssystem", "wechselseitig"] },
          { concept: "offizielle Begruendung versus reale Funktion", keywords: ["schutzwall", "offiziell", "real", "tatsaechlich", "herrschaftssicherung"] }
        ],
        modelAnswer:
          "Die DDR sicherte sich nicht nur an der Grenze, sondern auch im Innern. Die Mauer und die innerdeutsche Grenze verhinderten Flucht, die NVA und andere bewaffnete Strukturen garantierten militärische Absicherung, die Stasi überwachte potentielle Abweichung, und politische Haft zeigte, was bei offenem Widerstand drohte. Gerade im Zusammenspiel entstand ein stabiles Herrschaftssystem aus Kontrolle, Abschreckung und Abschottung."
      }
    ]
  },
  {
    id: "ostblock",
    step: "5",
    title: "Krisen, Reformen und Gewalt im Ostblock",
    era: "1953 bis 1981",
    intro:
      "Der Konflikt zwischen Parteiherrschaft und gesellschaftlichen Erwartungen zeigte sich im Ostblock immer wieder in Krisen. Arbeiteraufstand, Reformsozialismus, sowjetische Intervention und polnische Gewerkschaftsbewegung machen die Grenzen des Systems sichtbar.",
    goal:
      "Du kannst Gemeinsamkeiten und Unterschiede zwischen 17. Juni 1953, Ungarn 1956, Prager Fruehling 1968 und Solidarnosc benennen und historisch deuten.",
    route:
      "Arbeite chronologisch, achte aber besonders auf Wiederholungsmuster: Reformforderung, Kontrollverlust, sowjetische Reaktion, Wirkung auf spaetere Opposition.",
    teacherNote:
      "Eine gute Station fuer Vergleichsdiagramme, Krisenraster oder Vorarbeit fuer 1989.",
    teacherToolkit: {
      duration: "50 bis 60 Minuten",
      socialForms: [
        "Gruppenpuzzle nach Krisenfaellen",
        "gemeinsames Krisenraster im Plenum",
        "individuelle Transferfrage mit Fallvergleich"
      ],
      assessmentFocus: [
        "soziale und politische Forderungen zusammendenken",
        "sowjetische Interventionslogik verstehen",
        "Lernprozesse fuer 1989 historisch plausibel machen"
      ],
      misconceptions: [
        "alle Ostblockkrisen seien gleich verlaufen",
        "der Westen habe die Bewegungen militaerisch unterstuetzt",
        "1989 sei ohne Vorgeschichte ploetzlich moeglich geworden"
      ],
      product:
        "Vergleichender Essay zu zwei Krisen und ihrer Bedeutung fuer 1989.",
      extension:
        "Die Station laesst sich gut mit einem Kontinuum 'Reform im System' bis 'Systembruch' weiterfuehren."
    },
    prompts: [
      "Frage bei jedem Fall: Wer protestiert? Was wird gefordert? Wer greift ein?",
      "Achte auf die Spannung zwischen sozialistischen Reformideen und sowjetischer Blocklogik.",
      "Ueberlege, welche Erfahrungen spaeter fuer 1989 wichtig wurden."
    ],
    resources: [
      {
        id: "r-17-juni-video",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "17. Juni 1953: Volksaufstand in der DDR",
        focus: "Arbeitsnormen, Protestdynamik und sowjetische Niederschlagung",
        link: "https://www.dropbox.com/scl/fi/o4hmdeb0kyvdkdg48pagz/17.-Juni-1953-Volksaufstand-in-der-DDR.mp4?rlkey=lhexy9h1mirol1yc1dnf0rjn7&e=1&st=ogdxcy92&dl=0",
        tags: ["Dropbox", "Pflicht", "DDR"]
      },
      {
        id: "r-ungarn-video",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Der Ungarnaufstand 1956",
        focus: "Entstalinisierung, Revolte und sowjetische Intervention",
        link: "https://www.dropbox.com/scl/fi/hxlrnytflu1vqihl2bzlz/Der-Ungarnaufstand-1956-Historische-Ereignisse-erkl-rt-MDR-DOK.mp4?rlkey=zmz9e6kpo9xrall8x4ddtvaid&e=1&st=d8dz3fy9&dl=0",
        tags: ["Dropbox", "Pflicht", "Ungarn"]
      },
      {
        id: "r-prag-video",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Prager Fruehling 1968",
        focus: "Reformsozialismus, Dubcek und die Grenzen des Systems",
        link: "https://www.dropbox.com/scl/fi/1oy1i4sb2date7chvix69/Prager-Fr-hling-Historische-Ereignisse-mit-Mirko-Drotschmann.mp4?rlkey=t1b1p9i5i00jsolqn2s1b34v9&e=1&st=o0ax6m7a&dl=0",
        tags: ["Dropbox", "Pflicht", "CSSR"]
      },
      {
        id: "r-17-juni-docx",
        bucket: "Lokale Materialien",
        type: "DOCX",
        title: "Fragen zum Film ueber den 17. Juni 1953",
        focus: "leitende Fragen zu Normenerhoehung, Protest und sowjetischer Reaktion",
        link: "assets/materials/Fragen-zum-17-Juni-1953.docx",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-ungarn-docx",
        bucket: "Lokale Materialien",
        type: "DOCX",
        title: "Fragen zum Ungarn-Aufstand 1956",
        focus: "Frageblatt mit Schwerpunkt auf Nagy, Gerö und sowjetischer Intervention",
        link: "assets/materials/Fragen-Ungarnaufstand-1956.docx",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-prag-docx",
        bucket: "Lokale Materialien",
        type: "DOCX",
        title: "Fragen: Der Prager Fruehling 1968",
        focus: "Leitfragen zu Dubcek, Reformen und Niederschlagung",
        link: "assets/materials/Fragen-Prager-Fruehling-1968.docx",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-solidarnosc-docx",
        bucket: "Lokale Materialien",
        type: "DOCX",
        title: "Fragen zu Solidarnosc und das Kriegsrecht in Polen",
        focus: "Gewerkschaftsbewegung, KOR, Kirche und Krise des Staatssozialismus",
        link: "assets/materials/Fragen-Solidarnosc-Kriegsrecht-Polen.docx",
        tags: ["lokal", "Vertiefung", "Polen"]
      }
    ],
    questions: [
      {
        id: "q-ostblock-1",
        type: "multi-select",
        challenge: "Vergleich",
        prompt:
          "Welche Muster verbinden 17. Juni 1953, Ungarn 1956, den Prager Fruehling 1968 und die polnische Krise um Solidarnosc?",
        help:
          "Mehrere Antworten sind richtig. Gesucht sind strukturelle Gemeinsamkeiten, nicht identische Verlaeufe.",
        sourceIds: ["r-17-juni-video", "r-ungarn-video", "r-prag-video", "r-solidarnosc-docx"],
        options: [
          { id: "a", text: "gesellschaftliche oder innerparteiliche Reform- und Beteiligungsforderungen stiessen an die Grenzen sowjetischer Blockkontrolle" },
          { id: "b", text: "der Westen griff jedes Mal militärisch zugunsten der Protestierenden ein" },
          { id: "c", text: "soziale Fragen verbanden sich oft mit politischen Forderungen nach Freiheit, Mitsprache oder Reformen" },
          { id: "d", text: "die sowjetische Fuehrung fuerchtete ein Ueberspringen von Reformen auf andere Staaten des Ostblocks" },
          { id: "e", text: "alle Bewegungen beendeten die kommunistische Herrschaft sofort und dauerhaft" }
        ],
        correctOptionIds: ["a", "c", "d"],
        explanation:
          "Gerade die Verbindung sozialer Krisen mit politischen Reformforderungen und die Angst vor einem Dominoeffekt erklaeren die Haerte sowjetischer beziehungsweise staatssozialistischer Reaktionen."
      },
      {
        id: "q-ostblock-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum war der Prager Fruehling fuer die sowjetische Fuehrung besonders bedrohlich?",
        help:
          "Nenne mindestens drei Elemente: Reformsozialismus, Vorbildwirkung und Kontrollverlust.",
        placeholder: "Der Prager Fruehling war besonders bedrohlich, weil ...",
        sourceIds: ["r-prag-video", "r-prag-docx"],
        conceptGroups: [
          {
            label: "Reform des Sozialismus von innen",
            variants: [
              "sozialismus mit menschlichem antlitz",
              "reformsozialismus",
              "sozialismus reformieren",
              "dubcek reformen",
              "von innen veraendern"
            ]
          },
          {
            label: "Vorbildwirkung fuer andere Ostblockstaaten",
            variants: [
              "vorbild",
              "ansteckung",
              "ueberspringen",
              "dominoeffekt",
              "auch andere staaten"
            ]
          },
          {
            label: "Verlust sowjetischer Kontrolle",
            variants: [
              "kontrollverlust",
              "sowjetische herrschaft gefaehrdet",
              "warschauer pakt",
              "moskau verliert einfluss",
              "blockdisziplin"
            ]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Der Prager Fruehling war fuer Moskau besonders gefaehrlich, weil er den Sozialismus nicht abschaffen, sondern von innen reformieren wollte. Gerade dadurch war er attraktiv fuer andere Ostblockgesellschaften. Wenn dieses Modell Erfolg gehabt haette, waere die sowjetische Kontrolle ueber den ganzen Block ins Wanken geraten."
      },
      {
        id: "q-ostblock-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Vergleiche zwei Krisen deiner Wahl aus dieser Station und bewerte, ob sie eher Warnsignale oder Lernprozesse fuer die Entwicklungen von 1989 waren.",
        help:
          "Du musst nicht alle vier Faelle behandeln. Wichtiger ist ein sauberer Vergleich mit begruendetem Urteil.",
        placeholder: "Wenn man zum Beispiel den 17. Juni mit dem Prager Fruehling vergleicht, wird deutlich, dass ...",
        teacherPrompt:
          "Fordere zu Beginn einen expliziten Vergleichsmassstab ein: Akteure, Forderungen, Reaktion des Machtzentrums und Wirkungsgeschichte.",
        commonPitfall:
          "Oft werden zwei Faelle parallel nacherzaehlt, ohne dass eine echte Vergleichslogik oder ein Urteil zur Bedeutung fuer 1989 entsteht.",
        sourceIds: ["r-17-juni-video", "r-ungarn-video", "r-prag-video", "r-solidarnosc-docx"],
        minWords: 125,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["17. juni", "ungarn", "prager fruehling", "solidarnosc", "polen"],
        rubric: [
          { concept: "klare Vergleichsbasis", keywords: ["waehrend", "im unterschied", "hingegen", "gemeinsam", "vergleich"] },
          { concept: "Protest oder Reformforderung", keywords: ["protest", "reform", "freiheit", "mitsprache", "arbeiter", "studenten"] },
          { concept: "Rolle von Gewalt oder Intervention", keywords: ["sowjetisch", "intervention", "niederschlagung", "panzer", "kriegsrecht"] },
          { concept: "Bedeutung fuer 1989", keywords: ["1989", "lernerfahrung", "warnung", "erinnerung", "spaetere opposition"] },
          { concept: "eigenes Urteil", keywords: ["ich bewerte", "entscheidend", "meiner ansicht", "insgesamt", "deshalb"] },
          { concept: "Kontinuitaet oder Zaesur", keywords: ["kontinuitaet", "zaesur", "warnsignal", "lernprozess", "vorgeschichte"] }
        ],
        modelAnswer:
          "Die Krisen des Ostblocks waren beides: Warnsignale und Lernprozesse. Sie zeigten einerseits, wie hart das System auf offene Reformen reagieren konnte. Andererseits lernten spaetere Oppositionsbewegungen, wie wichtig internationale Lage, gesellschaftliche Breite und oeffentliche Sichtbarkeit waren. Gerade deshalb fuehrt ein Vergleich dieser Krisen direkt zur Frage, warum 1989 anders verlief als 1953, 1956 oder 1968."
      }
    ]
  },
  {
    id: "wende",
    step: "6",
    title: "Opposition, Friedliche Revolution und Deutschland 1989/90",
    era: "1980er Jahre bis 1990",
    intro:
      "1989 fiel die Mauer nicht aus dem Nichts. Reformwille, kirchliche Schutzraeume, Opposition, Ausreisebewegung, die Krise der SED und die veränderte sowjetische Haltung verdichteten sich in wenigen Monaten zu einer offenen Revolution. 1990 war der Ausgang noch nicht mechanisch festgelegt.",
    goal:
      "Du kannst den Zusammenhang von Opposition, Massenexodus, Strassenprotest, Machtzerfall und Wiedervereinigung differenziert erklaeren.",
    route:
      "Starte mit Opposition und Stimmungsbildern, arbeite dann die Chronologie des Herbstes 1989 durch und schliesse mit der offenen Lage des Fruehlings 1990 ab.",
    teacherNote:
      "Diese Station eignet sich besonders fuer Kontroversen: Reform der DDR, Revolution oder Weg in die schnelle Einheit?",
    teacherToolkit: {
      duration: "60 Minuten oder Doppelstunde",
      socialForms: [
        "Chronologiearbeit in Gruppen",
        "kontroverse Diskussion Reform-DDR versus schnelle Einheit",
        "abschliessender Transfertext mit Urteil"
      ],
      assessmentFocus: [
        "Kontingenz von 1989/90 ernst nehmen",
        "Opposition, Ausreise und internationale Lage verknuepfen",
        "zwischen Revolution, Reform und Vereinigung differenzieren"
      ],
      misconceptions: [
        "der Mauerfall sei von oben langfristig geplant gewesen",
        "die Vereinigung sei ab September 1989 bereits alternativlos gewesen",
        "Opposition und Ausreisebewegung haetten nebeneinander statt miteinander gewirkt"
      ],
      product:
        "Urteilstext zur offenen Lage zwischen Herbst 1989 und Fruehling 1990.",
      extension:
        "Die Station kann mit einer Debatte ueber Tempo und Alternativen der Vereinigung verbunden werden."
    },
    prompts: [
      "Achte darauf, dass 1989 kein lineares Drehbuch war.",
      "Notiere Wechselwirkungen zwischen Ausreise, Protest und Machtzerfall.",
      "Unterscheide zwischen DDR-Opposition, bundesdeutscher Perspektive und internationaler Lage."
    ],
    resources: [
      {
        id: "r-ddr-verwandeln",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Wir wollten die DDR verwandeln",
        focus: "Reformwille innerhalb der DDR und die Perspektive der Opposition",
        link: "https://www.dropbox.com/scl/fi/9i7nf8j90lc0ksio1d40c/Wir-wollten-die-DDR-verwandeln-DW-Interview.mp4?rlkey=02xurt5ebcp122sji87iitqf4&e=1&st=ms02p096&dl=0",
        tags: ["Dropbox", "Pflicht", "Opposition"]
      },
      {
        id: "r-siegbert-schefke",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Siegbert Schefke: DDR-Opposition in den 1980er Jahren",
        focus: "Gegenoeffentlichkeit, Ueberwachung und Widerstand vor 1989",
        link: "https://www.dropbox.com/scl/fi/krj3pu0l4439z6j9tgmso/Siegbert-Schefke-DDR-Opposition-in-den-1980er-Jahren-1.mp4?rlkey=dlc9ots2jkv1mltzvyffg6h3q&e=1&st=823lo658&dl=0",
        tags: ["Dropbox", "Pflicht", "Opposition"]
      },
      {
        id: "r-wendegefuehle",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Wendegefuehle",
        focus: "emotionale Lage, Unsicherheit und Offenheit des Umbruchs",
        link: "https://www.dropbox.com/scl/fi/qh8xuurglwaukj9z6kn7n/Wendegef-hle.mp4?rlkey=hek04qu3x4bkyql23uh4ralcq&e=1&st=sk6ryvqw&dl=0",
        tags: ["Dropbox", "Pflicht", "Stimmung"]
      },
      {
        id: "r-herbst89-video",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "DDR: Fuenf Wochen im Herbst 1989",
        focus: "dichte Chronologie zwischen Massenprotest, SED-Krise und Mauerfall",
        link: "https://www.dropbox.com/scl/fi/akz21y2xhvoksfg4938kp/DDR-F-nf-Wochen-im-Herbst-1989-Spiegel-TV-Doku.mp4?rlkey=z8qa14jrkx53btbm74inbsyqq&e=1&st=jc18jq5i&dl=0",
        tags: ["Dropbox", "Pflicht", "1989"]
      },
      {
        id: "r-fruehling90-video",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "DDR: Deutschland im Fruehling 1990",
        focus: "offene Uebergangssituation zwischen Reform, Wahl und Einheit",
        link: "https://www.dropbox.com/scl/fi/jbvvcr6qw3v7qp56l7n5v/DDR-Deutschland-im-Fr-hling-1990-Spiegel-TV-Doku.mp4?rlkey=eov9lmazn1bltsb4uih3ey37o&e=1&st=pcsfaz68&dl=0",
        tags: ["Dropbox", "Pflicht", "1990"]
      },
      {
        id: "r-herbst89-docx",
        bucket: "Lokale Materialien",
        type: "DOCX",
        title: "Fragen zu Fuenf Wochen im Herbst 1989",
        focus: "Frageblatt zu Ausreise, Kirche, 4. November und 9. November 1989",
        link: "assets/materials/Fragen-Fuenf-Wochen-im-Herbst-1989.docx",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-herbst89-pdf",
        bucket: "Lokale Materialien",
        type: "PDF",
        title: "Fragen zu Fuenf Wochen im Herbst 1989 (PDF)",
        focus: "PDF-Version des Frageblatts fuer Druck oder digitale Ausleihe",
        link: "assets/materials/Fragen-Fuenf-Wochen-im-Herbst-1989.pdf",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-fruehling90-pdf",
        bucket: "Lokale Materialien",
        type: "PDF",
        title: "Fragen zu Deutschland im Fruehling 1990",
        focus: "Arbeitsblatt zur offenen Uebergangsphase nach dem Mauerfall",
        link: "assets/materials/Fragen-Deutschland-im-Fruehling-1990.pdf",
        tags: ["lokal", "Arbeitsblatt"]
      }
    ],
    questions: [
      {
        id: "q-wende-1",
        type: "single-choice",
        challenge: "Faktencheck",
        prompt:
          "Was unterschied die Lage von 1989 grundlegend von den frueheren Ostblockkrisen?",
        help:
          "Denke an Moskau, an Gewaltbereitschaft und an die Spielraeume fuer Protestbewegungen.",
        sourceIds: ["r-ddr-verwandeln", "r-herbst89-video"],
        options: [
          {
            id: "a",
            text: "Die sowjetische Fuehrung war 1989 nicht mehr bereit, wie 1953, 1956 oder 1968 militaerisch zur Blockdisziplin einzugreifen."
          },
          {
            id: "b",
            text: "Die DDR war 1989 das wirtschaftlich staerkste und stabilste Land Europas."
          },
          {
            id: "c",
            text: "Es gab 1989 weder Massenproteste noch Ausreisebewegungen."
          },
          {
            id: "d",
            text: "Die SED entschied sich fruehzeitig und geschlossen fuer freie Wahlen."
          }
        ],
        correctOptionId: "a",
        explanation:
          "Ohne die veränderte sowjetische Haltung unter Gorbatschow und ohne automatische Interventionsbereitschaft entstand ueberhaupt erst ein anderer Handlungsspielraum fuer Opposition und Massendemonstrationen."
      },
      {
        id: "q-wende-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum war der 9. November 1989 nicht einfach eine lange geplante Staatsentscheidung?",
        help:
          "Nenne mindestens drei Elemente: Druck von unten, Kommunikationschaos und Kontrollverlust.",
        placeholder: "Der 9. November war keine einfache Staatsentscheidung, weil ...",
        sourceIds: ["r-herbst89-video", "r-herbst89-docx"],
        conceptGroups: [
          {
            label: "Druck durch Protest oder Ausreise",
            variants: [
              "druck von unten",
              "massendemonstrationen",
              "ausreise",
              "massenexodus",
              "proteste"
            ]
          },
          {
            label: "Schabowski oder Kommunikationspanne",
            variants: [
              "schabowski",
              "pressekonferenz",
              "kommunikationschaos",
              "missverstaendnis",
              "sofort unverzueglich"
            ]
          },
          {
            label: "Kontrollverlust der SED",
            variants: [
              "kontrollverlust",
              "regime verlor kontrolle",
              "grenzoeffnung ungeplant",
              "sed geschwaecht",
              "staat konnte es nicht mehr stoppen"
            ]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Der 9. November war kein sauber geplanter Staatsakt, sondern das Ergebnis massiven Drucks durch Ausreisebewegung und Protest, einer missglueckten Kommunikation auf Schabowskis Pressekonferenz und eines akuten Kontrollverlusts der SED. Gerade deshalb schlug eine Regulierungsabsicht in eine faktische Grenzoeffnung um."
      },
      {
        id: "q-wende-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Bewerte das Verhaeltnis von Reform, Opposition, Massenexodus und schneller Vereinigung zwischen Herbst 1989 und Fruehling 1990. Zeige, dass der Ausgang nicht von Beginn an feststand.",
        help:
          "Die beste Antwort beschreibt Dynamik, nicht Schicksal. Verbinde mindestens drei Faktoren.",
        placeholder: "Zwischen Herbst 1989 und Fruehling 1990 war der Ausgang offen, weil ...",
        teacherPrompt:
          "Lass die Klasse zuerst eine Ereigniskette bauen und dann gezielt markieren, wo historische Alternativen noch offen waren.",
        commonPitfall:
          "Viele Antworten schreiben im Rueckblick zu zielgerichtet und unterschlagen, dass Reform-DDR, langsamer Uebergang und schnelle Einheit konkurrierende Moeglichkeiten waren.",
        sourceIds: ["r-ddr-verwandeln", "r-siegbert-schefke", "r-wendegefuehle", "r-herbst89-video", "r-fruehling90-video"],
        minWords: 135,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: [
          "fuenf wochen",
          "fruehling 1990",
          "wendegefuehle",
          "siegbert schefke",
          "ddr verwandeln"
        ],
        rubric: [
          { concept: "Opposition und Reformidee", keywords: ["opposition", "buergerbewegung", "reform", "die ddr verwandeln", "kirche"] },
          { concept: "Ausreise und Protest", keywords: ["ausreise", "ungarn", "prag", "demonstrationen", "strasse", "massenexodus"] },
          { concept: "Machtzerfall der SED", keywords: ["sed", "machtverlust", "schabowski", "mauerfall", "kontrollverlust"] },
          { concept: "offene Zukunft 1990", keywords: ["offen", "wahl", "vereinigung", "tempo", "nicht festgelegt", "alternative"] },
          { concept: "internationale oder bundesdeutsche Dimension", keywords: ["bundesrepublik", "gorbatschow", "alliierte", "kohl", "internationale lage"] },
          { concept: "Spannung zwischen Reform-DDR und schneller Einheit", keywords: ["reform ddr", "vereinigung", "schnelle einheit", "alternativen", "umstritten"] }
        ],
        modelAnswer:
          "Der Weg von 1989 nach 1990 war offen. Teile der Opposition wollten die DDR reformieren, gleichzeitig untergruben Ausreisebewegung und Massendemonstrationen die Herrschaft der SED. Mit dem Mauerfall verschob sich das Gewicht schnell zugunsten einer Vereinigungsperspektive, doch auch im Fruehling 1990 war noch um Tempo, Richtung und politische Form gerungen. Gerade diese Offenheit macht die Revolution historisch interessant."
      }
    ]
  }
];

const AUDIO_LOUNGE = [
  {
    id: "audio-pr-reise",
    title: "Eine PR-Reise ins Land des Erzfeindes",
    description:
      "Audioquelle als freiwilliger Hoerimpuls zu Wahrnehmungen, Narrativen und Grenzueberschreitungen im Umfeld des Ost-West-Konflikts.",
    src: "assets/audio/Eine-PR-Reise-ins-Land-des-Erzfeindes.mp3"
  },
  {
    id: "audio-gemeinsame-kaempfe",
    title: "Gemeinsame Kaempfe, geplatzte Traeume",
    description:
      "Audioquelle fuer eine zusaetzliche Vertiefung zu Hoffnungen, Konflikten und Enttaeuschungen im spaeten Staatssozialismus.",
    src: "assets/audio/Gemeinsame-Kaempfe-geplatzte-Traeume.mp3"
  }
];

window.COLD_WAR_MODULES = MODULES;
window.COLD_WAR_AUDIO = AUDIO_LOUNGE;
