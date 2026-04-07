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
      "Sichtung der beiden Überblicksvideos, danach Arbeit mit dem PDF und den beiden Frageblättern. Erst sichern, dann vergleichen, dann deuten.",
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
    prompts: [
      "Achte auf die Verbindung von Ideologie und Sicherheitsdenken.",
      "Notiere, wie die Videos Deutschland und Berlin positionieren.",
      "Halte fest, welche Rolle Wirtschaftspolitik für die Blockbildung spielt."
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
          "Wähle die Antwort, die Machtpolitik, ideologischen Gegensatz und indirekte Austragungsformen zusammenbringt.",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-video-2"],
        options: [
          {
            id: "a",
            text: "Ein direkter militärischer Krieg zwischen USA und UdSSR mit einer einzigen Front in Deutschland."
          },
          {
            id: "b",
            text: "Ein globaler Systemkonflikt zwischen den Supermächten, der meist indirekt über Abschreckung, Stellvertreterkonflikte und Einflusszonen ausgetragen wurde."
          },
          {
            id: "c",
            text: "Eine reine Wirtschaftskrise Europas ohne ideologische oder militärische Dimension."
          },
          {
            id: "d",
            text: "Ein ausschließlich deutsches Problem, das nach der Gründung von BRD und DDR beendet war."
          }
        ],
        correctOptionId: "b",
        explanation:
          "Der Kalte Krieg war kein heisser Grosskrieg zwischen den Supermächten, sondern ein globaler System- und Machtkonflikt mit Abschreckung, Bündnispolitik, Propaganda und Stellvertreterkriegen."
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
        type: "multi-select",
        challenge: "Strukturanalyse",
        prompt:
          "Welche Entwicklungen trugen besonders dazu bei, dass aus der Nachkriegskooperation der Siegermächte ein dauerhafter Ost-West-Konflikt wurde?",
        help:
          "Mehrere Antworten sind richtig. Entscheidend sind sicherheitspolitische, wirtschaftliche und machtpolitische Faktoren.",
        sourceIds: ["r-kalterkrieg-video-1", "r-kalterkrieg-video-2", "r-kalterkrieg-pdf"],
        options: [
          { id: "a", text: "gegenseitiges Misstrauen und unvereinbare Sicherheitsvorstellungen der Siegermächte" },
          { id: "b", text: "die wirtschaftliche und politische Blockbildung, etwa durch Marshallplan und sowjetische Gegenordnung" },
          { id: "c", text: "die deutsche Frage und Berlin als zugespitzter Konfliktraum" },
          { id: "d", text: "ein sofortiger gemeinsamer Rückzug aller Besatzungsmächte aus Europa" },
          { id: "e", text: "der ideologische Gegensatz zwischen liberal-demokratischem und kommunistischem Ordnungsmodell" }
        ],
        correctOptionIds: ["a", "b", "c", "e"],
        explanation:
          "Aus Kooperation wurde Konflikt, weil Sicherheitsinteressen, Ideologie, Wirtschaft und die deutsche Frage ineinandergriffen. Ein gemeinsamer Rückzug der Mächte fand gerade nicht statt."
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
        type: "multi-select",
        challenge: "Vergleich",
        prompt:
          "Welche Entwicklungen vertieften 1948/49 die Teilung Deutschlands besonders stark?",
        help:
          "Mehrere Antworten sind richtig. Gesucht sind die Schritte, die aus der Krisenlage zwei Staatsprojekte machten.",
        sourceIds: ["r-ddr-gruendung-1", "r-brd-gruendung"],
        options: [
          { id: "a", text: "die Währungsreform und die daraus folgende Zuspitzung in Berlin" },
          { id: "b", text: "die Gründung von BRD und DDR als zwei unterschiedliche Staatsordnungen" },
          { id: "c", text: "die Berlin-Blockade und die Luftbrücke als Symbol politischer Konfrontation" },
          { id: "d", text: "die völlige Aufhebung aller Besatzungsrechte im Jahr 1948" },
          { id: "e", text: "die zunehmende Einbindung der westlichen Zonen in westliche Wirtschafts- und Sicherheitsstrukturen" }
        ],
        correctOptionIds: ["a", "b", "c", "e"],
        explanation:
          "Gerade Währungsreform, Berlin-Krise, Staatsgründungen und die westliche Integration trieben die Trennung voran. Von einer vollständigen Aufhebung aller Besatzungsrechte kann 1948 keine Rede sein."
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
        type: "single-choice",
        challenge: "Einordnung",
        prompt:
          "Welche Deutung beschreibt die Staatsgründungen von 1949 historisch am treffendsten?",
        help:
          "Gesucht ist nicht die formale, sondern die politisch-historische Einordnung.",
        sourceIds: ["r-ddr-gruendung-1", "r-ddr-gruendung-2", "r-brd-gruendung"],
        options: [
          { id: "a", text: "Beide Staaten entstanden als nahezu identische demokratische Übergangsmodelle mit nur geringen Unterschieden." },
          { id: "b", text: "Die Staatsgründungen waren Ausdruck der verfestigten Blockkonfrontation und schufen zwei gegensätzliche politische Ordnungen auf deutschem Boden." },
          { id: "c", text: "Die DDR wurde allein aus innerdeutscher Initiative gegründet, ohne sowjetischen Einfluss." },
          { id: "d", text: "Mit 1949 war die deutsche Frage vollständig gelöst und verlor international an Bedeutung." }
        ],
        correctOptionId: "b",
        explanation:
          "1949 markierte die institutionelle Zuspitzung des Kalten Krieges in Deutschland: Zwei Staaten entstanden, aber nicht als bloße Verwaltungsmodelle, sondern als gegensätzliche Ordnungsentwürfe im Ost-West-Konflikt."
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
        type: "multi-select",
        challenge: "Vergleich",
        prompt:
          "Welche Spannungen des DDR-Alltags werden durch die Materialien besonders deutlich?",
        help:
          "Gesucht ist kein einseitiges Urteil, sondern die Kombination von sozialer Absicherung und strukturellen Grenzen.",
        sourceIds: ["r-reiseweltmeister", "r-bananenrepublik-video", "r-frauenland-video", "r-wohnraumvergabe"],
        options: [
          { id: "a", text: "soziale Sicherheit und staatliche Versorgung gingen oft mit Mangel und eingeschränkter Wahlfreiheit zusammen" },
          { id: "b", text: "Urlaub und Wohnen waren völlig unpolitische Privatsachen ohne staatlichen Einfluss" },
          { id: "c", text: "Frauen hatten häufig früher Erwerbschancen als im Westen, trugen aber trotzdem oft die Doppelbelastung" },
          { id: "d", text: "Konsumwürde war bedeutungslos; der Vergleich mit dem Westen spielte im Alltag keine Rolle" },
          { id: "e", text: "Privilegien, Knappheit und politische Steuerung prägten selbst scheinbar alltägliche Bereiche" }
        ],
        correctOptionIds: ["a", "c", "e"],
        explanation:
          "Gerade die Ambivalenz ist entscheidend: staatliche Leistungen existierten, zugleich waren Versorgung, Wahlfreiheit und Zugang häufig politisch oder planwirtschaftlich begrenzt."
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
        type: "single-choice",
        challenge: "Einordnung",
        prompt:
          "Warum waren Reisen und Urlaub in der DDR mehr als bloße Freizeitfragen?",
        help:
          "Gesucht ist die politische Bedeutung von Bewegungsfreiheit und staatlicher Steuerung.",
        sourceIds: ["r-reiseweltmeister", "r-reisen-docx"],
        options: [
          { id: "a", text: "Weil Reisen völlig privat organisiert und vom Staat kaum beeinflusst wurden." },
          { id: "b", text: "Weil sich an Reisen zeigte, wie stark der Staat Mobilität, Devisen und Kontakte nach außen kontrollierte." },
          { id: "c", text: "Weil Urlaub in der DDR grundsätzlich nur für Parteifunktionäre möglich war." },
          { id: "d", text: "Weil internationale Fernreisen für alle Bürgerinnen und Bürger selbstverständlich waren." }
        ],
        correctOptionId: "b",
        explanation:
          "Reisen war politisch, weil sich daran Kontrolle, Privilegierung, Knappheit und fehlende Freizügigkeit besonders deutlich ablesen ließen."
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
    prompts: [
      "Achte auf den Unterschied zwischen offizieller Begründung und realer Funktion.",
      "Frage immer: Wovor schützte das System sich - und wen kontrollierte es?",
      "Verbinde räumliche Kontrolle mit psychologischer Wirkung."
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
      }
    ],
    questions: [
      {
        id: "q-herrschaft-1",
        type: "single-choice",
        challenge: "Faktencheck",
        prompt:
          "Welche Funktion hatte der Mauerbau vom 13. August 1961 aus Sicht der DDR-Führung real am ehesten?",
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
            text: "Er sollte die Massenflucht stoppen, die wirtschaftliche und politische Stabilität der DDR sichern und den Kontrollverlust beenden."
          },
          {
            id: "c",
            text: "Er war ein weitgehend symbolisches Bauprojekt ohne alltagspraktische Folgen."
          },
          {
            id: "d",
            text: "Er wurde ausschließlich auf Wunsch der Westmächte errichtet."
          }
        ],
        correctOptionId: "b",
        explanation:
          "Die Mauer sollte die Abwanderung stoppen und damit Arbeitskräfte, politische Stabilität und Herrschaftssicherung garantieren. Die Formel vom 'antifaschistischen Schutzwall' verdeckte diese Funktion."
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
        sourceIds: ["r-berliner-mauer", "r-eingemauert", "r-nva", "r-veb-horch-und-guck", "r-stasi-gefaengnis"],
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
        type: "multi-select",
        challenge: "Systemanalyse",
        prompt:
          "Welche Elemente machten das Grenzregime der DDR auch jenseits der Berliner Mauer wirksam?",
        help:
          "Mehrere Antworten sind richtig. Gesucht ist das Zusammenspiel von Raum, Gewaltandrohung und Organisation.",
        sourceIds: ["r-berliner-mauer", "r-eingemauert", "r-nva"],
        options: [
          { id: "a", text: "Sperranlagen, Kontrollzonen und technische Abriegelung" },
          { id: "b", text: "die Möglichkeit freier Ausreise auf Antrag ohne politische Folgen" },
          { id: "c", text: "bewaffnete Sicherung und militärische Präsenz" },
          { id: "d", text: "Abschreckung durch Bestrafung und die Drohung harter Konsequenzen" },
          { id: "e", text: "ein rein symbolischer Charakter ohne Einfluss auf den Alltag der Bevölkerung" }
        ],
        correctOptionIds: ["a", "c", "d"],
        explanation:
          "Das Grenzregime war nicht nur Bauwerk, sondern ein System aus Sperren, Bewaffnung, Überwachung und Abschreckung. Gerade diese Kombination machte Flucht so riskant."
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
        type: "multi-select",
        challenge: "Vergleich",
        prompt:
          "Welche Muster verbinden 17. Juni 1953, Ungarn 1956, den Prager Frühling 1968 und die polnische Krise um Solidarnosc?",
        help:
          "Mehrere Antworten sind richtig. Gesucht sind strukturelle Gemeinsamkeiten, nicht identische Verläufe.",
        sourceIds: ["r-17-juni-video", "r-ungarn-video", "r-prag-video", "r-solidarnosc-docx"],
        options: [
          { id: "a", text: "gesellschaftliche oder innerparteiliche Reform- und Beteiligungsforderungen stiessen an die Grenzen sowjetischer Blockkontrolle" },
          { id: "b", text: "der Westen griff jedes Mal militärisch zugunsten der Protestierenden ein" },
          { id: "c", text: "soziale Fragen verbanden sich oft mit politischen Forderungen nach Freiheit, Mitsprache oder Reformen" },
          { id: "d", text: "die sowjetische Führung fürchtete ein Überspringen von Reformen auf andere Staaten des Ostblocks" },
          { id: "e", text: "alle Bewegungen beendeten die kommunistische Herrschaft sofort und dauerhaft" }
        ],
        correctOptionIds: ["a", "c", "d"],
        explanation:
          "Gerade die Verbindung sozialer Krisen mit politischen Reformforderungen und die Angst vor einem Dominoeffekt erklären die Härte sowjetischer beziehungsweise staatssozialistischer Reaktionen."
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
        type: "single-choice",
        challenge: "Einordnung",
        prompt:
          "Was unterschied Solidarnosc in Polen besonders von früheren Ostblockkrisen?",
        help:
          "Achte auf Breite, Organisationsform und gesellschaftliche Verankerung.",
        sourceIds: ["r-solidarnosc-docx", "r-ungarn-video", "r-prag-video"],
        options: [
          { id: "a", text: "Solidarnosc war ausschließlich eine kleine innerparteiliche Reformgruppe ohne gesellschaftliche Basis." },
          { id: "b", text: "Solidarnosc verband Arbeiterprotest, gesellschaftliche Selbstorganisation und politische Systemkritik in ungewöhnlicher Breite." },
          { id: "c", text: "Solidarnosc wurde sofort militärisch vom Westen übernommen und gesteuert." },
          { id: "d", text: "Solidarnosc wollte keinerlei Reformen, sondern nur höhere Löhne ohne politischen Bezug." }
        ],
        correctOptionId: "b",
        explanation:
          "Solidarnosc war besonders, weil sie weit über eine spontane Protestwelle hinausging: als gesellschaftlich verankerte Bewegung verband sie soziale Forderungen, Selbstorganisation und politische Herausforderung des Systems."
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
      "Starte mit Opposition und Stimmungsbildern, arbeite dann die Chronologie des Herbstes 1989 durch und schließe mit der offenen Lage des Frühlings 1990 ab.",
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
      }
    ],
    questions: [
      {
        id: "q-wende-1",
        type: "single-choice",
        challenge: "Faktencheck",
        prompt:
          "Was unterschied die Lage von 1989 grundlegend von den früheren Ostblockkrisen?",
        help:
          "Denke an Moskau, an Gewaltbereitschaft und an die Spielräume für Protestbewegungen.",
        sourceIds: ["r-ddr-verwandeln", "r-herbst89-video"],
        options: [
          {
            id: "a",
            text: "Die sowjetische Führung war 1989 nicht mehr bereit, wie 1953, 1956 oder 1968 militärisch zur Blockdisziplin einzugreifen."
          },
          {
            id: "b",
            text: "Die DDR war 1989 das wirtschaftlich stärkste und stabilste Land Europas."
          },
          {
            id: "c",
            text: "Es gab 1989 weder Massenproteste noch Ausreisebewegungen."
          },
          {
            id: "d",
            text: "Die SED entschied sich frühzeitig und geschlossen für freie Wahlen."
          }
        ],
        correctOptionId: "a",
        explanation:
          "Ohne die veränderte sowjetische Haltung unter Gorbatschow und ohne automatische Interventionsbereitschaft entstand überhaupt erst ein anderer Handlungsspielraum für Opposition und Massendemonstrationen."
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
          "Der Weg von 1989 nach 1990 war offen. Teile der Opposition wollten die DDR reformieren, gleichzeitig untergruben Ausreisebewegung und Massendemonstrationen die Herrschaft der SED. Mit dem Mauerfall verschob sich das Gewicht schnell zugunsten einer Vereinigungsperspektive, doch auch im Frühling 1990 war noch um Tempo, Richtung und politische Form gerungen. Gerade diese Offenheit macht die Revolution historisch interessant."
      },
      {
        id: "q-wende-4",
        type: "multi-select",
        challenge: "Dynamikanalyse",
        prompt:
          "Welche Faktoren trugen besonders dazu bei, dass sich die Krise der DDR im Herbst 1989 so schnell zuspitzte?",
        help:
          "Mehrere Antworten sind richtig. Achte auf Wechselwirkungen statt auf einen Einzelfaktor.",
        sourceIds: ["r-ddr-verwandeln", "r-siegbert-schefke", "r-herbst89-video"],
        options: [
          { id: "a", text: "die Verbindung von Ausreisebewegung, Protesten und wachsendem Kontrollverlust der SED" },
          { id: "b", text: "eine geschlossene und früh entschlossene Reformstrategie der SED-Führung" },
          { id: "c", text: "die veränderte sowjetische Haltung, die militärische Intervention unwahrscheinlicher machte" },
          { id: "d", text: "Opposition und Gegenöffentlichkeit, die Informationen und Kritik sichtbarer machten" },
          { id: "e", text: "die vollständige politische Stabilität und hohe Legitimation des Regimes" }
        ],
        correctOptionIds: ["a", "c", "d"],
        explanation:
          "1989 eskalierte die Krise nicht wegen eines einzigen Auslösers, sondern durch das Zusammenwirken von Protest, Ausreise, Legitimationsverlust, Opposition und international veränderten Rahmenbedingungen."
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
        sourceIds: ["r-ddr-verwandeln", "r-siegbert-schefke", "r-wendegefuehle", "r-herbst89-video", "r-fruehling90-video"],
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
      }
    ]
  }
];

const AUDIO_LOUNGE = [
  {
    id: "audio-pr-reise",
    title: "Eine PR-Reise ins Land des Erzfeindes",
    description:
      "Audioquelle als freiwilliger Hörimpuls zu Wahrnehmungen, Narrativen und Grenzüberschreitungen im Umfeld des Ost-West-Konflikts.",
    src: "assets/audio/Eine-PR-Reise-ins-Land-des-Erzfeindes.mp3"
  },
  {
    id: "audio-gemeinsame-kaempfe",
    title: "Gemeinsame Kämpfe, geplatzte Träume",
    description:
      "Audioquelle für eine zusätzliche Vertiefung zu Hoffnungen, Konflikten und Enttäuschungen im späten Staatssozialismus.",
    src: "assets/audio/Gemeinsame-Kaempfe-geplatzte-Traeume.mp3"
  }
];

window.COLD_WAR_MODULES = MODULES;
window.COLD_WAR_AUDIO = AUDIO_LOUNGE;
