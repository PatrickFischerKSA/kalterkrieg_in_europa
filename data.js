const MODULES = [
  {
    id: "ueberblick",
    step: "1",
    title: "Vom Kriegsende zum Systemkonflikt",
    era: "1945 bis frühe 1950er Jahre",
    intro:
      "Diese Auftaktstation schafft den begrifflichen und historischen Rahmen: Warum spricht man überhaupt von einem Kalten Krieg, welche Rolle spielten Besatzung, Blockbildung und Abschreckung, und weshalb wurde Deutschland zum Nervenzentrum der neuen Weltordnung?",
    goal:
      "Du kannst den Kalten Krieg als Kombination aus Sicherheitsinteressen, Ideologie, Wirtschaftspolitik und globalem Machtanspruch erklären.",
    route:
      "Sichtung der beiden Überblicksvideos, danach Arbeit mit dem PDF und den beiden Frageblättern. Höre zum Schluss den eingebauten Hörimpuls zu Feindbildern und Wahrnehmungen. Erst sichern, dann vergleichen, dann deuten.",
    teacherNote:
      "Die Station eignet sich als gemeinsamer Einstieg oder als Hausauftragsmodul vor einer Vertiefung zu Deutschland.",
    teacherToolkit: {
      duration: "35 bis 45 Minuten oder als vorbereitender Hausauftrag",
      socialForms: [
        "Einzelarbeit mit anschließendem Partnervergleich",
        "Plenumssicherung der Leitbegriffe",
        "kurze Schreibphase zur Vergleichsfrage"
      ],
      assessmentFocus: [
        "Kalter Krieg nicht auf Atomkrieg verkürzen",
        "Deutschland als Symbol- und Konfliktraum verstehen",
        "Sicherheits-, Ideologie- und Wirtschaftsfaktor verknüpfen"
      ],
      misconceptions: [
        "Kalter Krieg bedeute automatisch direkten Krieg",
        "Deutschland sei nur Nebenschauplatz des Konflikts",
        "Wirtschaftshilfe und Ideologie hätten nichts miteinander zu tun"
      ],
      product:
        "Vergleichender Kurzkommentar zu den beiden Überblicksvideos oder ein Begriffsnetz mit Deutschland als Zentrum.",
      extension:
        "Mit der Transferfrage die Unterschiede zwischen monokausalen und mehrdimensionalen Deutungen sichtbar machen."
    },
    visual: {
      src: "assets/module-images/kalterkrieg-map-better.png",
      alt: "Kartenausschnitt zu Besatzungszonen und Nachkriegsordnung in Mitteleuropa",
      sourceLabel: "Kartenausschnitt aus KalterKrieg.pdf"
    },
    prompts: [
      "Achte auf die Verbindung von Ideologie und Sicherheitsdenken.",
      "Notiere, wie die Videos Deutschland und Berlin positionieren.",
      "Halte fest, welche Rolle Wirtschaftspolitik für die Blockbildung spielt.",
      "Prüfe im Hörimpuls, wie Feindbilder und Grenzüberschreitungen sprachlich erzählt werden."
    ],
    resources: [
      {
        id: "r-kalterkrieg-video-1",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Der Kalte Krieg erklärt",
        focus: "kompakter Überblick über Blockbildung, Wettrüsten und globale Spannungen",
        link: "https://www.dropbox.com/scl/fi/6xntwkrpxez1uf4afzuc3/Der-Kalte-Krieg-erkl-rt.mp4?rlkey=lwodknc7fvcfm9qeket97tnlo&e=1&st=ezj0u2ah&dl=0",
        tags: ["Dropbox", "Pflicht", "Erklärvideo"]
      },
      {
        id: "r-kalterkrieg-video-2",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "wissen2go: Der Kalte Krieg erklärt",
        focus: "zweite Deutungsperspektive mit starker Verdichtung zentraler Begriffe",
        link: "https://www.dropbox.com/scl/fi/htf92dran68b25c3ta8cg/wissen2go-Der-Kalte-Krieg-erkl-rt.mp4?rlkey=skhzmdaaova647elxuq5vap32&e=1&st=umkqm5af&dl=0",
        tags: ["Dropbox", "Pflicht", "Vergleich"]
      },
      {
        id: "r-kalterkrieg-pdf",
        bucket: "Reader und Übersichten",
        type: "PDF",
        title: "KalterKrieg.pdf",
        focus: "Materialbasis für Wiederholung, Begriffssicherung und Orientierung",
        link: "assets/materials/KalterKrieg.pdf",
        tags: ["lokal", "Reader"]
      },
      {
        id: "r-erklaervideo-fragen",
        bucket: "Arbeitsblätter",
        type: "PDF",
        title: "Fragen zum Erklärvideo",
        focus: "Frageblatt zur Erarbeitung zentraler Grundbegriffe",
        link: "assets/materials/Fragen-zum-Erklaervideo.pdf",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-zusammenfassung-fragen",
        bucket: "Arbeitsblätter",
        type: "PDF",
        title: "Fragen zur Zusammenfassung des Kalten Kriegs",
        focus: "komprimierte Sicherung für Wiederholung und Repetition",
        link: "assets/materials/Fragen-Zusammenfassung-Kalter-Krieg.pdf",
        tags: ["lokal", "Repetition"]
      },
      {
        id: "r-audio-pr-reise",
        bucket: "Hörimpulse",
        type: "Audio",
        title: "Eine PR-Reise ins Land des Erzfeindes",
        focus: "Audioquelle zu Feindbildern, Wahrnehmungen, Begegnungen und sprachlichen Deutungen im Ost-West-Konflikt",
        link: "assets/audio/Eine-PR-Reise-ins-Land-des-Erzfeindes.mp3",
        tags: ["lokal", "Audio", "Vertiefung"]
      }
    ],
    questions: [
      {
        id: "q-ueberblick-1",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erkläre den Begriff 'Kalter Krieg' so, dass Machtpolitik, Ideologie und indirekte Konfliktformen zusammen sichtbar werden.",
        help:
          "Die Sofortkorrektur prüft drei Sinnschichten. Schreibe keine Stichwortliste, sondern einen knappen Erklärungssatz.",
        placeholder: "Der Kalte Krieg war ...",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-video-2"],
        conceptGroups: [
          {
            label: "globaler System- oder Machtkonflikt",
            variants: [
              "systemkonflikt",
              "machtkonflikt",
              "ost west konflikt",
              "supermaechte",
              "usa und udssr",
              "globale rivalitaet"
            ]
          },
          {
            label: "ideologischer Gegensatz",
            variants: [
              "ideologie",
              "kapitalismus",
              "kommunismus",
              "demokratie gegen sozialismus",
              "gesellschaftsmodelle",
              "weltanschaulich"
            ]
          },
          {
            label: "indirekte Austragung durch Abschreckung, Bündnisse oder Stellvertreter",
            variants: [
              "abschreckung",
              "stellvertreterkrieg",
              "indirekt",
              "buendnisse",
              "einflusszonen",
              "kein direkter krieg"
            ]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Der Kalte Krieg war ein globaler Macht- und Systemkonflikt zwischen den Supermächten, der von gegensätzlichen Ideologien geprägt war. Er blieb meist indirekt und wurde über Abschreckung, Bündnisse, Einflusszonen und Stellvertreterkonflikte ausgetragen."
      },
      {
        id: "q-ueberblick-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erkläre knapp, warum Deutschland und besonders Berlin zum Brennpunkt des Kalten Krieges wurden.",
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
          "Vergleiche die beiden Überblicksvideos: Wie verbinden sie Sicherheitsinteressen, Ideologie und Wirtschaft zu einer Erklärung des Kalten Krieges? Begründe mit konkreten Bezügen auf die Materialien.",
        help:
          "Ziel ist keine Nacherzählung, sondern ein strukturierter Vergleich mit eigener Gewichtung.",
        placeholder: "Die beiden Videos setzen unterschiedliche Akzente, aber beide zeigen, dass ...",
        teacherPrompt:
          "Lass die Lernenden zuerst eine eigene These formulieren und erst danach gezielt mit Materialsignalen absichern.",
        commonPitfall:
          "Häufig werden die Videos nur nacheinander nacherzählt, statt ihre Erklärungslogik systematisch zu vergleichen.",
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
          "Beide Videos deuten den Kalten Krieg nicht nur als Machtkampf, sondern als Verbindung aus Sicherheitsdenken, ideologischem Gegensatz und wirtschaftlicher Ordnung. Das erste Video arbeitet stärker mit der globalen Blockbildung und dem Wettrüsten, das zweite verdichtet die Logik der Abschreckung und die zentrale Rolle Deutschlands. Gemeinsam ist beiden Deutungen, dass Misstrauen, Einflusszonen und Wirtschaftshilfe nicht getrennt voneinander verstanden werden können."
      },
      {
        id: "q-ueberblick-4",
        type: "drag-order",
        challenge: "Strukturierung",
        prompt:
          "Ordne die Entwicklungsschritte so, dass aus der Nachkriegsordnung die verfestigte Blockkonfrontation erkennbar wird.",
        help:
          "Beginne mit der gemeinsamen Besatzungsordnung und ende mit der offenen Deutschland- und Berlin-Krise.",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-video-2", "r-kalterkrieg-pdf"],
        items: [
          {
            id: "besatzungsordnung",
            label: "Deutschland und Berlin stehen zunächst unter gemeinsamer Viermächtekontrolle.",
            detail: "Die Nachkriegsordnung beginnt noch als gemeinsame Besatzungsstruktur."
          },
          {
            id: "misstrauen",
            label: "Zwischen den Siegermächten wachsen Misstrauen und gegensätzliche Sicherheits- und Ordnungsvorstellungen.",
            detail: "Kooperation schlägt in ideologische und machtpolitische Konkurrenz um."
          },
          {
            id: "blockbildung",
            label: "Wirtschaftshilfe, Gegenmodelle und Bündnispolitik treiben die Blockbildung voran.",
            detail: "Marshallplan und sowjetische Gegenordnung binden Staaten an rivalisierende Lager."
          },
          {
            id: "berlinkrise",
            label: "Deutschland und besonders Berlin werden zum sichtbaren Krisenraum des neuen Ost-West-Konflikts.",
            detail: "Blockade, Luftbrücke und Staatsgründungen verdichten den Konflikt."
          }
        ],
        correctOrder: ["besatzungsordnung", "misstrauen", "blockbildung", "berlinkrise"],
        explanation:
          "Historisch verdichtete sich der Konflikt Schritt für Schritt: von der gemeinsamen Besatzungsordnung über wachsendes Misstrauen zur Blockbildung und schließlich zur sichtbaren Krisenzuspitzung in Deutschland und Berlin.",
        modelAnswer:
          "Die Entwicklung verläuft von der gemeinsamen Nachkriegsverwaltung über ideologische und sicherheitspolitische Entfremdung zur politischen und wirtschaftlichen Blockbildung. In Deutschland und Berlin wurde diese Entwicklung besonders sichtbar und konfliktträchtig."
      },
      {
        id: "q-ueberblick-5",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum blieb der Konflikt zwischen den Supermächten meist 'kalt' und wurde nicht zu einem direkten Großkrieg?",
        help:
          "Nenne mindestens drei Elemente: Abschreckung, Risiko direkter Eskalation und indirekte Austragungsformen.",
        placeholder: "Der Konflikt blieb meist kalt, weil ...",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-video-2"],
        conceptGroups: [
          {
            label: "nukleare Abschreckung oder Eskalationsangst",
            variants: ["atomwaffen", "nuklear", "abschreckung", "eskalation", "gegenseitige vernichtung"]
          },
          {
            label: "Vermeidung direkter Konfrontation",
            variants: ["direkter krieg vermeiden", "kein direkter krieg", "zu riskant", "supermaechte vermieden", "offene konfrontation vermeiden"]
          },
          {
            label: "indirekte Austragung über Stellvertreter oder Einflusszonen",
            variants: ["stellvertreterkrieg", "indirekt", "einflusszonen", "buendnisse", "proxy"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Der Konflikt blieb meist kalt, weil ein direkter Krieg zwischen den atomar bewaffneten Supermächten ein unkalkulierbares Eskalationsrisiko bedeutete. Deshalb wurde der Gegensatz eher über Abschreckung, Bündnisse, Einflusszonen und Stellvertreterkonflikte ausgetragen."
      },
      {
        id: "q-ueberblick-6",
        type: "open-analysis",
        challenge: "Urteil",
        prompt:
          "Beurteile die Aussage: 'Deutschland war im frühen Kalten Krieg vor allem Objekt fremder Machtpolitik und erst in zweiter Linie eigener Akteur.'",
        help:
          "Gefordert ist ein abwägendes Urteil mit Materialbezug, nicht eine bloße Zustimmung oder Ablehnung.",
        placeholder: "Die Aussage ist nur teilweise überzeugend, weil ...",
        teacherPrompt:
          "Lass zuerst trennen zwischen Deutschland als Besatzungsraum und den späteren Handlungsmöglichkeiten von BRD und DDR.",
        commonPitfall:
          "Häufig wird entweder nur die Fremdbestimmung betont oder der Einfluss der deutschen Staaten überschätzt, ohne zwischen Phasen zu unterscheiden.",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-video-2", "r-kalterkrieg-pdf"],
        minWords: 125,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["deutschland", "berlin", "besatzung", "blockade", "reader"],
        rubric: [
          { concept: "Deutschland als Besatzungsraum", keywords: ["besatzung", "vier maechte", "siegermächte", "kontrolle", "nachkriegsordnung"] },
          { concept: "Berlin als Symbolraum", keywords: ["berlin", "blockade", "luftbruecke", "symbol", "brennpunkt"] },
          { concept: "begrenzte deutsche Handlungsspielräume", keywords: ["brd", "ddr", "staaten", "handlungsspielraum", "legitimation"] },
          { concept: "Abwägung zwischen Objekt- und Akteursrolle", keywords: ["einerseits", "andererseits", "teilweise", "zugleich", "nicht nur"] },
          { concept: "historisches Urteil", keywords: ["insgesamt", "deshalb", "ich beurteile", "überwiegend", "entscheidend"] }
        ],
        modelAnswer:
          "Die Aussage trifft einen wichtigen Kern, greift aber allein zu kurz. Unmittelbar nach 1945 war Deutschland stark Objekt der Siegermächte und ihrer Besatzungspolitik. Gerade Berlin zeigte diese Fremdbestimmung besonders deutlich. Mit der Entstehung von BRD und DDR entstanden jedoch begrenzte eigene Handlungsspielräume, sodass Deutschland zwar vor allem Konfliktraum blieb, aber nicht völlig passiv war."
      },
      {
        id: "q-ueberblick-7",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Warum war Wirtschaftshilfe im frühen Kalten Krieg nie nur Wirtschaft, sondern immer auch Machtpolitik?",
        help:
          "Nenne mindestens drei Aspekte: Bindung, Legitimationsgewinn und Systemkonkurrenz.",
        placeholder: "Wirtschaftshilfe war politisch, weil ...",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-video-2", "r-kalterkrieg-pdf"],
        conceptGroups: [
          {
            label: "politische oder bündnispolitische Bindung",
            variants: ["bindung", "lager", "einfluss", "an den westen binden", "machtbereich", "abhaengigkeit"]
          },
          {
            label: "Versorgung, Aufbau oder Legitimationsgewinn",
            variants: ["aufbau", "versorgung", "wohlstand", "legitimation", "stabilisierung", "hilfeprogramm"]
          },
          {
            label: "Systemkonkurrenz statt Neutralität",
            variants: ["systemkonkurrenz", "nicht neutral", "ideologisch", "konkurrenz der modelle", "propaganda", "ordnungsvorstellung"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Wirtschaftshilfe war im frühen Kalten Krieg Machtpolitik, weil sie Staaten wirtschaftlich stabilisierte und zugleich politisch an ein Lager band. Sie sollte die eigene Ordnung attraktiver machen, Legitimation schaffen und den Einfluss des Gegners zurückdrängen."
      },
      {
        id: "q-ueberblick-8",
        type: "open-analysis",
        challenge: "Deutung",
        prompt:
          "Prüfe die Verkürzung: 'Der Kalte Krieg war einfach ein Konflikt USA gegen UdSSR.' Zeige, was an der Formel stimmt und was sie historisch ausblendet.",
        help:
          "Die stärkste Antwort arbeitet mit Zustimmung und Korrektur zugleich: Supermächte ja, aber nicht nur.",
        placeholder: "Die Formel ist eingängig, aber historisch verkürzt, weil ...",
        teacherPrompt:
          "Lass zuerst sammeln, warum die Formel attraktiv ist, und frage dann, welche Ebenen dadurch unsichtbar werden.",
        commonPitfall:
          "Oft wird die Formel nur zurückgewiesen, ohne ihren wahren Kern zu benennen: die reale Dominanz der Supermächte.",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-video-2", "r-kalterkrieg-pdf", "r-zusammenfassung-fragen", "r-audio-pr-reise"],
        minWords: 140,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["usa", "udssr", "deutschland", "berlin", "marshallplan", "abschreckung", "erzfeind", "feindbild", "reise"],
        rubric: [
          { concept: "Supermächte als zentrales Machtzentrum", keywords: ["usa", "udssr", "supermaechte", "washington", "moskau"] },
          { concept: "Ideologische Dimension", keywords: ["ideologie", "kapitalismus", "kommunismus", "gesellschaftsordnung", "weltanschauung"] },
          { concept: "wirtschaftliche und bündnispolitische Ebene", keywords: ["marshallplan", "wirtschaft", "buendnis", "blockbildung", "hilfe"] },
          { concept: "Deutschland oder Berlin als Konfliktraum", keywords: ["deutschland", "berlin", "besatzung", "blockade", "luftbruecke"] },
          { concept: "indirekte Austragungsformen", keywords: ["abschreckung", "stellvertreter", "einflusszonen", "indirekt", "wettruesten"] },
          { concept: "abwägendes Urteil zur Formel", keywords: ["einerseits", "andererseits", "verkürzt", "zutreffend", "greift zu kurz"] }
        ],
        modelAnswer:
          "Die Formel trifft insofern zu, als USA und UdSSR die zentralen Machtpole des Konflikts waren. Sie blendet aber aus, dass der Kalte Krieg zugleich ein ideologischer, wirtschaftlicher und globaler Ordnungskonflikt war, in dem Deutschland und Berlin eine besondere Rolle spielten. Außerdem wurde der Gegensatz meist nicht in direkter militärischer Konfrontation, sondern über Abschreckung, Bündnisse und indirekte Konfliktformen ausgetragen."
      }
    ]
  },
  {
    id: "teilung",
    step: "2",
    title: "Die deutsche Teilung und die Gruendung zweier Staaten",
    era: "1948 bis 1949",
    intro:
      "Die Teilung Deutschlands war keine bloss technische Verwaltungslösung, sondern Ausdruck einer politischen und ideologischen Verhärtung. In dieser Station geht es um die Gründung von BRD und DDR sowie um die Logik zweier gegensätzlicher Staatsentwürfe.",
    goal:
      "Du kannst erklären, weshalb aus Besatzungszonen zwei Staaten wurden und wie sich BRD und DDR unterschiedlich legitimierten.",
    route:
      "Zuerst die Gründungsvideos vergleichen, dann die Folgen für Staat, Gesellschaft und internationale Einbindung sichern.",
    teacherNote:
      "Diese Station schließt direkt an die Berlin-Blockade und die Zuspitzung von 1948/49 an.",
    teacherToolkit: {
      duration: "40 bis 50 Minuten",
      socialForms: [
        "arbeitsteilige Sichtung: BRD-Video und DDR-Video getrennt vorbereiten",
        "Tafel- oder Boardvergleich zur Legitimation beider Staaten",
        "individuelle Transferantwort als Abschluss"
      ],
      assessmentFocus: [
        "politische Ordnung und Herrschaftspraxis unterscheiden",
        "Teilung als Systementscheidung und nicht nur als Verwaltung erklären",
        "Legitimationssprache kritisch lesen"
      ],
      misconceptions: [
        "beide Staatsgründungen seien politisch symmetrisch gewesen",
        "die DDR sei einfach eine zweite Demokratie mit anderem Wirtschaftsmodell gewesen",
        "die Teilung habe sich 1949 von selbst erledigt und sei danach fix gewesen"
      ],
      product:
        "Vergleichstabelle BRD/DDR mit anschließender begründeter These zur Bedeutung von 1949.",
      extension:
        "Die Transferfrage kann als Mini-Essay oder mündliche Streitfrage zwischen zwei Gruppen genutzt werden."
    },
    visual: {
      src: "assets/module-images/walter-ulbricht-banner.jpg",
      alt: "Porträt von Walter Ulbricht als Bildmotiv zur Staatsgründung der DDR",
      sourceLabel: "Historisches Porträt von Walter Ulbricht via Wikimedia Commons"
    },
    prompts: [
      "Achte auf Unterschiede zwischen politischer Gründungslegitimation und realer Machtordnung.",
      "Notiere, welche Rolle die Westintegration beziehungsweise die Sowjetzone spielt.",
      "Vergleiche Selbstbeschreibung und Fremdwahrnehmung beider Staaten."
    ],
    resources: [
      {
        id: "r-ddr-gruendung-1",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Gründung der Deutschen Demokratischen Republik",
        focus: "Entstehung der DDR aus der sowjetischen Besatzungszone",
        link: "https://www.dropbox.com/scl/fi/yc58bohgv682fx8726flc/Gr-ndung-der-Deutschen-Demokratischen-Republik-DDR-Geschichte.mp4?rlkey=d8ia31ok2n68tjd6bnu582tqz&e=1&st=b4lbq4sg&dl=0",
        tags: ["Dropbox", "Pflicht", "DDR"]
      },
      {
        id: "r-ddr-gruendung-2",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Die Gründung der DDR",
        focus: "zweite Perspektive auf Parteimacht, Staatsform und sowjetischen Einfluss",
        link: "https://www.dropbox.com/scl/fi/4e4vuvcn6w3bld4tmoj31/Die-Gr-ndung-der-DDR.mp4?rlkey=yl3sv5meft578lwcj5nu2m4at&e=1&st=ct1joczu&dl=0",
        tags: ["Dropbox", "Pflicht", "Vergleich"]
      },
      {
        id: "r-brd-gruendung",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Gründung der Bundesrepublik",
        focus: "Grundgesetz, föderale Ordnung und Westbindung",
        link: "https://www.dropbox.com/scl/fi/vjn8buy2vzlxjbrjpoi61/Gr-ndung-der-Bundesrepublik.mp4?rlkey=6tr7p24y7in1lmxrz7nguuisn&e=1&st=0x8t1j9m&dl=0",
        tags: ["Dropbox", "Pflicht", "BRD"]
      }
    ],
    questions: [
      {
        id: "q-teilung-1",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die Entwicklung so, dass die Zuspitzung von der Berlin-Krise zu zwei deutschen Staaten sichtbar wird.",
        help:
          "Sortiere die vier Karten in eine historisch schlüssige Reihenfolge für 1948/49.",
        sourceIds: ["r-ddr-gruendung-1", "r-brd-gruendung"],
        items: [
          {
            id: "waehrungsreform",
            label: "Die Währungsreform verschärft 1948 den Konflikt über die Ordnung der Westzonen.",
            detail: "Sie markiert einen zentralen Schritt zur politischen und wirtschaftlichen Trennung."
          },
          {
            id: "berlinkrise",
            label: "Die Berlin-Blockade und die Luftbrücke machen die Spaltung öffentlich sichtbar.",
            detail: "Berlin wird zum Symbolraum der Konfrontation."
          },
          {
            id: "brd",
            label: "Mit dem Grundgesetz und der Bundesrepublik entsteht ein westlich eingebundener westdeutscher Staat.",
            detail: "Die Westzonen erhalten eine eigene staatliche Form."
          },
          {
            id: "ddr",
            label: "Die DDR wird als sozialistischer Staat in der sowjetischen Besatzungszone gegründet.",
            detail: "Damit ist die Teilung institutionell vollzogen."
          }
        ],
        correctOrder: ["waehrungsreform", "berlinkrise", "brd", "ddr"],
        explanation:
          "Währungsreform und Berlin-Krise verschärften 1948 den Konflikt. 1949 erhielt die Spaltung mit BRD und DDR dann eine feste staatliche Form.",
        modelAnswer:
          "Die Zuspitzung begann mit der Währungsreform und führte über die Berlin-Blockade zur offenen Konfrontation. Erst danach entstanden mit BRD und DDR zwei gegensätzliche Staaten auf deutschem Boden."
      },
      {
        id: "q-teilung-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erkläre knapp den wichtigsten Unterschied zwischen der politischen Legitimation von BRD und DDR.",
        help:
          "Nutze möglichst Fachbegriffe. Die Korrektur erkennt verschiedene sinnnahe Formulierungen.",
        placeholder: "Die BRD legitimierte sich vor allem ..., während die DDR ...",
        sourceIds: ["r-ddr-gruendung-2", "r-brd-gruendung"],
        conceptGroups: [
          {
            label: "BRD: Grundgesetz, Parlament, föderale Demokratie",
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
          "Die BRD legitimierte sich über das Grundgesetz, parlamentarische Repräsentation und einen föderalen demokratischen Aufbau. Die DDR berief sich auf einen antifaschistisch-sozialistischen Neubeginn, war aber real stark durch die SED und den sowjetischen Einfluss bestimmt."
      },
      {
        id: "q-teilung-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Begründe, warum die Gründung zweier deutscher Staaten 1949 mehr war als eine Verwaltungsfolge der Besatzung. Zeige, welche unterschiedlichen Zukunftsentwürfe dahinterstanden.",
        help:
          "Erwartet wird eine Deutung: politische Ordnung, internationale Einbindung, Wirtschaftsmodell und Herrschaftsstruktur zusammenführen.",
        placeholder: "Die Staatsgründungen waren mehr als Verwaltung, weil ...",
        teacherPrompt:
          "Fordere eine klare These ein: Warum reicht die Formel 'Verwaltungsfolge der Besatzung' gerade nicht aus?",
        commonPitfall:
          "Viele Antworten listen nur Unterschiede zwischen BRD und DDR auf, ohne zu zeigen, warum daraus zwei gegensätzliche Zukunftsentwürfe wurden.",
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
          "Die Gründung von BRD und DDR war nicht bloss die Endstufe einer Verwaltungsteilung, sondern die institutionelle Form des Systemkonflikts. Mit der BRD entstand ein parlamentarisch-föderaler Weststaat, mit der DDR ein sozialistischer Staat unter führender Rolle der SED. Dahinter standen nicht nur verschiedene Verfassungen, sondern verschiedene Vorstellungen von Demokratie, Wirtschaft, Freiheit und internationaler Zugehörigkeit."
      },
      {
        id: "q-teilung-4",
        type: "short-text",
        challenge: "Einordnung",
        prompt:
          "Warum war die deutsche Frage 1949 trotz zweier Staatsgründungen noch nicht endgültig gelöst?",
        help:
          "Nenne mindestens drei Gründe: internationale Lage, Berlin und konkurrierende Ansprüche.",
        placeholder: "1949 blieb die deutsche Frage offen, weil ...",
        sourceIds: ["r-ddr-gruendung-1", "r-ddr-gruendung-2", "r-brd-gruendung"],
        conceptGroups: [
          {
            label: "fortbestehender Ost-West-Konflikt oder Besatzungseinfluss",
            variants: ["ost west konflikt", "besatzungsrechte", "siegermächte", "alliierte", "kalter krieg", "blockkonfrontation"]
          },
          {
            label: "Berlin blieb ein offener Konfliktraum",
            variants: ["berlin", "viermaechte", "blockade", "krisenraum", "nicht geklaert", "geteiltes berlin"]
          },
          {
            label: "konkurrierende Deutschlandansprüche oder Wiedervereinigungsfrage",
            variants: ["wiedervereinigung", "gesamtdeutsch", "anspruch fuer ganz deutschland", "offene nationale frage", "beide beanspruchten", "nicht endgueltig"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "1949 war die deutsche Frage nicht gelöst, weil die Teilung Teil des internationalen Ost-West-Konflikts blieb. Berlin blieb ein besonders offener Krisenraum, und beide Staaten standen weiter im Schatten der Siegermächte und konkurrierender Vorstellungen über Deutschlands Zukunft."
      },
      {
        id: "q-teilung-5",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum war der antifaschistische Gründungsanspruch für die DDR politisch so wichtig?",
        help:
          "Nenne mindestens drei Funktionen dieses Begriffs: Legitimation, Abgrenzung und Herrschaftssicherung.",
        placeholder: "Der antifaschistische Anspruch war wichtig, weil ...",
        sourceIds: ["r-ddr-gruendung-1", "r-ddr-gruendung-2"],
        conceptGroups: [
          {
            label: "Legitimation des neuen Staates",
            variants: ["legitimation", "rechtfertigung", "neubeginn", "neuer staat", "gruendungsanspruch"]
          },
          {
            label: "Abgrenzung vom Westen oder von der NS-Vergangenheit",
            variants: ["abgrenzung", "westen", "nazivergangenheit", "ns", "gegen den faschismus"]
          },
          {
            label: "politische Herrschaftssicherung der SED",
            variants: ["sed", "herrschaft", "macht sichern", "alternative delegitimieren", "staatliche kontrolle"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Der antifaschistische Anspruch legitimierte die DDR als angeblichen Gegenentwurf zur NS-Vergangenheit und half ihr, sich moralisch vom Westen abzugrenzen. Zugleich diente er der Herrschaftssicherung der SED, weil politische Gegner leichter als verdächtig oder reaktionär markiert werden konnten."
      },
      {
        id: "q-teilung-6",
        type: "open-analysis",
        challenge: "Vergleichsurteil",
        prompt:
          "Vergleiche Selbstbeschreibung und reale Machtordnung von BRD und DDR in der Gründungsphase. Zeige, wo politische Sprache Wirklichkeit verdeckte oder zutreffend beschrieb.",
        help:
          "Verbinde Verfassung, Legitimation, Herrschaftspraxis und internationale Einbindung.",
        placeholder: "In der Selbstbeschreibung wirkten beide Staaten klarer und eindeutiger, als es die Realität nahelegt, weil ...",
        teacherPrompt:
          "Lass vorab Begriffe sammeln, die offiziell positiv klingen, und prüfe dann mit den Materialien ihre reale Bedeutung.",
        commonPitfall:
          "Viele Antworten übernehmen die politische Sprache der Gründungsphase unkritisch oder vergleichen nur Verfassungstexte ohne Machtpraxis.",
        sourceIds: ["r-ddr-gruendung-1", "r-ddr-gruendung-2", "r-brd-gruendung"],
        minWords: 125,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["grundgesetz", "antifaschistisch", "ddr", "bundesrepublik", "sed"],
        rubric: [
          { concept: "Selbstbeschreibung der BRD", keywords: ["grundgesetz", "demokratie", "freiheit", "foederal", "repräsentation"] },
          { concept: "Selbstbeschreibung der DDR", keywords: ["antifaschistisch", "arbeiter und bauernstaat", "sozialistisch", "volksdemokratie"] },
          { concept: "reale Machtordnung", keywords: ["sed", "einparteienherrschaft", "pluralismus", "parlament", "herrschaftspraxis"] },
          { concept: "Vergleich politischer Sprache und Wirklichkeit", keywords: ["verdeckt", "real", "offiziell", "tatsächlich", "abweichung"] },
          { concept: "eigenes Urteil", keywords: ["insgesamt", "deshalb", "überzeugender", "nur teilweise", "ich bewerte"] }
        ],
        modelAnswer:
          "Beide Staaten beschrieben sich normativ, aber nicht in gleicher Weise realitätsnah. In der BRD entsprach die demokratische Selbstbeschreibung stärker der institutionellen Ordnung, auch wenn Besatzungseinflüsse und Westbindung Grenzen setzten. In der DDR dagegen verdeckte die Sprache vom antifaschistisch-sozialistischen Neubeginn die tatsächliche Machtstellung der SED. Gerade der Vergleich zeigt, dass politische Gründungsrhetorik nicht automatisch politische Realität beschreibt."
      },
      {
        id: "q-teilung-7",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Worin lag die politische Asymmetrie zwischen der Gründung der BRD und der Gründung der DDR?",
        help:
          "Nenne mindestens drei Punkte: Verfassungsordnung, Parteimacht und Verhältnis zu den Besatzungsmächten.",
        placeholder: "Die Staatsgründungen waren asymmetrisch, weil ...",
        sourceIds: ["r-ddr-gruendung-1", "r-ddr-gruendung-2", "r-brd-gruendung"],
        conceptGroups: [
          {
            label: "BRD mit parlamentarischer oder föderaler Ordnung",
            variants: ["grundgesetz", "parlamentarisch", "foederal", "pluralismus", "bundesrepublik", "parlamentarischer rat"]
          },
          {
            label: "DDR mit führender Rolle der SED",
            variants: ["sed", "einparteienherrschaft", "parteimacht", "sozialistischer staat", "gelenkt", "volksdemokratie"]
          },
          {
            label: "unterschiedlicher Spielraum gegenüber den Besatzungsmächten",
            variants: ["sowjetischer einfluss", "westintegration", "besatzungsmaechte", "alliierte", "abhaengigkeit", "unterschiedliche kontrolle"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Die Gründungen waren asymmetrisch, weil die BRD eine stärker parlamentarisch-pluralistische und föderale Ordnung erhielt, während die DDR früh von der SED dominiert wurde. Beide standen zwar unter dem Einfluss der Besatzungsmächte, aber in sehr unterschiedlicher politischer Form und mit unterschiedlichen Freiheitsgraden."
      },
      {
        id: "q-teilung-8",
        type: "open-analysis",
        challenge: "Urteil",
        prompt:
          "Bewerte die These: 'Die deutsche Teilung war 1949 kein naturwüchsiges Ergebnis, sondern politisch gemacht.' Nutze dafür die Zuspitzung von 1948/49 und die unterschiedlichen Staatsentwürfe.",
        help:
          "Zeige in deiner Antwort, welche Entscheidungen, Interessen und Machtverhältnisse die Teilung hervorgebracht haben.",
        placeholder: "Die Teilung war politisch gemacht, weil ...",
        teacherPrompt:
          "Lass die Lernenden erst die Krisenschritte von 1948/49 rekonstruieren und dann fragen, welche Alternativen jeweils kleiner wurden.",
        commonPitfall:
          "Viele Antworten sprechen nur abstrakt von 'den Alliierten', ohne konkrete Entscheidungen wie Währungsreform, Berlin-Krise oder Staatsgründungen einzubeziehen.",
        sourceIds: ["r-ddr-gruendung-1", "r-ddr-gruendung-2", "r-brd-gruendung"],
        minWords: 135,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["waehrungsreform", "berlin", "grundgesetz", "ddr", "sed", "westintegration"],
        rubric: [
          { concept: "Zuspitzung 1948/49", keywords: ["waehrungsreform", "berlin blockade", "luftbruecke", "1948", "1949"] },
          { concept: "Rolle der Besatzungsmächte", keywords: ["sowjetunion", "westmaechte", "alliierte", "besatzung", "siegermächte"] },
          { concept: "politische Entscheidungen statt Automatismus", keywords: ["entscheidung", "nicht zwangsläufig", "gemacht", "interessen", "politik"] },
          { concept: "gegensätzliche Staatsentwürfe", keywords: ["grundgesetz", "foederal", "sed", "sozialistisch", "ordnung"] },
          { concept: "Abwägendes Urteil", keywords: ["zugleich", "einerseits", "andererseits", "insgesamt", "deshalb"] }
        ],
        modelAnswer:
          "Die Teilung war politisch gemacht, weil sie aus konkreten Entscheidungen, Machtinteressen und Eskalationen hervorging. Währungsreform, Berlin-Krise und die staatsrechtliche Festigung von BRD und DDR schufen keine bloß technische Trennung, sondern zwei gegensätzliche Ordnungsentwürfe. Zugleich zeigt der Blick auf 1948/49, dass die Teilung nicht schicksalhaft war, sondern Ergebnis einer sich verhärtenden Blockpolitik."
      }
    ]
  },
  {
    id: "alltag",
    step: "3",
    title: "Alltag, Konsum und Lebenswelten in der DDR",
    era: "1950er bis 1980er Jahre",
    intro:
      "Die DDR war nicht nur Mauer und Stasi. Sie war auch Arbeitswelt, Versorgungssystem, Frauenbeschäftigung, Wohnen, Reisen, Konsumsehnsucht und Umweltbelastung. Diese Station fragt nach dem Spannungsverhältnis zwischen sozialer Absicherung, Mangel und Unfreiheit.",
    goal:
      "Du kannst den DDR-Alltag differenziert beschreiben, ohne ihn auf reine Diktatur oder reine Sozialromantik zu verkürzen.",
    route:
      "Bearbeite zunächst die alltagsgeschichtlichen Videos, danach die drei lokalen Materialien. Die Leitidee ist: Ambivalenzen sammeln und nicht vorschnell vereinfachen.",
    teacherNote:
      "Besonders geeignet für Diskussionen über Lebensqualität, Handlungsspielräume und Grenzen sozialistischer Modernisierung.",
    teacherToolkit: {
      duration: "45 bis 60 Minuten",
      socialForms: [
        "materialgestuetzte Gruppenarbeit nach Themenfeldern",
        "Placemat oder T-Chart zu Leistung und Begrenzung",
        "individuelle Stellungnahme zur Leitthese"
      ],
      assessmentFocus: [
        "Ambivalenz statt Schwarz-Weiß-Urteil",
        "Alltag als politisch regulierter Raum erkennen",
        "soziale Leistungen und Unfreiheit zusammen denken"
      ],
      misconceptions: [
        "DDR-Alltag sei entweder komplett idyllisch oder komplett leer und angstbestimmt gewesen",
        "Konsumfragen seien unpolitisch",
        "Frauenpolitik bedeute automatisch reale Gleichstellung"
      ],
      product:
        "Schriftliche Abwägung zur Frage, ob soziale Sicherheit fehlende Freiheit kompensieren konnte.",
      extension:
        "Die Materialien lassen sich in einer Debatte 'Sozialstaat oder Kontrollstaat?' zuspitzen."
    },
    visual: {
      src: "assets/module-images/bananenrepublik-fixed.jpg",
      alt: "Illustratives Motiv zur Konsum- und Mangelerfahrung in der DDR",
      sourceLabel: "Teaserbild zur Ressource Bananenrepublik"
    },
    prompts: [
      "Notiere in jedem Material mindestens eine soziale Leistung und mindestens eine Begrenzung.",
      "Achte auf den Gegensatz zwischen offizieller Gleichheit und realen Privilegien.",
      "Prüfe, wie Konsum, Wohnen, Arbeit und Reisen politisch reguliert wurden."
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
        focus: "Wohnungspolitik zwischen Versorgung, Knappheit und Abhängigkeit",
        link: "https://www.dropbox.com/scl/fi/x3x07idrurdous2nhob4u/Wohnraumvergabe.mp4?rlkey=w2o4zn045d7he2fkummpmnt51&e=1&st=wymeme53&dl=0",
        tags: ["Dropbox", "Pflicht", "Wohnen"]
      },
      {
        id: "r-arbeitsalltag",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Arbeitsalltag",
        focus: "Arbeitswelt, Normen, Planerfüllung und betriebliche Kultur",
        link: "https://www.dropbox.com/scl/fi/bvqx4onainj8ngworvq9t/Arbeitsalltag.mp4?rlkey=p8zd0ysrqngwj7sjtq8zi2mjk&e=1&st=f8f0e87a&dl=0",
        tags: ["Dropbox", "Pflicht", "Arbeit"]
      },
      {
        id: "r-umweltverschmutzung",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Umweltverschmutzung",
        focus: "ökologische Kosten der Industriepolitik und ein Feld späterer Opposition",
        link: "https://www.dropbox.com/scl/fi/uceuzu4209vh87ky7ujo9/Umweltverschmutzung.mp4?rlkey=zhahyppee4egu2d1zcvalxbzo&e=1&st=ncymj5vo&dl=0",
        tags: ["Dropbox", "Pflicht", "Umwelt"]
      },
      {
        id: "r-geld-regiert-ddr",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Geld regiert die DDR",
        focus: "Finanzierungsprobleme, Devisenmangel und Ökonomie des Mangels",
        link: "https://www.dropbox.com/scl/fi/utq8j6csfaoy6e0ao5jp6/Geld-regiert-die-DDR.mp4?rlkey=s6dh1ip6xa2jovo4gs4seh2qf&e=1&st=hxrzmta9&dl=0",
        tags: ["Dropbox", "Pflicht", "Wirtschaft"]
      },
      {
        id: "r-reisen-docx",
        bucket: "Lokale Materialien",
        type: "DOCX",
        title: "Reisen in der DDR",
        focus: "stichwortartige Übersicht zu Urlaubskultur, FDGB und Reisefreiheit",
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
        type: "short-text",
        challenge: "Vergleich",
        prompt:
          "Beschreibe den DDR-Alltag so, dass soziale Leistungen und systemische Grenzen gleichzeitig sichtbar werden.",
        help:
          "Nenne mindestens drei Ebenen: soziale Sicherheit, politische Steuerung und Mangel oder Privilegierung.",
        placeholder: "Der DDR-Alltag war widersprüchlich, weil ...",
        sourceIds: ["r-reiseweltmeister", "r-bananenrepublik-video", "r-frauenland-video", "r-wohnraumvergabe"],
        conceptGroups: [
          {
            label: "soziale Leistungen oder Absicherung",
            variants: ["soziale sicherheit", "arbeit", "betreuung", "versorgung", "urlaub", "wohnung", "kita"]
          },
          {
            label: "staatliche Steuerung oder Kontrolle",
            variants: ["staatlich gesteuert", "kontrolle", "zuteilung", "planung", "behoerden", "politisch reguliert"]
          },
          {
            label: "Mangel, Privilegien oder Westvergleich",
            variants: ["mangel", "wartezeit", "knappheit", "privilegien", "westvergleich", "wahlfreiheit", "konsum"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Der DDR-Alltag war ambivalent: Es gab soziale Sicherheiten wie Arbeit, Betreuung oder organisierte Urlaubsangebote. Zugleich waren viele Lebensbereiche staatlich gesteuert, von Zuteilungen und Mangel geprägt und ständig dem Vergleich mit dem Westen ausgesetzt."
      },
      {
        id: "q-alltag-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum ist der Titel 'Bananenrepublik' für die DDR-Geschichte so zugespitzt und aussagekräftig?",
        help:
          "Nenne mindestens drei Sinnschichten: Konsum, Symbolik und Westvergleich.",
        placeholder: "Der Titel ist zugespitzt, weil ...",
        sourceIds: ["r-bananenrepublik-video", "r-bananenrepublik-pdf"],
        conceptGroups: [
          {
            label: "Mangel oder Versorgungslücken",
            variants: ["mangel", "knappheit", "versorgungsluecke", "selten", "nicht verfuegbar"]
          },
          {
            label: "Banane als Symbol für Konsumwünsche",
            variants: ["banane als symbol", "konsum", "sehnsucht", "westprodukt", "alltagswunsch"]
          },
          {
            label: "Vergleich mit dem Westen oder Legitimationsproblem",
            variants: ["westvergleich", "vergleich mit dem westen", "legitimationsproblem", "wohlstand", "propaganda gegen realitaet"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Der Titel ist deshalb zugespitzt, weil eine scheinbar banale Frucht zum Symbol für Mangel, Konsumsehnsucht und den ständigen Vergleich mit dem Westen wurde. Er zeigt, dass sich politische Legitimation im Alltag auch an Versorgung, Auswahl und erlebter Lebensqualität entschied."
      },
      {
        id: "q-alltag-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Nimm Stellung zur Aussage: 'Die soziale Sicherheit der DDR machte den Mangel an Freiheit weitgehend wett.' Prüfe die Aussage mithilfe der Materialien zu Reisen, Arbeit, Wohnen, Frauen und Konsum.",
        help:
          "Erwartet wird eine abwägende Antwort, keine reine Pro-oder-Contra-Behauptung.",
        placeholder: "Die Aussage greift zu kurz, weil ...",
        teacherPrompt:
          "Lass vor dem Schreiben mindestens drei Spannungspaare sammeln: Sicherheit vs. Kontrolle, Gleichstellung vs. Doppelbelastung, Versorgung vs. Mangel.",
        commonPitfall:
          "Häufig kippen Antworten in ein pauschales Gesamturteil, ohne einzelne Lebensbereiche differenziert auszuwerten.",
        sourceIds: ["r-reiseweltmeister", "r-arbeitsalltag", "r-frauenland-video", "r-wohnraumvergabe", "r-geld-regiert-ddr"],
        minWords: 120,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["reisen", "arbeitsalltag", "frauenland", "wohnraum", "bananenrepublik", "geld"],
        rubric: [
          { concept: "soziale Leistungen", keywords: ["betreuung", "arbeit", "sicherheit", "versorgung", "urlaub", "kita"] },
          { concept: "Mangel oder Abhängigkeit", keywords: ["mangel", "wartezeit", "knappheit", "privileg", "devisen", "abhaengigkeit"] },
          { concept: "fehlende Freiheit oder Kontrolle", keywords: ["reisefreiheit", "wahlfreiheit", "kontrolle", "staat", "einschraenkung"] },
          { concept: "differenzierende Abwägung", keywords: ["einerseits", "andererseits", "zugleich", "dennoch", "allerdings"] },
          { concept: "konkrete Materialbezüge", keywords: ["bananenrepublik", "frauenland", "reiseweltmeister", "wohnraum", "arbeitsalltag"] },
          { concept: "Urteil zur Leitthese", keywords: ["macht nicht wett", "kompensiert nicht", "nur teilweise", "greift zu kurz", "nicht ausreichend"] }
        ],
        modelAnswer:
          "Die Aussage ist zu pauschal. Die DDR bot in Teilbereichen soziale Sicherheiten, etwa bei Erwerbsarbeit, Kinderbetreuung oder staatlich organisiertem Urlaub. Gleichzeitig blieb Bewegungsfreiheit massiv eingeschränkt, Konsum war häufig knapp, und selbst Wohnen oder Reisen waren politisch reguliert. Gerade deshalb muss man die DDR als Kombination aus sozialer Sicherung, Mangel und Unfreiheit beschreiben."
      },
      {
        id: "q-alltag-4",
        type: "drag-order",
        challenge: "Strukturierung",
        prompt:
          "Ordne die Kette so, dass aus dem sozialstaatlichen Versprechen der DDR ein Alltags- und Legitimationsproblem wird.",
        help:
          "Die Reihenfolge soll vom Versprechen über die Steuerung bis zum politischen Problem führen.",
        sourceIds: ["r-reiseweltmeister", "r-reisen-docx"],
        items: [
          {
            id: "versprechen",
            label: "Der Staat verspricht Versorgung, Arbeit, Wohnung und planbare Lebensläufe.",
            detail: "Alltagssicherheit ist ein zentrales Element der sozialistischen Selbstlegitimation."
          },
          {
            id: "steuerung",
            label: "Zugang zu Wohnen, Reisen und Konsum wird über Betriebe, Behörden und Zuteilung gesteuert.",
            detail: "Alltag ist damit nie rein privat, sondern organisatorisch und politisch reguliert."
          },
          {
            id: "mangel",
            label: "Knappheit, Wartezeiten und Privilegien machen die Grenzen des Systems erfahrbar.",
            detail: "Gerade im scheinbar Kleinen entsteht Frustration über Ungleichheit und Mangel."
          },
          {
            id: "legitimation",
            label: "Im Vergleich mit dem Westen wird Alltag zur Frage politischer Glaubwürdigkeit und Legitimation.",
            detail: "Versorgung und Freiheit entscheiden mit über die Bewertung des Systems."
          }
        ],
        correctOrder: ["versprechen", "steuerung", "mangel", "legitimation"],
        explanation:
          "Die DDR legitimierte sich stark über Alltag und Versorgung. Gerade deshalb wurden staatliche Steuerung, Mangel und Westvergleich politisch explosiv.",
        modelAnswer:
          "Die Logik reicht vom sozialstaatlichen Versprechen über die politische Organisation des Alltags zu erfahrbaren Grenzen wie Knappheit und Privilegien. Daraus entstand ein Legitimationsproblem, weil Alltagserfahrungen direkt auf die Glaubwürdigkeit des Systems zurückwirkten."
      },
      {
        id: "q-alltag-5",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Was zeigt die Frauenpolitik der DDR besonders deutlich über die Ambivalenz des Systems?",
        help:
          "Nenne mindestens drei Aspekte: Erwerbsarbeit, soziale Infrastruktur und Grenzen der Gleichstellung.",
        placeholder: "Die Frauenpolitik zeigt die Ambivalenz der DDR, weil ...",
        sourceIds: ["r-frauenland-video", "r-frauenland-pdf"],
        conceptGroups: [
          {
            label: "hohe Erwerbsbeteiligung oder staatliche Förderung",
            variants: ["erwerbsarbeit", "berufstaetig", "kinderbetreuung", "kita", "foerderung"]
          },
          {
            label: "Doppelbelastung oder traditionelle Rollenreste",
            variants: ["doppelbelastung", "haushalt", "familie", "zusatzbelastung", "traditionelle rollen"]
          },
          {
            label: "Gleichstellung nicht gleich Freiheit oder Selbstbestimmung",
            variants: ["nicht volle gleichstellung", "keine volle freiheit", "staatliche lenkung", "selbstbestimmung begrenzt", "ambivalent"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Die Frauenpolitik der DDR zeigt die Ambivalenz des Systems besonders gut: Frauen waren früh und breit in Erwerbsarbeit eingebunden und wurden durch Kinderbetreuung unterstützt. Gleichzeitig blieb die Doppelbelastung bestehen, und Gleichstellung bedeutete nicht automatisch individuelle Selbstbestimmung oder das Ende traditioneller Rollenmuster."
      },
      {
        id: "q-alltag-6",
        type: "open-analysis",
        challenge: "Deutung",
        prompt:
          "Analysiere, warum Alltag und Konsum in der DDR ein zentrales Feld politischer Legitimation wurden. Zeige, warum gerade scheinbar 'kleine Dinge' historisch bedeutsam sind.",
        help:
          "Arbeite mit konkreten Beispielen aus Wohnen, Reisen, Konsum, Arbeit oder Geschlechterpolitik.",
        placeholder: "Alltag und Konsum waren politisch zentral, weil ...",
        teacherPrompt:
          "Lass die Lernenden erst sammeln, welche Alltagsbereiche politisch gesteuert waren, und daraus dann eine Leitthese formulieren.",
        commonPitfall:
          "Oft werden nur Einzelbeispiele genannt, ohne zu erklären, warum Versorgung und Alltag für die Stabilität oder Krise des Systems so wichtig waren.",
        sourceIds: ["r-bananenrepublik-video", "r-wohnraumvergabe", "r-arbeitsalltag", "r-reiseweltmeister", "r-geld-regiert-ddr"],
        minWords: 130,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["bananenrepublik", "wohnraum", "reisen", "arbeit", "geld"],
        rubric: [
          { concept: "Alltag als politisch regulierter Raum", keywords: ["staat", "reguliert", "kontrolle", "planung", "alltag"] },
          { concept: "Versorgung oder soziale Sicherheit", keywords: ["versorgung", "arbeit", "sozial", "urlaub", "wohnung"] },
          { concept: "Mangel, Knappheit oder Wartezeiten", keywords: ["mangel", "knappheit", "wartezeit", "devisen", "defizit"] },
          { concept: "Westvergleich oder Legitimation", keywords: ["westen", "vergleich", "legitimation", "wohlstand", "konsum"] },
          { concept: "historische Deutung", keywords: ["deshalb", "entscheidend", "zeigt", "nicht nur", "insgesamt"] }
        ],
        modelAnswer:
          "Alltag und Konsum waren in der DDR politisch zentral, weil sich Herrschaft nicht nur in Ideologie, sondern auch in der erlebten Lebensqualität bewähren musste. Wohnung, Arbeit, Urlaub oder Konsumgüter wurden staatlich organisiert und damit zu Legitimitätsfragen. Gerade Mangel, Wartezeiten und der ständige Vergleich mit dem Westen machten sichtbar, dass politische Stabilität im Alltag gewonnen, aber auch verloren werden konnte."
      },
      {
        id: "q-alltag-7",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Warum war Reisefreiheit in der DDR eine besonders heikle Legitimitätsfrage?",
        help:
          "Nenne mindestens drei Aspekte: Freiheit, Kontrolle nach außen und Vergleich mit dem Westen.",
        placeholder: "Reisefreiheit war politisch heikel, weil ...",
        sourceIds: ["r-reiseweltmeister", "r-reisen-docx", "r-geld-regiert-ddr"],
        conceptGroups: [
          {
            label: "individuelle Freiheit oder Selbstbestimmung",
            variants: ["freiheit", "selbstbestimmung", "bewegungsfreiheit", "reisen duerfen", "eigenes leben", "ausreise"]
          },
          {
            label: "staatliche Kontrolle von Kontakten, Devisen oder Abwanderung",
            variants: ["kontrolle", "devisen", "kontakte nach aussen", "abwanderung", "genehmigung", "staat steuerte"]
          },
          {
            label: "Westvergleich oder Unzufriedenheit",
            variants: ["westvergleich", "unzufriedenheit", "sehnsucht", "ungleichheit", "westen", "legitimation"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Reisefreiheit war in der DDR heikel, weil sie unmittelbar mit persönlicher Freiheit zusammenhing. Zugleich wollte der Staat Kontakte nach außen, Devisenströme und mögliche Abwanderung kontrollieren. Gerade im Vergleich mit westlicher Bewegungsfreiheit wurde daraus ein ernstes Legitimationsproblem."
      },
      {
        id: "q-alltag-8",
        type: "open-analysis",
        challenge: "Urteil",
        prompt:
          "Prüfe, ob alltagsgeschichtliche Perspektiven die DDR 'milder' erscheinen lassen oder ob sie die Diktatur gerade genauer sichtbar machen.",
        help:
          "Verbinde Alltag, soziale Praxis, Herrschaft und Freiheitsgrenzen in einer abwägenden Antwort.",
        placeholder: "Alltagsgeschichte macht die DDR nicht einfach milder, sondern ...",
        teacherPrompt:
          "Fordere die Lernenden dazu auf, erst konkrete Alltagsfelder zu nennen und erst danach ein Gesamturteil zu formulieren.",
        commonPitfall:
          "Oft wird 'Alltag' mit 'Unpolitisch' verwechselt. Genau diese Trennung soll die Antwort historisch hinterfragen.",
        sourceIds: ["r-bananenrepublik-video", "r-frauenland-video", "r-wohnraumvergabe", "r-reiseweltmeister", "r-arbeitsalltag"],
        minWords: 140,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["reisen", "bananenrepublik", "wohnraum", "frauenland", "arbeitsalltag", "versorgung"],
        rubric: [
          { concept: "Alltag als historische Erfahrungsebene", keywords: ["alltag", "lebenswelt", "erfahrung", "praxis", "alltagsgeschichte"] },
          { concept: "soziale Leistungen oder Stabilisierung", keywords: ["sicherheit", "betreuung", "arbeit", "wohnung", "versorgung"] },
          { concept: "politische Steuerung oder Freiheitsgrenzen", keywords: ["kontrolle", "steuerung", "reise", "wahlfreiheit", "abhaengigkeit"] },
          { concept: "Ambivalenz statt Verharmlosung", keywords: ["ambivalent", "nicht harmlos", "zugleich", "einerseits", "andererseits"] },
          { concept: "Urteil zur Diktaturfrage", keywords: ["diktatur", "praeziser", "sichtbarer", "nicht milder", "herrschaft"] }
        ],
        modelAnswer:
          "Alltagsgeschichte macht die DDR nicht einfach milder, sondern genauer. Sie zeigt, dass Diktatur nicht nur in Mauer und Stasi bestand, sondern auch in der politischen Regulierung von Wohnen, Reisen, Arbeit und Konsum. Gerade weil soziale Leistungen und praktische Sicherheiten mit Kontrolle, Mangel und Freiheitsgrenzen verbunden waren, wird die Herrschaftsform im Alltag oft präziser sichtbar."
      }
    ]
  },
  {
    id: "herrschaft",
    step: "4",
    title: "Herrschaft, Mauer, Grenze und Überwachung",
    era: "1950er bis 1980er Jahre",
    intro:
      "Die DDR stabilisierte sich nicht nur über soziale Angebote, sondern auch über Grenzregime, militärische Sicherung, Überwachung und politische Einschüchterung. Diese Station untersucht die Werkzeuge der Machtsicherung.",
    goal:
      "Du kannst erklären, wie Mauer, Grenzsystem, NVA, Stasi und Haftorte zusammenwirkten.",
    route:
      "Arbeite vom äußeren Grenzregime nach innen: erst Mauer und Grenze, dann Militär, Geheimdienst und Haft.",
    teacherNote:
      "Die Station eignet sich gut für ein Strukturmodell diktatorischer Herrschaft.",
    teacherToolkit: {
      duration: "45 Minuten",
      socialForms: [
        "analytische Sicherung in einem Herrschaftsdiagramm",
        "Partnerarbeit zur Trennung von offizieller Sprache und realer Funktion",
        "Transferfrage als strukturierende Schreibaufgabe"
      ],
      assessmentFocus: [
        "Herrschaft nicht nur als Gewalt, sondern als System lesen",
        "Grenze, Überwachung und Haft miteinander verknüpfen",
        "offizielle Legitimationssprache kritisch entlarven"
      ],
      misconceptions: [
        "die Mauer habe nur symbolische Bedeutung gehabt",
        "Stasi und Kriminalpolizei seien fast dasselbe gewesen",
        "Grenzsicherung und innere Repression hätten nichts miteinander zu tun"
      ],
      product:
        "Strukturmodell 'Äußerer Schutz - innere Kontrolle - abschreckende Sanktion'.",
      extension:
        "Als Zusatz kann der Begriff 'Sicherheitsstaat' gegen 'Diktatur' begrifflich differenziert werden."
    },
    visual: {
      src: "assets/module-images/berliner-mauer-final.jpg",
      alt: "Grenzanlage mit Wachturm an der Berliner Mauer",
      sourceLabel: "Vorschaubild aus Eingemauert: Die innerdeutsche Grenze"
    },
    prompts: [
      "Achte auf den Unterschied zwischen offizieller Begründung und realer Funktion.",
      "Frage immer: Wovor schützte das System sich - und wen kontrollierte es?",
      "Verbinde räumliche Kontrolle mit psychologischer Wirkung.",
      "Vergleiche die zusätzlichen Videoquellen dazu, wie Mauer und Mauerbau begründet und erinnert werden."
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
        tags: ["Dropbox", "Pflicht", "Militär"]
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
        title: "Das Stasi-Gefängnis Dresden",
        focus: "politische Haft, Verhör und Einschüchterung im Innern",
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
      },
      {
        id: "r-youtube-berliner-mauer",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "Berliner Mauer: zusätzliche Videoquelle",
        focus: "ergänzende Perspektive auf Funktion, Symbolik und Wahrnehmung der Berliner Mauer",
        link: "https://www.youtube.com/watch?v=jlbAUFvh04k&t=184s",
        tags: ["YouTube", "Vertiefung", "Mauer"]
      },
      {
        id: "r-youtube-mauerbau",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "Mauerbau 1961: zusätzliche Videoquelle",
        focus: "ergänzende Darstellung der Zuspitzung um den Bau der Berliner Mauer im August 1961",
        link: "https://www.youtube.com/watch?v=OhV0wje9I64",
        tags: ["YouTube", "Vertiefung", "Mauerbau"]
      }
    ],
    questions: [
      {
        id: "q-herrschaft-1",
        type: "short-text",
        challenge: "Faktencheck",
        prompt:
          "Erkläre die reale Funktion des Mauerbaus vom 13. August 1961 aus Sicht der DDR-Führung.",
        help:
          "Nenne mindestens drei Aspekte: Fluchtstopp, Stabilisierung und Herrschaftssicherung.",
        placeholder: "Die Mauer diente real vor allem dazu, ...",
        sourceIds: ["r-berliner-mauer", "r-eingemauert", "r-ein-tag-im-august", "r-youtube-mauerbau"],
        conceptGroups: [
          {
            label: "Stopp von Flucht oder Abwanderung",
            variants: ["massenflucht", "abwanderung", "republikflucht", "flucht stoppen", "weggehen verhindern", "abfluss"]
          },
          {
            label: "wirtschaftliche oder demografische Stabilisierung",
            variants: ["arbeitskraefte", "stabilisierung", "wirtschaft", "fachkraefte", "bevoelkerung", "verlust stoppen"]
          },
          {
            label: "Herrschaftssicherung oder Kontrollgewinn",
            variants: ["herrschaft", "kontrolle", "macht sichern", "sed", "regime stabilisieren", "kontrollverlust beenden"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Der Mauerbau sollte vor allem die Fluchtbewegung stoppen, den Verlust von Arbeitskräften und Fachpersonal eindämmen und damit die politische Stabilität des Regimes sichern. Die offizielle Schutzwall-Rhetorik verdeckte, dass sich die Maßnahme vor allem gegen die eigene Bevölkerung richtete."
      },
      {
        id: "q-herrschaft-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erkläre kurz, was die Stasi von einer 'normalen' Kriminalpolizei unterschied.",
        help:
          "Nenne mindestens drei Aspekte. Synonyme für Überwachung, Informanten und Einschüchterung werden erkannt.",
        placeholder: "Die Stasi unterschied sich von einer normalen Polizei dadurch, dass ...",
        sourceIds: ["r-veb-horch-und-guck", "r-stasi-gefaengnis"],
        conceptGroups: [
          {
            label: "politische Überwachung oder präventive Kontrolle",
            variants: ["ueberwachung", "praeventiv", "politische kontrolle", "vorbeugend", "staatsfeinde beobachten"]
          },
          {
            label: "Informantennetz",
            variants: ["informanten", "inoffizielle mitarbeiter", "im", "spitzel", "netzwerk"]
          },
          {
            label: "Einschüchterung, Druck oder Selbstzensur",
            variants: ["einschuechterung", "angst", "druck", "selbstzensur", "verhoer", "abschreckung"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Die Stasi war keine normale Kriminalpolizei, sondern ein politisches Überwachungsinstrument. Sie arbeitete mit einem dichten Netz informeller Mitarbeiter, beobachtete Menschen vorbeugend und erzeugte über Verhöre, Drohung und Angst ein Klima der Selbstzensur."
      },
      {
        id: "q-herrschaft-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Erkläre, wie Mauer, Grenzregime, NVA, Stasi und politische Haft zusammen ein Herrschaftssystem bildeten. Zeige, dass diese Elemente sich gegenseitig stützten.",
        help:
          "Gesucht ist eine strukturierende Analyse, kein bloßes Aufzaehlen einzelner Institutionen.",
        placeholder: "Die einzelnen Elemente bildeten ein System, weil ...",
        teacherPrompt:
          "Lass die Lernenden zunächst Pfeilverbindungen zwischen Grenze, NVA, Stasi und Haft einzeichnen, bevor sie schreiben.",
        commonPitfall:
          "Viele Antworten sammeln Institutionen nebeneinander, erklären aber nicht ihr wechselseitiges Zusammenspiel.",
        sourceIds: ["r-berliner-mauer", "r-eingemauert", "r-nva", "r-veb-horch-und-guck", "r-stasi-gefaengnis", "r-youtube-berliner-mauer"],
        minWords: 115,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["mauer", "grenze", "nva", "stasi", "gefaengnis", "horch und guck"],
        rubric: [
          { concept: "räumliche Abriegelung", keywords: ["mauer", "grenze", "flucht", "abriegelung", "schiessbefehl"] },
          { concept: "militärische Absicherung", keywords: ["nva", "wehrpflicht", "militaer", "bewaffnet", "verteidigung"] },
          { concept: "innere Überwachung", keywords: ["stasi", "informanten", "ueberwachung", "kontrolle"] },
          { concept: "Repression oder Haft", keywords: ["haft", "gefaengnis", "verhoer", "einschuechterung", "politische gefangene"] },
          { concept: "Systemcharakter", keywords: ["zusammen", "stuetzen", "erganzen", "herrschaftssystem", "wechselseitig"] },
          { concept: "offizielle Begründung versus reale Funktion", keywords: ["schutzwall", "offiziell", "real", "tatsaechlich", "herrschaftssicherung"] }
        ],
        modelAnswer:
          "Die DDR sicherte sich nicht nur an der Grenze, sondern auch im Innern. Die Mauer und die innerdeutsche Grenze verhinderten Flucht, die NVA und andere bewaffnete Strukturen garantierten militärische Absicherung, die Stasi überwachte potentielle Abweichung, und politische Haft zeigte, was bei offenem Widerstand drohte. Gerade im Zusammenspiel entstand ein stabiles Herrschaftssystem aus Kontrolle, Abschreckung und Abschottung."
      },
      {
        id: "q-herrschaft-4",
        type: "drag-order",
        challenge: "Systemanalyse",
        prompt:
          "Ordne die Elemente so, dass aus Fluchtkrise ein gestuftes Herrschafts- und Repressionssystem wird.",
        help:
          "Die Reihenfolge soll vom Problem über die äußere Abriegelung bis zur inneren Sanktion führen.",
        sourceIds: ["r-berliner-mauer", "r-eingemauert", "r-nva"],
        items: [
          {
            id: "fluchtkrise",
            label: "Die anhaltende Fluchtbewegung setzt die DDR politisch und wirtschaftlich unter Druck.",
            detail: "Das Regime erlebt einen offenen Verlust an Menschen und Glaubwürdigkeit."
          },
          {
            id: "abriegelung",
            label: "Mauer, Sperranlagen und Grenzräume schließen die direkte Fluchtmöglichkeit.",
            detail: "Die äußere Abriegelung soll die offene Lücke des Systems schließen."
          },
          {
            id: "militaer",
            label: "Grenztruppen, bewaffnete Sicherung und militärische Präsenz machen das Regime durchsetzbar.",
            detail: "Die Grenze wird nicht nur gebaut, sondern ständig bewacht und verteidigt."
          },
          {
            id: "ueberwachung",
            label: "Stasi und Informantennetz überwachen im Innern mögliche Abweichung und Opposition.",
            detail: "Kontrolle endet nicht an der Grenze, sondern greift in die Gesellschaft hinein."
          },
          {
            id: "haft",
            label: "Verhör, Haft und Einschüchterung markieren die Sanktion bei offenem Widerstand.",
            detail: "Repression erzeugt Abschreckung weit über einzelne Fälle hinaus."
          }
        ],
        correctOrder: ["fluchtkrise", "abriegelung", "militaer", "ueberwachung", "haft"],
        explanation:
          "Aus der Fluchtkrise entstand kein bloßes Bauprojekt, sondern ein gestuftes System aus Abriegelung, militärischer Sicherung, innerer Überwachung und abschreckender Sanktion.",
        modelAnswer:
          "Das Herrschaftssystem reagierte auf Flucht zunächst mit äußerer Abriegelung und militärischer Sicherung. Es wurde aber erst vollständig wirksam, weil Überwachung und Haft auch im Innern Angst, Anpassung und Selbstzensur erzeugten."
      },
      {
        id: "q-herrschaft-5",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum war politische Haft in der DDR mehr als nur nachträgliche Bestrafung einzelner Taten?",
        help:
          "Nenne mindestens drei Aspekte: Abschreckung, Kontrolle und Wirkung auf die Gesellschaft.",
        placeholder: "Politische Haft war mehr als Bestrafung, weil ...",
        sourceIds: ["r-stasi-gefaengnis", "r-veb-horch-und-guck"],
        conceptGroups: [
          {
            label: "Abschreckung",
            variants: ["abschreckung", "angst", "warnung", "signalwirkung", "einschuechterung"]
          },
          {
            label: "Herrschaftssicherung oder Kontrolle",
            variants: ["herrschaft", "kontrolle", "staat sichern", "macht sichern", "opposition unterdruecken"]
          },
          {
            label: "gesellschaftliche Wirkung wie Schweigen oder Selbstzensur",
            variants: ["selbstzensur", "schweigen", "anpassung", "gesellschaft", "klima der angst"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Politische Haft war mehr als Strafe, weil sie der Abschreckung diente, Opposition kontrollieren sollte und weit über die Inhaftierten hinaus wirkte. Durch Angst, Verhöre und das Wissen um mögliche Konsequenzen entstand ein Klima der Anpassung und Selbstzensur."
      },
      {
        id: "q-herrschaft-6",
        type: "open-analysis",
        challenge: "Begriffsurteil",
        prompt:
          "Prüfe, ob der Begriff 'Sicherheitsstaat' ausreicht, um die Herrschaftspraxis der DDR zu beschreiben, oder ob 'Diktatur' präziser ist.",
        help:
          "Vergleiche offizielle Selbstbegründung, reale Kontrollpraxis und die Reichweite staatlicher Eingriffe.",
        placeholder: "Der Begriff Sicherheitsstaat reicht nur teilweise aus, weil ...",
        teacherPrompt:
          "Lass zuerst sammeln, wie der Staat sich selbst legitimierte, und stelle dem dann konkrete Eingriffsformen gegenüber.",
        commonPitfall:
          "Viele Antworten wählen nur einen Begriff, ohne zu prüfen, welche Aspekte er erfasst und welche er verdeckt.",
        sourceIds: ["r-berliner-mauer", "r-eingemauert", "r-veb-horch-und-guck", "r-stasi-gefaengnis"],
        minWords: 130,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["schutzwall", "stasi", "grenze", "haft", "sicherheit"],
        rubric: [
          { concept: "offizielle Sicherheitsbegründung", keywords: ["sicherheit", "schutz", "schutzwall", "offiziell", "staatsschutz"] },
          { concept: "reale Diktaturpraxis", keywords: ["diktatur", "kontrolle", "repression", "haft", "ueberwachung"] },
          { concept: "Eingriff in Alltag und Freiheit", keywords: ["freiheit", "reise", "angst", "selbstzensur", "eingriff"] },
          { concept: "Begriffsvergleich", keywords: ["präziser", "reicht nicht", "teilweise", "deckt ab", "verdeckt"] },
          { concept: "Urteil", keywords: ["insgesamt", "deshalb", "ich beurteile", "angemessener", "überzeugender"] }
        ],
        modelAnswer:
          "Der Begriff Sicherheitsstaat beschreibt zwar die offizielle Selbstbegründung der DDR, reicht aber allein nicht aus. Denn die Sicherung richtete sich nicht nur gegen äußere Gefahren, sondern vor allem gegen die eigene Bevölkerung. Mauer, Stasi, politische Haft und umfassende Kontrolle sprechen deshalb dafür, die DDR präziser als Diktatur mit Sicherheitsrhetorik zu beschreiben."
      },
      {
        id: "q-herrschaft-7",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum war die Formel 'antifaschistischer Schutzwall' eine irreführende politische Sprache?",
        help:
          "Nenne mindestens drei Aspekte: offizieller Feindbegriff, tatsächliche Funktion und propagandische Verschleierung.",
        placeholder: "Die Formel war irreführend, weil ...",
        sourceIds: ["r-berliner-mauer", "r-eingemauert", "r-ein-tag-im-august", "r-youtube-mauerbau"],
        conceptGroups: [
          {
            label: "offizielle Schutz- oder Feindrhetorik",
            variants: ["schutzwall", "antifaschistisch", "feindbild", "westen", "offizielle sprache", "propaganda"]
          },
          {
            label: "tatsächliche Funktion gegen die eigene Bevölkerung",
            variants: ["eigene bevoelkerung", "flucht verhindern", "abriegelung", "nicht gegen faschisten", "weggehen verhindern", "republikflucht"]
          },
          {
            label: "Verschleierung von Herrschaft und Repression",
            variants: ["verschleiern", "repression", "herrschaft", "verdeckte funktion", "legitimieren", "propagandistisch"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Die Formel war irreführend, weil sie einen Schutz nach außen behauptete, obwohl die Mauer vor allem die eigene Bevölkerung am Weggehen hindern sollte. Der antifaschistische Begriff legitimierte die Maßnahme propagandistisch und verdeckte ihren eigentlichen Charakter als Instrument der Herrschaftssicherung."
      },
      {
        id: "q-herrschaft-8",
        type: "open-analysis",
        challenge: "Vertiefung",
        prompt:
          "Prüfe, ob die DDR-Herrschaft nur auf Zwang beruhte oder ob sie zusätzlich auf Gewöhnung, Anpassung und begrenzter Zustimmung aufbaute.",
        help:
          "Die Antwort soll Zwang nicht relativieren, aber erklären, warum Diktaturen ohne Alltagsstabilisierung schwer dauerhaft funktionieren.",
        placeholder: "Die DDR beruhte nicht nur auf Zwang, sondern auch auf ...",
        teacherPrompt:
          "Lass zuerst Zwangsinstrumente sammeln und danach überlegen, warum Herrschaft trotzdem mehr als blanke Gewalt braucht.",
        commonPitfall:
          "Manche Antworten verwechseln Anpassung mit Zustimmung oder machen aus sozialen Leistungen vorschnell eine Legitimation ohne Zwang.",
        sourceIds: ["r-veb-horch-und-guck", "r-berliner-mauer", "r-stasi-gefaengnis", "r-nva"],
        minWords: 140,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["stasi", "mauer", "haft", "kontrolle", "anpassung", "sicherheit"],
        rubric: [
          { concept: "Zwangs- und Repressionsmittel", keywords: ["mauer", "stasi", "haft", "grenze", "repression"] },
          { concept: "Alltagsanpassung oder Gewöhnung", keywords: ["anpassung", "gewoehnung", "normalisierung", "alltag", "selbstzensur"] },
          { concept: "Angst und Abschreckung", keywords: ["angst", "abschreckung", "druck", "einschuechterung", "verhoer"] },
          { concept: "begrenzte Zustimmung oder Stabilisierung", keywords: ["zustimmung", "stabilisierung", "soziale sicherheit", "loyalitaet", "mitmachen"] },
          { concept: "abwägendes Urteil", keywords: ["nicht nur", "zugleich", "einerseits", "andererseits", "insgesamt"] }
        ],
        modelAnswer:
          "Die DDR-Herrschaft beruhte eindeutig auf Zwang, aber nicht ausschließlich darauf. Mauer, Stasi und Haft setzten klare Grenzen und erzeugten Angst. Zugleich funktionierte das System im Alltag auch über Gewöhnung, Anpassung und begrenzte Stabilisierung, etwa wenn Menschen aus Angst, Pragmatismus oder sozialer Absicherung mitgingen. Gerade diese Verbindung erklärt die Dauerhaftigkeit der Herrschaft genauer als ein reines Gewaltmodell."
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
      "Du kannst Gemeinsamkeiten und Unterschiede zwischen 17. Juni 1953, Ungarn 1956, Prager Frühling 1968 und Solidarnosc benennen und historisch deuten.",
    route:
      "Arbeite chronologisch, achte aber besonders auf Wiederholungsmuster: Reformforderung, Kontrollverlust, sowjetische Reaktion, Wirkung auf spätere Opposition.",
    teacherNote:
      "Eine gute Station für Vergleichsdiagramme, Krisenraster oder Vorarbeit für 1989.",
    teacherToolkit: {
      duration: "50 bis 60 Minuten",
      socialForms: [
        "Gruppenpuzzle nach Krisenfällen",
        "gemeinsames Krisenraster im Plenum",
        "individuelle Transferfrage mit Fallvergleich"
      ],
      assessmentFocus: [
        "soziale und politische Forderungen zusammendenken",
        "sowjetische Interventionslogik verstehen",
        "Lernprozesse für 1989 historisch plausibel machen"
      ],
      misconceptions: [
        "alle Ostblockkrisen seien gleich verlaufen",
        "der Westen habe die Bewegungen militärisch unterstützt",
        "1989 sei ohne Vorgeschichte plötzlich möglich geworden"
      ],
      product:
        "Vergleichender Essay zu zwei Krisen und ihrer Bedeutung für 1989.",
      extension:
        "Die Station lässt sich gut mit einem Kontinuum 'Reform im System' bis 'Systembruch' weiterführen."
    },
    visual: {
      src: "assets/module-images/prager-final2.jpg",
      alt: "Protestszenen und Panzer im Kontext des Prager Frühlings",
      sourceLabel: "Vorschaubild zur Ressource Prager Frühling"
    },
    prompts: [
      "Frage bei jedem Fall: Wer protestiert? Was wird gefordert? Wer greift ein?",
      "Achte auf die Spannung zwischen sozialistischen Reformideen und sowjetischer Blocklogik.",
      "Überlege, welche Erfahrungen später für 1989 wichtig wurden."
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
        title: "Prager Frühling 1968",
        focus: "Reformsozialismus, Dubcek und die Grenzen des Systems",
        link: "https://www.dropbox.com/scl/fi/1oy1i4sb2date7chvix69/Prager-Fr-hling-Historische-Ereignisse-mit-Mirko-Drotschmann.mp4?rlkey=t1b1p9i5i00jsolqn2s1b34v9&e=1&st=o0ax6m7a&dl=0",
        tags: ["Dropbox", "Pflicht", "CSSR"]
      },
      {
        id: "r-17-juni-docx",
        bucket: "Lokale Materialien",
        type: "DOCX",
        title: "Fragen zum Film über den 17. Juni 1953",
        focus: "leitende Fragen zu Normenerhöhung, Protest und sowjetischer Reaktion",
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
        title: "Fragen: Der Prager Frühling 1968",
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
        type: "short-text",
        challenge: "Vergleich",
        prompt:
          "Beschreibe die gemeinsamen Grundmuster der Ostblockkrisen von 1953 bis 1981.",
        help:
          "Nenne mindestens drei Elemente: soziale und politische Forderungen, Blockkontrolle und Angst vor Ausstrahlung.",
        placeholder: "Die Krisen ähneln sich darin, dass ...",
        sourceIds: ["r-17-juni-video", "r-ungarn-video", "r-prag-video", "r-solidarnosc-docx"],
        conceptGroups: [
          {
            label: "soziale und politische Forderungen greifen ineinander",
            variants: ["soziale forderungen", "politische forderungen", "mitsprache", "freiheit", "reform", "arbeiter"]
          },
          {
            label: "Grenzen sowjetischer oder parteistaatlicher Blockkontrolle",
            variants: ["sowjetisch", "blockkontrolle", "intervention", "partei", "niederschlagung", "kriegsrecht"]
          },
          {
            label: "Angst vor Vorbildwirkung oder Dominoeffekt",
            variants: ["vorbildwirkung", "dominoeffekt", "ueberspringen", "ansteckung", "andere staaten", "ausstrahlung"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Die Ostblockkrisen verbanden meist soziale Missstände mit politischen Forderungen nach Mitsprache oder Reform. Sie stießen regelmäßig an die Grenzen sowjetischer oder parteistaatlicher Kontrolle, weil die Führung eine Ausstrahlung auf andere Länder fürchtete."
      },
      {
        id: "q-ostblock-2",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum war der Prager Frühling für die sowjetische Führung besonders bedrohlich?",
        help:
          "Nenne mindestens drei Elemente: Reformsozialismus, Vorbildwirkung und Kontrollverlust.",
        placeholder: "Der Prager Frühling war besonders bedrohlich, weil ...",
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
            label: "Vorbildwirkung für andere Ostblockstaaten",
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
          "Der Prager Frühling war für Moskau besonders gefährlich, weil er den Sozialismus nicht abschaffen, sondern von innen reformieren wollte. Gerade dadurch war er attraktiv für andere Ostblockgesellschaften. Wenn dieses Modell Erfolg gehabt hätte, wäre die sowjetische Kontrolle über den ganzen Block ins Wanken geraten."
      },
      {
        id: "q-ostblock-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Vergleiche zwei Krisen deiner Wahl aus dieser Station und bewerte, ob sie eher Warnsignale oder Lernprozesse für die Entwicklungen von 1989 waren.",
        help:
          "Du musst nicht alle vier Fälle behandeln. Wichtiger ist ein sauberer Vergleich mit begründetem Urteil.",
        placeholder: "Wenn man zum Beispiel den 17. Juni mit dem Prager Frühling vergleicht, wird deutlich, dass ...",
        teacherPrompt:
          "Fordere zu Beginn einen expliziten Vergleichsmassstab ein: Akteure, Forderungen, Reaktion des Machtzentrums und Wirkungsgeschichte.",
        commonPitfall:
          "Oft werden zwei Fälle parallel nacherzählt, ohne dass eine echte Vergleichslogik oder ein Urteil zur Bedeutung für 1989 entsteht.",
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
          { concept: "Bedeutung für 1989", keywords: ["1989", "lernerfahrung", "warnung", "erinnerung", "spaetere opposition"] },
          { concept: "eigenes Urteil", keywords: ["ich bewerte", "entscheidend", "meiner ansicht", "insgesamt", "deshalb"] },
          { concept: "Kontinuität oder Zäsur", keywords: ["kontinuitaet", "zaesur", "warnsignal", "lernprozess", "vorgeschichte"] }
        ],
        modelAnswer:
          "Die Krisen des Ostblocks waren beides: Warnsignale und Lernprozesse. Sie zeigten einerseits, wie hart das System auf offene Reformen reagieren konnte. Andererseits lernten spätere Oppositionsbewegungen, wie wichtig internationale Lage, gesellschaftliche Breite und öffentliche Sichtbarkeit waren. Gerade deshalb führt ein Vergleich dieser Krisen direkt zur Frage, warum 1989 anders verlief als 1953, 1956 oder 1968."
      },
      {
        id: "q-ostblock-4",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die vier Ostblockkrisen in ihre historische Reihenfolge ein.",
        help:
          "Ziehe die Karten vom frühesten zum spätesten Krisenfall.",
        sourceIds: ["r-solidarnosc-docx", "r-ungarn-video", "r-prag-video"],
        items: [
          {
            id: "1953",
            label: "17. Juni 1953 in der DDR",
            detail: "Arbeitsnormen, Protestdynamik und sowjetische Niederschlagung."
          },
          {
            id: "1956",
            label: "Ungarnaufstand 1956",
            detail: "Entstalinisierung, Revolte und sowjetische Intervention."
          },
          {
            id: "1968",
            label: "Prager Frühling 1968",
            detail: "Reformsozialismus und Einmarsch der Warschauer-Pakt-Staaten."
          },
          {
            id: "1980",
            label: "Solidarnosc und Kriegsrecht in Polen 1980/81",
            detail: "Massenbewegung, Selbstorganisation und staatssozialistische Krisenverwaltung."
          }
        ],
        correctOrder: ["1953", "1956", "1968", "1980"],
        explanation:
          "Die Krisen folgen aufeinander und markieren unterschiedliche Eskalationsstufen des Ostblocks: von Arbeiterprotest über nationale Revolte und Reformsozialismus bis zur breit organisierten Gesellschaftsbewegung.",
        modelAnswer:
          "Chronologisch beginnt die Krisengeschichte mit dem 17. Juni 1953, setzt sich über Ungarn 1956 und den Prager Frühling 1968 fort und erreicht mit Solidarnosc 1980/81 eine neue Breite gesellschaftlicher Selbstorganisation."
      },
      {
        id: "q-ostblock-5",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum wurden soziale Forderungen im Ostblock so schnell zu politischen Grundsatzfragen?",
        help:
          "Nenne mindestens drei Elemente: Systemlegitimation, Herrschaftsanspruch und Reformgrenzen.",
        placeholder: "Soziale Forderungen wurden politisch explosiv, weil ...",
        sourceIds: ["r-17-juni-video", "r-ungarn-video", "r-solidarnosc-docx"],
        conceptGroups: [
          {
            label: "System beanspruchte, im Namen der Arbeiter zu handeln",
            variants: ["arbeiterstaat", "im namen der arbeiter", "sozialistischer staat", "legitimation", "volk"]
          },
          {
            label: "Kritik an Lebensbedingungen wurde zu Kritik am System",
            variants: ["systemkritik", "politisch", "herrschaft infrage", "nicht nur loehne", "grundsatzfrage"]
          },
          {
            label: "Reformgrenzen der Parteiherrschaft",
            variants: ["partei", "reformgrenzen", "keine opposition", "kontrolle", "blocklogik"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Soziale Forderungen wurden im Ostblock schnell politisch, weil die Regime gerade ihre Herrschaft mit dem Anspruch begründeten, für Arbeiter und Gesellschaft zu handeln. Wenn Versorgung, Löhne oder Mitbestimmung kritisiert wurden, geriet deshalb nicht nur Politik, sondern die Legitimation des Systems selbst unter Druck."
      },
      {
        id: "q-ostblock-6",
        type: "open-analysis",
        challenge: "Urteil",
        prompt:
          "Bewerte die These: 'Reformsozialismus musste den Ostblock eher destabilisieren als retten.' Nutze dafür mindestens zwei Krisenbeispiele.",
        help:
          "Verbinde Reformabsicht, Reaktion des Machtzentrums und Folgen für die Stabilität des Systems.",
        placeholder: "Reformsozialismus wirkte eher destabilisierend, weil ...",
        teacherPrompt:
          "Lass zuerst klären, was Reformsozialismus überhaupt meint, und prüfe dann, welche Chancen und Risiken er im Blocksystem hatte.",
        commonPitfall:
          "Oft wird nur der Prager Frühling erzählt, ohne die These an anderen Fällen oder an der Blocklogik selbst zu prüfen.",
        sourceIds: ["r-ungarn-video", "r-prag-video", "r-solidarnosc-docx"],
        minWords: 130,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["prager fruehling", "ungarn", "solidarnosc", "reform", "moskau"],
        rubric: [
          { concept: "Erklärung Reformsozialismus", keywords: ["reform", "sozialismus", "veraendern", "von innen", "menschlichem antlitz"] },
          { concept: "Beispiel 1 mit Analyse", keywords: ["prag", "ungarn", "polen", "dubcek", "nagy"] },
          { concept: "Reaktion des Machtzentrums", keywords: ["moskau", "sowjetisch", "intervention", "blockkontrolle", "kriegsrecht"] },
          { concept: "Destabilisierung oder Rettung", keywords: ["stabilisieren", "destabilisieren", "retten", "gefährden", "kontrollverlust"] },
          { concept: "eigenes Urteil", keywords: ["insgesamt", "deshalb", "ich bewerte", "eher", "nur teilweise"] }
        ],
        modelAnswer:
          "Reformsozialismus konnte den Ostblock kaum stabilisieren, weil schon begrenzte Reformen die Grundfrage nach Macht, Freiheit und Kontrolle aufwarfen. Gerade der Prager Frühling zeigte, dass ein attraktiverer Sozialismus für Moskau nicht entlastend, sondern gefährlich wirkte. Auch spätere Krisen belegen, dass Reformen im Blocksystem schnell destabilisierend wurden, weil sie die monopolistische Herrschaft der Partei untergruben."
      },
      {
        id: "q-ostblock-7",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Warum griff der Westen in den Ostblockkrisen trotz öffentlicher Sympathie nicht militärisch ein?",
        help:
          "Nenne mindestens drei Gründe: Eskalationsrisiko, Einflusszonen und Grenzen westlicher Handlungsmöglichkeiten.",
        placeholder: "Der Westen griff nicht militärisch ein, weil ...",
        sourceIds: ["r-17-juni-video", "r-ungarn-video", "r-prag-video"],
        conceptGroups: [
          {
            label: "Risiko eines großen Ost-West-Krieges",
            variants: ["eskalation", "weltkrieg", "atomkrieg", "supermaechte", "zu gefaehrlich", "kriegsrisiko"]
          },
          {
            label: "Anerkennung sowjetischer Einflusszonen oder Blockgrenzen",
            variants: ["einflusszonen", "sowjetischer machtbereich", "ostblock", "blockgrenzen", "realpolitik", "moskau"]
          },
          {
            label: "politische Unterstützung statt militärischer Hilfe",
            variants: ["nur rhetorisch", "keine militaerische hilfe", "propaganda", "solidaritaet ohne eingriff", "begrenzte moeglichkeiten", "nicht eingreifen"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Der Westen griff nicht militärisch ein, weil das Risiko einer direkten Konfrontation der Supermächte zu groß war. Zudem galten die Ostblockstaaten faktisch als sowjetischer Einflussraum. Deshalb blieb es meist bei politischer Solidarität, Propaganda oder symbolischer Unterstützung."
      },
      {
        id: "q-ostblock-8",
        type: "open-analysis",
        challenge: "Urteil",
        prompt:
          "Bewerte die These: 'Auch niedergeschlagene Krisen schwächten den Ostblock langfristig.' Nutze mindestens zwei Beispiele.",
        help:
          "Achte darauf, zwischen kurzfristigem Scheitern und langfristiger Wirkung zu unterscheiden.",
        placeholder: "Die These überzeugt, weil ...",
        teacherPrompt:
          "Lass die Klasse zuerst zwischen unmittelbarem Ausgang und längerfristiger Wirkung unterscheiden, bevor geschrieben wird.",
        commonPitfall:
          "Häufig wird aus der Niederschlagung vorschnell geschlossen, die Krisen seien historisch folgenlos gewesen.",
        sourceIds: ["r-17-juni-video", "r-ungarn-video", "r-prag-video", "r-solidarnosc-docx"],
        minWords: 140,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["17. juni", "ungarn", "prager fruehling", "solidarnosc", "1989", "opposition"],
        rubric: [
          { concept: "kurzfristige Niederschlagung", keywords: ["niederschlagung", "intervention", "kriegsrecht", "gescheitert", "gewalt"] },
          { concept: "langfristiger Legitimationsverlust", keywords: ["legitimation", "vertrauen", "delegitimierung", "glaubwuerdigkeit", "systemkrise"] },
          { concept: "Erinnerung oder Lernprozess", keywords: ["erinnerung", "lernen", "opposition", "erfahrung", "spaetere bewegungen"] },
          { concept: "Vergleich mehrerer Krisen", keywords: ["waehrend", "hingegen", "vergleich", "beide", "anders als"] },
          { concept: "Urteil zur Langzeitwirkung", keywords: ["langfristig", "schwaechen", "vorbereiten", "vorgeschichte", "insgesamt"] }
        ],
        modelAnswer:
          "Die Krisen wurden oft kurzfristig niedergeschlagen, schwächten den Ostblock aber langfristig. Jede Intervention oder Repressionsphase untergrub das Vertrauen in die Reformfähigkeit des Systems und schuf Erinnerungen, aus denen spätere Oppositionsbewegungen lernten. Gerade deshalb kann man 1989 nicht ohne 1953, 1956, 1968 und 1980/81 verstehen."
      }
    ]
  },
  {
    id: "wende",
    step: "6",
    title: "Opposition, Friedliche Revolution und Deutschland 1989/90",
    era: "1980er Jahre bis 1990",
    intro:
      "1989 fiel die Mauer nicht aus dem Nichts. Reformwille, kirchliche Schutzräume, Opposition, Ausreisebewegung, die Krise der SED und die veränderte sowjetische Haltung verdichteten sich in wenigen Monaten zu einer offenen Revolution. 1990 war der Ausgang noch nicht mechanisch festgelegt.",
    goal:
      "Du kannst den Zusammenhang von Opposition, Massenexodus, Straßenprotest, Machtzerfall und Wiedervereinigung differenziert erklären.",
    route:
      "Starte mit Opposition und Stimmungsbildern, arbeite dann die Chronologie des Herbstes 1989 durch, höre den eingebauten Hörimpuls zu Hoffnungen und Enttäuschungen und schließe mit der offenen Lage des Frühlings 1990 ab.",
    teacherNote:
      "Diese Station eignet sich besonders für Kontroversen: Reform der DDR, Revolution oder Weg in die schnelle Einheit?",
    teacherToolkit: {
      duration: "60 Minuten oder Doppelstunde",
      socialForms: [
        "Chronologiearbeit in Gruppen",
        "kontroverse Diskussion Reform-DDR versus schnelle Einheit",
        "abschließender Transfertext mit Urteil"
      ],
      assessmentFocus: [
        "Kontingenz von 1989/90 ernst nehmen",
        "Opposition, Ausreise und internationale Lage verknüpfen",
        "zwischen Revolution, Reform und Vereinigung differenzieren"
      ],
      misconceptions: [
        "der Mauerfall sei von oben langfristig geplant gewesen",
        "die Vereinigung sei ab September 1989 bereits alternativlos gewesen",
        "Opposition und Ausreisebewegung hätten nebeneinander statt miteinander gewirkt"
      ],
      product:
        "Urteilstext zur offenen Lage zwischen Herbst 1989 und Frühling 1990.",
      extension:
        "Die Station kann mit einer Debatte über Tempo und Alternativen der Vereinigung verbunden werden."
    },
    visual: {
      src: "assets/module-images/mauerfall-final.jpg",
      alt: "Menschen auf der Berliner Mauer im Moment des Mauerfalls",
      sourceLabel: "Vorschaubild aus der Videoressource zum Mauerfall"
    },
    prompts: [
      "Achte darauf, dass 1989 kein lineares Drehbuch war.",
      "Notiere Wechselwirkungen zwischen Ausreise, Protest und Machtzerfall.",
      "Unterscheide zwischen DDR-Opposition, bundesdeutscher Perspektive und internationaler Lage.",
      "Achte im Hörimpuls darauf, wie Hoffnungen, Brüche und Ernüchterung im Rückblick erzählt werden.",
      "Nutze die zusätzliche Videoquelle zum Mauerfall, um Ereignisablauf und Deutung des 9. November noch genauer zu sichern."
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
        focus: "Gegenöffentlichkeit, Überwachung und Widerstand vor 1989",
        link: "https://www.dropbox.com/scl/fi/krj3pu0l4439z6j9tgmso/Siegbert-Schefke-DDR-Opposition-in-den-1980er-Jahren-1.mp4?rlkey=dlc9ots2jkv1mltzvyffg6h3q&e=1&st=823lo658&dl=0",
        tags: ["Dropbox", "Pflicht", "Opposition"]
      },
      {
        id: "r-wendegefuehle",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Wendegefühle",
        focus: "emotionale Lage, Unsicherheit und Offenheit des Umbruchs",
        link: "https://www.dropbox.com/scl/fi/qh8xuurglwaukj9z6kn7n/Wendegef-hle.mp4?rlkey=hek04qu3x4bkyql23uh4ralcq&e=1&st=sk6ryvqw&dl=0",
        tags: ["Dropbox", "Pflicht", "Stimmung"]
      },
      {
        id: "r-herbst89-video",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "DDR: Fünf Wochen im Herbst 1989",
        focus: "dichte Chronologie zwischen Massenprotest, SED-Krise und Mauerfall",
        link: "https://www.dropbox.com/scl/fi/akz21y2xhvoksfg4938kp/DDR-F-nf-Wochen-im-Herbst-1989-Spiegel-TV-Doku.mp4?rlkey=z8qa14jrkx53btbm74inbsyqq&e=1&st=jc18jq5i&dl=0",
        tags: ["Dropbox", "Pflicht", "1989"]
      },
      {
        id: "r-fruehling90-video",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "DDR: Deutschland im Frühling 1990",
        focus: "offene Übergangssituation zwischen Reform, Wahl und Einheit",
        link: "https://www.dropbox.com/scl/fi/jbvvcr6qw3v7qp56l7n5v/DDR-Deutschland-im-Fr-hling-1990-Spiegel-TV-Doku.mp4?rlkey=eov9lmazn1bltsb4uih3ey37o&e=1&st=pcsfaz68&dl=0",
        tags: ["Dropbox", "Pflicht", "1990"]
      },
      {
        id: "r-herbst89-docx",
        bucket: "Lokale Materialien",
        type: "DOCX",
        title: "Fragen zu Fünf Wochen im Herbst 1989",
        focus: "Frageblatt zu Ausreise, Kirche, 4. November und 9. November 1989",
        link: "assets/materials/Fragen-Fuenf-Wochen-im-Herbst-1989.docx",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-herbst89-pdf",
        bucket: "Lokale Materialien",
        type: "PDF",
        title: "Fragen zu Fünf Wochen im Herbst 1989 (PDF)",
        focus: "PDF-Version des Frageblatts für Druck oder digitale Ausleihe",
        link: "assets/materials/Fragen-Fuenf-Wochen-im-Herbst-1989.pdf",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-fruehling90-pdf",
        bucket: "Lokale Materialien",
        type: "PDF",
        title: "Fragen zu Deutschland im Frühling 1990",
        focus: "Arbeitsblatt zur offenen Übergangsphase nach dem Mauerfall",
        link: "assets/materials/Fragen-Deutschland-im-Fruehling-1990.pdf",
        tags: ["lokal", "Arbeitsblatt"]
      },
      {
        id: "r-audio-gemeinsame-kaempfe",
        bucket: "Hörimpulse",
        type: "Audio",
        title: "Gemeinsame Kämpfe, geplatzte Träume",
        focus: "Audioquelle zu Hoffnungen, Konflikten und Enttäuschungen im späten Staatssozialismus und der Umbruchzeit",
        link: "assets/audio/Gemeinsame-Kaempfe-geplatzte-Traeume.mp3",
        tags: ["lokal", "Audio", "Vertiefung"]
      },
      {
        id: "r-youtube-mauerfall",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "Mauerfall 1989: zusätzliche Videoquelle",
        focus: "ergänzende Rekonstruktion des 9. November 1989 und seiner unmittelbaren Dynamik",
        link: "https://www.youtube.com/watch?v=51lEkVLg3a4",
        tags: ["YouTube", "Vertiefung", "Mauerfall"]
      }
    ],
    questions: [
      {
        id: "q-wende-1",
        type: "short-text",
        challenge: "Faktencheck",
        prompt:
          "Erkläre, was die Lage von 1989 grundlegend von früheren Ostblockkrisen unterschied.",
        help:
          "Nenne mindestens drei Punkte: Moskau, Protestdynamik und Krise der SED.",
        placeholder: "1989 war anders, weil ...",
        sourceIds: ["r-ddr-verwandeln", "r-herbst89-video"],
        conceptGroups: [
          {
            label: "veränderte sowjetische Haltung",
            variants: ["gorbatschow", "moskau griff nicht ein", "keine intervention", "sowjetische zurueckhaltung", "1989 anders", "blockdisziplin zerbrach"]
          },
          {
            label: "Massenproteste und Ausreisebewegung",
            variants: ["massendemonstrationen", "ausreise", "massenexodus", "strassenprotest", "montagsdemonstrationen", "druck von unten"]
          },
          {
            label: "innere Krise oder Kontrollverlust der SED",
            variants: ["sed krise", "kontrollverlust", "legitimationsverlust", "regime geschwaecht", "machtzerfall", "staat verlor kontrolle"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "1989 unterschied sich grundlegend, weil Moskau nicht mehr automatisch militärisch eingriff, während Ausreisebewegung und Massendemonstrationen den Druck von unten massiv erhöhten. Gleichzeitig verlor die SED sichtbar an Kontrolle und Legitimation."
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
        sourceIds: ["r-herbst89-video", "r-herbst89-docx", "r-youtube-mauerfall"],
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
          "Der 9. November war kein sauber geplanter Staatsakt, sondern das Ergebnis massiven Drucks durch Ausreisebewegung und Protest, einer missglückten Kommunikation auf Schabowskis Pressekonferenz und eines akuten Kontrollverlusts der SED. Gerade deshalb schlug eine Regulierungsabsicht in eine faktische Grenzöffnung um."
      },
      {
        id: "q-wende-3",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Bewerte das Verhältnis von Reform, Opposition, Massenexodus und schneller Vereinigung zwischen Herbst 1989 und Frühling 1990. Zeige, dass der Ausgang nicht von Beginn an feststand.",
        help:
          "Die beste Antwort beschreibt Dynamik, nicht Schicksal. Verbinde mindestens drei Faktoren.",
        placeholder: "Zwischen Herbst 1989 und Frühling 1990 war der Ausgang offen, weil ...",
        teacherPrompt:
          "Lass die Klasse zuerst eine Ereigniskette bauen und dann gezielt markieren, wo historische Alternativen noch offen waren.",
        commonPitfall:
          "Viele Antworten schreiben im Rückblick zu zielgerichtet und unterschlagen, dass Reform-DDR, langsamer Übergang und schnelle Einheit konkurrierende Möglichkeiten waren.",
        sourceIds: ["r-ddr-verwandeln", "r-siegbert-schefke", "r-wendegefuehle", "r-herbst89-video", "r-fruehling90-video", "r-youtube-mauerfall"],
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
          "Der Weg von 1989 nach 1990 war offen. Teile der Opposition wollten die DDR reformieren, gleichzeitig untergruben Ausreisebewegung und Massendemonstrationen die Herrschaft der SED. Mit dem Mauerfall verschob sich das Gewicht schnell zugunsten einer Vereinigungsperspektive, doch auch im Frühling 1990 war noch um Tempo, Richtung und politische Form gerungen. Gerade diese Offenheit macht die Revolution historisch interessant."
      },
      {
        id: "q-wende-4",
        type: "drag-order",
        challenge: "Dynamikanalyse",
        prompt:
          "Ordne die Entwicklung so, dass der Weg von der Oppositionsarbeit zur offenen Umbruchphase 1989/90 sichtbar wird.",
        help:
          "Die Karten sollen von der Vorarbeit in den 1980ern bis zur politischen Entscheidungslage 1990 führen.",
        sourceIds: ["r-ddr-verwandeln", "r-siegbert-schefke", "r-herbst89-video"],
        items: [
          {
            id: "netzwerke",
            label: "Oppositionsgruppen, Kirchenräume und Gegenöffentlichkeit halten Kritik in den 1980er Jahren lebendig.",
            detail: "Noch klein, aber organisatorisch und kommunikativ wichtig."
          },
          {
            id: "druck",
            label: "Ausreisebewegung und wachsende Demonstrationen setzen das Regime im Herbst 1989 unter Druck.",
            detail: "Krise und Protest verstärken sich gegenseitig."
          },
          {
            id: "mauerfall",
            label: "Der 9. November macht den Kontrollverlust der SED vor aller Augen sichtbar.",
            detail: "Die Grenzöffnung verändert Dynamik und Erwartungen schlagartig."
          },
          {
            id: "entscheidung",
            label: "Im Frühjahr 1990 verdichten Wahlen und Verhandlungen die offene Lage in Richtung Einheit.",
            detail: "Aus Revolution wird eine neue politische Entscheidungssituation."
          }
        ],
        correctOrder: ["netzwerke", "druck", "mauerfall", "entscheidung"],
        explanation:
          "Die Umbruchphase entwickelte sich nicht schlagartig aus dem Nichts, sondern aus langer Vorarbeit, wachsendem Druck, offenem Kontrollverlust und anschließender politischer Neuordnung.",
        modelAnswer:
          "Auf die kleineren Oppositions- und Gegenöffentlichkeitsräume der 1980er Jahre folgten Ausreisebewegung und Massendemonstrationen, dann der Mauerfall als Symbol des Kontrollverlusts. Erst danach wurde 1990 in Wahlen und Verhandlungen über Richtung und Tempo der Einheit entschieden."
      },
      {
        id: "q-wende-5",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Warum blieb die Lage im Frühling 1990 noch offen und war nicht einfach nur ein geradliniger Weg zur Einheit?",
        help:
          "Nenne mindestens drei Aspekte: Reformoptionen, politische Konkurrenz und internationale Rahmenbedingungen.",
        placeholder: "Im Frühling 1990 blieb die Lage offen, weil ...",
        sourceIds: ["r-fruehling90-video", "r-fruehling90-pdf", "r-ddr-verwandeln"],
        conceptGroups: [
          {
            label: "verschiedene Zukunftsoptionen",
            variants: ["reform ddr", "vereinigung", "alternativen", "verschiedene wege", "offen"]
          },
          {
            label: "politische Entscheidungen und Wahlen",
            variants: ["wahl", "volkskammer", "entscheidung", "parteien", "politik"]
          },
          {
            label: "internationale oder bundesdeutsche Rahmenbedingungen",
            variants: ["bundesrepublik", "gorbatschow", "alliierte", "internationale lage", "aussenpolitik"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Die Lage blieb im Frühling 1990 offen, weil noch verschiedene Wege konkurrierten: Reform der DDR, langsamer Übergang oder schnelle Einheit. Zugleich entschieden Wahlen, parteipolitische Kräfteverhältnisse und internationale Rahmenbedingungen mit darüber, welche Lösung sich durchsetzte."
      },
      {
        id: "q-wende-6",
        type: "open-analysis",
        challenge: "Urteil",
        prompt:
          "Urteile, ob 1989/90 eher als Bürgerrechtsrevolution, als Zusammenbruch der SED-Herrschaft oder als Weg in die schnelle Einheit beschrieben werden sollte.",
        help:
          "Die stärkste Antwort gewichtet mehrere Deutungen gegeneinander und begründet, welche am meisten erklärt.",
        placeholder: "Am überzeugendsten ist die Deutung als ..., weil ...",
        teacherPrompt:
          "Lass zunächst drei konkurrierende Deutungen sammeln und fordere dann eine bewusste Schwerpunktsetzung mit Gegenargumenten.",
        commonPitfall:
          "Viele Antworten entscheiden sich vorschnell für nur eine Deutung und verlieren dadurch die Dynamik zwischen Opposition, Regimekrise und Vereinigungsprozess aus dem Blick.",
        sourceIds: ["r-ddr-verwandeln", "r-siegbert-schefke", "r-wendegefuehle", "r-herbst89-video", "r-fruehling90-video", "r-youtube-mauerfall"],
        minWords: 145,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["ddr verwandeln", "wendegefuehle", "fuenf wochen", "fruehling 1990", "opposition"],
        rubric: [
          { concept: "Bürgerrechts- oder Oppositionsperspektive", keywords: ["opposition", "buergerbewegung", "buergerrechte", "reform", "kirche"] },
          { concept: "Zusammenbruch der SED-Herrschaft", keywords: ["sed", "kontrollverlust", "machtzerfall", "mauerfall", "schabowski"] },
          { concept: "Weg zur schnellen Einheit", keywords: ["einheit", "vereinigung", "bundesrepublik", "1990", "tempo"] },
          { concept: "bewusste Gewichtung konkurrierender Deutungen", keywords: ["am ehesten", "ueberzeugender", "zugleich", "während", "andererseits"] },
          { concept: "Urteil mit Begründung", keywords: ["insgesamt", "deshalb", "ich urteile", "am treffendsten", "entscheidend"] }
        ],
        modelAnswer:
          "Keine Einzelerklärung reicht völlig aus. 1989 begann stark als Bürgerrechts- und Oppositionsbewegung gegen die SED-Herrschaft, wurde aber durch Ausreise, Massenproteste und den Machtzerfall des Regimes dynamisiert. Mit dem Mauerfall und den Entwicklungen von 1990 gewann dann die Einheitsperspektive schnell an Gewicht. Am treffendsten ist deshalb eine Deutung, die Revolution, Regimezusammenbruch und Vereinigungsdynamik miteinander verbindet."
      },
      {
        id: "q-wende-7",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Welche Rolle spielten Kirchenräume, Gegenöffentlichkeit und oppositionelle Netzwerke vor dem Herbst 1989?",
        help:
          "Nenne mindestens drei Funktionen: Schutzraum, Vernetzung und Sichtbarkeit von Kritik.",
        placeholder: "Diese Netzwerke waren wichtig, weil ...",
        sourceIds: ["r-ddr-verwandeln", "r-siegbert-schefke"],
        conceptGroups: [
          {
            label: "geschützte Räume für Diskussion und Organisation",
            variants: ["schutzraum", "kirche", "treffpunkt", "raum fuer opposition", "versammlung", "nische"]
          },
          {
            label: "Vernetzung oder Informationsaustausch",
            variants: ["vernetzung", "informationen", "gegenoeffentlichkeit", "kontakte", "kommunikation", "sichtbar machen"]
          },
          {
            label: "Vorbereitung späterer Proteste oder Gewaltfreiheit",
            variants: ["vorbereitung", "spaetere proteste", "mobilisierung", "gewaltfrei", "demonstrationen", "opposition lernte"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Kirchenräume und oppositionelle Netzwerke waren wichtig, weil sie geschützte Orte für Diskussion und Organisation boten. Sie ermöglichten Gegenöffentlichkeit, vernetzten Kritikerinnen und Kritiker und bereiteten spätere Protestformen organisatorisch und kulturell mit vor."
      },
      {
        id: "q-wende-8",
        type: "open-analysis",
        challenge: "Deutung",
        prompt:
          "Erkläre, warum Gefühle wie Hoffnung, Angst, Euphorie und Unsicherheit für die Geschichtsschreibung von 1989/90 wichtig sind und nicht bloß 'Begleiterscheinungen' waren.",
        help:
          "Die Antwort soll zeigen, dass historische Entscheidungen auch aus offener Wahrnehmungslage heraus getroffen werden.",
        placeholder: "Die Gefühle von 1989/90 sind historisch wichtig, weil ...",
        teacherPrompt:
          "Lass zunächst sammeln, welche Emotionen in den Materialien vorkommen, und frage dann, wie sie Handlungen beeinflussen.",
        commonPitfall:
          "Oft werden Gefühle nur erwähnt, aber nicht als Faktor für Offenheit, Tempo und politische Entscheidungen ernst genommen.",
        sourceIds: ["r-wendegefuehle", "r-herbst89-video", "r-fruehling90-video", "r-ddr-verwandeln", "r-audio-gemeinsame-kaempfe"],
        minWords: 145,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["wendegefuehle", "herbst 1989", "fruehling 1990", "opposition", "einheit", "traeume", "hoffnung", "enttaeuschung"],
        rubric: [
          { concept: "offene historische Situation", keywords: ["offen", "ungewiss", "nicht festgelegt", "kontingenz", "unsicherheit"] },
          { concept: "Gefühle als Handlungsfaktor", keywords: ["hoffnung", "angst", "euphorie", "verunsicherung", "motivation"] },
          { concept: "Verbindung zu Protest, Ausreise oder Wahlentscheidungen", keywords: ["demonstrationen", "ausreise", "wahl", "protest", "entscheidung"] },
          { concept: "Abgrenzung von teleologischer Rückschau", keywords: ["nicht zwangsläufig", "im rueckblick", "kein drehbuch", "nicht automatisch", "offenheit"] },
          { concept: "historisches Urteil", keywords: ["deshalb", "wichtig", "zeigt", "insgesamt", "geschichtsschreibung"] }
        ],
        modelAnswer:
          "Gefühle sind für 1989/90 historisch wichtig, weil sie zeigen, wie offen die Lage damals erlebt wurde. Hoffnung, Angst, Euphorie und Unsicherheit beeinflussten, ob Menschen protestierten, ausreisten, auf Reformen setzten oder schnelle Einheit wollten. Wer diese emotionale Lage ausblendet, deutet die Revolution im Rückblick zu geradlinig und verliert ihren offenen Charakter."
      }
    ]
  }
];

window.COLD_WAR_MODULES = MODULES;
